import React from 'react';

const EditBaseModal = ({
  handleClose,
  handleSave,
  handleDelete,
  selectedIndex,
  children,
}) => {
  return (
    <div
      className="w-[750px] bg-white absolute left-1/2 top-1/2 
      -translate-x-1/2 -translate-y-1/2 rounded-lg overflow-y-scroll"
      style={{
        height: '90vh',
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
          onClick={handleClose}
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
        <div>
          {selectedIndex !== null ? (
            <>
              <button
                className="bg-red-500 w-[100px] h-[40px] rounded-md text-white
          font-medium cursor-pointer mr-3"
                onClick={handleDelete}
              >
                Delete
              </button>
              <button
                className="bg-black w-[100px] h-[40px] rounded-md text-white
          font-medium cursor-pointer"
                onClick={handleSave}
              >
                Save
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default EditBaseModal;
