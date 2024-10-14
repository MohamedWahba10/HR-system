import React, { useState } from 'react'
import FormField from '../../../../Common/FormField'

export default function BankInfo() {
   const [isEditing , setISEditing] = useState(false)
  return (
   <div className='bg-white p-4'>
     <div>
        <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold mb-4">Bank Info</h1>
        <button onClick={() => setISEditing(!isEditing)} className="py-1 px-2 bg-primary text-white rounded-lg">Edit Bank Info</button>
      </div>
     <form className='flex flex-col gap-4'>
        <div className="grid grid-cols-2 gap-4">
            <FormField
                label="Bank Name"
                type="text"
                placeholder="Bank Name"
                disabled={!isEditing}
            />
            <FormField
                label="Account Number"
                type="number"
                placeholder="Account Number"
                disabled={!isEditing}
            />
        </div>

        <div className="grid grid-cols-2 gap-4">
            <FormField
                label="IBAN Number"
                type="text"
                placeholder="IBAN Number"
                disabled={!isEditing}
            />
          </div>

         {isEditing &&  
         <div className='flex justify-center items-center gap-2 my-2'>

          <button onClick={() => setISEditing(!isEditing)} className='py-1 px-4 border border-primary text-primary rounded-lg'>Cancel</button>
          <button className='py-1 px-4  bg-primary text-white rounded-lg'>Save And Next</button>

        </div>}
     </form>

    </div>
   </div>
  )
}
