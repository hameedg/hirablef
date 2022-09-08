import React, { useEffect } from 'react';

function Modal({ setshowmedia, collaboration, handleSave, updateUI }) {
  useEffect(() => {}, [updateUI, collaboration]);
  return (
    <>
      <div className="bg-black bg-opacity-50 w-full h-full fixed z-50 inset-0 flex items-center justify-center edit-overlay">
        <div className="relative max-h-[784px] flex-col h-[94%] rounded-lg w-[500px] overflow-y-auto bg-white z-10 text-black">
          <div className="top-0 sticky z-50 flex items-center justify-between p-5 bg-[#eff2f6] py-[9px] px-6 rounded-t-lg max-h-[60px] min-h-[60px] rounded-b-sm my-auto mb-[11px]">
            <h3 className="text-[14px] font-semibold">
              Collaboration Preferences
            </h3>
            <button
              type="button"
              className="h-8 w-8 hover:bg-[#ddd] hover:scale-90 tranform ease-in-out duration-200 flex items-center justify-center rounded-full p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[2rem] text-[#aaa] hover:scale-95"
                onClick={() => setshowmedia(false)}
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
          </div>
          <div>
            <div className="relative p-6 flex-auto">
              <div className="text-[#666C7E] text-xs font-semibold flex items-center">
                I&apos;M OPEN TO
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 12 8"
                  className="w-2 h-2 ml-1.5 text-[#333342]"
                >
                  <path d="M9.88001 1.29L6.00001 5.17L2.12001 1.29C1.73001 0.899998 1.10001 0.899998 0.710011 1.29C0.320011 1.68 0.320011 2.31 0.710011 2.7L5.30001 7.29C5.69001 7.68 6.32001 7.68 6.71001 7.29L11.3 2.7C11.69 2.31 11.69 1.68 11.3 1.29C10.91 0.909998 10.27 0.899998 9.88001 1.29Z" />
                </svg>
              </div>

              {updateUI.map((c, index) => (
                <div className="mb-3 py-4 flex justify-between">
                  <div className="flex">
                    <div
                      className="flex items-center justify-center text-white rounded-xl py-3 px-3 mr-3"
                      style={{ backgroundColor: c.color }}
                    >
                      <svg
                        className="w-4 h-4 "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M32 0C14.3 0 0 14.3 0 32v464c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V32C64 14.3 49.7 0 32 0zm430.6 4.2C291.3 91.5 305.4-62.2 96 32.4V384c185.7-92.2 221.7 53.3 397.5-23.1 11.4-5 18.5-16.5 18.5-28.8V30.8c0-25.1-26.8-38.1-49.4-26.6z"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-bold text-sm text-[#333342]">
                        {c.title}
                      </h4>
                      <p className="text-[#666c7e] text-xs font-normal">
                        {c.contend}
                      </p>
                    </div>
                  </div>

                  <div>
                    <input
                      onClick={() => handleSave(index)}
                      className={`${
                        c.check ? 'bg-indigo-500' : 'bg-white'
                      } form-check-input appearance-none h-6 w-6 border border-gray-300 rounded-md bg-white checked:bg-indigo-500 checked:border-indigo-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer`}
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </div>
              ))}
              <div className="text-[#666C7E] text-xs font-semibold flex items-center">
                All
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 12 8"
                  className="w-2 h-2 ml-1.5 text-[#333342]"
                >
                  <path d="M9.88001 1.29L6.00001 5.17L2.12001 1.29C1.73001 0.899998 1.10001 0.899998 0.710011 1.29C0.320011 1.68 0.320011 2.31 0.710011 2.7L5.30001 7.29C5.69001 7.68 6.32001 7.68 6.71001 7.29L11.3 2.7C11.69 2.31 11.69 1.68 11.3 1.29C10.91 0.909998 10.27 0.899998 9.88001 1.29Z" />
                </svg>
              </div>
              {collaboration.map((c, index) => (
                <div className="mb-3 py-4 flex justify-between">
                  <div className="flex">
                    <div
                      className="flex items-center justify-center text-white rounded-xl py-3 px-3 mr-3"
                      style={{ backgroundColor: c.color }}
                    >
                      <svg
                        className="w-4 h-4 "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M32 0C14.3 0 0 14.3 0 32v464c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V32C64 14.3 49.7 0 32 0zm430.6 4.2C291.3 91.5 305.4-62.2 96 32.4V384c185.7-92.2 221.7 53.3 397.5-23.1 11.4-5 18.5-16.5 18.5-28.8V30.8c0-25.1-26.8-38.1-49.4-26.6z"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-bold text-sm text-[#333342]">
                        {c.title}
                      </h4>
                      <p className="text-[#666c7e] text-xs font-normal">
                        {c.contend}
                      </p>
                    </div>
                  </div>

                  <div>
                    <input
                      onClick={() => handleSave(index)}
                      className={`${
                        c.check ? 'bg-indigo-500' : 'bg-white'
                      } form-check-input appearance-none h-6 w-6 border border-gray-300 rounded-md bg-white checked:bg-indigo-500 checked:border-indigo-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer`}
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* footer */}
            <div className="bottom-0 sticky z-50 flex items-center justify-between bg-[#eff2f6] py-4 px-6 rounded-t-lg max-h-[60px] min-h-[60px] rounded-b-sm my-auto">
              <button
                className="bg-[#1a73e8] text-white background-transparent font-medium py-[0.625rem] px-[0.75rem] text-sm rounded-[0.3125rem] text-[0.875rem] min-w-[9.06rem] outline-none focus:outline-none mr-1 w-full"
                type="button"
                onClick={() => setshowmedia(false)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
