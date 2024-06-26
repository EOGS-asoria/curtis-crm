import React, { useEffect, useState } from 'react'
import AdministratorLayout from '@/app/layouts/admin/administrator-layout'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import CustomerDetailsSection from './sections/customer-details-section'
import RecordDetailsSection from './sections/record-details-section'
import CaseLogsSection from './sections/case-logs-section'
import LogCaseSection from './sections/log-case-section'
import CaseDetailsSection from './sections/case-details-section'
import { get_tickets_by_ticket_id } from '@/app/services/tickets-service'
import { router } from '@inertiajs/react'
import { get_caseslog_by_ticket_id_service } from '@/app/services/cases-log-service'
import { useDispatch } from 'react-redux'
import { set_cases_log } from '../../redux/users-slice'
import store from '@/app/store/store'
import { get_users_thunk } from '../../redux/users.thunk'

export default function UserCasesCustomerDetailsPage({auth}) {
  const [data,setData]=useState({})
  const dispatch =useDispatch()
  useEffect(()=>{
   async function fetch_data(params) {
      const ress = await get_tickets_by_ticket_id(window.location.pathname.split('/')[6]);
      const res  =await get_caseslog_by_ticket_id_service(window.location.pathname.split('/')[6])
      dispatch(set_cases_log(res.data))
      setData(ress)
    }
    fetch_data()
  },[])

  useEffect(() => {
    store.dispatch(get_users_thunk(5))
  }, []);
  return (
    <AdministratorLayout>
      <div className="p-5 md:p-10 bg-gray-100">
        <div className="container mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-2 md:p-4">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-2">
                  <CustomerDetailsSection data={data}/>
                  <RecordDetailsSection data={data}/>
                  <CaseLogsSection />
                </div>
                <div className="border-l p-2 md:pl-4 overflow-auto">
                  <div className="flex gap-4">
                    <button
                    onClick={()=>router.visit(window.location.pathname.substring(0,30)+'open_cases')}
                    className="bg-gray-300 hover:bg-gray-400 items-center justify-center font-bold w-full py-2 px-4 rounded">
                      <ArrowLeftOutlined className="mr-2" />
                      Previous
                    </button>
                    {/* <button className="bg-gray-300 hover:bg-gray-400 items-center justify-center font-bold w-full py-2 px-4 rounded">
                      Next
                      <ArrowRightOutlined className="ml-2" />
                    </button> */}
                  </div>
                  <LogCaseSection
                  
                  account={auth.user}
                  datas={data}/>
                  <CaseDetailsSection 
                  />
                </div>
              </div>
            </div>
        </div>
      </div>
    </AdministratorLayout>
  )
}
