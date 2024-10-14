// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Modal from './Modal ';

export default function CompanyStructure() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <style>
        {`
          .custom-dashed-line {
            border-style: dashed;   
            border-width: 1px; /* Adjust thickness */
            border-color: #A3A3A3; /* Adjust color */
            border-image: repeating-linear-gradient(
              to right,
              #A3A3A3 0,
              #A3A3A3 10px,  /* Dash length */
              transparent 10px,
              transparent 20px /* Gap length */
            ) 1;
          }

          .custom-dashed-vertical-line {
            border-style: dashed;
            border-width: 1px; /* Adjust thickness */
            border-color: #A3A3A3; /* Adjust color */
            border-image: repeating-linear-gradient(
              to bottom,
              #A3A3A3 0,
              #A3A3A3 10px,  /* Dash length */
              transparent 10px,
              transparent 20px /* Gap length */
            ) 1;
          }
        `}
      </style>

      <div className="min-h-screen p-10 flex flex-col items-center bg-white">
        {/* Company Name Box */}
        <div className="border border-gray-300 rounded-2xl p-4 "> 
          <div className="bg-[#EFF7FF] py-6 px-12 rounded-lg  text-center mx-5">
            <h2 
              style={{ 
                fontFamily: 'Montserrat, sans-serif', 
                fontSize: '17.07px',  // Set the font size to 17.07px
                fontWeight: '600', 
                marginBottom: '3.5rem',
                color:'#252525'
              }}
            >
              Company name
            </h2>
            <button 
              className="bg-white text-[#252525] border border-primary py-3 px-5 rounded-md"
              style={{
                fontFamily: 'Montserrat, sans-serif', // Font family
                fontWeight: '500', // Font weight
                fontSize: '12px', // Font size
                lineHeight: '14.63px', // Line height
              }}
            >
              4 Sectors
            </button>
          </div>
        </div>

        {/* Vertical Line connecting to Horizontal Line */}
        <div className="h-8 custom-dashed-vertical-line"></div>

        {/* Horizontal Dashed Line for Sectors */}
        <div className="w-[790px] max-w-4xl flex justify-between items-center">
          <div className="border-t-2 custom-dashed-line flex-1"></div>
        </div>

        {/* Sectors Row with Vertical Lines Above */}
        <div className="flex justify-center space-x-6 mt-1">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="h-8 custom-dashed-vertical-line"></div>
              <div className="bg-[#EFF7FF] p-4 mx-2 rounded-lg  text-center w-56 h-44">
                <h2 
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif', 
                    fontSize: '17.07px',
                    fontWeight: '600', 
                    marginBottom: '3.5rem',
                    color:'#252525'
                  }}
                >
                  Sector name
                </h2>
                <div className="mt-2">
                  <button 
                    className="bg-white text-[#252525] border border-primary py-3 px-5 rounded-md"
                    style={{
                      fontFamily: 'Montserrat, sans-serif', // Font family
                      fontWeight: '500', // Font weight
                      fontSize: '12px', // Font size
                      lineHeight: '14.63px', // Line height
                    }}
                  >
                    1 Department
                  </button>
                </div>
              </div>
              <div className="h-8 custom-dashed-vertical-line"></div>
            </div>
          ))}
        </div>

        {/* Departments Row with Vertical Lines Above */}
        <div className="flex justify-center space-x-6 mt-4">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="h-8 custom-dashed-vertical-line"></div>
              <div className="bg-[#EFF7FF] p-4 mx-2 rounded-lg  text-center w-56 h-44">
                <h2 
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif', 
                    fontSize: '17.07px',
                    fontWeight: '600', 
                    marginBottom: '3.5rem',
                    color: '#252525'
                  }}
                >
                  Department name
                </h2>
                <div className="mt-2 flex justify-center space-x-2">
                  <button 
                    className="bg-white text-[#252525] border border-primary py-3 px-5 rounded-md"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: '500',
                      fontSize: '12px',
                      lineHeight: '14.63px',
                    }}
                  >
                    1 section
                  </button>
                  {(index === 1 || index === 3) && (
                    <button 
                      className="bg-white text-[#252525] border border-primary py-2 px-2 rounded-md"
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: '500',
                        fontSize: '12px',
                        lineHeight: '14.63px',
                      }}
                      onClick={openModal} // Open modal on click 
                    >
                      15 Employees
                    </button>
                  )}
                </div>
              </div>
              <div className="h-8 custom-dashed-vertical-line"></div>
            </div>
          ))}
        </div>

        {/* Additional Sector Row with Vertical Lines Above */}
        <div className="flex justify-center space-x-6 mt-4">
          {[1, 2,3,4].map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="h-8 custom-dashed-vertical-line"></div>
              <div className="bg-[#EFF7FF] p-4 mx-2 rounded-lg shadow-md text-center w-56 h-24">
            <h2 
              style={{ 
                fontFamily: 'Montserrat, sans-serif', 
                fontSize: '17.07px',
                fontWeight: '600',
                color: '#252525',
                marginTop: '1rem',
                marginBottom: '1rem'
              }}
            >
              Sector name
            </h2>
          </div>
      
            </div>
          ))}
        </div>

        {/* Modal for displaying hierarchical structure */}
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </>
  );
}
