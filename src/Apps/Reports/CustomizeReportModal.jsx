import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ModalContainer from '../../Common/ModalContainer';
import FormField from '../../Common/FormField';

// Helper function to reorder columns based on drag and drop result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const CustomizeReportModal = ({ isOpen, closeModal, columns, setColumns }) => {
  const [activeTab, setActiveTab] = useState('columns'); // State to manage active tab
  console.log('Columns:', columns);
  
  // Handle column visibility toggle
  const toggleColumnVisibility = (id) => {
    const updatedColumns = columns.map(col =>
      col.id === id ? { ...col, visible: !col.visible } : col
    );
    setColumns(updatedColumns);
  };

  // Handle drag end for sorting columns
  const onDragEnd = (result) => {
    if (!result.destination) return; // If dropped outside the list, do nothing

    const reorderedColumns = reorder(
      columns,
      result.source.index,
      result.destination.index
    );

    setColumns(reorderedColumns);
  };

  return (
    <ModalContainer 
      isOpen={isOpen} 
      onRequestClose={closeModal} 
      title="Customize Report"
      size={'max-w-sm'}
    >
      {/* Tab Navigation */}
      <div className="flex justify-center py-2 w-full">
        <button
          className={`p-2 font-semibold text-black ${activeTab === 'columns' ? 'border-b-2 border-primary' : ''}`}
          onClick={() => setActiveTab('columns')}
        >
          Columns
        </button>
        <button
          className={`p-2 font-semibold text-black ${activeTab === 'setReport' ? 'border-b-2 border-primary' : ''}`}
          onClick={() => setActiveTab('setReport')}
        >
          Set Report
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'columns' && (
       <>
        <DragDropContext onDragEnd={onDragEnd}>
  <Droppable droppableId="droppable-columns">
    {(provided) => (
      <div {...provided.droppableProps} ref={provided.innerRef}>
        {columns.map((column, index) => (
         <Draggable 
         key={column.id} 
         draggableId={`draggable-${column.id}`} 
         index={index}
       >
       
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                className="flex items-center gap-2 mb-2 p-2 rounded-md shadow-sm"
              >
               
                <input 
                  type="checkbox" 
                  checked={column.visible} 
                  onChange={() => toggleColumnVisibility(column.id)} 
                  className="w-5 h-5 rounded-full accent-primary hover:accent-primaryhover focus:ring-primaryhover form-checkbox"
                />
                <span className="text-sm font-semibold ml-2">{column.label}</span>

                 {/* Apply dragHandleProps to a non-interactive span */}
                 <span 
                  {...provided.dragHandleProps}
                  className="cursor-move ml-auto"
                >
                  ☰ {/* A simple drag handle icon */}
                </span>
              </div>
            )}
          </Draggable>
        ))}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
</DragDropContext>

          <div className='flex justify-center gap-2 mt-5'>
          <button onClick={() => setActiveTab('setReport')} className="bg-primary px-4 py-1.5 text-white rounded-md">Save And Next</button>
          <button onClick={closeModal} className="border border-primary text-primary px-4 py-1 rounded-md">Cancel</button>
        </div>
       </>
      )}

      {activeTab === 'setReport' && (
        <div>
          {/* Add your input fields for "Set Report" here */}

          <FormField
            label="From Date"
            type="date"
            placeholder="From Date"
          />

          <FormField
            label="To Date"
            type="date"
            placeholder="To Date"
          />

          <FormField
            label="Report Name"
            type="text"
            placeholder="Report Name"
          />

          <FormField
            label="Report Name Arabic"
            type="text"
            placeholder="Report Name Arabic"  
          />

          <div className='flex justify-center gap-2 mt-5'>
            <button className="bg-primary px-4 py-1.5 text-white rounded-md">Set Report</button>
            <button onClick={closeModal} className="border border-primary text-primary px-4 py-1 rounded-md">Cancel</button>
          </div>
         
        </div>
      )}
    </ModalContainer>
  );
};

CustomizeReportModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  columns: PropTypes.array.isRequired,
  setColumns: PropTypes.func.isRequired,
};

export default CustomizeReportModal;
