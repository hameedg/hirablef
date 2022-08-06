import React from 'react';

function SocialModal({
  setshowmedia,
  saveData,
  onInputChange,
  linkedininput,
  websiteinput,
  setprint,
  projectinput,
  githubinput,
}) {
  const onClick = () => {
    setprint(true);
    setshowmedia(false);
  };
  return (
    <>
      <div className="bg-black bg-opacity-70 w-full h-full fixed z-50 inset-0 flex items-center justify-center edit-overlay">
        <div className="relative max-h-[784px] flex-col h-[94%] rounded-lg w-[600px] overflow-y-auto bg-white z-10 text-black">
          <div className="top-0 sticky z-50 flex items-center justify-between p-5 bg-[#eff2f6] py-[9px] px-6 rounded-t-lg max-h-[60px] min-h-[60px] rounded-b-sm my-auto mb-[11px]">
            <h3 className="text-[14px] font-semibold">Edit Links</h3>
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
              <div className="mb-3 pt-0">
                <h1 className="text-[0.75rem] font-medium mb-1">
                  Linkedin URL <span className="opacity-60">(optional)</span>
                </h1>
                <input
                  type="text"
                  placeholder="https://www.scholarly-science.com"
                  value={linkedininput}
                  name="linkedininput"
                  onChange={onInputChange}
                  className="px-3 py-3 placeholder-light-grey text-black placeholder-opacity-90 relative bg-white rounded text-sm border-[1.5px] focus:outline-none focus:border-[#2dc5a1] focus:border-2 w-full transition duration-200 ease-in h-[2.5rem]"
                />
              </div>
              <div className="mb-3 pt-0">
                <h1 className="text-[0.75rem] font-medium mb-1">
                  Github URL <span className="opacity-60">(optional)</span>
                </h1>
                <input
                  type="text"
                  name="githubinput"
                  value={githubinput}
                  onChange={onInputChange}
                  placeholder="https://www.scholarly-science.git"
                  className="px-3 py-3 placeholder-light-grey text-black placeholder-opacity-90 relative bg-white rounded text-sm border-[1.5px] focus:outline-none focus:border-[#2dc5a1] focus:border-2 w-full transition duration-200 ease-in h-[2.5rem]"
                />
              </div>
              <div className="mb-3 pt-0">
                <h1 className="text-[0.75rem] font-medium mb-1">
                  Line ID <span className="opacity-60">(optional)</span>
                </h1>
                <input
                  type="text"
                  placeholder="Worked on something you loved add a link"
                  className="px-3 py-3 placeholder-light-grey text-black placeholder-opacity-90 relative bg-white rounded text-sm border-[1.5px] focus:outline-none focus:border-[#2dc5a1] focus:border-2 w-full transition duration-200 ease-in h-[2.5rem]"
                />
              </div>
              <div className="mb-3 pt-0">
                <h1 className="text-[0.75rem] font-medium mb-1">
                  WeChat ID <span className="opacity-60">(optional)</span>
                </h1>
                <input
                  type="text"
                  placeholder="https://www.scholarly-science.com"
                  className="px-3 py-3 placeholder-light-grey text-black placeholder-opacity-90 relative bg-white rounded text-sm border-[1.5px] focus:outline-none focus:border-[#2dc5a1] focus:border-2 w-full transition duration-200 ease-in h-[2.5rem]"
                />
              </div>
              <div className="mb-3 pt-0">
                <h1 className="text-[0.75rem] font-medium mb-1">
                  Personal Website{' '}
                  <span className="opacity-60">(optional)</span>
                </h1>
                <input
                  type="text"
                  name="websiteinput"
                  value={websiteinput}
                  onChange={onInputChange}
                  placeholder="https://www.scholarly-science.com"
                  className="px-3 py-3 placeholder-light-grey text-black placeholder-opacity-90 relative bg-white rounded text-sm border-[1.5px] focus:outline-none focus:border-[#2dc5a1] focus:border-2 w-full transition duration-200 ease-in h-[2.5rem]"
                />
              </div>
              <div className="mb-3 pt-0">
                <h1 className="text-[0.75rem] font-medium mb-1">
                  Passion Projects{' '}
                  <span className="opacity-60">(optional)</span>
                </h1>
                <input
                  type="text"
                  name="projectinput"
                  value={projectinput}
                  onChange={onInputChange}
                  placeholder="Worked on something you loved add a link"
                  className="px-3 py-3 placeholder-light-grey text-black placeholder-opacity-90 relative bg-white rounded text-sm border-[1.5px] focus:outline-none focus:border-[#2dc5a1] focus:border-2 w-full transition duration-200 ease-in h-[2.5rem]"
                />
              </div>
            </div>
            {/* footer */}
            <div className="flex items-center justify-end mb-10 mr-6 rounded-b">
              <button
                className="bg-[#1a73e8] text-white background-transparent font-medium py-[0.625rem] px-[0.75rem] text-sm rounded-[0.3125rem] text-[0.875rem] min-w-[9.06rem] outline-none focus:outline-none mr-1"
                type="button"
                onClick={saveData}
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

export default SocialModal;
