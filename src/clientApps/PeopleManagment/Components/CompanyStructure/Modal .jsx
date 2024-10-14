// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 rounded-lg shadow-lg p-0 relative max-h-[100vh] overflow-y-auto">
        {/* Sticky Header with title and close button */}
        <div className="sticky top-0 bg-white w-full z-10 border-b border-gray-200">
          <div className="flex justify-between items-center px-6 py-4">
            <h2 
              style={{ 
                fontFamily: 'Montserrat, sans-serif', 
                fontSize: '20px',
                fontWeight: '400',
                color: '#252525'
              }}
            >
              View Structure
            </h2>
            <button onClick={onClose} className="text-gray-600 font-bold text-xl">X</button>
          </div>
          <hr />
        </div>

        <div className="flex flex-col items-center p-6">
          {/* Company Name */}
          <div className="border border-gray-300 rounded-2xl p-4  mb-4">
            <div className="bg-[#EFF7FF] py-6 px-12 rounded-lg  text-center">
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
                Company name
              </h2>
            </div>
          </div>
          <div className="h-8 custom-dashed-vertical-line"></div>
          {/* Sector Name */}
          <div className="bg-[#EFF7FF] py-6 px-12 rounded-lg text-center mx-5 mb-4">
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
          <div className="h-8 custom-dashed-vertical-line"></div>
          {/* Department Name */}
          <div className="bg-[#EFF7FF] py-6 px-12 rounded-lg  text-center mx-5 mb-4">
            <h2 
              style={{ 
                fontFamily: 'Montserrat, sans-serif', 
                fontSize: '17.07px',
                fontWeight: '600',
                color: '#252525',
                marginTop: '2rem',
                marginBottom: '2rem'
              }}
            >
              Department name
            </h2>
            <button 
              className="bg-white text-[#252525] border border-primary py-3 px-5 rounded-md mt-4"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '500',
                fontSize: '12px',
                lineHeight: '14.63px',
              }}
            >
              15 Employees
            </button>
          </div>

          {/* Vertical Line after Department Name */}
          <div className="h-8 custom-dashed-vertical-line"></div>

          {/* Outer Container for Employee Cards with Grey Border */}
          <div className="border border-gray-300 rounded-2xl pt-12  pl-8 pr-8 mt-4 w-full ">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {[...Array(9)].map((_, index) => (
                <div key={index} className="bg-[#EFF7FF] pt-6 pb-6 px-5 rounded-lg shadow-md flex flex-col items-center w-full relative mb-5 ">
                {/* Avatar Placeholder */}
                <div 
                  className="bg-white border border-blue-500 rounded-full w-20 h-20 flex items-center justify-center mb-1 absolute"
                  style={{
                    top: '-10%', // Adjust the top position to push 40% of the avatar outside
                    transform: 'translateY(-15%)',
                  }}
                >
                  {/* Replace the span with an actual image or icon */}
                  <span className="text-blue-500 font-bold">Avatar</span>
                </div >
                <h3 className="font-semibold text-[#252525] text-center mt-8">Reem Ahmed</h3>
                <p className="text-sm text-[#252525] text-center">UI/UX designer</p>
                <p className="text-xs text-[#252525] text-center">ID:12345678</p>
              </div>
              
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
