import React from 'react';

import { FaCheckCircle, FaTimesCircle ,FaClock} from 'react-icons/fa'; // Icons for status
import { MdEdit } from "react-icons/md";
import X from '../../../../assets/svgs/ph_x-bold.svg'
import rightCheckIcon from '../../../../assets/svgs/rightCheckIcon.svg'
import rejectedIcon from '../../../../assets/svgs/rejectedIcon.svg'
import PendingIcon from '../../../../assets/svgs/PendingIcon.svg'

const HRrequestModal2View = ({ isVisible, onClose, activeIcon ,onEdit  }) => {
  if (!isVisible) return null;

  // Dynamic content based on active icon
  const getContentByIcon = () => {
    switch (activeIcon) {
      case 'letters':
        return {
          title: 'View Letter Request',
          Type: 'Letter Type',
          notes: 'Request for an employment certificate with salary details Request for an employment certificate with salary details Request for an employment certificate with salary details.',
        };
      case 'share':
        return {
          title: 'View Share Moment Request',
          Type: 'Event Type',
          notes: 'Request for sharing a special moment.',
          fields: {
          Presenting:true,
          
          },
        };
      case 'governmentRelations':
        return {
          title: 'View Government Relations Request',
          Type: 'Government Relations Type',
          notes: 'Request related to government relations.',
        };
        case 'medicl': // Case for medical with additional fields
      return {
        title: 'View Medical Form Request',
        Type: 'Medical Form Type',
        notes: 'Request related to medical form submissions.',
        fields: {
          Relationship:true,
          firstName: true,
          secondName: true,
          lastName: true,
          ID: true,
          mobileNumber: true,
        },
      };
      case 'voice':
        return {
          title: 'View Your Voice is Heard Request',
          Type: 'Your Voice Heard Type',
          notes: 'Request for feedback or voice-related matters.',
          fields:{
            Reason:true
          }
        };
      case 'bank':
        return {
          title: 'View Bank IBAN Request',
          Type: 'Bank IBAN Change',
          notes: 'Request for changing bank IBAN.',
        };
        case 'resignation':
        return {
          title: 'ResignationRequest',
          Type: 'Resignation Type',
          notes: 'Request for Resignation',
          fields:{
            Last_working_day :true,
            Number_of_notice_period:true
          }
        };

        case 'overtime':
          return {
            title: 'View Overtime Request',
            Type: 'Overtime',
            notes: 'Request for working extra hours.',
            fields: {
              Policy: true,
              From_date: true,
              To_date: true,
              From_time: true,
              To_time: true,
            },
          };
        case 'money':
          return {
            title: 'View Expenses Request',
            Type: 'Expense Type',
            notes: 'Request for reimbursement of expenses.',
            fields: {
              Receipt_Date: true,
              Amount:true,
            
            },
          };
        case 'business':
          return {
            title: 'View Business Trip Request',
            Type: 'Business Trip Type',
            notes: 'Request for a business trip.',
            fields: {
              Ticket_Demands: true,
              Takeoff_Country: true,
              Takeoff_City: true,
              Arrival_Country: true,
              Arrival_City: true,
              business_From_date: true,
              business_To_date: true,
              total_days:true,
              Trip_Reason: true,
              business_Reason: true,
              Travel_Method:true,
              Payment_method:true,
              Ticket_Reservation_By_Company :true,
              Hotel_Reservation_By_Company :true,
            },
          };
        case 'loan':
          return {
            title: 'View Loan Request',
            Type: 'Loan Type',
            notes: 'Request for loan application.',
            fields: {
              loan_Amount: true,
              Duration: true,
              Payment_Month: true,
              Monthly_Instalment: true,
            },
          };
          case 'leaves':
            return {
              title: 'View Leave Request',
              Type: 'Leave Type',
              notes: 'Request for leaves.',
              fields: {
                Leave_Date: true,
                Leave_From_time: true,
                Leave_To_time: true,
              },
            };
          case 'vacation':
            return {
              title: 'View Vacation Request',
              Type: 'Vacation Type',
              notes: 'Request for vacation leave.',
              fields: {
                Vacation_Balance: true,
                vacation_From_date: true,
                vacation_To_date: true,
                Total_Days:true
              },
            };
         
          case 'MissingPunch':
            return {
              title: 'View Missing Punch Request',
              Type: 'Missing Punch Type',
              notes: 'Request for correcting a missing punch.',
              fields: {
                MissingPunch_Date: true,
                Check_in: true,
                Check_out: true,
              },
            };
        default:
          return {
            title: 'View Miscellaneous Request',
            Type: 'Miscellaneous Type',
            notes: 'Other miscellaneous requests.',
          };
      }
  };
 


  const { title, Type, notes, fields = {} } = getContentByIcon();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
      <div className="bg-white h-full w-1/4 p-6 shadow-lg relative overflow-y-auto">


        {/* Close button */}
        <div className='flex'>
        <button
          className="absolute top-6 right-4 text-xl text-gray-600 hover:text-black"
          onClick={onClose}
        >
          <img src={X} alt="Close" className="w-6 h-6" /> {/* Using the X icon */}
        </button>

        {/* Modal Header */}
        <div className="mb-2 text-center">
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
        </div>
        <hr className='w-[calc(100%+1.5rem)] -ml-6' />

        {/* User Information */}
        <div className="flex items-center justify-center mb-6 border-gray-100 rounded-xl border-2 pt-3 pb-3 mt-3">
          <img
            className="h-20 w-20 rounded-full me-5"
            src="https://via.placeholder.com/40"
            alt="profile"
          />
          <div className="ml-4 text-center">
            <p className="font-semibold text-primary">Abdullah Al-Harbi</p>
            <p className="text-sm  mt-1"> <span className='text-primary'>Employee ID :</span> 123456</p>
            <p className="text-sm mt-1"> <span className='text-primary'>Position :</span> UI Designer</p>
          </div>
        </div>

{activeIcon==='vacation' && 
  <div className="mb-6 border-gray-100 rounded-xl border-2 p-4 ">
  <div className='flex justify-between items-center'>
      <h4 className="text-md font-semibold mb-2 text-[#454545]">Annual vacation balance </h4>
    
  </div>

  <p className="text-sm mb-1">
    <span className='text-primary font-medium'> Vacation days : </span><span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'> Days taken : </span><span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'> Remaining days : </span><span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'> Balance Up to vacation date  : </span><span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
  </div>

}
          {/* Request Information */}
<div className="mb-6 border-gray-100 rounded-xl border-2 p-4 ">
  <div className='flex justify-between items-center'>
      <h4 className="text-md font-semibold mb-2 text-[#454545]">Request Information</h4>
      <button className="bg-primary-gradient text-white px-3 py-1 rounded-md flex items-center gap-2" 
      onClick={() => onEdit(activeIcon)} // Handle the edit button click 
      >
      <MdEdit />
        Edit
      </button>
  </div>
  <div className="text-sm text-gray-600 mb-2">
    <p className='text-primary font-medium'>Request Create Time And Date:</p>
    <p className=" font-semibold text-[#5D5D5D]">10:00 pm, 10/10/2024</p>
  </div>
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'>Request Created By: </span><span className="font-semibold text-[#5D5D5D]">Admin</span>
  </p>
  {fields.Ticket_Demands && (
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'>Ticket Demands :</span><span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
)}
  {Type!=='Miscellaneous Type' &&  Type !=='Overtime' && Type !=='Business Trip Type' && Type !=='Missing Punch Type'   && <p className="text-sm mb-1">
    <span className='text-primary font-medium'>{Type} :</span> <span className="font-semibold text-[#5D5D5D]"></span>
  </p>}
 
  
   
      
      {fields.Number_of_notice_period && (
        <p className="text-sm mb-1">
        <span className='text-primary font-medium'>Number of notice period :</span><span className="font-semibold text-[#5D5D5D]">lorem</span>
      </p>
      )}
      {fields.Last_working_day && (
        <p className="text-sm mb-1">
        <span className='text-primary font-medium'>   Last working day :</span><span className="font-semibold text-[#5D5D5D]">lorem</span>
      </p>
      )}
     
      {fields.Reason && (
        <p className="text-sm mb-1">
        <span className='text-primary font-medium'>Reason :</span><span className="font-semibold text-[#5D5D5D]">lorem</span>
      </p>
      )}
      {fields.Presenting && (
        <p className="text-sm mb-1">
        <span className='text-primary font-medium'>Presenting To Another Colleague :</span><span className="font-semibold text-[#5D5D5D]">lorem</span>
      </p>
      )}
      {fields.Relationship && (
        <p className="text-sm mb-1">
        <span className='text-primary font-medium'>Relationship:</span><span className="font-semibold text-[#5D5D5D]">lorem</span>
      </p>
      )}
      {fields.firstName && (
        <p className="text-sm mb-1">
        <span className='text-primary font-medium'>first Name :</span><span className="font-semibold text-[#5D5D5D]">lorem</span>
      </p>
      )}
      {fields.secondName && (
        <p className="text-sm mb-1">
        <span className='text-primary font-medium'>Second Name :</span><span className="font-semibold text-[#5D5D5D]">lorem</span>
      </p>
      )}
      {fields.lastName && (
         <p className="text-sm mb-1">
         <span className='text-primary font-medium'>Last Name :</span><span className="font-semibold text-[#5D5D5D]">lorem</span>
       </p>
      )}
      {fields.ID && (
         <p className="text-sm mb-1">
         <span className='text-primary font-medium'>ID :</span><span className="font-semibold text-[#5D5D5D]">lorem</span>
       </p>
      )}
      {fields.mobileNumber && (
        <p className="text-sm mb-1">
        <span className='text-primary font-medium'>Mobile Number :</span><span className="font-semibold text-[#5D5D5D]">lorem</span>
      </p>
      )}
      {fields.Policy && (
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'>Policy :</span><span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
)}
{fields.From_date && (
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'>From Date :</span><span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
)}
{fields.To_date && (
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'>To Date :</span><span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
)}
{fields.From_time && (
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'>From Time :</span><span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
)}
{fields.To_time && (
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'>To Time :</span><span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
)}
{fields.Receipt_Date && (
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'>Receipt Date :</span><span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
)}



{fields.Takeoff_Country && (
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'>Takeoff Country :</span><span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
)}
{fields.Takeoff_City && (
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'>Takeoff City :</span><span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
)}
{fields.Arrival_Country && (
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'>Arrival Country :</span><span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
)}
{fields.Arrival_City && (
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'>Arrival City :</span><span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
)}
{fields.business_From_date && (
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'>From Date :</span><span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
)}
{fields.business_To_date && (
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'>To Date :</span><span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
)}
{fields.total_days && (
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'>Total Days :</span><span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
)}
{fields.Trip_Reason && (
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'>Trip Reason :</span><span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
)}
{fields.business_Reason && (
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'>Reason :</span><span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
)}

{fields.Travel_Method && (
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'>Travel Method :</span><span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
)}
{fields.Payment_method && (
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'>Payment Method :</span><span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
)}
{fields.Ticket_Reservation_By_Company && (
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'>Ticket Reservation By Company :</span><span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
)}
{fields.Hotel_Reservation_By_Company && (
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'>Hotel Reservation By Company :</span><span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
)}
{fields.loan_Amount && (
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'> Amount :</span><span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
)}
{fields.Duration && (
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'>Duration :</span><span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
)}
{fields.Payment_Month && (
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'>Payment Month :</span><span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
)}
{fields.Monthly_Instalment && (
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'>Monthly Instalment :</span><span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
)}

{/* Conditionally Render Leave Request Fields */}
{fields.Leave_Date && (
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'>Leave Date :</span>
    <span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
)}
{fields.Leave_From_time && (
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'>From Time :</span>
    <span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
)}
{fields.Leave_To_time && (
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'>To Time :</span>
    <span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
)}

{/* Conditionally Render Vacation Request Fields */}

{fields.vacation_From_date && (
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'>From Date :</span>
    <span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
)}
{fields.vacation_To_date && (
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'>To Date :</span>
    <span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
)}
{fields.Total_Days && (
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'>Total Days :</span>
    <span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
)}

{/* Conditionally Render Missing Punch Request Fields */}
{fields.MissingPunch_Date && (
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'>Date :</span>
    <span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
)}
{fields.Check_in && (
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'>Check In :</span>
    <span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
)}
{fields.Check_out && (
  <p className="text-sm mb-1">
    <span className='text-primary font-medium'>Check Out :</span>
    <span className="font-semibold text-[#5D5D5D]">lorem</span>
  </p>
)}



<p className="text-sm">
    <span className='text-primary font-medium'>Notes: </span><span className='font-semibold text-[#5D5D5D]'>{notes}</span>
  </p>
</div>

        {/* Attachment */}
        <div className="mb-6 border-gray-100 rounded-xl border-2 p-4">
          <h3 className="text-md font-semibold text-[#454545]">Attachment</h3>
          <div className="flex items-center">
  <img
    src="https://img.icons8.com/color/48/000000/pdf-2.png"
    alt="PDF Icon"
    className="w-6 h-6"
  />
  <div className="ml-2">
    <p className="text-sm">cvpdf.pdf</p>
    <p className="text-xs text-gray-500">32 KB</p>
  </div>
</div>

        </div>

   
{/* Request Status */}

<div className="mb-6 border-gray-100 rounded-xl border-2 p-4">
  <h3 className="text-md font-semibold mb-4 text-[#454545]">Request Status</h3>
  <div className="relative flex flex-col ml-4">
    
    {/* Approved Status */}
    <div className="flex items-center mb-6 relative">
      <div className="w-5 h-5 rounded-full bg-[#DEEBDA] flex items-center justify-center relative z-10">
        <img src={rightCheckIcon} alt="Approved" className="w-2.5 h-2.5" />
      </div>
      <span className="text-sm ml-6 text-[#318115]">Approved by Reem Abdullah</span>

      {/* Vertical Line (connected) */}
      <div
        className="absolute top-7 left-[9px] w-[2px] bg-gray-200"
        style={{ top: '22px', height: '20px' }} // Adjust top and height as needed
      ></div>
    </div>

    {/* Rejected Status */}
    <div className="flex items-center relative mb-6">
      <div className="w-5 h-5 rounded-full bg-[#F3DCDB] flex items-center justify-center relative z-10">
        <img src={rejectedIcon} alt="Rejected" className="w-2.5 h-2.5" />
      </div>
      <span className="text-sm ml-6 text-[#B3261E]">Rejected by Reem Abdullah</span>

      {/* Vertical Line (connected) */}
      <div
        className="absolute top-7 left-[9px] w-[2px] bg-gray-200"
        style={{ top: '22px', height: '20px' }}
      ></div>
    </div>

    {/* Pending Status */}
    <div className="flex items-center relative">
      <div className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center relative z-10">
        <img src={PendingIcon} alt="Pending" className="w-3 h-3" />
      </div>
      <span className="text-sm ml-6 text-gray-600">Pending for Reem Abdullah</span>
    </div>
  </div>
</div>

 {/* Buttons */}
 <div className="mt-8 flex justify-between">
    <button className="bg-primary-gradient text-white px-2 py-1 rounded-md text-sm w w-[75px]">
      Accept
    </button>
    <button className="border bg-white text-primary border-primary px-2 py-1 rounded-md text-sm w-[75px]">
      Reject
    </button>
    <button className="border bg-white text-primary border-primary px-2 py-1 rounded-md text-sm w-[75px]">
      Re-Send
    </button>
    <button className="border bg-white text-primary border-primary px-2 py-1 rounded-md text-sm w-[75px]">
      Delegate
    </button>
  </div>


      </div>
    </div>
  );
};

export default HRrequestModal2View;
