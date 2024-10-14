import React from 'react'
import Layout from '../../../Layouts/Layout'
import FormField from "../../../Common/FormField"

export default function ClientForm() {
  return (
    <Layout>
        <h1 className="text-xl font-semibold mb-4">Add New Potential Client</h1>
        <div className='w-full bg-white shadow-round rounded-2xl'>
            <h1 className='text-base font-semibold text-start py-4 px-4'>Company Information</h1>
            <form className='flex flex-col gap-4 justify-center py-2 px-10'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        label="Company Name"
                        type="text"
                        placeholder="Company Name"
                    />
                    <FormField
                        label="Company Name Arabic"
                        type="text"
                        language="ar"
                        placeholder="اسم الشركة"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                    label="Company Owner"
                    type="text"
                    placeholder="Company Owner"
                    />
                    <FormField
                    label="Company Owner Arabic"
                    type="text"
                    language="ar"
                    placeholder="اسم صاحب الشركة"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                    label="Holding Company"
                    type="text"
                    placeholder="Holding Company"
                    />
                    <FormField
                    label="Holding Company Arabic"
                    type="text"
                    language="ar"
                    placeholder="اسم الشركة التابعة"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                    label="Holding Company Owner"
                    type="text"
                    placeholder="Holding Company Owner"
                    />
                    <FormField
                    label="Holding Company Owner Arabic"
                    type="text"
                    language="ar"
                    placeholder="اسم صاحب الشركة التابعة"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                    label="Sector"
                    type="text"
                    placeholder="Sector"
                    />
                    <FormField
                    label="Branch"
                    type="text"
                    placeholder="Branch"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                    label="Employee Name"
                    type="text"
                    placeholder="Employee Name"
                    />
                    <FormField
                    label="Employee Name Arabic"
                    type="text"
                    language="ar"
                    placeholder="اسم الموظف"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                    label="Email"
                    type="email"
                    placeholder="Email"
                    />
                    <FormField
                    label="Phone"
                    type="text"
                    placeholder="Phone"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                    label="Our Employee Name"
                    type="text"
                    placeholder="Our Employee Name"
                    />
                    <FormField
                    label="Our Employee Name Arabic"
                    type="text"
                    language="ar"
                    placeholder="اسم الموظف الخاص بنا"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                    label="Status"
                    type="text"
                    placeholder="Status"
                    />
                    <FormField
                    label="Next Step"
                    type="text"
                    placeholder="Next Step"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                    label="First Interaction Date"
                    type="date"
                    placeholder="First Interaction Date"
                    />
                    <FormField
                    label="Last Interaction Date"
                    type="date"
                    placeholder="Last Interaction Date"
                    />
                </div>

                <div className='flex justify-center gap-2 py-4'>
                    <button className='rounded-md w-[10%] px-4 py-1 border border-primary text-primary'>Cancel</button>
                    <button className='rounded-md w-[10%] px-4 py-1 bg-primary text-white'>Save</button>
                </div>
            </form>

        </div>
    </Layout>
  )
}
