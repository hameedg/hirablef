import React, { useState } from 'react';
import { BsPencilSquare } from 'react-icons/bs';
import Sidebar from '../components/common/Sidebar';
import Table from '../components/opportunities/Table';

function referrals() {
  const [value, setValue] = useState(
    "Hey, I've been using MetaDev for a while and thought you would like it as well. I look to forward to see you working on some amazing ideas, transforming your experiences and achieving your goals being a part of this wonderful community"
  );
  return (
    <>
      <Sidebar />
      <main className="w-main float-right bg-[#edf3f3] ">
        <div className="bg-white h-[8.75rem] flex flex-col items-center justify-center">
          <h1 className="text-2xl font-extrabold my-4">Referrals</h1>
        </div>
        <div className=" min-h-[100vh] h-fit pt-6 bg-[#f8f8f8]">
          <div className="pl-[2rem] 2xl:pl-0 flex flex-col items-start 2xl:items-center justify-center">
            <div className="w-[644px] mx-auto border-2 h-fit flex flex-col my-2 px-[20px]  items-center bg-white justify-center ">
              <p className="text-[23px] mt-10 font-bold font-inter leading-[1.3rem] mb-4  ">
                Build the Hirable community!
              </p>
              <p className=" text-center px-10 leading-[1.3rem] mb-4 text-[15px] tracking-[-0.015em] font-inter">
                Know someone who can add value to the community of MetaDev?
                Invite them, earn crypto when they sign up, when they achieve
                their goals or when they succeed.
              </p>
              <p className=" text-center px-10 leading-[1.3rem] mb-10 text-[15px] tracking-[-0.015em] font-inter">
                Be a part of your community success
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <input
                    className="w-[318px] tracking-tight font-inter pl-[14px] text-sm border border-gray-400 rounded-lg  focus:outline-none py-[14px] h-[46px] "
                    type="text"
                    name="input"
                    placeholder="Search by name or email"
                  />
                </div>
                <button className="w-[206px] ml-2 text-white rounded-xl h-[48px] bg-[#456add] hover:bg-blue-700 font-inter font-semibold text-center ">
                  Send invite
                </button>
              </div>
              <div className="flex items-center mt-2 justify-between">
                <div>
                  <input
                    className="w-[318px] tracking-tight font-inter pl-[14px] text-sm border border-gray-400 rounded-lg  focus:outline-none py-[14px] h-[46px] "
                    type="text"
                    name="input"
                    placeholder="Code"
                  />
                </div>
                <button className="w-[206px] ml-2 text-white rounded-xl h-[48px] bg-[#456add] hover:bg-blue-700 font-inter font-semibold text-center ">
                  Copy invite link
                </button>
              </div>

              {/* TextArea Box */}
              <div className="w-[520px] 2xl:w-[550px] h-fit mb-10 hover:bg-[#eeeaea] mt-4 border border-gray-300 rounded-md ">
                <div className="flex items-center justify-start py-4">
                  <div className="mx-4">
                    <BsPencilSquare />
                  </div>
                  <div className="font-bold text-base font-inter leading-[1.3rem]">
                    Write a message for your invites
                  </div>
                </div>
                <div className="flex px-4 flex-col items-start justify-center">
                  <p className="text-sm text-[#a8abb4] leading-[1.45rem] font-inter ">
                    The note below will be sent to your invites
                  </p>
                  <textarea
                    className="mb-4 mt-2 resize-none overflow-y-auto overflow-hidden leading-[1.3rem] text-[14px] tracking-[-0.015em] p-4 font-inter bg-[#f4f4f3]"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    name=""
                    id=""
                    cols="55"
                    rows="4"
                  />
                </div>
              </div>
            </div>
            <div className="pb-10 w-[646px] mx-auto h-fit">
              <Table />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default referrals;
