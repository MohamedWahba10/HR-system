import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Image from '../../../assets/svgs/PalmTree.svg';
import CreateVacation from './CreateVacation';

const VacationList = () => (
  <div className='px-2'>
    <div className="flex justify-end">
      <Link to="create">
        <button className="py-1 px-2 bg-primary text-white rounded-lg">+ Add New Vacation</button>
      </Link>
    </div>

    <div className="grid grid-cols-4 gap-4 mt-4 px-4">
    <div className="group border border-primary rounded-md py-3 flex flex-col items-center justify-center gap-8 hover:shadow-md hover:border-[3px] hover:border-primary">
  <img className=" h-16 w-16 mt-2" src={Image} alt="Palm Tree" />
  <button className="py-1 px-2 border border-primary rounded-md text-primary group-hover:bg-primary hover:border-0 hover:border-white group-hover:text-white">
    Vacation Name
  </button>
</div>

    </div>
  </div>
);

export default function Vacations() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<VacationList />} />
        <Route path="create" element={<CreateVacation />} />
      </Routes>
    </div>
  );
}
