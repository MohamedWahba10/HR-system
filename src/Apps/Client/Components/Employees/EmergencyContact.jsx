import React from 'react'
import FormField from '../../../../Common/FormField'

export default function EmergencyContact() {
  return (
    <div className='flex flex-col gap-5'>
         <h1 className="font-bold text-xl py-6">Emergency Contact</h1>

<div className="grid grid-cols-2 gap-4">
  <FormField
    label="Name"
    type="text"
    placeholder="Name"
  />
  <FormField
  label="Name Arabic"
  type="text"
  language="ar"
  placeholder="الاسم"
  />
</div>

<div className="grid grid-cols-2 gap-4">
  <FormField
    label="Relationship"
    type="text"
    placeholder="Relationship"
  />
  <FormField
    label="Email"
    type="email"
    placeholder="Email"
  />
</div>

<div className="grid grid-cols-2 gap-4">
  <FormField
    label="Phone Number"
    type="tel"
    placeholder="Phone Number"
  />
</div>
    </div>
  )
}
