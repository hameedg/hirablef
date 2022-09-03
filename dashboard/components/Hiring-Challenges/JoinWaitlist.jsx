import Link from 'next/link';

const JoinWaitlist = () => (
  <div className=" mt-4 w-[60.313rem] rounded-2xl mx-auto cursor-default">
    <nav className="flex flex-row justify-center items-center  mt-4 gap-4 rounded-2xl ">
      <div className="border-[#ebedf1] flex bg-white rounded-2xl">
        <div className="h-[220px] w-[48%] flex flex-col my-auto">
          <div className="float-left h-fit p-5">
            <h3 className="flex font-semibold mb-1 leading-5 max-w-2xl text-base">
              A new age 3 day college & 3 day company experience
            </h3>
            <div className="mb-2 mt-2 text-sm max-w-2xl font-normal text-gray-500 leading-status-description">
              Recent graduates want great jobs. Companies want great talent with
              experience. Get ready to explore a new age 3 day college & 3 day
              company experience
            </div>
          </div>
          <div className="text-center px-5 pb-5 flex flex-wrap content-center float-right h-fit ">
            <Link href="/dashboard/profile" passHref>
              <button
                type="button"
                className="outline-none border-none pt-2 pb-pb-progress-btn pr-4 pl-4 font-semibold h-9 bg-progress-btn text-white rounded-md cursor-pointer text-font-progress-btn"
              >
                Join waitlist
              </button>
            </Link>
          </div>
        </div>
        <img
          src="/images/students.jpg"
          className="object-fill w-[60%] h-[220px] rounded-2xl"
          alt=""
        />
      </div>
    </nav>
  </div>
);

export default JoinWaitlist;
