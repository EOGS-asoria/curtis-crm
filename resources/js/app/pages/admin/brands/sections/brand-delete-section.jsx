import Modal from '@/app/layouts/components/modal'
import { TrashIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import { delete_brands_thunk } from '../redux/brands-thunk';
import store from '@/app/store/store';

export default function BrandDeleteSection({data}) {
  const [open, setOpen] = useState(false)
  const closeModal = () => {
    setOpen(false);
  };

  function deleteBrand(id) {
    store.dispatch(delete_brands_thunk(id))
    closeModal();
}
  return (
    <div>
      <button
                onClick={() => setOpen(true)}
                type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-3 py-2 text-center">
                <TrashIcon className='h-6 text-white' />
            </button>
            <Modal
                open={open}
                setOpen={setOpen}
                title="Delete Brand"
            >
                Are you sure you want to delete Brand?

                <div className="flex border-gray-200 rounded-b  mt-3.5">
                    <button data-modal-hide="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  " onClick={() => deleteBrand(data.id)}>Yes, Proceed</button>
                    <button data-modal-hide="default-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100  " onClick={closeModal}>Cancel</button>
                </div>
            </Modal>
    </div>
  )
}
