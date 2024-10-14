import React from 'react'
import FormField from '../../../Common/FormField'

export default function Package() {
  return (
    <div className='flex flex-col gap-4'>
        <div className='grid grid-cols-2 gap-4'>
        <FormField
            type="select"
            label="Packages"
            name="packages"
            // value={formik.values.packages}
            // onChange={formik.handleChange}
            // error={formik.errors.packages}
            language="en"
            placeholder="Select Packages"
            options={[{"value": "1", "label": "Package 1"}, {"value": "2", "label": "Package 2"}, {"value": "3", "label": "Package 3"}]}
          />

          <FormField
            type="number"
            label="User Number Start From"
            name="userNumberStartFrom"
            // value={formik.values.userNumberStartFrom}
            // onChange={formik.handleChange}
            // error={formik.errors.userNumberStartFrom}
            placeholder="User Number Start From"
          />
        </div>

        <div className='grid grid-cols-2 gap-4'>
            <FormField
                type="number"
                label="User Number End At"
                name="userNumberEndAt"
                // value={formik.values.userNumberEndAt}
                // onChange={formik.handleChange}
                // error={formik.errors.userNumberEndAt}
                placeholder="User Number End At"
            />

            <FormField
                type="number"
                label="User Added"
                name="userAdded"
                // value={formik.values.userAdded}
                // onChange={formik.handleChange}
                // error={formik.errors.userAdded}
                placeholder="User Added"
            />
        </div>
        <div className='grid grid-cols-2 gap-4'>
            <FormField
                type="number"
                label="User can be Added"
                name="userCanBeAdded"
                // value={formik.values.userCanBeAdded}
                // onChange={formik.handleChange}
                // error={formik.errors.userCanBeAdded}
                placeholder="User can be Added"
            />

            <FormField
                type="number"
                label="Admins Number"
                name="adminsNumber"
                // value={formik.values.adminsNumber}
                // onChange={formik.handleChange}
                // error={formik.errors.adminsNumber}
                placeholder="Admins Number"
            />
        </div>
        <div className='grid grid-cols-2 gap-4'>
            <FormField
                type="date"
                label="Start Date"
                name="startDate"
                // value={formik.values.startDate}
                // onChange={formik.handleChange}
                // error={formik.errors.startDate}
                placeholder="Start Date"
            />

            <FormField
                type="date"
                label="Expiry Date"
                name="expiryDate"
                // value={formik.values.expiryDate}
                // onChange={formik.handleChange}
                // error={formik.errors.expiryDate}
                placeholder="Expiry Date"
            />
        </div>
        <div className='flex justify-center items-center gap-2 my-2'>
          <button className='py-1 px-4 border border-primary bg-primary text-white rounded-lg'>Save And Next</button>
          <button className='py-1 px-4 border border-primary text-primary rounded-lg'>Cancel</button>

        </div>
    </div>
  )
}
