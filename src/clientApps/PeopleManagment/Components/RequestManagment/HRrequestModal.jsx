import React, { useState } from 'react';
import X from '../../../../assets/svgs/ph_x-bold.svg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import arrow from '../../../../assets/svgs/arrow.svg';

const Modal = ({ isVisible, onClose, title ,requestTypes , isEditMode }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [dates, setDates] = useState({
    resignationLastWorkingDay: null,
    overtimeFromDate: null,
    overtimeToDate: null,
    businessTripFromDate: null,
    businessTripToDate: null,
    leaveDate: null,
    vacationFromDate: null,
    vacationToDate: null,
    missingPunchDate: null,
  });

  // Generic handler for updating date fields
  const handleDateChange = (date, field) => {
    setDates((prevDates) => ({
      ...prevDates,
      [field]: date,
    }));
  };

 
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file ? file.name : null); // Set file name or reset if no file is selected
  };

  if (!isVisible) return null; // If the modal is not visible, don't render anything

  console.log(requestTypes);
  
  return (
    <>
      {/* Modal Overlay */}
      <div className="fixed inset-0 bg-black opacity-50 z-40 "></div>

      {/* Modal Content */}
      <div className="fixed top-0 right-0 h-full max-w-md w-[25.5%] bg-white shadow-lg z-50 transition-transform transform translate-x-0 p-6">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold flex-grow">{title}</h2> {/* Title shown here */}
          {/* Close button with X icon */}
          <button onClick={onClose} className="ml-4">
            <img src={X} alt="Close" className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body with max-height and overflow */}
        <div className="space-y-2 overflow-y-auto" style={{ maxHeight: '85vh' }}>
          {/* Employee Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Employee Name</label>
            <input
              type="text"
              placeholder="lorem ipsum"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              readOnly={isEditMode} // Make the name read-only if in edit moded
            />
          </div>

          {/* Employee ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mt-4">Employee ID</label>
            <input
              type="text"
              placeholder="lorem ipsum"
              className="w-full px-3 py-2 border border-gray-300 bg-gray-100 rounded focus:outline-none focus:border-blue-500 cursor-not-allowed"
              readOnly
            />
          </div>

  
          {title === 'New Letters Request' && (

<>
<div>
            <label className="block text-sm font-medium text-gray-700 mt-4">Letter Type</label>
            <div className="relative">
            <select className="w-full px-3 py-2 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500 text-gray-400">
      {requestTypes.map((type, index) => (
        <option key={index} value={type}>
          {type}
        </option>
      ))}
    </select>
              <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <img src={arrow} alt="arrow" className="w-3 h-3" />
              </span>
            </div>
          </div>
            
            </>
          )}
          {title === 'New Government Relations Request' && (

<>
              <div>
            <label className="block text-sm font-medium text-gray-700 mt-4"> Government Relations Type</label>
            <div className="relative">
            <select className="w-full px-3 py-2 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500 text-gray-400">
      {requestTypes.map((type, index) => (
        <option key={index} value={type}>
          {type}
        </option>
      ))}
    </select>
              <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <img src={arrow} alt="arrow" className="w-3 h-3" />
              </span>
            </div>
          </div>
            
            </>
          )}
          {title === 'New Share the Moment Request' && (

            <>
            <div>
            <label className="block text-sm font-medium text-gray-700 mt-4">Event Type</label>
            <div className="relative">
            <select className="w-full px-3 py-2 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500 text-gray-400">
      {requestTypes.map((type, index) => (
        <option key={index} value={type}>
          {type}
        </option>
      ))}
    </select>
              <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <img src={arrow} alt="arrow" className="w-3 h-3" />
              </span>
            </div>
          </div>
                       
                        <div>
            <label className="block text-sm font-medium text-gray-700 mt-4">Presenting to another colleague</label>
            <div className="relative">
              <select className="w-full px-3 py-2 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500 text-gray-400">
                <option>lorem ipsum</option>
              </select>
              <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <img src={arrow} alt="arrow" className="w-3 h-3" />
              </span>
            </div>
          </div>
                        </>
          )}
          {title === 'New Medical Form Request' && (
            <>
            <div>
  <label className="block text-sm font-medium text-gray-700 mt-4">Medical Type</label>
  <div className="relative">
  <select className="w-full px-3 py-2 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500 text-gray-400">
      {requestTypes.map((type, index) => (
        <option key={index} value={type}>
          {type}
        </option>
      ))}
    </select>
    <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <img src={arrow} alt="arrow" className="w-3 h-3" />
    </span>
  </div>
</div>
<div>
  <label className="block text-sm font-medium text-gray-700 mt-4">Relationship</label>
  <div className="relative">
    <select className="w-full px-3 py-2 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500 text-gray-400">
      <option>lorem ipsum</option>
    </select>
    <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <img src={arrow} alt="arrow" className="w-3 h-3" />
    </span>
  </div>
</div>
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  placeholder="lorem ipsum"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Second Name</label>
                <input
                  type="text"
                  placeholder="lorem ipsum"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  placeholder="lorem ipsum"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">ID</label>
                <input
                  type="text"
                  placeholder="lorem ipsum"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                <input
                  type="number"
                  placeholder="lorem ipsum"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
            </>
          )}
          {title === 'New Your Voice is Heard Request' && (
          <>
            <div>
  <label className="block text-sm font-medium text-gray-700 mt-4">Your Voice is Heard Type</label>
  <div className="relative">
  <select className="w-full px-3 py-2 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500 text-gray-400">
      {requestTypes.map((type, index) => (
        <option key={index} value={type}>
          {type}
        </option>
      ))}
    </select>
    <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <img src={arrow} alt="arrow" className="w-3 h-3" />
    </span>
  </div>
</div>
        <div>
  <label className="block text-sm font-medium text-gray-700 mt-4">Reason</label>
  <div className="relative">
    <select className="w-full px-3 py-2 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500 text-gray-400">
      <option>lorem ipsum</option>
    </select>
    <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <img src={arrow} alt="arrow" className="w-3 h-3" />
    </span>
  </div>
</div>
            </>
          )}
          {title === 'New Change Bank IBAN Request' && (
                       <> 
              <div>
              <label className="block text-sm font-medium text-gray-400 mt-4">Current IBAN Number</label>
              <input
                type="text"
                placeholder="lorem ipsum"
                className="w-full px-3 py-2 border border-gray-300 bg-gray-100 rounded focus:outline-none focus:border-blue-500 cursor-not-allowed"
                readOnly
              />
            </div>
              <div>
              <label className="block text-sm font-medium text-gray-400 mt-4">Current Bank Name</label>
              <input
                type="text"
                placeholder="lorem ipsum"
                className="w-full px-3 py-2 border border-gray-300 bg-gray-100 rounded focus:outline-none focus:border-blue-500 cursor-not-allowed"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mt-4">New IBAN Name</label>
              <input
                type="text"
                placeholder="lorem ipsum"
                className="w-full px-3 py-2 border border-gray-300  rounded focus:outline-none focus:border-blue-500 c"
               
              />
            </div>

            <div>
  <label className="block text-sm font-medium text-gray-700 mt-4">New Bank Name</label>
  <div className="relative">
    <select className="w-full px-3 py-2 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500 text-gray-400">
      <option>lorem ipsum</option>
    </select>
    <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <img src={arrow} alt="arrow" className="w-3 h-3" />
    </span>
  </div>
</div>
            
            </>
          )}
          {title === 'New Resignation Request' && (
                   <>
          <div>
  <label className="block text-sm font-medium text-gray-700 mt-4">Resignation Type</label>
  <div className="relative">
  <select className="w-full px-3 py-2 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500 text-gray-400">
      {requestTypes.map((type, index) => (
        <option key={index} value={type}>
          {type}
        </option>
      ))}
    </select>
    <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <img src={arrow} alt="arrow" className="w-3 h-3" />
    </span>
  </div>
</div>
<div>
                <label className="block text-sm font-medium text-gray-700 mt-4">Last Working Day</label>
                <DatePicker
                  selected={dates.resignationLastWorkingDay}
                  onChange={(date) => handleDateChange(date, 'resignationLastWorkingDay')}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="dd/mm/yy"
                  className="w-[153%] px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>


            <div>
              <label className="block text-sm font-medium text-gray-700 mt-4">Number of Notice Period</label>
              <input
                type="text"
                placeholder="lorem ipsum"
                className="w-full px-3 py-2 border border-gray-300  rounded focus:outline-none focus:border-blue-500 cursor-not-allowed"
              
              />
            </div>
            </>
          )}
          {title === 'New Overtime Request' && (
                       <> 

<div>
  <label className="block text-sm font-medium text-gray-700 mt-4">Policy</label>
  <div className="relative">
    <select className="w-full px-3 py-2 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500 text-gray-400">
      <option>lorem ipsum</option>
    </select>
    <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <img src={arrow} alt="arrow" className="w-3 h-3" />
    </span>
  </div>
</div>
<div className="pt-2">
                <label className="block text-sm font-medium text-gray-700">From Date</label>
                <DatePicker
                  selected={dates.overtimeFromDate}
                  onChange={(date) => handleDateChange(date, 'overtimeFromDate')}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="dd/mm/yy"
                  className="w-[153%] px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-primaryLight"
                />
              </div>
              <div className="pt-2">
                <label className="block text-sm font-medium text-gray-700">To Date</label>
                <DatePicker
                  selected={dates.overtimeToDate}
                  onChange={(date) => handleDateChange(date, 'overtimeToDate')}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="dd/mm/yy"
                  className="w-[153%] px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-primaryLight"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mt-4">From time</label>
                <input
                  type="time"
                   placeholder="HH:MM"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mt-4">to time</label>
                <input
                  type="time"
               placeholder="HH:MM"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
          
            
            </>
          )}
          {title === 'New Business Trip Request' && (
  <>
   <div>
  <label className="block text-sm font-medium text-gray-700 mt-4">Ticket Demands</label>
  <div className="relative">
  <select className="w-full px-3 py-2 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500 text-gray-400">
      {requestTypes.map((type, index) => (
        <option key={index} value={type}>
          {type}
        </option>
      ))}
    </select>
    <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <img src={arrow} alt="arrow" className="w-3 h-3" />
    </span>
  </div>
</div>

<div>
  <label className="block text-sm font-medium text-gray-700 mt-4">Take-off Country</label>
  <div className="relative">
    <select className="w-full px-3 py-2 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500 text-gray-400">
      <option>lorem ipsum</option>
      {/* Add more options if needed */}
    </select>
    <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <img src={arrow} alt="arrow" className="w-3 h-3" />
    </span>
  </div>
