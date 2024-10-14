import React from 'react'
import FormField from '../../../../Common/FormField'

export default function OrganizationInfo() {
  return (
    <div className='flex flex-col gap-5'>
          <h1 className="font-bold text-xl py-6">Organization Info</h1>

<div className="grid grid-cols-2 gap-4">
  <FormField
    label="Position"
    type="select"
    placeholder="Position"
    options={["Manager", "Employee"]}
  />
  <FormField
    label="Employee ID"
    type="text"
    placeholder="Employee ID"
  />
</div>

<div className="grid grid-cols-2 gap-4">
  <FormField label="Probation" type="text" placeholder="Probation" />
  <FormField
    label="Work Shift"
    type="select"
    placeholder="Work Shift"
    options={["Day Shift", "Night Shift"]}
  />
</div>

<div className="grid grid-cols-2 gap-4">
  <FormField
    label="Department"
    type="select"
    placeholder="Department"
    options={["HR", "IT"]}
  />
  <FormField
    label="Sector"
    type="select"
    placeholder="Sector"
    options={["IT", "HR"]}
  />
</div>

<div className="grid grid-cols-2 gap-4">
  <FormField
    label="Branch"
    type="select"
    placeholder="Branch"
    options={["Branch 1", "Branch 2"]}
  />
  <FormField
    label="Section"
    type="select"
    placeholder="Section"
    options={["Section 1", "Section 2"]}
  />
</div>

<div className="grid grid-cols-2 gap-4">
  <FormField
    label="Grade"
    type="select"
    placeholder="Grade"
    options={["Grade 1", "Grade 2"]}
  />
  <FormField
    label="Line Manager"
    type="text"
    placeholder="Line Manager"
  />
</div>

<div className="grid grid-cols-2 gap-4">
  <FormField
    label="Project"
    type="select"
    placeholder="Project"
    options={["Project 1", "Project 2"]}
  />
  <FormField
    label="Site"
    type="select"
    placeholder="Site"
    options={["Site 1", "Site 2"]}
  />
</div>
<div className="grid grid-cols-2 gap-4">
  <FormField
    label="Contract"
    type="select"
    placeholder="Contract"
    options={["Contract 1", "Contract 2"]}
  />
  <FormField
    label="Work Mode"
    type="select"
    placeholder="Work Mode"
    options={["Onsite", "Remote"]}
  />
</div>

<div className="grid grid-cols-2 gap-4">
  <FormField
    label="Joining Date"
    type="date"
    placeholder="Joining Date"
  />
  <FormField
    label="Expiry Date"
    type="date"
    placeholder="Expiry Date"
  />
</div>
<div className="grid grid-cols-2 gap-4">
  <FormField label="City" type="text" placeholder="City" />
  <FormField label="Country" type="text" placeholder="Country" />
</div>
    </div>
  )
}
