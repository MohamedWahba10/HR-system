import React, { useState } from "react";
import Layout from "../../Layouts/Layout";
import SetupTabs from "./Components/SetupTabs";
import ModuleList from "./Components/ModuleList";
import FormField from "../../Common/FormField";
import AddModuleModal from "./Components/AddModuleModal";
import AddFeatureModal from "./Components/AddFeatureModal";
import DeleteModal from "./Components/DeleteModal";
import DeleteFeatureModal from "./Components/DeleteFeatureModal";
import { FaPlus } from "react-icons/fa";

export default function Modules() {
  const [isModuleModalOpen, setIsModuleModalOpen] = useState(false);
  const [isFeatureModalOpen, setIsFeatureModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleteFeatureModal, setIsDeleteFeatureModal] = useState(false);

  // Handlers for opening modals
  const openModuleModal = () => setIsModuleModalOpen(true);
  const openFeatureModal = () => setIsFeatureModalOpen(true);
  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const openDeleteFeatureModal = () => setIsDeleteFeatureModal(true);

  // Handlers for closing modals
  const closeModuleModal = () => setIsModuleModalOpen(false);
  const closeFeatureModal = () => setIsFeatureModalOpen(false);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);
  const closeDeleteFeatureModal = () => setIsDeleteFeatureModal(false);

  return (
    <Layout>
      <h1 className="text-xl font-semibold text-black ml-2 py-2">Setup</h1>
      <div className="h-screen p-2">
        <SetupTabs />
        <div className="flex bg-white rounded-2xl">
          <ModuleList />
          <div className="w-3/4 p-6">
            <div className="pb-4 flex justify-between items-center mb-4 border-b-2 w-full">
              <h2 className="text-xl font-semibold ">Module Name</h2>
              <button
                onClick={openModuleModal}
                className="bg-primary px-4 py-1 text-white rounded-md flex items-center gap-2"
              >
                <FaPlus size={16} className="text-white" /> Add Module
              </button>
            </div>{" "}
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  label="Module Name"
                  type="text"
                  placeholder="Module Name"
                />

                <FormField
                  label="Module Name Arabic"
                  type="text"
                  language="ar"
                  placeholder="اسم الوحدة"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  label="Feature Name"
                  type="text"
                  placeholder="Feature Name"
                />

                <FormField
                  label="Feature Name Arabic"
                  type="text"
                  language="ar"
                  placeholder="اسم الميزة"
                />
              </div>
              <div className="grid grid-cols-2 gap-2 items-center mt-5">
                <div className="flex justify-start">
                <h1 onClick={openDeleteFeatureModal} className="mt-1 w-[75%] text-center py-1 px-4 border border-black text-black rounded-md">
                  Delete Feature
                </h1>
                </div>
                <div className="flex justify-end">
                  <h1 onClick={openFeatureModal} className="flex gap-2 items-center w-[50%] cursor-pointer py-1 px-4 border border-primary text-primary rounded-md">
                    <FaPlus size={16} className="text-primary" /> Add Feature
                  </h1>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 items-center mt-2">
              <div className="flex justify-start">
              <h1 onClick={openDeleteModal} className="w-[76%] cursor-pointer text-center py-1 px-4 border border-black text-black rounded-md ">
                  Delete Module
                </h1>
              </div>
              </div>
            </form>
          </div>
        </div>
        <AddModuleModal 
        modalIsOpen={isModuleModalOpen} 
        closeModal={closeModuleModal}
        openFeatureModal={openFeatureModal} // Pass the openFeatureModal function
        />
        <AddFeatureModal modalIsOpen={isFeatureModalOpen} closeModal={closeFeatureModal} />

        <DeleteModal modalIsOpen={isDeleteModalOpen} closeModal={closeDeleteModal} />

        <DeleteFeatureModal 
        modalIsOpen={isDeleteFeatureModal} 
        closeModal={closeDeleteFeatureModal}
        openDeleteModal={openDeleteModal} />
      </div>
    </Layout>
  );
}