</div>

<div>
  <label className="block text-sm font-medium text-gray-700 mt-4">Take-off City</label>
  <div className="relative">
    <select className="w-full px-3 py-2 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500 text-gray-400">
      <option>lorem ipsum</option>
      {/* Add more options if needed */}
    </select>
    <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <img src={arrow} alt="arrow" className="w-3 h-3" />
    </span>
  </div>
</div>

<div>
  <label className="block text-sm font-medium text-gray-700 mt-4">Arrival Country</label>
  <div className="relative">
    <select className="w-full px-3 py-2 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500 text-gray-400">
      <option>lorem ipsum</option>
      {/* Add more options if needed */}
    </select>
    <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <img src={arrow} alt="arrow" className="w-3 h-3" />
    </span>
  </div>
</div>

<div>
  <label className="block text-sm font-medium text-gray-700 mt-4">Arrival City</label>
  <div className="relative">
    <select className="w-full px-3 py-2 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500 text-gray-400">
      <option>lorem ipsum</option>
      {/* Add more options if needed */}
    </select>
    <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <img src={arrow} alt="arrow" className="w-3 h-3" />
    </span>
  </div>
</div>

<div className="pt-2">
                <label className="block text-sm font-medium text-gray-700">From Date</label>
                <DatePicker
                  selected={dates.businessTripFromDate}
                  onChange={(date) => handleDateChange(date, 'businessTripFromDate')}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="dd/mm/yy"
                  className="w-[153%] px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-primaryLight"
                />
              </div>
              <div className="pt-2">
                <label className="block text-sm font-medium text-gray-700">To Date</label>
                <DatePicker
                  selected={dates.businessTripToDate}
                  onChange={(date) => handleDateChange(date, 'businessTripToDate')}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="dd/mm/yy"
                  className="w-[153%] px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-primaryLight"
                />
              </div>

                  <div>
  <label className="block text-sm font-medium text-gray-700 mt-4">Trip Reason</label>
  <div className="relative">
    <select className="w-full px-3 py-2 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500 text-gray-400">
      <option>lorem ipsum</option>
      {/* Add more options if needed */}
    </select>
    <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <img src={arrow} alt="arrow" className="w-3 h-3" />
    </span>
  </div>
