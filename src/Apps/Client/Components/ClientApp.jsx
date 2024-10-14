import React, { useState } from 'react'

export default function ClientApp() {
    const [selectedItems, setSelectedItems] = useState({
        vacationRequestTypes: [],
        remainingVacationDays: [],
        medicalFormRequestRelationship: [],
      });
    
      const handleCheckboxChange = (section, item) => {
        setSelectedItems((prev) => ({
          ...prev,
          [section]: prev[section].includes(item)
            ? prev[section].filter((i) => i !== item)
            : [...prev[section], item],
        }));
      };
      const sections = [
        {
          title: 'Vacation Request Types:',
          name: 'vacationRequestTypes',
          items: [
            'Annual Vacation',
            'Sick Vacation',
            'Marriage Vacation',
            'Examination Vacation',
            'Birth of new child',
            'Death Vacation',
            'Iddah Vacation',
            'Hajj Vacation',
            'Unpaid Vacation',
          ],
        },
        {
          title: 'Remaining Vacation Days:',
          name: 'remainingVacationDays',
          items: ['Show Remaining Vacation Days', 'Hide Remaining Vacation Days'],
        },
        {
          title: 'Medical Form Request Relationship:',
          name: 'medicalFormRequestRelationship',
          items: ['Father', 'Mother'],
        },
      ];
      return (
        <div className="p-4 bg-white">
          <h2 className="text-xl text-black font-semibold mb-4">Choose what to show to employees</h2>
          {sections.map((section, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg mb-2">{section.title}</h3>
              <div className="grid grid-cols-2 gap-5 my-4">
                {section.items.map((item) => (
                  <label
                    key={item}
                    className={`flex items-center justify-between border rounded-lg p-2 cursor-pointer ${
                      selectedItems[section.name].includes(item)
                        ? 'border-primary'
                        : 'border-gray-300'
                    }`}
                  >
                    {item}
                    <input
                      type="checkbox"
                      name={section.name}
                      value={item}
                      checked={selectedItems[section.name].includes(item)}
                      onChange={() => handleCheckboxChange(section.name, item)}
                      className="w-5 h-5 rounded-full accent-primary hover:accent-primaryhover focus:ring-primaryhover form-checkbox"
                    />
                  </label>
                ))}
              </div>
            </div>
          ))}
        <div className='flex justify-center items-center gap-2 my-2'>
          <button className='py-1 px-4 border border-primary bg-primary text-white rounded-lg'>Save And Next</button>
          <button className='py-1 px-4 border border-primary text-primary rounded-lg'>Cancel</button>

        </div>
        </div>
      );
}