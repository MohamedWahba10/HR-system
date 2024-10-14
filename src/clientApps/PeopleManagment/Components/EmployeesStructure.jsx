import React from "react";

const EmployeesStructure = () => {
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

      <div className="flex justify-center items-center mt-10">
        <div className=" flex flex-col items-center">

        
          {/* Top Card (Company Leader) with Outer Div and Border */}

          <div className="border border-gray-300 rounded-2xl pt-4 pb-4 px-6 text-center mb-8 relative w-[250px] ">
            <div className="bg-[#EFF7FF] rounded-lg  py-6 px-12 text-center relative">
              <div
                className="bg-white border border-blue-500 rounded-full w-20 h-20 flex items-center justify-center mb-1 absolute -top-10 left-1/2 transform -translate-x-1/2"
              >
                <span className="text-blue-500 font-bold">Avatar</span>
              </div>
              <h3 className="font-semibold text-[#252525] text-center mt-8">Karim Ahmed</h3>
              <p className="text-sm text-[#252525] text-center">UI/UX Designer</p>
              <p className="text-xs text-[#252525] text-center">ID:123456789</p>
              <button
                className="bg-white text-[#252525] border border-primary py-3 px-3 rounded-md mt-4"
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
          </div>

          {/* Vertical Line under the top card */}
          <div className=" h-10 custom-dashed-vertical-line"></div>
  {/* Employees List with Flexbox */}
  <div className="border border-gray-300 rounded-2xl pt-12 pl-4 pr-4 mt-4 w-full lg:w-[90%] max-w-[1200px]">
            <div className="flex flex-wrap justify-between gap-6 px-4">
              {[...Array(12)].map((_, index) => (
                <div
                  key={index}
                  className="bg-[#EFF7FF] pt-6 pb-6 px-5 rounded-lg  flex flex-col items-center w-[22%] relative mb-5"
                >
                  {/* Avatar Placeholder */}
                  <div
                    className="bg-white border border-blue-500 rounded-full w-20 h-20 flex items-center justify-center mb-1 absolute"
                    style={{
                      top: '-10%',
                      transform: 'translateY(-15%)',
                    }}
                  >
                    <span className="text-blue-500 font-bold">Avatar</span>
                  </div>
                  <h3 className="font-semibold text-[#252525] text-center mt-8">
                    Reem Ahmed
                  </h3>
                  <p className="text-sm text-[#252525] text-center">
                    UI/UX Designer
                  </p>
                  <p className="text-xs text-[#252525] text-center">ID:12345678</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default EmployeesStructure;
