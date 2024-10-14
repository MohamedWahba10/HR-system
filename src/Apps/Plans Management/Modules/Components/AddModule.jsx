import React from "react";
import Layout from "../../../../Layouts/Layout";
import FormField from "../../../../Common/FormField";

export default function AddModule() {
  return (
    <Layout>
      <div className="w-full bg-white rounded-2xl py-4 px-6">
        <h1 className="text-lg font-semibold mb-4">Add New Module</h1>
        <form className="px-6">
          <div className="grid grid-cols-2 gap-4">
            <FormField
              type="text"
              name="moduleName"
              label="Module Name"
              placeholder="Enter Module Name"
            />

            <FormField
              type="text"
              name="moduleNameArabic"
              label="Module Name Arabic"
              placeholder="أدخل اسم الوحدة باللغة العربية"
            />

            <FormField
              type="text"
              name="featureName"
              label="Feature Name"
              placeholder="Enter Feature Name"
            />

            <FormField
              type="text"
              name="featureNameArabic"
              label="Feature Name Arabic"
              placeholder="أدخل اسم الميزة باللغة العربية"
            />
          </div>

          <div className="flex justify-center items-center gap-4 my-4">
           
            <button
              className="w-[10%] py-[9px] px-4 bg-primary text-white rounded-md mt-5"
              type="submit"
            >
              Save
            </button>
            <button className="w-[10%] py-2 px-4 border border-primary text-primary rounded-md mt-5">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
