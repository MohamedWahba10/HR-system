import React from 'react'
import FormField from '../../../../Common/FormField'

export default function LoginInfo() {
  return (
    <div className='flex flex-col gap-5'>
          <h1 className="font-bold text-xl py-6">Login Info</h1>

<div className="grid grid-cols-2 gap-4">
 <FormField
    label="Username"
    type="text"
    placeholder="Username"
  />
  <FormField
  label="Role"
  type="select"
  placeholder="Role"
  options={["admin", "employee"]}
  />
</div>
<div className="grid grid-cols-2 gap-4">
<FormField
    label="Email"
    type="email"
    placeholder="Email"
  />
  <FormField
    label="Phone Number"
    type="tel"
    placeholder="Phone Number"
  />
</div>

<div className="grid grid-cols-2 gap-4">
  <FormField
    label="Password"
    type="password"
    placeholder="Password"
  />
  <FormField
    label="Confirm Password"
    type="password"
    placeholder="Confirm Password"
  />
</div>
    </div>
  )
}
