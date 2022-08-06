import React, { useState, useEffect } from 'react';
import Modal from './Modal';

function AddCollabs() {
  const [showmedia, setshowmedia] = useState(false);
  const [updateUI, setUpdateUI] = useState([]);

  const [collaboration, setCollaboration] = useState([
    {
      title: 'Activism',
      contend: 'Supporting campaigns to bring about political change',
      color: '#ff68d4',
      svg: `<svg
                      className="w-4 h-4 "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M32 0C14.3 0 0 14.3 0 32v464c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V32C64 14.3 49.7 0 32 0zm430.6 4.2C291.3 91.5 305.4-62.2 96 32.4V384c185.7-92.2 221.7 53.3 397.5-23.1 11.4-5 18.5-16.5 18.5-28.8V30.8c0-25.1-26.8-38.1-49.4-26.6z"
                      />
                    </svg>`,
      check: false,
    },
    {
      title: 'Co-founding a company',
      contend:
        'Building up a business from vision to reality with a co-founder',
      color: '#37c5ab',
      svg: `<svg
                      className="w-4 h-4 "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M32 0C14.3 0 0 14.3 0 32v464c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V32C64 14.3 49.7 0 32 0zm430.6 4.2C291.3 91.5 305.4-62.2 96 32.4V384c185.7-92.2 221.7 53.3 397.5-23.1 11.4-5 18.5-16.5 18.5-28.8V30.8c0-25.1-26.8-38.1-49.4-26.6z"
                      />
                    </svg>`,
      check: false,
    },
    {
      title: 'Advising companies',
      contend: 'Advising companies on certain topics',
      color: '#ff7474',
      svg: `<svg
                      className="w-4 h-4 "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M32 0C14.3 0 0 14.3 0 32v464c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V32C64 14.3 49.7 0 32 0zm430.6 4.2C291.3 91.5 305.4-62.2 96 32.4V384c185.7-92.2 221.7 53.3 397.5-23.1 11.4-5 18.5-16.5 18.5-28.8V30.8c0-25.1-26.8-38.1-49.4-26.6z"
                      />
                    </svg>`,
      check: false,
    },
    {
      title: 'Content Creation',
      contend: 'Creating content for brands and companies',
      color: '#894cff',
      svg: `<svg
                      className="w-4 h-4 "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M32 0C14.3 0 0 14.3 0 32v464c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V32C64 14.3 49.7 0 32 0zm430.6 4.2C291.3 91.5 305.4-62.2 96 32.4V384c185.7-92.2 221.7 53.3 397.5-23.1 11.4-5 18.5-16.5 18.5-28.8V30.8c0-25.1-26.8-38.1-49.4-26.6z"
                      />
                    </svg>`,
      check: false,
    },
  ]);
  useEffect(() => {}, [showmedia]);

  const handleSave = (index) => {
    const clicked = [...collaboration];
    clicked[index].check = !clicked[index].check;
    if (clicked[index].check) {
      updateUI.push(clicked[index]);
    } else {
      updateUI.pop(clicked[index]);
    }
  };

  return (
    <div className="">
      <div className="w-[305px] rounded-[9px] border-[#D9D9D9] border-[1.5px] p-6 group transition bg-white">
        <div className="flex flex-col items-center">
          <img
            src="https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg?w=2000"
            alt=""
          />
          <h6 className="mt-4 font-inter font-normal text-[18.72px] leading-[23px]">
            Your availability
          </h6>
          <p className="text-sm text-center text-light-grey font-light mt-2 flex items-center leading-5">
            You are currently open to collab:
          </p>
          <div className="mt-4">
            {updateUI.map((newui) => (
              <div className="mb-1 py-1">
                <div className="flex">
                  <div
                    className="flex items-center justify-center  text-white rounded-xl px-4 mr-1"
                    style={{ backgroundColor: newui.color }}
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
                      {newui.title}
                    </h4>
                    <p className="text-[#666c7e] text-xs font-normal">
                      {newui.contend}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="text-white bg-collabbi-green mt-4 py-2.5 px-4 rounded-md font-semibold cursor-pointer text-[13px]"
            onClick={() => setshowmedia(true)}
          >
            Add collabs
          </button>
        </div>
      </div>
      {showmedia ? (
        <>
          <Modal
            setshowmedia={setshowmedia}
            collaboration={collaboration}
            handleSave={handleSave}
            updateUI={updateUI}
          />
        </>
      ) : null}
    </div>
  );
}

export default AddCollabs;
