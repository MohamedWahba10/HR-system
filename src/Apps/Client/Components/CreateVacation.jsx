import React from 'react';
import FormField from '../../../Common/FormField';

const CreateVacation = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">New Vacation</h2>
      <form>
        <div className="mb-4 grid grid-cols-2 gap-4">
         <FormField
            label="Vacation Name"
            type="text"
            placeholder="Vacation Name"
          />

          <FormField
          label="Vacation Name Arabic"
          type="text"
          language='ar'
          placeholder="اسم الإجازة"
          />
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <FormField
          label="Days Number"
          type="number"
          placeholder="Days Number"
          />

          <FormField
          label="Start Date"
          type="date"
          placeholder="Start Date"
          />
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <FormField
          label="Valid"
          type="select"
          placeholder="Valid"
          options={[
            { label: 'Contract Date', value: 'contract_date' },
            { label: 'After Probabtion', value: 'after_probation' },
          ]}
          />
        </div>

        <h1 className='text-lg font-semibold'>Conditions</h1>
        <div className="flex gap-2 items-center my-2">
          <input
            type="checkbox"
            className="w-5 h-5"
            name=" public-holidays"
            id="public-holidays"
           
          />
          <label className='text-textprimary' htmlFor="public-holidays">
            Public Holidays are calulated in vacation.
          </label>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            className="w-5 h-5"
            name=" days-off"
            id="days-off"
           
          />
          <label className='text-textprimary' htmlFor="days-off">
            Days Off are calulated in vacation.
          </label>
        </div>
        
        <div className='flex justify-center items-center gap-2'>
          <button className='py-1 px-4 border border-primary text-primary rounded-lg'>Cancel</button>
          <button className='py-1 px-4 bg-primary text-white rounded-lg'>Save And Next</button>

        </div>
      </form>
    </div>
  );
};

export default CreateVacation;
