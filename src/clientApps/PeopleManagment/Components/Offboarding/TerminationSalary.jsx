import React from 'react';
import icon1 from '../../../../assets/svgs/asab_logo2.svg';

export default function TerminationSalary() {
  return (
    <div className="bg-white p-6 rounded-md shadow-md max-w-3xl mx-auto border ">
      {/* Header Section */}
      <div className="flex justify-between items-center border-b pb-0 mb-0 ">
        <div>
          <h2 className="text-lg font-semibold text-[#141414]">Final Settlement</h2>
          <p className="text-[#141414]">Jun 25, 2024</p>
        </div>
        <img
          src={icon1} 
          alt="ASAB Logo"
          className="w-44 h-44"
        />  

      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-3 gap-4">
        {/* Left Section */}
        <div className="col-span-1">
          <p className="font-semibold mt-2">Reem Ahmed</p>
          <p className="mt-4">Employee ID: 1234566789</p>
          <p>Position: UI Designer</p>

          {/* Divider */}
          <hr className="border-t-1 border-gray-300 mt-6 mb-4" />

          <div>
            <p className="font-semibold">Service</p>
            <p className="mt-4 text-[#4F4F4F]">Duration: 1 Week</p>

            <p className='text-[#4F4F4F]'>Hiring Date: 10/10/2024</p>
            <p className='text-[#4F4F4F]'>End Date: 10/10/2024</p>
          </div>

          {/* Divider */}
          <hr className="border-t-1 border-gray-300 mt-4 mb-4" />

          <div>
            <p className="font-semibold">Days</p>
            <p className="mt-4 text-[#4F4F4F]">Days Worked: 90 Days</p>
            <p className='text-[#4F4F4F]'>Time off Balance: 90 Days</p>
          </div>

          {/* Divider */}
          <hr className="border-t-1 border-gray-300 mt-4 mb-4" />

          <div>
            <p className="font-semibold">Salary</p>
            <p className="mt-4 text-[#4F4F4F]">Salary Date: 10/10/2024</p>
          </div>
        </div>

        {/* Right Section: Income and Deductions */}
        <div className="col-span-2 border-l pl-4">
          {/* Income Section */}
          <div className="mb-4">
            <p className="font-semibold">Income</p>
            <div className="flex justify-between mt-4">
              <p>Worth Basic Salary</p>
              <p>7000 SAR</p>
            </div>
            <div className="flex justify-between">
              <p>Housing</p>
              <p>7000 SAR</p>
            </div>
            <div className="flex justify-between">
              <p>Transportation</p>
              <p>7000 SAR</p>
            </div>

            <div className="flex justify-between font-semibold mt-2 border-t pt-2">
              <p className='text-primary'>Total</p>
              <p className='text-primary'>14000 SAR</p>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-t-1 border-gray-300 mt-4 mb-4" />

          {/* Deductions Section */}
          <div className="mb-4">
            <p className="font-semibold">Deductions</p>
            <div className="flex justify-between mt-6">
              <p>Undertime</p>
              <p>200 SAR</p>
            </div>
            <div className="flex justify-between font-semibold mt-2 border-t pt-2">
              <p className='text-primary'>Total</p>
              <p className='text-primary'>200 SAR</p>
            </div>
          </div>

          {/* Divider */}
          {/* <hr className="border-t-1 border-gray-300 mt-4 mb-4" /> */}

          {/* Net Salary Section */}
          <div className="flex justify-between font-semibold text-lg border-t pt-4">
            <p>Net Salary</p>
            <p>15000 SAR</p>
          </div>
        </div>
      </div>
    </div>
  );
}
