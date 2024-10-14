import React, { useState } from "react";
import PackageList from "./Components/PackageList";
import SetupTabs from "./Components/SetupTabs";
import AddPackageModal from "./Components/AddPackageModal";
import FormField from "../../Common/FormField";
import Layout from "../../Layouts/Layout";
import Select from "react-select";
import { FaPlus } from "react-icons/fa";

function Packages() {
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
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const packages = ["pro package", "pro package", "pro package", "pro package"];
  const modules = ["Payroll", "Attendance and Time-Tracking"];

  const featuresOptions = [
    { value: "Payroll", label: "Payroll" },
    { value: "Attendance", label: "Attendance" },
    { value: "Time-Tracking", label: "Time-Tracking" },
  ];
  const handleInputChange = (e) => {
    console.log(e.target.value);
    // Handle input changes
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

  return (
    <Layout>
      <h1 className="text-xl font-semibold text-black py-2">Setup</h1>
      <div className="h-screen py-2 grid grid-rows-none grid-cols-1">
        <SetupTabs />
        <div className="flex bg-white rounded-2xl">
          <PackageList
            packages={packages}
            selectedPackage={selectedPackage}
            onSelect={setSelectedPackage}
          />
          <div className="w-3/4 p-6">
            <div className="pb-4 flex justify-between items-center mb-4 border-b-2 w-full">
              <h2 className="text-xl font-semibold ">Pro Package</h2>
              <button
                onClick={openModal}
                className="bg-primary px-4 py-1 text-white rounded-md flex items-center gap-2"
              >
                <FaPlus size={16} className="text-white" /> Add Package
              </button>
            </div>{" "}
            <form>
              <div className="grid grid-cols-2 gap-4">
                {/* Existing Form Fields */}
                <FormField
                  label="Package name"
                  inputLabel="Package name"
                  type="text"
                  value="Pro"
                  onChange={handleInputChange}
                  name="packageName"
                  required
                />
                <FormField
                  label="Package name in arabic"
                  inputLabel="Package name in arabic"
                  type="text"
                  value="برو"
                  onChange={handleInputChange}
                  name="packageNameArabic"
                  required
                />
                <FormField
                  label="Users number start from"
                  inputLabel="Users number start from"
                  type="number"
                  value={20}
                  onChange={handleInputChange}
                  name="usersNumberStart"
                  required
                />
                <FormField
                  label="Users number end at"
                  inputLabel="Users number end at"
                  type="number"
                  value={40}
                  onChange={handleInputChange}
                  name="usersNumberEnd"
                  required
                />
                <FormField
                  label="Time"
                  inputLabel="Time"
                  type="number"
                  value={40}
                  onChange={handleInputChange}
                  name="time"
                  required
                />
                <FormField
                  label="Reference number"
                  inputLabel="Reference number"
                  type="text"
                  value="123456"
                  onChange={handleInputChange}
                  name="referenceNumber"
                  required
                />
                <FormField
                  label="Price"
                  inputLabel="Price"
                  type="number"
                  value={200}
                  onChange={handleInputChange}
                  name="price"
                  required
                />
                <FormField
                  label="Tex"
                  inputLabel="Tex"
                  type="number"
                  value={10}
                  onChange={handleInputChange}
                  name="tex"
                  required
                />
                {/* New Fields */}
                <FormField
                  label="Discounts"
                  inputLabel="Discounts"
                  type="number"
                  value={0}
                  onChange={handleInputChange}
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
                  value={4000}
                  onChange={handleInputChange}
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

              <button className="w-[40%] py-1 px-4 border border-black text-black rounded-md mt-5">
                Delete Package
              </button>
            </form>
          </div>
        </div>
        <AddPackageModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      </div>
    </Layout>
  );
}

export default Packages;
