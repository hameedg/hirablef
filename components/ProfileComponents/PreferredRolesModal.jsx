/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

function PreferredRolesModal({
  preferredRoles,
  showroles,
  setshowroles,
  updatePreferredRoles,
  handlePreferredRolesSave,
  closePreferredRolesModal,
  inputValue,
  handleInputValueChange,
  autocomplete,
}) {
  return (
    <div>
      {showroles ? (
        <>
          <div className="bg-black bg-opacity-70 w-full h-full fixed z-50 inset-0 flex items-center justify-center edit-overlay">
            <div className="relative max-h-[746px] flex-col h-[94%] rounded-lg w-[640px] overflow-y-auto bg-white z-10 text-black min-w-[640px] my-6 mx-auto font-inter">
              <div className="p-6 max-w-full">
                {/* CONTENT START */}
                <div className="flex items-center justify-between h-12 py-0 px-[25px] sticky mb-4">
                  <button
                    type="button"
                    className="mr-2 h-8 w-8 tranform ease-in-out duration-200 flex items-center justify-center rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#033443]"
                      onClick={closePreferredRolesModal}
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
                  </button>
                  <button
                    className="bg-[#201e27] text-white background-transparent font-semibold px-3 py-2 text-[0.875rem] min-w-[6.25rem] min-h-[2.5rem] h-10 text-sm rounded-[5px] outline-none focus:outline-none mr-1"
                    type="button"
                    onClick={handlePreferredRolesSave}
                  >
                    Save
                  </button>
                </div>
                <div className="w-[90%] m-auto">
                  <h2 className="font-bold font-inter text-center text-2xl mb-4">
                    Edit My Interests
                  </h2>
                  <div className="text-left ml-[10px]">
                    <h5 className="text-[0.875rem] font-semibold text-[#201e27]">
                      Which of these roles are you most interested in?
                    </h5>
                    <p className="text-[#788699] mt-1 text-[0.875rem] font-semibold">
                      Choose up to 7
                    </p>
                  </div>
                  <div className="relative">
                    <input
                      className="tags-input"
                      type="text"
                      value={inputValue}
                      onChange={handleInputValueChange}
                      placeholder="Example: Sales, Marketing..."
                    />
                    <div
                      className={`${
                        autocomplete.disabled ? 'hidden' : ''
                      } ml-[0.5rem] w-[90%] absolute z-10 border rounded-md
                       border-gray-300 py-1 bg-white max-h-60 overflow-y-scroll`}
                    >
                      {autocomplete.data.map((item, index) => (
                        <div
                          key={index}
                          className="autocomplete-options"
                          onClick={() => updatePreferredRoles(item)}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-full">
                    {preferredRoles.map((role, index) => (
                      <span
                        key={index}
                        className="preferred_roles"
                        style={{
                          background: role.selected ? '#61a0ff' : '',
                          color: role.selected ? '#fff' : '',
                        }}
                        onClick={() => updatePreferredRoles(role.name)}
                      >
                        {role.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* CONTENT END */}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default PreferredRolesModal;
