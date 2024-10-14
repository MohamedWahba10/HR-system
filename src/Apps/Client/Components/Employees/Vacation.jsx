import React from 'react';

const Vacation = () => {
  return (
    <div className='p-4 bg-white'>
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold mb-4">Vacation Reports</h1>
        <button className="py-1 px-2 bg-primary text-white rounded-lg">
          Edit Vacation
        </button>
      </div>
      <div className="space-y-4">
        <VacationItem label="Annual vacation" current={0} total={0} color="bg-blue-200" />
        <VacationItem label="Sick vacation" current={0} total={0} color="bg-red-200" />
        <VacationItem label="Marriage vacation" current={0} total={0} color="bg-pink-200" />
        <VacationItem label="Iddah vacation" current={0} total={0} color="bg-red-100" />
        <VacationItem label="Death vacation" current={0} total={0} color="bg-gray-200" />
      </div>
    </div>
  );
};

const VacationItem = ({ label, current, total, color }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-full">
        <label className="block text-gray-700">{label}</label>
        <div className={`w-full h-2 ${color} rounded-lg mt-1`} style={{ width: '100%' }}>
          <div className="h-2 bg-primary rounded-lg" style={{ width: `${(current / total) * 100 || 0}%` }}></div>
        </div>
      </div>
      <div className="w-[5%] ml-2 mt-5 text-gray-700">{`${current} of ${total}`}</div>
    </div>
  );
};

export default Vacation;
