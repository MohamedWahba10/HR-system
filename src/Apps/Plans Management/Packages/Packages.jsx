import React from "react";
import Layout from "../../../Layouts/Layout";
import { Link, Route, Routes } from "react-router-dom";
import AddPackage from "./Components/AddPackage";
import { LuUsers2 } from "react-icons/lu";
import { SlClock } from "react-icons/sl";
import { MdOutlinePriceChange } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import ViewPackage from "./Components/ViewPackage";
import { GoPlus } from "react-icons/go";

const Package = () => {
  return (
    <Layout>
      <div className="w-full bg-white rounded-2xl py-2 px-4 h-screen">
        <div className="flex justify-between items-center my-2">
          <h1 className="text-xl font-semibold">Packages</h1>
          <Link
            to="create"
            className="text-sm bg-primary text-white rounded-md px-4 py-[9px] flex items-center gap-1"
          >
            <GoPlus size={22} /> Add Package
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 px-6 mt-5">
  <div className="bg-[#FAF7F7] rounded-xl shadow-round text-center w-[80%]">
    <h2 className="text-lg font-semibold py-2">Pro Package</h2>
    <div className="w-full h-[2px] bg-[#D9D9D9]"></div> {/* Dark gray line below the heading */}
    <div className="space-y-2 text-left py-2 px-4 mt-2">
      <p className="flex items-center">
        <span className="mr-2 text-primary"><LuUsers2 /></span>
        <span className="text-sm">Users number : <span className="font-semibold">10</span></span>
      </p>
      <p className="flex items-center">
        <span className="mr-2 text-primary"><SlClock/></span>
        <span className="text-sm">Time: <span className="font-semibold">10 Days</span></span>
      </p>
      <p className="flex items-center">
        <span className="mr-2 text-primary"><MdOutlinePriceChange /></span>
        <span className="text-sm">Price: <span className="font-semibold">200 SAR</span></span>
      </p>
      <p className="flex items-center">
        <span className="mr-2 text-primary"><AiOutlineDollar />
        </span>
        <span className="text-sm">Tax: <span className="font-semibold">20 SAR</span></span>
      </p>
    </div>
   <div className="my-6 ">
   <Link to="view" className="my-2 px-4 py-1.5 text-base bg-primary text-white rounded-lg">
      View Package
    </Link>
   </div>
  </div>
</div>

      </div>
    </Layout>
  );
};

export default function Packages() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Package />} />
        <Route path="create" element={<AddPackage />} />
        <Route path="view" element={<ViewPackage />} />
      </Routes>
    </div>
  );
}
