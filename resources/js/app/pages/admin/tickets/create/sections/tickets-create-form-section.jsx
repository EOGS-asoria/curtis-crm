import Input from '@/app/layouts/components/input'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Select from '@/app/layouts/components/select'
import TicketCreateSearchProductSection from './tickets-create-search-product-section'
import store from '@/app/store/store'
import Textarea from '@/app/layouts/components/textarea'
import { get_products_thunk } from '@/app/pages/admin/ticket_form/redux/ticket-form-thunk'
import { countries } from './../../../../../json/country.json';
import { call_type } from './../../../../../json/call_type.json';
import { setForm } from '../redux/tickets-create-slice'
import { tickets_create_thunk } from '../redux/tickets-create-thunk'
import { router } from '@inertiajs/react'
export default function TicketCreateFormSection() {
    const dispatch = useDispatch()
    const { form } = useSelector((state) => state.tickets_create)
  

    function formHandler(value, name) {
        dispatch(setForm({
            ...form,
            [name]: value
        }))
    }

    useEffect(() => {
        store.dispatch(get_products_thunk())
    }, []);

   async function submitFormTicket(e) {
        e.preventDefault()
        const response = await store.dispatch(tickets_create_thunk())
        router.visit('/administrator/tickets?ticket_id='+response.id)
    }


    const findCountry = (countryName) => {
        return countries.find(country => country.name === countryName) || null;
    };


    const { regions } = findCountry(form.country ?? 'Canada');


    return (
        <form onSubmit={submitFormTicket} className=" w-full px-8 pt-6 pb-8 mb-4 flex flex-col gap-3">
            <div className='flex items-center justify-center font-black text-3xl'>
                Ticket Form
            </div>
            <div className=" md:flex mb-3">
                <div className="md:w-1/2 px-3 mb-3 md:mb-0">
                    <Input
                        required={true}
                        onChange={formHandler}
                        name='fname'
                        value={form.fname}
                        label='First Name'
                        type='text'
                        errorMessage='First Name is required'
                    />
                </div>
                <div className="md:w-1/2 px-3">
                    <Input
                        required={true}
                        onChange={formHandler}
                        name='lname'
                        value={form.lname}
                        label='Last Name'
                        type='text'
                        errorMessage='Last Name is required'
                    />
                </div>
            </div>
            <div className=" md:flex mb-3">
                <div className="md:w-1/2 px-3 mb-3 md:mb-0">
                    <div className='flex gap-4'>
                        <div className='basis-1/3'>
                            <Select
                                onChange={formHandler}
                                name='isHasEmail'
                                required={false}
                                value={form.isHasEmail ?? true}
                                label='Has Email?'
                                errorMessage=''
                                data={[
                                    {
                                        value: true,
                                        name: 'Yes'
                                    },
                                    {
                                        value: false,
                                        name: 'No'
                                    }
                                ]}
                            />
                        </div>

                        <div className='basis-2/3'>
                            {
                                (form.isHasEmail ?? 'true') == 'true' ? <Input
                                    required={true}
                                    onChange={formHandler}
                                    name='email'
                                    value={form.email}
                                    label='Email'
                                    type='email'
                                    errorMessage='Email is required'
                                /> : <></>
                            }
                        </div>
                    </div>

                </div>
                <div className="md:w-1/2 px-3">
                    <Input
                        onChange={formHandler}
                        name='phone'
                        required={true}
                        value={form.phone}
                        label='Phone Number'
                        type='phone'
                        errorMessage='Phone Number is required'
                    />
                </div>
            </div>
            <div className=" md:flex mb-3">
                <div className="md:w-full px-3 mb-3 md:mb-0">
                    <TicketCreateSearchProductSection />
                </div>
            </div>
            <div className=" md:flex mb-3">
                <div className="md:w-1/2 px-3 mb-3 md:mb-0">
                    <Input
                        onChange={formHandler}
                        name='item_number'
                        required={true}
                        value={form.item_number}
                        label='Item Number'
                        type='text'
                        errorMessage='Item Number is required'
                    />
                </div>
                <div className="md:w-1/2 px-3">
                    <Input
                        onChange={formHandler}
                        name='unit'
                        required={true}
                        value={form.unit}
                        label='Item Unit'
                        type='text'
                        errorMessage='Item Unit is required'
                    />
                </div>
            </div>
           
            <div className=" md:flex mb-3">
                <div className="md:w-1/2 px-3 mb-3 md:mb-0">
                    <Input
                        onChange={formHandler}
                        name='brand'
                        required={true}
                        value={form.brand}
                        label='Brand'
                        type='text'
                        errorMessage='Brand is required'
                    />
                </div>
                <div className="md:w-1/2 px-3">
                    <Input
                        onChange={formHandler}
                        name='class'
                        required={true}
                        value={form.class}
                        label='Item Class'
                        type='text'
                        errorMessage='Item Class is required'
                    />
                </div>
            </div>
            <div className=" md:flex mb-3">
                <div className="md:w-2/6 px-3 mb-3 md:mb-0">
                    <Input
                        onChange={formHandler}
                        name='serial_number'
                        required={true}
                        value={form.serial_number}
                        label='Serial Number'
                        type='text'
                        errorMessage='Serial Number is required'
                    />
                </div>

                <div className="md:w-2/6 px-3">

                    <Select
                        onChange={formHandler}
                        name='call_type'
                        required={true}
                        value={form.call_type ?? call_type[0].value}
                        label='Call Type'
                        errorMessage='Call Type is required'
                        data={call_type}
                    />
                </div>
                <div className="md:w-2/6 px-3">
                    <Input
                        onChange={formHandler}
                        name='purchase_data'
                        required={true}
                        value={form.purchase_data}
                        label='Purchase Date'
                        type='date'
                        errorMessage='Purchase Date is required'
                    />
                </div>
            </div>

            <div className=" md:flex mb-3">
                <div className="md:w-1/4 px-3 mb-3 md:mb-0">
                    <Input
                        onChange={formHandler}
                        name='zip_code'
                        required={true}
                        value={form.zip_code}
                        label='Zip Code / Postal Code'
                        type='text'
                        errorMessage='Zip Code is required'
                    />
                </div>

                <div className="md:w-1/4 px-3">
                    <Select
                        onChange={formHandler}
                        name='country'
                        required={true}
                        value={form.country}
                        label='Country'
                        errorMessage='Country is required'
                        data={countries.map(res => ({ name: res.name, value: res.value }))}
                    />
                </div>
                <div className="md:w-1/4 px-3">
                    <Select
                        onChange={formHandler}
                        name='state'
                        required={true}
                        value={form.state}
                        label='State'
                        errorMessage='State is required'
                        data={regions}
                    />
                </div>
                <div className="md:w-1/4 px-3">
                    <Input
                        onChange={formHandler}
                        name='city'
                        required={true}
                        value={form.city}
                        label='City'
                        type='text'
                        errorMessage='City is required'
                    />
                </div>
            </div>
            <div className="flex flex-col gap-4 mb-3">
                <div className="md:w-full px-3 mb-3 md:mb-0">
                    <Input
                        onChange={formHandler}
                        name='address'
                        required={true}
                        value={form.address}
                        label='Address'
                        type='text'
                        errorMessage='Address is required'
                    />
                </div>
                <div className="md:w-full px-3 mb-3 md:mb-0">
                    <Select
                        onChange={formHandler}
                        name='issue'
                        required={true}
                        value={form.issue}
                        label='Issue'
                        errorMessage='Issue is required'
                        data={[
                            {
                                value: 'Canada',
                                name: 'Canada'
                            },
                            {
                                value: 'United States',
                                name: 'United States'
                            }
                        ]}
                    />
                </div>
                <div className="md:w-full flex px-3 mb-3 md:mb-0 gap-5">
                    <div className='basis-3/4'>
                        <Textarea
                            required={true}
                            onChange={formHandler}
                            name='remarks'
                            value={form.remarks}
                            label='Remarks'
                            type='text'
                            errorMessage='Remarks is required'
                        />
                    </div>
                    <div className='basis-1/4 flex items-center justify-center'>
                        <div className="flex items-center justify-center">
                            <input id="checked-checkbox" type="checkbox" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 " />
                            <label htmlFor="checked-checkbox" className="ms-2 text-sm font-black text-gray-900 dark:text-gray-300">Send Initial Email</label>
                        </div>
                    </div>
                </div>
                <div className='flex gap-4 items-center justify-center'>
                    <button className='p-3 w-36 bg-blue-500 text-white rounded-sm hover:to-blue-600'>
                        Open
                    </button>
                    <button className='p-3 w-36 bg-red-500 text-white rounded-sm hover:to-red-600'>
                        Closed
                    </button>
                </div>
            </div>
        </form>
    )
}
