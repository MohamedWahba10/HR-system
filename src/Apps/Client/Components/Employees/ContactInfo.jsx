import React from 'react'
import FormField from '../../../../Common/FormField'

export default function ContactInfo() {
  return (
    <div className='flex flex-col gap-5'>
        <h1 className="font-bold text-xl py-6">Contact Info</h1>

<div className="grid grid-cols-2 gap-4">
  <FormField
    label="Work Email"
    type="email"
    placeholder="Work Email"
  />
  <FormField
    label="Phone Number"
    type="tel"
    placeholder="Phone Number"
  />
</div>

<div className="grid grid-cols-2 gap-4">
  <FormField
    label="Personal Email"
    type="email"
    placeholder="Personal Email"
  />
  <FormField
    label="Personal Phone Number"
    type="tel"
    placeholder="Personal Phone Number"
  />    
</div>
    </div>
  )
}
