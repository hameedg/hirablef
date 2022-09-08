import React from 'react';

const BaseModal = ({
  setDisplayModal,
  handleSave,
  experienceType,
  children,
}) => (
  <div
    id="badges-base-modal"
    className="w-[750px] bg-white absolute left-1/2 top-1/2 
      -translate-x-1/2 -translate-y-1/2 rounded-lg overflow-y-scroll"
    style={{
      height: '90vh',
      maxHeight: '950px',
    }}
    onClick={(e) => e.stopPropagation()}
  >
    <div
      className="sticky top-0 left-0 h-[75px] w-full shadow-md 
      bg-white flex justify-between items-center px-[35px] z-50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#033443] cursor-pointer"
        style={{
          height: '30px',
          width: '30px',
        }}
        onClick={() => setDisplayModal(false)}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <button
        className={`bg-black w-[100px] h-[40px] rounded-md text-white
          font-medium ${
            experienceType === ''
              ? 'cursor-not-allowed opacity-50'
              : 'cursor-pointer opacity-100'
          }`}
        disabled={experienceType === ''}
        onClick={handleSave}
      >
        Save
      </button>
    </div>
    {children}
  </div>
);

export default BaseModal;
