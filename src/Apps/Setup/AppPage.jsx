import React, { useState } from 'react'
import Layout from '../../Layouts/Layout'
import SetupTabs from './Components/SetupTabs'

export default function AppPage() {
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
    <Layout>
    <h1 className="text-xl font-semibold text-black ml-2 py-2">Setup</h1>
    <div className="h-screen p-2">
    <SetupTabs />
      <div className=" bg-white p-4 rounded-2xl">
      <div className="flex justify-start items-center w-full mt-5 ">
     <h2 className="text-lg font-semibold ">Choose What to Show to Users</h2>
     </div>
          {sections.map((section, index) => (
            <div key={index} className="mt-10">
              <h3 className="text-md text-primary">{section.title}</h3>
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
    </div>
    </div>
    </Layout>
  )
}
