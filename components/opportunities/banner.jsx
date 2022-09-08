import React from 'react';

export default function Banner() {
  return (
    <div className="w-full flex items-center justify-between bg-white rounded-[20px] p-[15px] mt-[2rem]">
      <h1>
        💡 Looking for opportunities you&apos;ve posted ?{' '}
        <span className="font-semibold">Switch to your Hiring profile.</span>
      </h1>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="black"
        height="1.5em"
        width="1.5em"
        className="cursor-pointer"
      >
        <path d="m4.12 6.137 1.521-1.52 7 7-1.52 1.52z" />
        <path d="m4.12 11.61 7.001-7 1.52 1.52-7 7z" />
      </svg>
    </div>
  );
}
