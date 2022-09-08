const JoinWaitlist2 = () => (
  <div className=" mt-7 w-[60.313rem] rounded-2xl mx-auto cursor-default flex gap-4">
    <nav className="flex justify-center items-start w-[58%] bg-white mt-4 rounded-2xl">
      <div className="h-fit flex flex-col w-full border border-[#ebedf1] rounded-2xl p-2.5">
        <sections className="grid grid-cols-6 gap-4 h-full border-b ">
          <div className="flex flex-col col-span-4 justify-between p-4">
            <div>
              <h3 className="flex font-semibold mb-1 leading-5 text-[20px] tracking-[-0.015em] fontGazpacho">
                Your stats
              </h3>
              <p className="flex font-medium tracking-tight mb-1 leading-6 text-[14px] text-gray-700">
                Let&apos;s start from the belief that you are qualified to get a
                great job. Complete levels, build experience and get discovered
                by your dream companies.
              </p>
            </div>
            <div>
              <div className="flex font-extrabold mb-1 leading-5 text-4xl text-gray-900">
                500
              </div>
            </div>
          </div>
          <div className="col-span-2 p-4">
            <h4 className="flex font-semibold leading-5 text-[20px] tracking-[-0.015em] fontGazpacho">
              Level
            </h4>
            <div className="flex items-center">
              <div className="flex font-extrabold mt-2 leading-5 text-4xl text-gray-900">
                01
              </div>
            </div>
            <img className="" src="/images/level1.png" alt="" />
          </div>
        </sections>
        <sections className="grid grid-cols-3 gap-4 p-4">
          <div className="flex flex-col items-start justify-start">
            <p className="flex font-bold mb-1 leading-5 max-w-2xl text-xs text-green-500">
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
            <p className="flex font-bold mb-1 leading-5 max-w-2xl text-xs text-yellow-500">
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
            <p className="flex font-bold mb-1 leading-5 max-w-2xl text-xs text-red-500">
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
      </div>
    </nav>
    <nav className="flex justify-center items-center bg-white mt-4 rounded-2xl w-[40%]">
      <div className="h-full flex w-full border border-[#ebedf1] rounded-2xl">
        <div className=" flex h-fit">
          <img
            className="w-full rounded-b-2xl"
            src="images/joinNow.jpg"
            rel=""
          />
        </div>
      </div>
    </nav>
  </div>
);

export default JoinWaitlist2;
