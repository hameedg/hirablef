import { useState } from 'react';

function Stats() {
  const [states, setstates] = useState({});
  setTimeout(() => {
    setstates({
      title: 'Your stats',
      description:
        'Let&apos;s start from the belief that you are qualified to get a great job. Complete levels, build experience and get discovered by your dream companies.',
      innovative: 'Innovative Index',
      index: 500,
      level: 1,
      img: '/images/level1.png',
      views: 5,
      interactions: 12,
      challenges: 3,
      rankingsImg: '/images/rank.svg',
    });
  }, 5000);
  return (
    <div className=" mt-4 w-[60.313rem] h-[340px] rounded-2xl mx-auto cursor-default flex gap-4 overflow-hidden">
      <nav className="flex justify-center items-start w-[58%] bg-white h-fit  flex-col  border border-[#ebedf1] rounded-2xl p-2.5">
        <sections className="grid grid-cols-6 gap-4 h-full border-b w-full">
          <div className="flex flex-col col-span-4 justify-between p-4">
            <div>
              {states.title ? (
                <h3 className="flex font-semibold mb-1 leading-5 text-[20px] tracking-[-0.015em] fontGazpacho">
                  {states.title}
                </h3>
              ) : (
                <div className="h-[22px] bg-gray-200 rounded-md animate-pulse w-[50%] mb-1" />
              )}
              {states.description ? (
                <p className="flex font-normal tracking-tight mb-1 leading-6 text-[14px] text-gray-700">
                  {states.description}
                </p>
              ) : (
                <div className="animate-pulse gap-1">
                  <div className="h-[14px] bg-gray-200 rounded-full w-full mb-1" />
                  <div className="h-[14px] bg-gray-200 rounded-full w-full mb-1" />
                  <div className="h-[14px] bg-gray-200 rounded-full w-[90%] mb-1" />
                </div>
              )}
            </div>
            <div>
              {states.innovative ? (
                <p className="flex font-bold mb-1.5 leading-5 max-w-2xl text-xs text-blue-500">
                  {states.innovative}
                </p>
              ) : (
                <div className="h-[12px] bg-gray-200 rounded-full w-[40%] animate-pulse mb-1.5" />
              )}
              {states.index ? (
                <div className="flex font-extrabold mb-1 leading-5 text-4xl text-gray-900">
                  {states.index}
                </div>
              ) : (
                <div className="h-[36px] w-[100px] bg-gray-200 rounded-md mt-1 animate-pulse mb-1" />
              )}
            </div>
          </div>
          <div className="col-span-2 p-4">
            {states.level ? (
              <h4 className="flex font-semibold leading-5 text-[20px] tracking-[-0.015em] fontGazpacho">
                Level
              </h4>
            ) : (
              <div className="h-[20px] w-[70%] bg-gray-200 rounded-md animate-pulse mb-1" />
            )}
            <div className="flex items-center justify-center">
              {states.level ? (
                <div className="flex font-extrabold mt-2 leading-5 text-4xl text-gray-900">
                  {states.level}
                </div>
              ) : (
                <div className="h-[36px] w-[50px] bg-gray-200 rounded-full animate-pulse  mt-2" />
              )}
            </div>
            {states.img ? (
              <img className="" src={states.img} alt="" />
            ) : (
              <div className="flex justify-center items-center w-full h-[125px] mt-1 bg-gray-200 animate-pulse rounded" />
            )}
          </div>
        </sections>
        <sections className="grid grid-cols-3 gap-4 px-4 pt-2 items-center w-full justify-center">
          {states.views ? (
            <div className="flex flex-col items-start justify-start">
              <p className="flex font-bold mb-1 leading-[1.25rem] max-w-2xl text-[14px] text-green-500">
                • Profile Views
              </p>

              <div className="pl-2 flex font-extrabold leading-7 text-2xl text-gray-900">
                {states.views}
              </div>
              <p className="pl-2 flex font-medium mb-1 leading-5 tracking-[-0.015em] max-w-2xl text-[13px] text-gray-600">
                Companies viewed your profile
              </p>
            </div>
          ) : (
            <div className="flex flex-col w-full items-start justify-start animate-pulse">
              <p className="mb-1 w-[75%] h-[14px] rounded-full bg-gray-200" />
              <div className="pl-2 mb-1 h-[24px]  rounded-full w-[25%] bg-gray-200" />
              <p className="pl-2 mb-1 h-[13px] w-[100%]  rounded-full bg-gray-200" />
              <p className="pl-2 mb-1 h-[13px] w-[50%]  rounded-full bg-gray-200" />
            </div>
          )}
          {states.interactions ? (
            <div className="flex flex-col items-start justify-start">
              <p className="flex font-bold mb-1 leading-[1.25rem] max-w-2xl text-[14px] text-yellow-500">
                • Interactions
              </p>
              <div className="pl-2 flex font-extrabold leading-7 text-2xl text-gray-900">
                {states.interactions}
              </div>
              <p className="pl-2 flex font-medium mb-1 leading-5 tracking-[-0.015em] max-w-2xl text-[13px] text-gray-600">
                Interactions with companies
              </p>
            </div>
          ) : (
            <div className="flex flex-col w-full items-start justify-start animate-pulse">
              <p className="mb-1 w-[75%] h-[14px] rounded-full bg-gray-200" />
              <div className="pl-2 mb-1 h-[24px]  rounded-full w-[25%] bg-gray-200" />
              <p className="pl-2 mb-1 h-[13px] w-[100%]  rounded-full bg-gray-200" />
              <p className="pl-2 mb-1 h-[13px] w-[50%]  rounded-full bg-gray-200" />
            </div>
          )}
          {states.challenges ? (
            <div className="flex flex-col items-start justify-start">
              <p className="flex font-bold mb-1 leading-[1.25rem] max-w-2xl text-[14px] text-red-500">
                • Hiring Challenges
              </p>
              <div className="pl-2 flex font-extrabold leading-7 text-2xl text-gray-900">
                {states.challenges}
              </div>
              <p className="pl-2 flex font-medium mb-1 leading-5 tracking-[-0.015em] max-w-2xl text-[13px] text-gray-600">
                Hiring Challenges & hackathons
              </p>
            </div>
          ) : (
            <div className="flex flex-col w-full items-start justify-start animate-pulse">
              <p className="mb-1 w-[75%] h-[14px] rounded-full bg-gray-200" />
              <div className="pl-2 mb-1 h-[24px]  rounded-full w-[25%] bg-gray-200" />
              <p className="pl-2 mb-1 h-[13px] w-[100%]  rounded-full bg-gray-200" />
              <p className="pl-2 mb-1 h-[13px] w-[50%]  rounded-full bg-gray-200" />
            </div>
          )}

          <div />
          <div />
        </sections>
      </nav>

      <nav className="w-[40%] h-[340px] bg-white p-4 border rounded-lg flex flex-col justify-start overflow-hidden">
        <div className=" flex flex-col items-center justify-center">
          {states.rankingsImg ? (
            <h2 className="font-semibold text-center w-full">My Rankings</h2>
          ) : (
            <div className="h-[14px] w-[60%] rounded-md animate-pulse bg-gray-200" />
          )}
          {states.rankingsImg ? (
            <img
              className="w-auto h-[225px]  object-cover rounded-lg"
              src={states.rankingsImg}
              alt=""
            />
          ) : (
            <div className="flex justify-center items-center w-full h-[225px] mt-1 bg-gray-200 animate-pulse rounded" />
          )}
          {states.rankingsImg ? (
            <p className="flex font-normal text-center w-[80%] tracking-tight mb-1 leading-6 text-[14px] text-gray-700">
              Your objective must always be to get better, no matter what your
              rank is
            </p>
          ) : (
            <div className="animate-pulse w-full mb-1 mt-1">
              <div className="h-[14px] w-full rounded-md bg-gray-200 mb-1" />
              <div className="h-[14px] w-[60%] rounded-md bg-gray-200" />
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Stats;
