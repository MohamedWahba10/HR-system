import React, { useState } from 'react';
import ModalContainer from '../../../Common/ModalContainer';
import FormField from '../../../Common/FormField';
import Select from 'react-select';

export default function AddPackageModal({ modalIsOpen, closeModal }) {
  const [currentScreen, setCurrentScreen] = useState(1);  // Manage screen state
  const [selectedModules, setSelectedModules] = useState([
    { id: 1, name: 'Payroll', isChecked: false, features: [] },
    { id: 2, name: 'Attendance and Time-Tracking', isChecked: false, features: [] },
    { id: 3, name: 'Project Management', isChecked: false, features: [] },
    { id: 4, name: 'Payroll Management', isChecked: false, features: [] },
    { id: 5, name: 'Payroll Management', isChecked: false, features: [] },
    // Add more modules if needed
  ]);

  const [priceIncludesTax, setPriceIncludesTax] = useState({
    value: "yes",
    label: "Yes",
  });

  const handleInputChange = (e) => {
    console.log(e.target.value);
    // Handle input changes
  };

  const handleModuleChange = (id) => {
    const updatedModules = selectedModules.map((module) => 
      module.id === id ? { ...module, isChecked: !module.isChecked } : module
    );
    setSelectedModules(updatedModules);
  };

  const handleFeatureChange = (selectedOptions, moduleId) => {
    const updatedModules = selectedModules.map((module) =>
      module.id === moduleId ? { ...module, features: selectedOptions } : module
    );
    setSelectedModules(updatedModules);
  };

  const goToNextScreen = (e) => {
    e.preventDefault();
    setCurrentScreen(2); // Move to the second screen
  };

  const goToPreviousScreen = () => {
    setCurrentScreen(1); // Move back to the first screen
  };

  return (
    <ModalContainer isOpen={modalIsOpen} onRequestClose={closeModal} title="Add New Package">
      <form>
        {currentScreen === 1 && (
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
        )}

        {currentScreen === 2 && (
          <div className="grid grid-cols-1 gap-4">
            {selectedModules.map((module) => (
              <div key={module.id} className="flex items-center gap-4">
                <div className="w-1/2">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      checked={module.isChecked}
                      onChange={() => handleModuleChange(module.id)}
                      className="form-checkbox"
                    />
                    <span className="ml-2">{module.name}</span>
                  </label>
                </div>
                <div className="w-1/2">
                  {module.isChecked && (
                    <Select
                      isMulti
                      options={[
                        { value: 'Feature 1', label: 'Feature 1' },
                        { value: 'Feature 2', label: 'Feature 2' },
                        { value: 'Feature 3', label: 'Feature 3' },
                        // Add more features as needed
                      ]}
                      value={module.features}
                      onChange={(selectedOptions) => handleFeatureChange(selectedOptions, module.id)}
                      placeholder="Select features"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-center gap-4 mt-5">
          {currentScreen === 2 ? (
            <>
              <button
                type="button"
                className="border border-primary text-primary py-2 px-4 rounded-md"
                onClick={goToPreviousScreen}
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-primary text-white py-2 px-4 rounded-md"
              >
                Add
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="border border-primary text-primary py-2 px-4 rounded-md"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-primary text-white py-2 px-4 rounded-md"
                onClick={goToNextScreen}
              >
                Next
              </button>
            </>
          )}
        </div>
      </form>
    </ModalContainer>
  );
}
