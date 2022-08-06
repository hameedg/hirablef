/* eslint-disable no-multi-assign */
import React from 'react';

function Document({ setdocuments }) {
  return (
    <>
      <div
        className="h-72 border-[1.5px] border-[#d9d9d9] 
        rounded-[9px] w-[648px] py-6 px-7 flex flex-col gap-7 newbg_resume bg-white"
      >
        <p className="uppercase font-medium">DOCUMENT</p>
        <div className="pt-16 px-4 text-center">
          <p className="font-medium">Add your documents</p>
          <p className="my-2 text-sm text-gray-900 font-normal">
            Your documents is essential for recruiters to learn more about you!
            Upload one as soon as possible to boost your chances of being
            discovered
          </p>
          <button
            type="button"
            className="experience_button mt-2"
            onClick={() => {
              document.body.scrollTop = document.documentElement.scrollTop = 0;
              setdocuments(true);
            }}
          >
            Add Documents
          </button>
        </div>
      </div>
    </>
  );
}

export default Document;
