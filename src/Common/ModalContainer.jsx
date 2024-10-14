import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const ModalContainer = ({ isOpen, onRequestClose, title, children  , size}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 flex items-center justify-center p-4"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      ariaHideApp={false}
    >
      <div className={`bg-white rounded-lg shadow-round w-full ${size ? size : 'max-w-2xl'} mx-4 md:mx-0 max-h-[90vh] overflow-y-auto`}>
      <div className="sticky top-0 z-10 bg-white flex justify-between items-center border-b p-4">
          <h2 className="text-lg ">{title}</h2>
          <button
            onClick={onRequestClose}
            className="text-gray-600 hover:text-gray-900"
          >
            &times;
          </button>
        </div>
        <div className="p-4">
          {children}
        </div>
      </div>
    </Modal>
  );
};

ModalContainer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalContainer;
