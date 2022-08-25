const JoinWaitlist2 = () => (
  <div className=" mt-4 w-[60.313rem] h-[340px] rounded-2xl mx-auto cursor-default flex gap-4 overflow-hidden">
    <nav className="flex justify-center items-start w-[58%] bg-white h-fit  flex-col  border border-[#ebedf1] rounded-2xl p-2.5">
      <sections className="grid grid-cols-6 gap-4 h-full border-b">
        <div className="flex flex-col col-span-4 justify-between p-4">
          <div>
            <h3 className="flex font-semibold mb-1 leading-5 text-[20px] tracking-[-0.015em] fontGazpacho">
              Your stats
            </h3>
            <p className="flex font-normal tracking-tight mb-1 leading-6 text-[14px] text-gray-700">
              Let&apos;s start from the belief that you are qualified to get a
              great job. Complete levels, build experience and get discovered by
              your dream companies.
            </p>
          </div>
          <div>
            <p className="flex font-bold mb-1.5 leading-5 max-w-2xl text-xs text-blue-500">
              Innovative Index
            </p>
            <div className="flex font-extrabold mb-1 leading-5 text-4xl text-gray-900">
              500
            </div>
          </div>
        </div>
        <div className="col-span-2 p-4">
          <h4 className="flex font-semibold leading-5 text-[20px] tracking-[-0.015em] fontGazpacho">
            Level
          </h4>
          <div className="flex items-center justify-center">
            <div className="flex font-extrabold mt-2 leading-5 text-4xl text-gray-900">
              01
            </div>
          </div>
          <img className="" src="/images/level1.png" alt="" />
        </div>
      </sections>
      <sections className="grid grid-cols-3 gap-4 px-4 pt-2 items-center justify-center">
        <div className="flex flex-col items-start justify-start">
          <p className="flex font-bold mb-1 leading-[1.25rem] max-w-2xl text-[14px] text-green-500">
            • Profile Views
          </p>
          <div className="pl-2 flex font-extrabold leading-7 text-2xl text-gray-900">
            05
          </div>
          <p className="pl-2 flex font-medium mb-1 leading-5 tracking-[-0.015em] max-w-2xl text-[13px] text-gray-600">
            Companies viewed your profile
          </p>
        </div>
        <div className="flex flex-col items-start justify-start">
          <p className="flex font-bold mb-1 leading-[1.25rem] max-w-2xl text-[14px] text-yellow-500">
            • Interactions
          </p>
          <div className="pl-2 flex font-extrabold leading-7 text-2xl text-gray-900">
            12
          </div>
          <p className="pl-2 flex font-medium mb-1 leading-5 tracking-[-0.015em] max-w-2xl text-[13px] text-gray-600">
            Interactions with companies
          </p>
        </div>
        <div className="flex flex-col items-start justify-start">
          <p className="flex font-bold mb-1 leading-[1.25rem] max-w-2xl text-[14px] text-red-500">
            • Hiring Challenges
          </p>
          <div className="pl-2 flex font-extrabold leading-7 text-2xl text-gray-900">
            3
          </div>
          <p className="pl-2 flex font-medium mb-1 leading-5 tracking-[-0.015em] max-w-2xl text-[13px] text-gray-600">
            Hiring Challenges & hackathons
          </p>
        </div>

        <div />
        <div />
      </sections>
    </nav>

    <nav className="w-[40%] h-[340px] bg-white p-4 border rounded-lg flex flex-col justify-start overflow-hidden">
      <div className=" flex flex-col items-center justify-center">
        <h2 className="font-semibold text-center w-full">My Rankings</h2>
        <img
          className="w-auto h-[275px]  object-cover rounded-lg"
          src="/images/rank.svg"
          alt=""
        />
        <p className="flex font-medium mb-1 leading-[1.25rem] max-w-2xl text-xs text-gray-800">
          Your objective must always be to get better, no matter what your rank
          is
        </p>
      </div>
    </nav>
  </div>
);

export default JoinWaitlist2;
