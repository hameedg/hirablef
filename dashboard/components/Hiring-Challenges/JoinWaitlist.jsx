import Link from 'next/link';

const JoinWaitlist = () => (
  <nav className="flex justify-center items-center bg-white mt-4 rounded-2xl">
    <div className="h-full  w-full border border-[#ebedf1] rounded-2xl">
      <div className="float-left h-fit p-5 w-[73%]">
        <h3 className="flex font-semibold mb-1 leading-5 max-w-2xl text-base">
          A new age 3 day college & 3 day company experience
        </h3>
        <div className="mb-2 mt-2 text-sm max-w-2xl font-normal text-gray-500 leading-status-description">
          Recent graduates want great jobs. Companies want great talent with
          experience. Get ready to explore a new age 3 day college & 3 day
          company experience
        </div>
      </div>
      <div className="text-center w-[12%] flex flex-wrap content-center float-right h-fit mt-10 mr-4">
        <Link href="/dashboard/profile" passHref>
          <button
            type="button"
            className="outline-none border-none pt-2 pb-pb-progress-btn pr-4 pl-4 font-semibold h-9 bg-progress-btn text-white rounded-md cursor-pointer text-font-progress-btn"
          >
            Join waitlist
          </button>
        </Link>
      </div>
      <img className="w-full rounded-b-2xl" src="images/3day.svg" rel="" />
    </div>
  </nav>
);

export default JoinWaitlist;
