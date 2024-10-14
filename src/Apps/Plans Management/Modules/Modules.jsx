import React from 'react'
import Layout from '../../../Layouts/Layout'
import { Link, Route, Routes } from 'react-router-dom'
import AddModule from './Components/AddModule'
import ViewModule from './Components/ViewModule'
import { GoPlus } from 'react-icons/go'

const Module = () => {
  return (
    <Layout>
      <div className="w-full bg-white rounded-2xl py-2 px-4 h-screen">
        <div className="flex justify-between items-center my-2">
          <h1 className="text-xl font-semibold">Modules</h1>
          <Link
            to="create"
            className="text-sm bg-primary text-white rounded-md px-4 py-[9px] flex items-center gap-1"
          >
            <GoPlus size={22} /> Add Module
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 px-6 mt-5">
            <div className="bg-[#FAF7F7] rounded-xl shadow text-center px-2 py-4 hover:border-2 hover:border-primary">
              <h2 className="text-lg font-semibold ">Attendence and Time Tracking</h2>
              <button className='mt-5 w-[80%] py-1 px-2 bg-primary rounded-lg text-white'>
                <Link to="view">View Module</Link>
                </button>
            </div>
        </div>

      </div>
    </Layout>
  )
}

export default function Modules() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Module />} />
        <Route path="create" element={<AddModule />} />
        <Route path="view" element={<ViewModule />} />
      </Routes>
    </div>
  );
}