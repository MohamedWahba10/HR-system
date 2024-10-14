import React, { useState } from "react";
import FormField from "../../../../Common/FormField";
import AddNewAllowenceModal from "./AddNewAllowenceModal";

const PercentageInput = ({ label, percentage, setPercentage, enabled }) => {

  const handleIncrement = (e) => {
    e.preventDefault();
    if (enabled) {
      setPercentage(percentage + 1);
    } else {
      setPercentage(0);
    }
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    if (enabled && percentage > 0) {
      setPercentage(percentage - 1);
    } else {
      setPercentage(0);
    }
  };

  return (
    <div className="flex items-center gap-5">
      <div
        className={`flex items-center rounded-md w-36  border border-l-0 ${
          enabled ? "border-primary" : "border-gray-300"
        }`}
      >
        <span
          className={`text-lg p-1 w-8 text-center rounded-l-md ${
            enabled ? "bg-primary text-white" : "bg-textprimary text-white"
          }`}
        >
          %
        </span>
        <input
          type="number"
          className="w-12 text-center focus:outline-none"
          value={percentage}
          onChange={(e) => setPercentage(Number(e.target.value))}
          readOnly={!enabled}
        />
        {/* <div className="flex flex-col">
          <button onClick={handleIncrement} className="text-xs focus:outline-none">
            ▲
          </button>
          <button onClick={handleDecrement} className="text-xs focus:outline-none">
            ▼
          </button>
        </div> */}
      </div>
      <div
        className={`flex items-center rounded-md  w-36    border-l-0  border ${
          enabled ? "border-primary" : "border-gray-300"
        }`}
      >
        <span
          className={`text-lg p-1 w-8 text-center rounded-l-md ${
            enabled ? "bg-primary text-white" : "bg-textprimary text-white"
          }`}
        >
          =
        </span>
        <input
          type="text"
          className="w-12 text-center focus:outline-none"
          value={percentage}
          readOnly
        />
      </div>
    </div>
  );
};

const Payroll = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [socialInsuranceEnabled, setSocialInsuranceEnabled] = useState(true);
  const [housingEnabled, setHousingEnabled] = useState(true);
  const [transportationEnabled, setTransportationEnabled] = useState(true);
  const [phoneBillEnabled, setPhoneBillEnabled] = useState(true);

  const [housingPercentage, setHousingPercentage] = useState(0);
  const [socialSecurityPercentage, setSocialSecurityPercentage] = useState(0);
  const [transportationPercentage, setTransportationPercentage] = useState(0);
  const [phoneBillPercentage, setPhoneBillPercentage] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  
  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const handleToggle = (event, setEnabled) => {
    event.preventDefault();
    setEnabled((prevState) => !prevState);
  };

  return (
    <div className="bg-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold mb-4">Payroll Information</h1>
        {!isEditMode ? (
          <button
            onClick={() => setIsEditMode(!isEditMode)}
            className="py-1 px-2 bg-primary text-white rounded-lg"
          >
            Edit Payroll
          </button>
        ) : (
          <button onClick={openModal} className="py-1 px-2 bg-primary text-white rounded-lg">
            + Add New Allowence
          </button>
        )}
      </div>
      <form>
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-4 px-2">
            <FormField
              label="Salary Type"
              type="select"
              placeholder="Salary Type"
              options={["Annually", "Monthly"]}
              disabled={!isEditMode}
            />
            <FormField
              label="Basic Salary"
              type="number"
              placeholder="Basic Salary"
              disabled={!isEditMode}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 items-center">
            <div className="flex items-center gap-2">
              <div className="mt-10">
                {isEditMode && (
                  <button
                    className={`w-10 h-6 rounded-full focus:outline-none ${
                      socialInsuranceEnabled ? "bg-primary" : "bg-gray-300"
                    }`}
                    onClick={(event) =>
                      handleToggle(event, setSocialInsuranceEnabled)
                    }
                  >
                    <span
                      className={`block w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-200 ease-in-out ${
                        socialInsuranceEnabled
                          ? "translate-x-4"
                          : "translate-x-0"
                      }`}
                    />
                  </button>
                )}
              </div>
              <FormField
                label="Social Insurance Type"
                type="type"
                options={["GOSI For Saudi", "Non-Saudi"]}
                placeholder="Social Security"
                disabled={!socialInsuranceEnabled}
              />
            </div>

            <div className="mt-9">
              <PercentageInput
                label="Social Insurance"
                percentage={socialSecurityPercentage}
                setPercentage={setSocialSecurityPercentage}
                enabled={socialInsuranceEnabled}
              />
            </div>
          </div>

          {/* <div className='grid grid-cols-2 gap-4'>
            <div className="flex items-center gap-2">
              {isEditMode && (
                <button
                  className={`w-10 h-6 rounded-full focus:outline-none ${housingEnabled ? 'bg-blue-600' : 'bg-gray-300'}`}
                  onClick={(event) => handleToggle(event, setHousingEnabled)}
                >
                  <span
                    className={`block w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-200 ease-in-out ${
                      housingEnabled ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </button>
              )}
              <PercentageInput
                label="Housing"
                percentage={housingPercentage}
                setPercentage={setHousingPercentage}
                enabled={housingEnabled}
              />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <div className="flex items-center gap-2">
              {isEditMode && (
                <button
                  className={`w-10 h-6 rounded-full focus:outline-none ${transportationEnabled ? 'bg-blue-600' : 'bg-gray-300'}`}
                  onClick={(event) => handleToggle(event, setTransportationEnabled)}
                >
                  <span
                    className={`block w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-200 ease-in-out ${
                      transportationEnabled ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </button>
              )}
              <PercentageInput
                label="Transportation"
                percentage={transportationPercentage}
                setPercentage={setTransportationPercentage}
                enabled={transportationEnabled}
              />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <div className="flex items-center gap-2">
              {isEditMode && (
                <button
                  className={`w-10 h-6 rounded-full focus:outline-none ${phoneBillEnabled ? 'bg-blue-600' : 'bg-gray-300'}`}
                  onClick={(event) => handleToggle(event, setPhoneBillEnabled)}
                >
                  <span
                    className={`block w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-200 ease-in-out ${
                      phoneBillEnabled ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </button>
              )}
              <PercentageInput
                label="Phone Bill"
                percentage={phoneBillPercentage}
                setPercentage={setPhoneBillPercentage}
                enabled={phoneBillEnabled}
              />
            </div>
          </div> */}

          {/* <div>
            <label className="block text-gray-700">Gross Salary</label>
            <input
              type="number"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              disabled={!isEditMode}
            />
          </div> */}

          {isEditMode && (
            <div className="flex justify-center items-center gap-2 my-4">
              <button
                onClick={() => setIsEditMode(!isEditMode)}
                className="py-1 px-4 border border-primary text-primary rounded-lg"
              >
                Cancel
              </button>
              <button className="py-1 px-4 border border-primary bg-primary text-white rounded-lg">
                Save And Next
              </button>
            </div>
          )}
        </div>
      </form>
      <AddNewAllowenceModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
};

export default Payroll;
