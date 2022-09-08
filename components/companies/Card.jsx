import React from 'react';
import ReactTooltip from 'react-tooltip';

const Card = () => (
  <div className=" w-full select-none bg-white border-border border rounded-md overflow-hidden">
    <ReactTooltip id="unlock" place="top" effect="solid">
      invites to unlock referral
    </ReactTooltip>
    <img
      data-tip
      data-for="unlock"
      className="w-12 float-right mt-2 mr-2 relative "
      src="/images/two iconss-01.svg"
      alt=""
    />
    {/* <div className="h-24 bg-[#c0f2ef] text-[#25b2aa] font-bold text-center text-4xl flex flex-col justify-center"> */}
    <div
      className="h-[5rem] w-[5rem] bg-[#c0f2ef] text-[#25b2aa] font-bold
     text-center text-4xl flex items-center justify-center rounded-[2.5rem] mr-28 ml-auto mt-[20px]"
    >
      {/* <span
        style={{
          letterSpacing: '30px',
        }}
      >
        T
      </span>
      <span>O</span> */}
      TO
    </div>
    <div className="p-3.8 text-center">
      <h4 className="font-medium text-base leading-snug mb-2">Tade Oyerinde</h4>
      <p className="leading-4 text-sm">Founder & CEO at Campuswire</p>
      {/* <div className="mt-4 flex items-center space-x-4">
        <button type="button" className="hover:scale-105 duration-200 ease-in">
          <img src="/images/new-message.png" alt="mail" width={16} />
        </button>
        <button type="button" className="hover:scale-105 duration-200 ease-in">
          <img src="/images/linkedin.png" alt="linkedin" width={16} />
        </button>
      </div> */}
    </div>
  </div>
);

export default Card;
