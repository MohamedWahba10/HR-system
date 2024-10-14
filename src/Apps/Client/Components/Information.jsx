import React from 'react'
import EmployeeProfile from './Employees/EmployeProfile'
import EmployeeForm from './Employees/EmployeeForm'

export default function Information() {
    return (
        <div className='flex gap-4 bg-backgroundDefault'>
            <div className='w-1/4 '>
            <EmployeeProfile/>
            </div>
            <div className='w-3/4'>
                <EmployeeForm/>
            </div>
        </div>
      )
}
