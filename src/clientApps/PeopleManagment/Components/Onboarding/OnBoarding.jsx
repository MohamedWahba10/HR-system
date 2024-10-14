import React, { useState } from 'react';
import Asset from './Asset';
import Insurances from './Insurances';
import Information from './Information';
import BankInformation from './BankInformation';
import Payroll from './Payroll';
import Documents from './Documents';
import check from '../../../../assets/svgs/check.svg';
import { IoArrowBackSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

export default function OnBoarding() {
  // Step state
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('../employeeStructure'); // Navigate to EmployeesStructure
  };

  // Function to handle next step
  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  // Step names for navigation
  const steps = [
    { step: 1, label: 'Information', component: <Information onNextStep={handleNextStep} /> },
    { step: 2, label: 'Bank Information', component: <BankInformation onNextStep={handleNextStep} /> },
    { step: 3, label: 'Insurances', component: <Insurances onNextStep={handleNextStep} /> },
    { step: 4, label: 'Asset', component: <Asset onNextStep={handleNextStep} /> },
    { step: 5, label: 'Payroll', component: <Payroll onNextStep={handleNextStep} /> },
    { step: 6, label: 'Documents', component: <Documents onNextStep={handleNextStep} /> },
  ];

  return (
    <div className="flex">
      {/* Left Navigation */}
      <div className="w-1/4 p-6 sticky top-0 shadow-md h-[406px] ml-4 rounded-lg border">
        {/* Header with Icon and Text */}
        <div className="flex items-center mb-6">
          <IoArrowBackSharp
            className="text-xl mr-2 cursor-pointer"
            onClick={handleBackClick} // Handle click to navigate
          />
          <h2 className="text-lg font-bold">Adding New Employee</h2>
        </div>

        {/* Steps */}
        {steps.map((stepItem, index) => (
          <div key={stepItem.step} className="flex items-center mb-8 relative">
            {/* Step Circle */}
            <span
              className={`border-[4px] ${
                currentStep > stepItem.step
                  ? 'bg-primary border-primary' // Apply gradient when check is added
                  : currentStep === stepItem.step
                  ? 'border-primary text-primary bg-white'
                  : 'border-gray-300 text-gray-500 bg-white'
              } w-5 h-5 rounded-full flex items-center justify-center z-10 relative`}
            >
              {/* Display check.svg for completed steps */}
              {currentStep > stepItem.step && (
                <img src={check} alt="Completed" className="w-3 h-3" />
              )}
            </span>

            {/* Vertical line (broken) */}
            {index < steps.length - 1 && (
              <div
                className="absolute top-7 left-[8.25px] w-[3px] h-10 bg-gray-200" style={{ top: '26px', height: '27px' }}
              ></div>
            )}

            {/* Step Label */}
            <span
              className={`ml-4 ${
                currentStep >= stepItem.step ? 'text-primary font-medium' : 'text-gray-500'
              }`}
            >
              <span className={`mr-2 ${currentStep >= stepItem.step ? 'text-primary' : ''}`}>
                0{stepItem.step}
              </span>
              {stepItem.label}
            </span>
          </div>
        ))}
      </div>

      {/* Right Form Section */}
      {steps.find((step) => step.step === currentStep)?.component}
    </div>
  );
}
