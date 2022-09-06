import React, { useState } from 'react';

function Section() {
  const [section, setSection] = useState({});
  setTimeout(() => {
    setSection({
      referrals: 11,
      experience: 2001,
      recommendations: 4,
      others: 1,
    });
  }, 5000);
  return (
    <>
      <div className=" mt-4 w-[60.313rem] mx-auto cursor-default">
        <div className="grid grid-cols-4 gap-4">
          <div className="p-4 w-full bg-white rounded-2xl cursor-pointer border border-[#ebedf1] flex flex-col justify-center items-start transition duration-200 hover:-translate-y-0.5 hover:shadow-lg ">
            {section.referrals ? (
              <h2 className="text-gray-800 mb-2 text-sm font-semibold">
                Referrals
              </h2>
            ) : (
              <div className="h-[12px] w-full bg-gray-200 rounded-full animate-pulse mb-2" />
            )}
            {section.referrals ? (
              <div className="flex font-extrabold mb-1 leading-5 text-4xl text-gray-900">
                {section.referrals}
              </div>
            ) : (
              <div className="h-[36px] w-[50px] bg-gray-200 rounded-full animate-pulse mb-1" />
            )}
          </div>
          <div className="p-4 w-full bg-white rounded-2xl cursor-pointer border border-[#ebedf1] flex flex-col justify-center items-start transition duration-200 hover:-translate-y-0.5 hover:shadow-lg ">
            {section.referrals ? (
              <h2 className="text-gray-800 mb-2 text-sm font-semibold">
                Experience Points
              </h2>
            ) : (
              <div className="h-[12px] w-full bg-gray-200 rounded-full animate-pulse mb-2" />
            )}
            {section.experience ? (
              <div className="flex font-extrabold mb-1 leading-5 text-4xl text-gray-900">
                {section.experience}
              </div>
            ) : (
              <div className="h-[36px] w-[50px] bg-gray-200 rounded-full animate-pulse mb-1" />
            )}
          </div>
          <div className="p-4 w-full bg-white rounded-2xl cursor-pointer border border-[#ebedf1] flex flex-col justify-center items-start transition duration-200 hover:-translate-y-0.5 hover:shadow-lg ">
            {section.referrals ? (
              <h2 className="text-gray-800 mb-2 text-sm font-semibold">
                Recommendations
              </h2>
            ) : (
              <div className="h-[12px] w-full bg-gray-200 rounded-full animate-pulse mb-2" />
            )}
            {section.recommendations ? (
              <div className="flex font-extrabold mb-1 leading-5 text-4xl text-gray-900">
                {section.recommendations}
              </div>
            ) : (
              <div className="h-[36px] w-[50px] bg-gray-200 rounded-full animate-pulse mb-1" />
            )}
          </div>
          <div className="p-4 w-full bg-white rounded-2xl cursor-pointer border border-[#ebedf1] flex flex-col justify-center items-start transition duration-200 hover:-translate-y-0.5 hover:shadow-lg ">
            {section.referrals ? (
              <h2 className="text-gray-800 mb-2 text-sm font-semibold">
                Others
              </h2>
            ) : (
              <div className="h-[12px] w-full bg-gray-200 rounded-full animate-pulse mb-2" />
            )}
            {section.others ? (
              <div className="flex font-extrabold mb-1 leading-5 text-4xl text-gray-900">
                {section.others}
              </div>
            ) : (
              <div className="h-[36px] w-[50px] bg-gray-200 rounded-full animate-pulse mb-1" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
