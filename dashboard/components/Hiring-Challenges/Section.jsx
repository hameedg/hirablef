import React from 'react';

function Section() {
  return (
    <>
      <div className=" mt-4 w-[60.313rem] mx-auto cursor-default">
        <div className="grid grid-cols-4 gap-4">
          <div className="p-4 w-full bg-white rounded-2xl cursor-pointer border border-[#ebedf1] flex flex-col justify-center items-start transition duration-200 hover:-translate-y-0.5 hover:shadow-lg ">
            <h2 className="text-gray-800 text-sm font-normal">Referrals</h2>
            <div className="text-gray-700 text-xl font-bold">11</div>
          </div>
          <div className="p-4 w-full bg-white rounded-2xl cursor-pointer border border-[#ebedf1] flex flex-col justify-center items-start transition duration-200 hover:-translate-y-0.5 hover:shadow-lg ">
            <h2 className="text-gray-800 text-sm font-normal">
              Experience Points
            </h2>
            <div className="text-gray-700 text-xl font-bold">2001</div>
          </div>
          <div className="p-4 w-full bg-white rounded-2xl cursor-pointer border border-[#ebedf1] flex flex-col justify-center items-start transition duration-200 hover:-translate-y-0.5 hover:shadow-lg ">
            <h2 className="text-gray-800 text-sm font-normal">
              Recommendations
            </h2>
            <div className="text-gray-700 text-xl font-bold">4</div>
          </div>
          <div className="p-4 w-full bg-white rounded-2xl cursor-pointer border border-[#ebedf1] flex flex-col justify-center items-start transition duration-200 hover:-translate-y-0.5 hover:shadow-lg ">
            <h2 className="text-gray-800 text-sm font-normal">Others</h2>
            <div className="text-gray-700 text-xl font-bold">00</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
