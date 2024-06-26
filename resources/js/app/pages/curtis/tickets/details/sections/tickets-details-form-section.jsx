
import React, { useEffect, useState } from 'react'
import CustomerTicketsBillOfSaleSection from './customer-tickets-bill-of-sale-section'
import CustomerTicketsFrontOfTheUnitSection from './customer-tickets-front-of-the-unit-section'
import CustomerTicketsRearOfTheUnitSection from './customer-tickets-rear-of-the-unit-section'
import CustomerTicketsReadableSerialSection from './customer-tickets-readable-serial-section'
import CustomerTicketsDefectIssueSection from './customer-tickets-defect-issue-section'
import CustomerTicketsUpdateExplanation from './customer-tickets-update-explanation'
import store from '@/app/store/store'
import { get_upload_ticket_files_thunk } from '../../redux/customer-tickets-thunk'
import { setFilesData } from '../../redux/customer-tickets-slice'
import { usePage } from '@inertiajs/react'
import { useDispatch, useSelector } from 'react-redux'
import CustomerTicketsClearModel from './customer-tickets-clear-model'
import CustomerTicketsPartsModel from './customer-tickets-parts-model'
import CustomerTicketsReceiptModel from './customer-tickets-receipt-model'
import CustomerTicketsSerialModel from './customer-tickets-serial-model'

export default function TicketsDetailsFormSection() {
    const { url } = usePage()
    const dispatch = useDispatch()

    const { ticket } = useSelector((state) => state.customer_tickets)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await store.dispatch(get_upload_ticket_files_thunk(url.split('/')[3]));
                console.log('res',res)
                dispatch(setFilesData(res))
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [url]);

    return (
        <>

            <CustomerTicketsUpdateExplanation />
            {
                ticket?.call_type && ticket?.call_type == "CF-Warranty Claim" ? <>
                    <CustomerTicketsBillOfSaleSection />
                    <div className="h-px my-8 border border-blue-500 w-full" />
                    <CustomerTicketsFrontOfTheUnitSection />
                    <div className="h-px my-8 border border-blue-500 w-full" />
                    <CustomerTicketsRearOfTheUnitSection />
                    <div className="h-px my-8 border border-blue-500 w-full" />
                    <CustomerTicketsReadableSerialSection />
                    <div className="h-px my-8 border border-blue-500 w-full" />
                    <CustomerTicketsDefectIssueSection />
                </> : <>
                    <CustomerTicketsClearModel />
                    <div className="h-px my-8 border border-blue-500 w-full" />
                    <CustomerTicketsPartsModel />
                    <div className="h-px my-8 border border-blue-500 w-full" />
                    <CustomerTicketsReceiptModel />
                    <div className="h-px my-8 border border-blue-500 w-full" />
                    <CustomerTicketsSerialModel />
                </>
            }

        </>
    )
}
