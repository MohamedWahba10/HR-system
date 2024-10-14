import React, { useState } from 'react';
import FormField from '../../../Common/FormField';
import { useLocation } from 'react-router-dom';

export default function PotentialClient() {
  // Get the passed data from the previous page
  const location = useLocation();
  const passedData = location.state?.data || {};

  // Initialize state with the passed data
  const [formData, setFormData] = useState(passedData);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleCancelClick = () => {
    setIsEditMode(false);
    setFormData(passedData); // Reset the form to initial data
  };

  const handleSaveClick = () => {
    // Implement save functionality here (e.g., send updated data to an API)
    setIsEditMode(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className='w-full bg-white shadow-round rounded-2xl'>
        <div className='flex justify-between items-center py-2 px-4'>
          <h1 className='text-base font-semibold text-start py-4'>Company Information</h1>
          {isEditMode ? (
           ""
          ) : (
            <button onClick={handleEditClick} className='w-[15%] py-1 px-2 bg-primary text-white rounded-md'>
              Edit Information
            </button>
          )}
        </div>
        <form className='flex flex-col gap-4 justify-center py-2 px-10'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Company Name"
              type="text"
              name="companyName"
              value={formData.companyName || ""}
              placeholder="Company Name"
              disabled={!isEditMode}
              onChange={handleChange}
            />
            <FormField
              label="Company Name Arabic"
              type="text"
              name="companyNameArabic"
              value={formData.companyNameArabic || ""}
              placeholder="اسم الشركة"
              disabled={!isEditMode}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Company Owner"
              type="text"
              name="companyOwner"
              value={formData.companyOwner || ""}
              placeholder="Company Owner"
              disabled={!isEditMode}
              onChange={handleChange}
            />
            <FormField
              label="Company Owner Arabic"
              type="text"
              name="companyOwnerArabic"
              value={formData.companyOwnerArabic || ""}
              placeholder="اسم صاحب الشركة"
              disabled={!isEditMode}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Holding Company"
              type="text"
              name="holdingCompany"
              value={formData.holdingCompany || ""}
              placeholder="Holding Company"
              disabled={!isEditMode}
              onChange={handleChange}
            />
            <FormField
              label="Holding Company Arabic"
              type="text"
              name="holdingCompanyArabic"
              value={formData.holdingCompanyArabic || ""}
              placeholder="اسم الشركة التابعة"
              disabled={!isEditMode}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Holding Company Owner"
              type="text"
              name="holdingCompanyOwner"
              value={formData.holdingCompany || ""}
              placeholder="Holding Company Owner"
              disabled={!isEditMode}
              onChange={handleChange}
            />
            <FormField
              label="Holding Company Owner Arabic"
              type="text"
              name="holdingCompanyOwnerArabic"
              value={formData.holdingCompanyArabic || ""}
              placeholder="اسم صاحب الشركة التابعة"
              disabled={!isEditMode}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Sector"
              type="text"
              name="sector"
              value={formData.sector || ""}
              placeholder="Sector"
              disabled={!isEditMode}
              onChange={handleChange}
            />
            <FormField
              label="Branch"
              type="text"
              name="branch"
              value={formData.branch || ""}
              placeholder="Branch"
              disabled={!isEditMode}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Employee Name"
              type="text"
              name="employeeName"
              value={formData.employeeName || ""}
              placeholder="Employee Name"
              disabled={!isEditMode}
              onChange={handleChange}
            />
            <FormField
              label="Employee Name Arabic"
              type="text"
              name="employeeNameArabic"
              value={formData.employeeNameArabic || ""}
              placeholder="اسم الموظف"
              disabled={!isEditMode}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Email"
              type="email"
              name="email"
              value={formData.email || ""}
              placeholder="Email"
              disabled={!isEditMode}
              onChange={handleChange}
            />
            <FormField
              label="Phone"
              type="text"
              name="phone"
              value={formData.phone || ""}
              placeholder="Phone"
              disabled={!isEditMode}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Our Employee Name"
              type="text"
              name="ourEmployee"
              value={formData.ourEmployee || ""}
              placeholder="Our Employee Name"
              disabled={!isEditMode}
              onChange={handleChange}
            />
            <FormField
              label="Our Employee Name Arabic"
              type="text"
              name="ourEmployeeArabic"
              value={formData.ourEmployeeArabic || ""}
              placeholder="اسم الموظف الخاص بنا"
              disabled={!isEditMode}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Status"
              type="text"
              name="status"
              value={formData.state || ""}
              placeholder="Status"
              disabled={!isEditMode}
              onChange={handleChange}
            />
            <FormField
              label="Next Step"
              type="text"
              name="nextStep"
              value={formData.nextStep || ""}
              placeholder="Next Step"
              disabled={!isEditMode}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="First Interaction Date"
              type="date"
              name="firstInteractionDate"
              value={formData.firstInteraction || ""}
              placeholder="First Interaction Date"
              disabled={!isEditMode}
              onChange={handleChange}
            />
            <FormField
              label="Last Interaction Date"
              type="date"
              name="lastInteractionDate"
              value={formData.lastInteraction || ""}
              placeholder="Last Interaction Date"
              disabled={!isEditMode}
              onChange={handleChange}
            />
          </div>

          <div className='flex justify-center gap-2 py-4'>
            {isEditMode && (
              <>
             
                <button
                  type="button"
                  className='rounded-md w-[10%] px-4 py-1 bg-primary text-white'
                  onClick={handleSaveClick}
                >
                  Save
                </button>
                <button
                  type="button"
                  className='rounded-md w-[10%] px-4 py-1 border border-primary text-primary'
                  onClick={handleCancelClick}
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
