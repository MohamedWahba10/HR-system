// eslint-disable-next-line no-unused-vars
import React from 'react';
import ClientSidebar from '../Common/ClientSidebar';
import ClientNavbar from '../Common/ClientNavbar';


const CLientLayout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-y-auto">
      <ClientSidebar />
      <div className="flex-1 flex flex-col overflow-y-auto bg-backgroundDefault shadow-round">
        <ClientNavbar />
        <main className="flex-1  py-6 px-2 bg-backgroundDefault ml-6 mr-10"> {/* Adjust pt-16 based on your Navbar height */}
          {children}
        </main>
      </div>
    </div>
  );
};


export default CLientLayout;

