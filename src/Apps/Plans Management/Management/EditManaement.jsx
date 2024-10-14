import React, { useState } from 'react';
import { useLocation } from "react-router-dom"; // Import useLocation
import FormField from '../../../Common/FormField';
import Layout from '../../../Layouts/Layout';

export default function EditManagement() {
  const location = useLocation();
  const [formData, setFormData] = useState(location.state?.data || {}); // Initialize form data with passed data

  const [selectedModules, setSelectedModules] = useState([]);
  const [features, setFeatures] = useState({
    Payroll: [],
    Attendance: [],
  });

  const modules = ["Payroll", "Attendance and Time-Tracking"];
  const featuresOptions = [
    { value: "Payroll", label: "Payroll" },
    { value: "Attendance", label: "Attendance" },
    { value: "Time-Tracking", label: "Time-Tracking" },
  ];

  const handleModuleChange = (module) => {
    setSelectedModules((prev) =>
      prev.includes(module)
        ? prev.filter((item) => item !== module)
        : [...prev, module]
    );

    // Disable the corresponding features if the module is unchecked
    setFeatures((prev) => ({
      ...prev,
      [module]: [],
    }));
  };

  const handleFeaturesChange = (module, selectedOptions) => {
    setFeatures((prev) => ({
      ...prev,
      [module]: selectedOptions,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Updated form data:", formData); // Log the form data to the console
    console.log("Selected Modules:", selectedModules); // Log selected modules to the console
    console.log("Selected Features:", features); // Log selected features to the console
  };

  return (
    <Layout>
      <div className="w-full bg-white shadow-round rounded-2xl">
        <div className="flex justify-between items-center py-2 px-4">
          <h1 className="text-base font-semibold text-start py-4">
            Manage {formData.companyName} Package
          </h1>
        </div>
        <form className="flex flex-col gap-4 justify-center py-2 px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Package Name"
              type="text"
              name="package"
              value={formData.package || ""}
              placeholder="Package Name"
              onChange={handleChange}
            />
            <FormField
              label="Users can be Added"
              type="number"
              name="usersCanBeAdded"
              value={formData.usersCanBeAdded || ""}
              placeholder="Users can be Added"
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Start Date"
              type="date"
              name="startDate"
              value={formData.startDate || ""}
              placeholder="Start Date"
              onChange={handleChange}
            />
            <FormField
              label="End Date"
              type="date"
              name="expirationDate"
              value={formData.expirationDate || ""}
              placeholder="End Date"
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Remaining Time"
              type="number"
              name="remainingTime"
              value={formData.remainingTime || ""}
              placeholder="Remaining Time"
              onChange={handleChange}
            />
            <FormField
              label="Admin Users"
              type="number"
              name="admin"
              value={formData.admin || ""}
              placeholder="Admin Users"
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-5 items-center mt-5 my-2">
            <div className="flex flex-col gap-5 mt-2">
              <h3 className="text-lg font-semibold">Modules</h3>
              {modules.map((module, index) => (
                <div key={index} className="flex items-center my-2">
                  <input
                    type="checkbox"
                    checked={selectedModules.includes(module)}
                    onChange={() => handleModuleChange(module)}
                    className="w-5 h-5 rounded-full text-blue-600 focus:ring-blue-500"
                  />
                  <label className="ml-3 text-md font-medium text-gray-900">
                    {module}
                  </label>
                </div>
              ))}
            </div>
            <div className="mt-2 flex flex-col gap-5">
              <h3 className="text-lg font-semibold">Features</h3>
              {modules.map((module, index) => (
                <div key={index}>
                  <FormField
                    type="multiselect"
                    onChange={(selectedOptions) =>
                      handleFeaturesChange(module, selectedOptions)
                    }
                    options={featuresOptions}
                    disabled={!selectedModules.includes(module)} // Disable if the module is not selected
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 py-4">
            <>
            <button
                type="button"
                className="rounded-md w-[10%] px-4 py-1 bg-primary text-white"
                onClick={handleSave} // Log the data on save
              >
                Save
              </button>
              <button
                type="button"
                className="rounded-md w-[10%] px-4 py-1 border border-primary text-primary"
              >
                Cancel
              </button>
              
            </>
          </div>
        </form>
      </div>
    </Layout>
  );
}
