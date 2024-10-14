import React, { useState } from 'react';
import Sidebar from '../Common/Sidebar';
import Navbar from '../Common/Navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-y-auto">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-y-auto bg-backgroundDefault shadow-round">
        <Navbar />
        <main className="flex-1  py-6 px-2 bg-backgroundDefault ml-6 mr-10"> {/* Adjust pt-16 based on your Navbar height */}
          {children}
        </main>
      </div>
    </div>
  );
};


export default Layout;
