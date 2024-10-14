import React from 'react'
import FormField from '../../../../Common/FormField'

export default function AddressInfo() {
  return (
    <div className='flex flex-col gap-5'>
          <h1 className="font-bold text-xl py-6">Address Info</h1>

<div className="grid grid-cols-2 gap-4">
  <FormField
    label="Short Address"
    type="text"
    placeholder="Short Address"
  />
  <FormField
    label="Building"
    type="text"
    placeholder="Building"
  />
</div>

<div className="grid grid-cols-2 gap-4">
  <FormField
    label="Street"
    type="text"
    placeholder="Street"
  />
  <FormField
    label="Street Arabic"
    type="text"
    language="ar"
    placeholder="الشارع"
  />
</div>

<div className="grid grid-cols-2 gap-4">
  <FormField
  label="District"
  type="text"
  placeholder="District"
  />
  <FormField
  label="District Arabic"
  type="text"
  language="ar"
  placeholder="المنطقة"
  />
</div>

<div className="grid grid-cols-2 gap-4">
  <FormField
  label="City"
  type="text"
  placeholder="City"
  />
  <FormField
  label="Postal Code"
  type="text"
  placeholder="Postal Code"
  />
</div>
    </div>
  )
}
