import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const Pagination = () => {

  const { page, totalPages, handlePageChange } = useContext(AppContext);

  return (
    <div className='w-full flex justify-center fixed color-white border-2 
   fixed bottom-0  bg-white shadow-sm item center '>
      <div className='max-w-[600px] w-11/12 flex justify-between py-2'>
        <div className='flex gap-x-2'>        {
          page > 1 &&

          <button className="rounded-md border text-sm px-4 py-1"
            onClick={() => handlePageChange(page - 1)}>Previous</button>
        }
          {
            page < totalPages &&

            <button className="rounded-md border text-sm px-4 py-1"
              onClick={() => handlePageChange(page + 1)}>Next</button>
          }</div>



        <p className='font-bold text-xs'>Pages {page} of {totalPages}</p>

      </div>
    </div>

  )
}
