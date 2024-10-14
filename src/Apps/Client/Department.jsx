import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import CreateDepartment from "./Components/Department/CreateDepartment";
import Nobranch from "../../assets/svgs/nobranch.svg";

const Departments = () => (
 <div className="my-4">
   <div className="bg-white p-4 shadow-round rounded-2xl">
    <div className="flex justify-between items-center">
      <h1 className="text-lg font-semibold mb-4">Departments</h1>
      <Link to="create">
        <button className="py-1 px-2 bg-primary text-white rounded-lg">
          + Add New Department
        </button>
      </Link>{" "}
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

export default function Department() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Departments />} />
        <Route path="create" element={<CreateDepartment />} />
      </Routes>
    </div>
  );
}
