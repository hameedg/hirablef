/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

function PreferredLocationModal({
  setshowlocation,
  showlocation,
  handleInputValueChange,
  updatePreferredLocation,
  handlePreferredRolesSave,
  inputValue,
  autocomplete,
}) {
  return (
    <div>
      {showlocation ? (
        <div>
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
                      className="h-7 w-7 text-[#033443]"
                      onClick={() => setshowlocation(false)}
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
                    className="bg-[#201e27] text-white background-transparent font-bold px-3 py-2  min-w-[100px] h-10 text-sm rounded-[5px] outline-none focus:outline-none mr-1"
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
                      Which location would you like to work in?
                    </h5>
                    <p className="text-[#788699] mt-1 font-inter">
                      Choose up to 7
                    </p>
                  </div>
                  <div className="relative flex-auto">
                    <input
                      className="w-[90%] ml-[0.5rem] mt-[7px] mb-[7px] text-[#6b7280] outline-none rounded-[0.3125rem] border-1 border-[#ddd] h-10 text-[0.875rem] pl-[13px]"
                      type="text"
                      value={inputValue}
                      onChange={handleInputValueChange}
                      placeholder="Example: London, Spain..."
                    />
                    <div
                      className={`${
                        autocomplete.disabled ? 'hidden' : ''
                      } absolute z-10 border rounded-md border-gray-300 py-1 bg-white ml-1`}
                      style={{ width: 'calc(100% + 20px)' }}
                    >
                      {autocomplete.data.map((item, index) => (
                        <div
                          key={index}
                          className="px-3 mt-1 h-10 bg-red-500 flex items-center cursor-pointer 
                          font-medium text-sm hover:bg-gray-100"
                          onClick={() => updatePreferredLocation(item)}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="ml-1">
                    <p className="preferred_roles">Totally Open</p>
                    <p className="preferred_roles" id="SQL">
                      Remote
                    </p>
                    <p className="preferred_roles" id="SQL">
                      Atlanta, GA
                    </p>
                    <p className="preferred_roles" id="SQL">
                      Austin, TX
                    </p>
                    <p className="preferred_roles" id="SQL">
                      Boston, MA
                    </p>
                    <p className="preferred_roles" id="SQL">
                      Chicago, IL
                    </p>
                    <p className="preferred_roles" id="SQL">
                      Denver, CO
                    </p>
                    <p className="preferred_roles" id="SQL">
                      Los Angeles, CA
                    </p>
                    <p className="preferred_roles" id="SQL">
                      Nashville, TN
                    </p>
                    <p className="preferred_roles" id="SQL">
                      New York, NY
                    </p>
                    <p className="preferred_roles" id="SQL">
                      Raleigh, NC
                    </p>
                    <p className="preferred_roles" id="SQL">
                      San Diego, CA
                    </p>
                    <p className="preferred_roles" id="SQL">
                      San Francisco, CA
                    </p>
                    <p className="preferred_roles" id="SQL">
                      Seattle, WA
                    </p>
                    <p className="preferred_roles" id="SQL">
                      Wilmington, DE
                    </p>
                    <p className="preferred_roles" id="SQL">
                      Houston, TX
                    </p>
                    <p className="preferred_roles" id="SQL">
                      Dallas, TX
                    </p>
                    <p className="preferred_roles" id="SQL">
                      Detroit MI
                    </p>
                  </div>
                </div>
              </div>
              {/* CONTENT END */}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default PreferredLocationModal;
