import AgentLayout from "@/app/layouts/agent/agent-layout";
import React, { useEffect, useState } from "react";
import AgentCustomerDetailsSection from "./sections/customer-details-section";
// import AgentRecordDetailsSection from './sections/record-details-section';
import AgentCaseLogsSection from "./sections/case-logs-section";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { router } from "@inertiajs/react";
import AgentLogCaseSection from "./sections/log-case-section";
// import AgentCaseDetailsSection from "./sections/case-details-section";
import { get_tickets_by_ticket_id } from "@/app/services/tickets-service";
import { useDispatch } from "react-redux";
import { get_caseslog_by_ticket_id_service } from "@/app/services/cases-log-service";
import { set_cases_log } from "@/app/pages/admin/users/redux/users-slice";

export default function AgentDirectEmailIDPage({ auth }) {
    const account = auth.user;
    const searchParams = new URLSearchParams(window.location.search);

    // Fetch the value of the email parameter
    const email = searchParams.get("email");
    // const [data,setData]=useState({})
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetch_data(params) {
            // const ress = await get_tickets_by_ticket_id(window.location.pathname.split('/')[3]);
            const res = await get_caseslog_by_ticket_id_service(
                window.location.pathname.split("/")[3]
            );
            dispatch(set_cases_log(res.data));
            // setData(ress)
        }
        fetch_data();
    }, []);
    return (
        <AgentLayout account={account}>
            <div className="p-10 bg-gray-100 min-h-screen">
                <div className="container mx-auto">
                    <div className="bg-white rounded-lg shadow-lg p-2 md:p-4">
                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-3">
                            <div className="md:col-span-2">
                                <AgentCustomerDetailsSection email={email} />
                                <AgentCaseLogsSection />
                            </div>
                            <div className="border-l p-2 md:pl-4 overflow-auto">
                                <div className="flex gap-4">
                                    <button
                                        onClick={() =>
                                            router.visit("/agent/direct_emails")
                                        }
                                        className="bg-gray-300 hover:bg-gray-400 items-center justify-center font-bold w-full py-2 px-4 rounded"
                                    >
                                        <ArrowLeftOutlined className="mr-2" />
                                        Previous
                                    </button>
                                </div>
                                <AgentLogCaseSection
                                    account={auth.user}
                                    ticket_id={
                                        window.location.pathname.split("/")[3]
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AgentLayout>
    );
}