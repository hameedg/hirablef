import React from 'react';

export default function Banner1() {
  return (
    <div className="flex banner">
      <div className="w-[80%] mr-[10px] ">
        <h1 className="font-semibold text-[1.125rem] ">
          Invite a friend , earn $1,000.
        </h1>
        <h1 className="leading-[1.5rem] mt-[10px] mb-[10px]">
          Refer a friend or colleague to Collabbi . When they apply to and get
          hired by any company or Collabbi , you get $1,000.
        </h1>
        <a className="text-[0.75rem] underline text-gray-500 hover:text-black cursor-pointer  w-[fit-content] ">
          See terms
        </a>
      </div>
      <div className="w-[20%] flex justify-center items-center ">
        <div className="banner-button">Invite a friend</div>
      </div>
    </div>
  );
}