</div>

<div>
  <label className="block text-sm font-medium text-gray-700">Reason</label>
  <input
    type="text"
    placeholder="lorem ipsum"
    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
  />
</div>

<div>
  <label className="block text-sm font-medium text-gray-700 mt-4">Travel Method</label>
  <div className="relative">
    <select className="w-full px-3 py-2 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500 text-gray-400">
      <option>lorem ipsum</option>
      {/* Add more options if needed */}
    </select>
    <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <img src={arrow} alt="arrow" className="w-3 h-3" />
    </span>
  </div>
</div>

<div>
  <label className="block text-sm font-medium text-gray-700 mt-4">Payment Method</label>
  <div className="relative">
    <select className="w-full px-3 py-2 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500 text-gray-400">
      <option>lorem ipsum</option>
      {/* Add more options if needed */}
    </select>
    <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <img src={arrow} alt="arrow" className="w-3 h-3" />
    </span>
  </div>
</div>

<div>
  <label className="block text-sm font-medium text-gray-700 mt-4">Ticket Reservation By Company</label>
  <div className="relative">
    <select className="w-full px-3 py-2 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500 text-gray-400">
      <option>lorem ipsum</option>
      {/* Add more options if needed */}
    </select>
    <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <img src={arrow} alt="arrow" className="w-3 h-3" />
    </span>
  </div>
