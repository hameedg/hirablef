import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Info from '../svg/Info';
import CircularProgressBar from '../svg/CircularProgressBar';

const HeaderNav = () => {
  const [completion, setCompletition] = useState(0);

  const user = useSelector((state) => state.user);

  useEffect(() => {
    setCompletition(user.completion);
  }, [user]);

  return (
    <nav className="flex justify-center items-center bg-white mt-4 rounded-2xl">
      <div className="h-40  w-full border border-[#ebedf1] rounded-2xl">
        <div className="float-left h-40 p-5 w-[73%]">
          <h3 className="flex font-semibold mb-1 leading-5 max-w-2xl text-base">
            Complete your profile
          </h3>
          <div className="mb-2 mt-2 text-sm max-w-2xl font-normal text-gray-500 leading-status-description">
            Extend your profile information and improve your
            <br />
            chances of finding the opportunities significantly
          </div>
          <Link href="/dashboard/profile" passHref>
            <button
              type="button"
              className="outline-none border-none pt-2 pb-pb-progress-btn pr-4 pl-4 font-semibold h-9 bg-progress-btn text-white rounded-md cursor-pointer text-font-progress-btn"
            >
              Edit profile
            </button>
          </Link>
        </div>
        <div className="text-center w-[12%] flex flex-wrap content-center float-left h-40">
          <div className="mb-2 mt-2 text-sm max-w-2xl font-normal text-gray-500 leading-status-description mr-auto">
            Profile status
          </div>
          <h3 className="flex font-semibold mb-1 leading-5 max-w-2xl text-base">
            Okay
            <Info />
          </h3>
        </div>
        <div className="w-[15%] float-left h-40">
          <CircularProgressBar
            progress={completion}
            bgColor="#ecedf0"
            lineWidth={17}
          >
            <div className="flex items-center justify-center h-full">
              <p className="text-2xl text-[#01A2A4]">{completion}%</p>
            </div>
          </CircularProgressBar>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNav;
