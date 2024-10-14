import React from 'react'

export default function ModuleList() {
    const modules = [
        'App',
        'Auth',
        'Database',
        'Storage',
        'Functions',
    ];

    const [selectedModule, setSelectedModule] = React.useState(0);

    const onSelect = (index) => {
        setSelectedModule(index);
    };
    
  return (
    <div className="w-[20%] bg-white mt-4 border-r-2">
    {modules.map((module, index) => (
      <button
        key={index}
        className={`block w-[95%] px-2 py-3 my-2 text-sm text-center mx-auto
                    ${selectedModule === index ? 'bg-primary text-white rounded-md' : 'hover:bg-blue-100'}`}
        onClick={() => onSelect(index)}
      >
        {module}
      </button>
    ))}
  </div>
  )
}
