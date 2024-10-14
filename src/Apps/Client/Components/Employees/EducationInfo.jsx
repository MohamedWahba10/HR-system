import React from 'react'
import FormField from '../../../../Common/FormField'

export default function EducationInfo() {
  return (
    <div className='flex flex-col gap-5'>
          <h1 className="font-bold text-xl py-6">Education Info</h1>

<div className="grid grid-cols-2 gap-4">
  <FormField
    label="Degree"
    type="text"
    placeholder="Degree"
  />
  <FormField
    label="Degree Arabic"
    type="text"
    language="ar"
    placeholder="الدرجة"
  />
</div>

<div className="grid grid-cols-2 gap-4">
  <FormField
    label="Institute"
    type="text"
    placeholder="Institute"
  />
  <FormField
    label="Institute Arabic"
    type="text"
    language="ar"
    placeholder="المعهد"
  />
</div>

<div className="grid grid-cols-2 gap-4">
    <FormField
    label="City"
    type="text"
    placeholder="City"
    />
    <FormField
    label="Country"
    type="text"
    placeholder="Country"
    />
</div>

<div className="grid grid-cols-2 gap-4">
  <FormField
    label="Start Date"
    type="date"
    placeholder="Start Date"
  />
  <FormField
    label="Completion Date"
    type="date"
    placeholder="Completion Date"
  />
</div>
    </div>
  )
}
