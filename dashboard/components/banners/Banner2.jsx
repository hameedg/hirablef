import React from 'react';

export default function () {
  return (
    <div className="p-[2rem] pt-[2.5rem] mt-[4rem] border-[1px] border-[#dadada] shadow-border rounded-[5px] flex relative ">
      <div className="w-[0.375rem] bg-[#23a59b] rounded-[50px] absolute top-[0.5rem] left-[0.5rem] h-[calc(100%-16px)]" />
      <div>
        <h1 className="text-[2rem] font-semibold ">
          Finish completing your profile.
        </h1>
        <h1 className="mt-[1rem] mb-[1.5rem] leading-[1.5rem] max-w-[37.5rem] ">
          We recommend adding more details to your profile so you show up in
          more searches for recruiters.
        </h1>
        <div className="banner-button border-[5px] border-white">
          View my profile
        </div>
      </div>
    </div>
  );
}