</div>

<div>
  <label className="block text-sm font-medium text-gray-700 mt-4">Hotel Reservation By Company</label>
  <div className="relative">
    <select className="w-full px-3 py-2 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500 text-gray-400">
      <option>lorem ipsum</option>
      {/* Add more options if needed */}
    </select>
    <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <img src={arrow} alt="arrow" className="w-3 h-3" />
    </span>
  </div>
</div>

  </>
          )}
          {title === 'New Loan Request' && (
                       <> 
                  <div>
  <label className="block text-sm font-medium text-gray-700 mt-4">Loan Type</label>
  <div className="relative">
  <select className="w-full px-3 py-2 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500 text-gray-400">
      {requestTypes.map((type, index) => (
        <option key={index} value={type}>
          {type}
        </option>
      ))}
    </select>
    <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <img src={arrow} alt="arrow" className="w-3 h-3" />
    </span>
  </div>
</div>
              
            <div>
              <label className="block text-sm font-medium text-gray-700 mt-4">Amount</label>
              <input
                type="number"
                placeholder="lorem ipsum"
                className="w-full px-3 py-2 border border-gray-300  rounded focus:outline-none focus:border-blue-500 "
               
              />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mt-4">Duration</label>
                <input
                  type="text"
                  placeholder="lorem ipsum"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mt-4">Payment Month</label>
                <input
                  type="text"
                  placeholder="lorem ipsum"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mt-4"> Monthly Instalment</label>
                <input
                  type="text"
                  placeholder="lorem ipsum"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
             
             
            
            </>
          )}
            {title === 'New Expenses Request' && (
                       <>  
        <div>
  <label className="block text-sm font-medium text-gray-700 mt-4">Recipit Type</label>
  <div className="relative">
  <select className="w-full px-3 py-2 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500 text-gray-400">
      {requestTypes.map((type, index) => (
        <option key={index} value={type}>
          {type}
        </option>
      ))}
    </select>
    <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <img src={arrow} alt="arrow" className="w-3 h-3" />
    </span>
  </div>
</div>
                    
              <div className=' pt-2'>
              <label className="block text-sm font-medium text-gray-700 ">Last Working Day</label>
<DatePicker
  selected={selectedDate}
  onChange={handleDateChange}
  dateFormat="dd/MM/yyyy"
  placeholderText="dd/mm/yy"
  className="w-[153%] px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-primaryLight"
/>
</div>
             
            
            </>
          )}
           {title === 'New Leave Request' && (
                       <>  
        
        <div>
  <label className="block text-sm font-medium text-gray-700 mt-4">Leave Type</label>
  <div className="relative">
  <select className="w-full px-3 py-2 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500 text-gray-400">
      {requestTypes.map((type, index) => (
        <option key={index} value={type}>
          {type}
        </option>
      ))}
    </select>
    <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <img src={arrow} alt="arrow" className="w-3 h-3" />
    </span>
  </div>
</div>
<div className="pt-2">
                <label className="block text-sm font-medium text-gray-700">Leave Date</label>
                <DatePicker
                  selected={dates.leaveDate}
                  onChange={(date) => handleDateChange(date, 'leaveDate')}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="dd/mm/yy"
                  className="w-[153%] px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-primaryLight"
                />
              </div>
<div>
                <label className="block text-sm font-medium text-gray-700 mt-4">From time</label>
                <input
                  type="time"
                   placeholder="HH:MM"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mt-4">to time</label>
                <input
                  type="time"
               placeholder="HH:MM"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
            </>
          )}
           {title === 'New Vacation Request' && (
                       <>  
        
        <div>
  <label className="block text-sm font-medium text-gray-700 mt-4">Vacation Type</label>
  <div className="relative">
  <select className="w-full px-3 py-2 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500 text-gray-400">
      {requestTypes.map((type, index) => (
        <option key={index} value={type}>
          {type}
        </option>
      ))}
    </select>
    <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
      <img src={arrow} alt="arrow" className="w-3 h-3" />
    </span>
  </div>
</div>
              <div>
              <label className="block text-sm font-medium text-gray-400 mt-4">Vacation Balance</label>
              <input
                type="text"
                placeholder="lorem ipsum"
                className="w-full px-3 py-2 border border-gray-300 bg-gray-100 rounded focus:outline-none focus:border-blue-500 cursor-not-allowed"
                readOnly
              />
            </div>
              
              <div className="pt-2">
                <label className="block text-sm font-medium text-gray-700">From Date</label>
                <DatePicker
                  selected={dates.vacationFromDate}
                  onChange={(date) => handleDateChange(date, 'vacationFromDate')}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="dd/mm/yy"
                  className="w-[153%] px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-primaryLight"
                />
              </div>
              <div className="pt-2">
                <label className="block text-sm font-medium text-gray-700">To Date</label>
                <DatePicker
                  selected={dates.vacationToDate}
                  onChange={(date) => handleDateChange(date, 'vacationToDate')}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="dd/mm/yy"
                  className="w-[153%] px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-primaryLight"
                />
              </div>

          
            </>
          )}
             {title === 'New Missing Punch Request' && (
                       <>  
   
   <div className="pt-2">
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <DatePicker
                  selected={dates.missingPunchDate}
                  onChange={(date) => handleDateChange(date, 'missingPunchDate')}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="dd/mm/yy"
                  className="w-[153%] px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-primaryLight"
                />
              </div>

                  <div>
              <label className="block text-sm font-medium text-gray-700 mt-4">Check in</label>
              <input
                type="time"
                placeholder="lorem ipsum"
                className="w-full px-3 py-2 border border-gray-300  rounded focus:outline-none focus:border-blue-500 "
               
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mt-4">Check out</label>
              <input
                type="time"
                placeholder="lorem ipsum"
                className="w-full px-3 py-2 border border-gray-300  rounded focus:outline-none focus:border-blue-500 "
               
              />
            </div>
            </>
          )}
        
        
        





        

        


          {/* Supporting Document */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mt-4">Supporting Document</label>
            <div className="flex items-center">
              <input
                type="text"
                value={selectedFile || "No file chosen"}
                placeholder="No file chosen"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 cursor-not-allowed text-gray-300"
                readOnly
              />
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id="fileInput"
              />
              <label
                htmlFor="fileInput"
                className="ml-4 px-4 py-2 bg-gray-200 rounded text-primaryLight cursor-pointer"
              >
                Choose
              </label>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mt-4">Notes</label>
            <textarea
              placeholder="Enter category description..."
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-start space-x-4 mt-6">
            <button className="px-4 py-2 bg-primary-gradient text-white rounded hover:opacity-90">
              Submit
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 border border-primary rounded hover:bg-gray-100 text-primary"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
