import React, { useState } from 'react';
import TerminationPolicy from './TerminationPolicy'; // Step 1 component
import Asset from './OffboardingAsset'; // Step 2 component
import TerminationSalary from './TerminationSalary'; // Step 3 component
import { IoArrowBackSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

export default function OffBoarding() {
  // Step state
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('../Onboarding/OnBoarding.jsx'); // Navigate to EmployeesStructure
  };

  // Function to handle next step
  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  // Function to handle previous step (if needed)
  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  // Cancel button action
  const handleCancel = () => {
    // Logic for cancel action, e.g., navigating back or resetting state
    navigate('../Onboarding/OnBoarding.jsx'); // Example action: navigate back
  };

  // Step names for navigation
  const steps = [
    {
      step: 1,
      label: 'Termination Policy',
      description: 'Choose Policy and date',
      component: <TerminationPolicy onNextStep={handleNextStep} />,
    },
    {
      step: 2,
      label: 'Asset',
      description: 'Asset in possession',
      component: <Asset onNextStep={handleNextStep} />,
    },
    {
      step: 3,
      label: 'Termination Salary',
      description: 'Termination Salary calculation',
      component: <TerminationSalary onNextStep={handleNextStep} />,
    },
  ];

  return (
    <div className="flex">
      {/* Left Section: Steps */}
      <div className="w-1/4 bg-white p-6">
        <div className="flex items-center mb-6">
          <IoArrowBackSharp
            className="text-xl mr-2 cursor-pointer"
            onClick={handleBackClick}
          />
          <h2 className="text-lg font-semibold">Employee Termination</h2>
        </div>

        {/* Step Navigation */}
        <div className="space-y-10 shadow-md">
          {steps.map((stepItem) => (
            <div
              key={stepItem.step}
              className={`flex items-start p-4 rounded-lg cursor-default text-lg bg-white ${
                currentStep === stepItem.step
                  ? 'border-primary text-primary'
                  : 'border-gray-300 text-gray-500'
              }`}
            >
              {/* Step Number - Square with rounded edges */}
              <div
                className={`w-9 h-9 flex items-center justify-center font-bold rounded-md mr-4 ${
                  currentStep === stepItem.step
                    ? 'bg-primary-gradient text-white'
                    : 'bg-[#FAF7F7] text-primary'
                }`}
             
              >
                {stepItem.step}
              </div>



              {/* Step Labels */}
              <div>
                <h4 className="font-semibold text-primary">{stepItem.label}</h4>
                <p className="text-xs whitespace-nowrap text-[#6D6D6D]">{stepItem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section: Content */}
      <div className="w-3/4 p-6  shadow-md">
        {/* Render current step's component */}
        {steps.find((step) => step.step === currentStep)?.component}

        {/* Centered Navigation Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
<button
  className="bg-primary-gradient text-white w-40 px-6 py-2 rounded"
  onClick={handleNextStep} // Trigger next step on Save
>
  Next
</button>
<button className="text-primary w-40 px-6 py-2 rounded border-[1px] border-primary">
  Cancel
</button>
</div>

      </div>
    </div>
  );
}
