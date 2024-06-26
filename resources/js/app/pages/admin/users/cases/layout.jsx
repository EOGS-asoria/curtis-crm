import AdministratorLayout from "@/app/layouts/admin/administrator-layout";
import Skeleton from "@/app/layouts/components/skeleton";
import { setTickets } from "@/app/pages/customer/tickets/redux/customer-tickets-slice";
import { get_tickets_by_user_id_thunk } from "@/app/pages/customer/tickets/redux/customer-tickets-thunk";
import { cases_service } from "@/app/services/tickets-service";
import store from "@/app/store/store";
import {
    EnvelopeIcon,
    InboxArrowDownIcon,
    InboxStackIcon,
} from "@heroicons/react/24/solid";
import { Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UsersCasesPaginationSection from "./sections/users-cases-pagination-section";

export default function TicketCasesHandledLayout({ children }) {
    const [loading, setLoading] = useState(true);
    const account_id = window.location.pathname.split("/")[3];
    const cases = window.location.pathname.split("/")[5];
    const dispatch = useDispatch();
    const { tickets } = useSelector((state) => state.customer_tickets);
    useEffect(() => {
        async function fetch_date(params) {
            const res = await cases_service(
                window.location.search,
                cases,
                account_id
            );
            dispatch(setTickets(res));
            // await store.dispatch(get_tickets_by_user_id_thunk(account_id));
            setLoading(false);
        }
        fetch_date();
    }, []);

    const userid = window.location.pathname.split("/")[3];
    const path = window.location.pathname.split("/")[5];

    function active(value) {
        if (path == value) {
            return "bg-gray-500 bg-opacity-30 text-blue-600 flex items-center justify-between py-1.5 px-4 rounded cursor-pointer";
        } else {
            return "hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center justify-between text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer";
        }
    }
    console.log('tickets',tickets.length)
    return (
        <AdministratorLayout>
            <div class="w-full  flex overflow-x-auto custom-scrollbar pt-6 h-screen">
                <div className="w-72  sticky top-0">
                    <div className="px-2 pt-4 pb-8 border-r border-gray-300">
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href={`/administrator/users/${userid}/cases/open_cases?page=1`}
                                    className={active("open_cases")}
                                >
                                    <span className="flex items-center space-x-2">
                                        <InboxArrowDownIcon className="h-6" />
                                        <span>Open Cases</span>
                                    </span>
                                    {/* <span className="bg-sky-500 text-gray-100 font-bold px-2 py-0.5 text-xs rounded-lg">
                                        3
                                    </span> */}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`/administrator/users/${userid}/cases/handled?page=1`}
                                    className={active("handled")}
                                >
                                    <span className="flex items-center space-x-2">
                                        <InboxStackIcon className="h-6" />
                                        <span>Handled Cases</span>
                                    </span>
                                    {/* <span className="bg-sky-500 text-gray-100 font-bold px-2 py-0.5 text-xs rounded-lg">
                                        3
                                    </span> */}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`/administrator/users/${userid}/cases/closed_cases?page=1`}
                                    className={active("closed_cases")}
                                >
                                    <span className="flex items-center space-x-2">
                                        <EnvelopeIcon className="h-6" />
                                        <span>Closed Cases</span>
                                    </span>
                                    {/* <span className="bg-sky-500 text-gray-100 font-bold px-2 py-0.5 text-xs rounded-lg">
                                        3
                                    </span> */}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="bg-gray-100 mb-6 w-full mr-3">
                    <div class="flex items-center my-3">
                        <div class="flex items-center ml-3">
                            <button
                                title="Reload"
                                class="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <span class="bg-gray-300 h-6 w-[.5px] mx-3"></span>
                        <div class="flex items-center space-x-2">
                            <button
                                title="Archive"
                                class="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                                    ></path>
                                </svg>
                            </button>
                            <button
                                title="Mark As Spam"
                                class="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                    ></path>
                                </svg>
                            </button>
                            <button
                                title="Delete"
                                class="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <span class="bg-gray-300 h-6 w-[.5px] mx-3"></span>
                        <div class="flex items-center space-x-2">
                            <button
                                title="Mark As Read"
                                class="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                                    ></path>
                                </svg>
                            </button>
                            <button
                                title="Mark As Unread"
                                class="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    ></path>
                                </svg>
                            </button>
                            <button
                                title="Add Star"
                                class="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <ul>
                        {loading ? (
                            <div className="mx-3">
                                <Skeleton />
                            </div>
                        ) : (
                            <div className="p-3 flex gap-5 flex-col justify-between w-full h-full">
                                <div className="overflow-auto h-[80vh]">
                                    {children}
                                </div>
                                <div className="flex items-center justify-end">
                                    <UsersCasesPaginationSection />
                                </div>
                            </div>
                        )}
                    </ul>
                </div>
            </div>
        </AdministratorLayout>
    );
}
