import React from 'react';

const PackageModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-3/4 md:w-1/2 lg:w-1/3 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Package Details</h2>
          <button onClick={onClose} className="text-gray-600 font-bold text-xl">X</button>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex flex-col">
            <span className="font-semibold">Package Name:</span>
            <span className="bg-clip-text text-transparent bg-primary-gradient">Pro</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Package Users:</span>
            <span className="text-blue-600">40</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Users Added:</span>
            <span className="text-blue-600">40</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Users can be added:</span>
            <span className="text-blue-600">20</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Packages start date:</span>
            <span className="text-blue-600">10/10/2024</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Packages expiration date:</span>
            <span className="text-blue-600">10/10/2024</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageModal;
