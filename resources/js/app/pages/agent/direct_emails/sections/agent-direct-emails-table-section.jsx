import React, { useEffect, useRef, useState } from "react";
import {
    ExclamationCircleFilled,
    FolderOpenFilled,
    SearchOutlined,
} from "@ant-design/icons";
import { Button, Input, Space, Table, Tag } from "antd";
import Highlighter from "react-highlight-words";
// import ProductivitySearchSection from './productivity-search-section';
// import ProductivityDateSection from './productivity-date-section';
import { useSelector } from "react-redux";
import { direct_emails_service } from "@/app/services/tickets-service";
import moment from "moment";
import { router } from "@inertiajs/react";

export default function AgentDirectEmailsTableSection() {
    const { users } = useSelector((state) => state.users);
    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setSearchedColumn] = useState("");
    const searchInput = useRef(null);
    const [dataTable, setDataTable] = useState([]);
    const [loading, setLoading] = useState(true)
    const [pageSize, setPageSize] = useState(10);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText("");
    };

    useEffect(() => {
        async function fetch_data() {
            const res = await direct_emails_service(window.location.search ?? 'page=1');
            setDataTable(res.result);
            setLoading(false)
        }
        fetch_data();
    }, []);

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
            close,
        }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) =>
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }
                    onPressEnter={() =>
                        handleSearch(selectedKeys, confirm, dataIndex)
                    }
                    style={{
                        marginBottom: 8,
                        display: "block",
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() =>
                            handleSearch(selectedKeys, confirm, dataIndex)
                        }
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() =>
                            clearFilters && handleReset(clearFilters)
                        }
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? "#1677ff" : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: "#ffc069",
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ""}
                />
            ) : (
                text
            ),
    });



    const data = dataTable.map((res, i) => ({
        key: i,
        email: res.from,
        date: moment(res.date).format('LLLL'),
        link: res.link,
        id: res.id
    }));
    const columns = [
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
            // ...getColumnSearchProps('app_name'),
        },
        {
            title: "Date Completed",
            dataIndex: "date",
            key: "date",
            // ...getColumnSearchProps('app_name'),
        },
        {
            title: "Email Link",
            dataIndex: "link",
            key: "link",
            render: (_, record) => (
                <a href={record.link} target="_blank">
                    {record.link}
                </a>
            )
        },
        {
            title: "Action",
            dataIndex: "overdue_direct_emails",
            key: "overdue_direct_emails",
            render: (_, record) => {
                const str = record.email;
                const emailRegex = /<([^>]+)>/;
                const match = str.match(emailRegex);
                
                return (
                    <a
                        target="_blank"
                        href={`${window.location.pathname}/${record.id}?email= ${match ? match[1] : ''}`}
                        className="bg-blue-500 hover:bg-blue-600 text-white p-1 rounded-sm px-3">
                        VIEW
                    </a>)
            }
        },
    ];
    const paginationConfig = {
        showSizeChanger: false,
        current: parseInt(window.location.search.split('=')[1] ?? 1),
        pageSize: pageSize,
        total: 1300,
        onChange: (page, pageSize) => {
            router.visit(window.location.pathname + `?page=${page}`);
        },
    };


    return (
        <div>
            <div className="p-3 rounded-md">
                <div className="flex">
                    {/* <ProductivityDateSection/>
                <ProductivitySearchSection/> */}
                </div>
                <Table
                    loading={loading}
                    pagination={paginationConfig}
                    columns={columns} dataSource={data} />
            </div>
        </div>
    );
}