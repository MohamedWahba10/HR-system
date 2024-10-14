import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import FormField from "../../../Common/FormField";
import ImageUpload from "../../../Common/ImageUpload";
import DocumentUpload from "../../../Common/DocumentUpload"; // Adjust the path accordingly

// Regex for Arabic characters
const arabicRegex = /^[\u0600-\u06FF\s]+$/;

const validationSchema = Yup.object().shape({
  company_name: Yup.string().required("Required"),
  company_name_arabic: Yup.string()
    .matches(arabicRegex, "Only Arabic characters are allowed")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  // Add other validations here as needed
});

export default function CompanyInfo() {
  const formik = useFormik({
    initialValues: {
      company_name: "",
      company_name_arabic: "",
      email: "",
      password: "",
      gender: "",
      description: "",
      document: null,
      company_logo: "",
      company_register_file: "",
      sector: "",
      company_owner: "",
      company_owner_arabic: "",
      company_register_id: "",
      start_date: "",
      end_date: "",
      company_id: "",
      company_website: "",
      company_email: "",
      company_phone: "",
      responsible_employee_name: "",
      responsible_employee_name_arabic: "",
      employee_position: "",
      employee_position_arabic: "",
      employee_email: "",
      employee_phone: "",
      packages: "",
      company_address: "",
      reminder: false,
    },
    validationSchema,
    onSubmit: (values) => {
      const formData = new FormData();
      for (const key in values) {
        if (Object.hasOwnProperty.call(values, key)) {
          formData.append(key, values[key]);
        }
      }
      console.log("Form submitted:", values);

      // axios.post('/your-endpoint-url', formData)
      //   .then(response => {
      //     console.log("Response:", response);
      //     alert("Form submitted successfully!");
      //   })
      //   .catch(error => {
      //     console.error("Error submitting form:", error);
      //     alert("There was an error submitting the form.");
      //   });
    },
  });

  const packagesOptions = [
    { value: "basic", label: "Basic" },
    { value: "standard", label: "Standard" },
    { value: "premium", label: "Premium" },
  ];

  const handleImageSelect = (fileName) => {
    formik.setFieldValue("company_logo", fileName);
  };

  const handleDocumentSelect = (fileName) => {
    formik.setFieldValue("company_register_file", fileName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formik.values);
   // formik.handleSubmit();
  };

  return (
    <div className="bg-white shadow-round rounded-xl px-8 pt-6 pb-8 my-4">
      <h2 className="text-xl font-semibold mb-4 text-black">Company Info</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField
            type="text"
            label="Company Name"
            name="company_name"
            value={formik.values.company_name}
            onChange={formik.handleChange}
            error={formik.errors.company_name}
            language="en"
            placeholder="Enter Company Name"
            required
          />
          <FormField
            type="text"
            label="Company Name in Arabic"
            name="company_name_arabic"
            value={formik.values.company_name_arabic}
            onChange={formik.handleChange}
            error={formik.errors.company_name_arabic}
            language="ar"
            placeholder="أدخل اسم الشركة"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <ImageUpload label="Company logo" onImageSelect={handleImageSelect} />
          <FormField
            type="text"
            label="Sector"
            name="sector"
            value={formik.values.sector}
            onChange={formik.handleChange}
            error={formik.errors.sector}
            language="en"
            placeholder="Enter Sector"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField
            type="text"
            label="Company Owner"
            name="company_owner"
            value={formik.values.company_owner}
            onChange={formik.handleChange}
            error={formik.errors.company_owner}
            language="en"
            placeholder="Enter Company Owner"
            required
          />
          <FormField
            type="text"
            label="Company Owner Arabic"
            name="company_owner_arabic"
            value={formik.values.company_owner_arabic}
            onChange={formik.handleChange}
            error={formik.errors.company_owner_arabic}
            language="ar"
            placeholder="صاحب شركة"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <FormField
            type="text"
            label="Company Register ID"
            name="company_register_id"
            value={formik.values.company_register_id}
            onChange={formik.handleChange}
            error={formik.errors.company_register_id}
            language="en"
            placeholder="Enter Company Register ID"
            required
          />
          <DocumentUpload label="Upload Company Register File" onDocumentSelect={handleDocumentSelect} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
  <div className="w-full">
    <FormField
      type="date"
      label="Start Date"
      name="start_date"
      value={formik.values.start_date}
      onChange={formik.handleChange}
      language="en"
      placeholder="Select date"
    />
  </div>
  <div className="w-full"> {/* Ensure full width for this column */}
    <FormField
      type="date"
      label="End Date"
      name="end_date"
      value={formik.values.end_date}
      onChange={formik.handleChange}
      language="en"
      placeholder="Select date"
    />
  </div>
</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField
            type="text"
            label="Company ID"
            name="company_id"
            value={formik.values.company_id}
            onChange={formik.handleChange}
            error={formik.errors.company_id}
            language="en"
            placeholder="Enter Company ID"
            required
          />
          <FormField
            type="text"
            label="Company Website"
            name="company_website"
            value={formik.values.company_website}
            onChange={formik.handleChange}
            error={formik.errors.company_website}
            language="en"
            placeholder="Enter Company Website"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField
            type="email"
            label="Company Email"
            name="company_email"
            value={formik.values.company_email}
            onChange={formik.handleChange}
            error={formik.errors.company_email}
            language="en"
            placeholder="Enter Company Email"
            required
          />
          <FormField
            type="tel"
            label="Company Phone"
            name="company_phone"
            value={formik.values.company_phone}
            onChange={formik.handleChange}
            error={formik.errors.company_phone}
            language="en"
            placeholder="Enter Company Phone"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField
            type="text"
            label="Responsible Employee Name"
            name="responsible_employee_name"
            value={formik.values.responsible_employee_name}
            onChange={formik.handleChange}
            error={formik.errors.responsible_employee_name}
            language="en"
            placeholder="Enter Responsible Employee Name"
            required
          />
          <FormField
            type="text"
            label="Responsible Employee Name Arabic"
            name="responsible_employee_name_arabic"
            value={formik.values.responsible_employee_name_arabic}
            onChange={formik.handleChange}
            error={formik.errors.responsible_employee_name_arabic}
            language="ar"
            placeholder="أدخل اسم الموظف المسؤول"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField
            type="text"
            label="Employee Position"
            name="employee_position"
            value={formik.values.employee_position}
            onChange={formik.handleChange}
            error={formik.errors.employee_position}
            language="en"
            placeholder="Enter Employee Position"
            required
          />
          <FormField
            type="text"
            label="Employee Position Arabic"
            name="employee_position_arabic"
            value={formik.values.employee_position_arabic}
            onChange={formik.handleChange}
            error={formik.errors.employee_position_arabic}
            language="ar"
            placeholder="أدخل مسمى الوظيفة"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField
            type="email"
            label="Employee Email"
            name="employee_email"
            value={formik.values.employee_email}
            onChange={formik.handleChange}
            error={formik.errors.employee_email}
            language="en"
            placeholder="Enter Employee Email"
            required
          />
          <FormField
            type="tel"
            label="Employee Phone"
            name="employee_phone"
            value={formik.values.employee_phone}
            onChange={formik.handleChange}
            error={formik.errors.employee_phone}
            language="en"
            placeholder="Enter Employee Phone"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField
            type="select"
            label="Packages"
            name="packages"
            value={formik.values.packages}
            onChange={formik.handleChange}
            error={formik.errors.packages}
            language="en"
            placeholder="Select Packages"
            required
            options={packagesOptions}
          />
          <FormField
            type="text"
            label="Company Address"
            name="company_address"
            value={formik.values.company_address}
            onChange={formik.handleChange}
            error={formik.errors.company_address}
            language="en"
            placeholder="Enter Company Address"
            required
          />
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            className="w-5 h-5 rounded-full accent-primary hover:accent-primaryhover focus:ring-primaryhover form-checkbox"
            name="reminder"
            id="reminder"
            checked={formik.values.reminder}
            onChange={formik.handleChange}
          />
          <label htmlFor="reminder">
            Send a reminder to first responsible employee 20 days before the end of the contract.
          </label>
        </div>
        <div className="flex gap-4 justify-end">
        <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded-md"
          >
            Save And Next
          </button>
          
          <button
            type="button"
            className="bg-white text-primary border border-primary px-4 py-2 rounded-md"
            onClick={() => formik.resetForm()}
          >
            Cancel
          </button>
          
        </div>
      </form>
    </div>
  );
}
