import React from 'react'
import FormField from '../../../../Common/FormField'

export default function DependeceInfo() {
  return (
    <div className='flex flex-col gap-5'>
         <h1 className="font-bold text-xl py-6">Dependence Info</h1>

<div className="grid grid-cols-2 gap-4">
  <FormField
    label="Wife Name"
    type="text"
    placeholder="Wife Name"
  />
  <FormField
    label="Wife Name Arabic"
    type="text"
    language="ar"
    placeholder="اسم الزوجة"
  />
</div>

<div className="grid grid-cols-2 gap-4">
  <FormField
  label="Nationality"
  type="text"
  placeholder="Nationality"
  />
  <FormField
  label="Age"
  type="number"
  placeholder="Age"
  />
</div>
<div className="grid grid-cols-2 gap-4">
  <FormField
  label="ID/Iqama Number"
  type="text"
  placeholder="ID/Iqama Number"
  />
  <FormField
  label="ID/Iqama Expiry Date"
  type="date"
  placeholder="ID/Iqama Expiry Date"
  />
</div>
    </div>
  )
}
