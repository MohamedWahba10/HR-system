import React from "react";
import Nobranch from "../../assets/svgs/nobranch.svg";

export default function Documents() {
  return (
    <div className="my-4">
      <div className="bg-white p-4 shadow-round">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold mb-4">Documents</h1>
          <button className="py-1 px-2 bg-primary text-white rounded-lg">
            + Upload Documents
          </button>
        </div>

        <div>
          <img
            src={Nobranch}
            alt="No branch"
            className="w-1/3 mx-auto object-cover"
          />

          <p className="text-lg text-center font-semibold py-4">
            No Departments added yet
          </p>
        </div>
      </div>
    </div>
  );
}
