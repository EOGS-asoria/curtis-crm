import { Link } from '@inertiajs/react'
import React from 'react'

export default function TicketsTableHeaderSection() {
    return (
        <>
            <div className="flex items-center gap-x-3">
                <h2 className="text-lg font-medium text-gray-800">Tickets</h2>

                <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">240 vendors</span>
            </div>

            <div className="flex items-center mt-4 gap-x-3">
                <Link
                    href={route('tickets.create')}
                    className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-white bg-blue-600 rounded-lg sm:w-auto gap-x-2 hover:bg-blue-700  ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    <span>Create Tickets</span>
                </Link>
            </div>
        </>
    )
}
