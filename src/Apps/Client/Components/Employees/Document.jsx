import React from 'react'
import Nobranch from "../../../../assets/svgs/nobranch.svg";

export default function Document() {
  return (
    <div className='p-4 bg-white'>
       <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold mb-4">Documents</h1>
        <button className="py-1 px-2 bg-primary text-white rounded-lg">
          Upload Document
        </button>
      </div>

      <div>
        <img src={Nobranch} alt="No branch" className="w-1/3 mx-auto object-cover" />

        <p className="text-lg text-center font-semibold py-4">No Documents added yet</p>
    </div>
    </div>
  )
}
