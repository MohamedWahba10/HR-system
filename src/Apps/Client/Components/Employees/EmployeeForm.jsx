import React from "react";
import FormField from "../../../../Common/FormField";
import OrganizationInfo from "./OrganizationInfo";
import ContactInfo from "./ContactInfo";
import EmergencyContact from "./EmergencyContact";
import AddressInfo from "./AddressInfo";
import EducationInfo from "./EducationInfo";
import DependeceInfo from "./DependeceInfo";
import LoginInfo from "./LoginInfo";
import { GoPlus } from "react-icons/go";

export default function EmployeeForm() {
  return (
    <div className="bg-white shadow-round rounded-md p-3">
      <div className="flex justify-between items-center my-4">
        <h1 className="font-semibold text-xl">Personal Info</h1>

        <button className="bg-primary text-white py-2 px-4 rounded-md flex items-center gap-2">
          <GoPlus size={22} />
          Update Data Automatically
        </button>
      </div>
      <form className="px-2 flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-4">
          <FormField label="First Name" type="text" placeholder="First Name" />
          <FormField
            label="First Name Arabic"
            type="text"
            language="ar"
            placeholder="الاسم الاول"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            label="Second Name"
            type="text"
            placeholder="Second Name"
          />
          <FormField
            label="Second Name Arabic"
            type="text"
            language="ar"
            placeholder="اسم الثاني"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            label="Third Name"
            type="text"
            placeholder="Third Name"
          />
          <FormField
            label="Third Name Arabic"
            type="text"
            language="ar"
            placeholder="اسم الثالث"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField label="Last Name" type="text" placeholder="Last Name" />
          <FormField
            label="Last Name Arabic"
            type="text"
            language="ar"
            placeholder="اسم العائلة"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField label="Birth Date" type="date" placeholder="Birth Date" />
          <FormField label="Age" type="number" placeholder="Age" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            label="Gender"
            type="select"
            placeholder="Gender"
            options={["Male", "Female"]}
          />
          <FormField
            label="Religion"
            type="select"
            placeholder="Religion"
            options={["Muslim", "Non-Muslim"]}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            label="Marital Status"
            type="select"
            placeholder="Marital Status"
            options={["Married", "Single"]}
          />
          <FormField
            label="Number of Children"
            type="number"
            placeholder="Number of Children"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            label="Number of Family Members"
            type="number"
            placeholder="Number of Family Members"
          />
          <FormField
            label="Nationality"
            type="text"
            placeholder="Nationality"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            label="Passport Number"
            type="text"
            placeholder="Passport Number"
          />
          <FormField
            label="ID/Iqama Number"
            type="text"
            placeholder="ID/Iqama Number"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            label="Passport Expiry Date"
            type="date"
            placeholder="Passport Expiry Date"
          />
          <FormField
            label="ID/Iqama Expiry Date"
            type="date"
            placeholder="ID/Iqama Expiry Date"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField label="City" type="text" placeholder="City" />
          <FormField label="Country" type="text" placeholder="Country" />
        </div>

        <OrganizationInfo />

        <ContactInfo />

       <EmergencyContact />

      <AddressInfo />

      <EducationInfo />

       <DependeceInfo />

    <LoginInfo />

        <div className='flex justify-center items-center gap-2 py-6'>
          <button className='py-[7px] px-4  bg-primary text-white rounded-lg'>Save And Next</button>
          <button className='py-[6px] px-4 border border-primary text-primary rounded-lg'>Cancel</button>

        </div>

      </form>
    </div>
  );
}

