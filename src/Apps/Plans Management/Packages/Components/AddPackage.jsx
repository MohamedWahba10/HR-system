import React, { useState } from 'react';
import FormField from '../../../../Common/FormField';
import Layout from '../../../../Layouts/Layout';

export default function AddPackage() {
  const [selectedPackage, setSelectedPackage] = useState(0);
  const [selectedModules, setSelectedModules] = useState([]);
  const [priceIncludesTax, setPriceIncludesTax] = useState({
    value: "yes",
    label: "Yes",
  });
  const [features, setFeatures] = useState({
    Payroll: [],
    Attendance: [],
  });

  const [formData, setFormData] = useState({
    packageName: "",
    packageNameArabic: "",
    usersNumberStart: null,
    usersNumberEnd: null,
    time: null,
    referenceNumber: "",
    price: null,
    tex: null,
    discounts: null,
    total: null,
  });

  const packages = ["pro package", "pro package", "pro package", "pro package"];
  const modules = ["Payroll", "Attendance and Time-Tracking"];

  const featuresOptions = [
    { value: "Payroll", label: "Payroll" },
    { value: "Attendance", label: "Attendance" },
    { value: "Time-Tracking", label: "Time-Tracking" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log all the data for submission
    console.log({
      ...formData,
      selectedPackage,
      selectedModules,
      priceIncludesTax,
      features,
    });
  };

  return (
    <Layout>
      <div className='w-full bg-white rounded-2xl py-2 px-6'>
        <h1 className="text-lg font-semibold mb-4">Add New Package</h1>
        <form className='px-6' onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            {/* Existing Form Fields */}
            <FormField
              label="Package name"
              inputLabel="Package name"
              type="text"
              value={formData.packageName}
              onChange={handleInputChange}
              name="packageName"
              placeholder={"Package name"}
              required
            />
            <FormField
              label="Package name in arabic"
              inputLabel="Package name in arabic"
              type="text"
              value={formData.packageNameArabic}
              onChange={handleInputChange}
              name="packageNameArabic"
              placeholder="اسم الحزمة"
              required
            />
            <FormField
              label="Users number start from"
              inputLabel="Users number start from"
              type="number"
              value={formData.usersNumberStart || ""}
              onChange={handleInputChange}
              name="usersNumberStart"
              placeholder={"Users number start from"}
              required
            />
            <FormField
              label="Users number end at"
              inputLabel="Users number end at"
              type="number"
              value={formData.usersNumberEnd || ""}
              onChange={handleInputChange}
              name="usersNumberEnd"
              placeholder="Users number end at"
              required
            />
            <FormField
              label="Time in Months"
              inputLabel="Time"
              type="number"
              value={formData.time || ""}
              onChange={handleInputChange}
              name="time"
              placeholder="Time in Months"
              required
            />
            <FormField
              label="Reference number"
              inputLabel="Reference number"
              type="text"
              value={formData.referenceNumber}
              onChange={handleInputChange}
              name="referenceNumber"
              placeholder="Reference number"
              required
            />
            <FormField
              label="Price"
              inputLabel="Price"
              type="number"
              value={formData.price || ""}
              onChange={handleInputChange}
              name="price"
              placeholder="Price"
              required
            />
            <FormField
              label="Tax"
              inputLabel="Tax"
              type="number"
              value={formData.tex || ""}
              onChange={handleInputChange}
              name="tex"
              placeholder="Tax"
              required
            />
            {/* New Fields */}
            <FormField
              label="Discounts"
              inputLabel="Discounts"
              type="number"
              value={formData.discounts || ""}
              onChange={handleInputChange}
              placeholder="Discounts"
              name="discounts"
            />
            <FormField
              label="Price Includes Tax"
              inputLabel="Price Includes Tax"
              onChange={setPriceIncludesTax}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />
            <FormField
              label="Total"
              inputLabel="Total"
              type="number"
              value={formData.total || ""}
              onChange={handleInputChange}
              placeholder="Total"
              name="total"
              readOnly
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

          <div className='flex justify-center items-center gap-4 my-4'>
          
            <button className="w-[10%] py-[9px] px-4 bg-primary text-white rounded-md mt-5" type="submit"> 
              Save
            </button>
            <button className="w-[10%] py-2 px-4 border border-primary text-primary rounded-md mt-5"> 
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}
