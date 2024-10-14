import React from "react";
import DocumentUpload from "../../../../Common/DocumentUpload";
import FormField from "../../../../Common/FormField";
import { useFormik } from "formik";

export default function CreateBranch() {
  const formik = useFormik({
    initialValues: {
      branch_name: "",
      branch_name_arabic: "",
      company_register_id: "",
      company_register_file: null,
    },
  });
  const handleDocumentSelect = (fileName) => {
    formik.setFieldValue("company_register_file ", fileName);

  };
  return (
    <div className="bg-white p-4 shadow-round">
      <h1 className="text-lg font-semibold mb-4">Create Branch</h1>

      <form>
        <div className="mb-4 grid grid-cols-2 gap-4">
          <FormField
            label="Branch Name"
            type="text"
            placeholder="Branch Name"
          />

          <FormField
            label="Branch Name Arabic"
            type="text"
            language="ar"
            placeholder="اسم الفرع"
          />
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <FormField
            label="Company Register ID"
            type="text"
            placeholder="Company Register ID"
          />

          <DocumentUpload
            label="Upload Company Register File"
            onDocumentSelect={handleDocumentSelect}
          />
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <FormField 
          label="Start Date"
           type="date" 
           placeholder="Start Date"
            />

          <FormField
            label="Expiry Date"
            type="date"
            placeholder="Expiry Date"
          />
        </div>
        <div className="mb-4 grid grid-cols-2 gap-4">
          <FormField
            label="Tax File ID"
            type="text"
            placeholder="Tax File ID"
          />

          <DocumentUpload 
          label="Upload Tax File"
          onDocumentSelect={handleDocumentSelect}
          />
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <FormField
            label="Location"
            type="text"
            placeholder="Location"
          />

          <FormField
            label="Location Arabic"
            type="text"
            language="ar"
            placeholder="الموقع"
          />
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <FormField
            label="GeoFence"
            type="text"
            placeholder="GeoFence"
          />

          <FormField
            label="Employee Numbers"
            type="number"
            placeholder="Employee Numbers"
          />
        </div>

        <div className='flex justify-center items-center gap-2 my-4'>
          <button className='py-1.5 px-4 bg-primary text-white rounded-lg'>Save And Next</button>
          <button className='py-1 px-4 border border-primary text-primary rounded-lg'>Cancel</button>

        </div>
      </form>
    </div>
  );
}
