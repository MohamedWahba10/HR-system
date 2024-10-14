import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import CreateBranch from "./Components/Branch/CreateBranch";
import Nobranch from "../../assets/svgs/nobranch.svg"

const Branches = () => (
 <div className="my-4">
   <div className="bg-white p-4 shadow-round rounded-2xl">
    <div className="flex justify-between items-center">
      <h1 className="text-lg font-semibold mb-4">Branches</h1>
      <Link to="create">
        <button className="py-1 px-2 bg-primary text-white rounded-lg">
          + Add New Branch
        </button>
      </Link>{" "}
    </div>

    <div>
        <img src={Nobranch} alt="No branch" className="w-1/3 mx-auto object-cover" />

        <p className="text-lg text-center font-semibold py-4">No Branches added yet</p>
    </div>
  </div>
 </div>
);

export default function Branch() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Branches />} />
        <Route path="create" element={<CreateBranch />} />
      </Routes>
    </div>
  );
}
