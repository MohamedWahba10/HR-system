import React from 'react';

function PackageList({ packages, selectedPackage, onSelect }) {
  return (
    <div className="w-[20%] bg-white mt-4 border-r-2 ">
      {packages.map((pkg, index) => (
        <button
          key={index}
          className={`block w-[95%] px-2 py-3 my-2 text-sm text-center mx-auto
                      ${selectedPackage === index ? 'bg-primary text-white rounded-md' : 'hover:bg-blue-100'}`}
          onClick={() => onSelect(index)}
        >
          {pkg}
        </button>
      ))}
    </div>
  );
}

export default PackageList;
