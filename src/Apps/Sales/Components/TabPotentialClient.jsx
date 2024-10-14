import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PotentialClient from "./PotentialClient";
import SalesHistory from "./SalesHistory";
import Layout from "../../../Layouts/Layout";

export default function TabPotentialClient() {
  const [activeTab, setActiveTab] = useState("PotentialClient");

  return (
    <Layout>
      <div className="text-start">
        <div className="bg-white p-4 rounded-2xl shadow-md w-full">
        <h1 className="text-lg font-semibold px-2 py-2">Potential Client</h1>
        <div className="flex justify-start my-2 px-2">
          <button
            className={`py-2 text-lg focus:outline-none ${
              activeTab === "PotentialClient"
                ? "font-medium text-primary border-b-4 border-primary"
                : "text-primary border-b-4"
            }`}
            onClick={() => setActiveTab("PotentialClient")}
          >
            Company Information
          </button>
          <button
            className={`py-2 px-4 text-lg focus:outline-none ${
              activeTab === "SalesHistory"
                ? "font-medium text-primary border-b-4 border-primary"
                : "text-primary border-b-4"
            }`}
            onClick={() => setActiveTab("SalesHistory")}
          >
            History
          </button>
        </div>
        </div>
        <div className="mt-4 relative">
          <AnimatePresence>
            {activeTab === "PotentialClient" && (
              <motion.div
              key="PotentialClient"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3 }}
              className="absolute w-full"
              >
                <PotentialClient />
              </motion.div>
            )}
            {activeTab === "SalesHistory" && (
              <motion.div
              key="SalesHistory"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3 }}
              className="absolute w-full"
              >
                <SalesHistory />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Layout>
  );
}
