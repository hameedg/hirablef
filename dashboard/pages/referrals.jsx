import React from 'react';
import Sidebar from '../components/common/Sidebar';

function referrals() {
  return (
    <>
      <Sidebar />
      <main className="w-main float-right bg-[#edf3f3] ">
        <div className="bg-white h-[8.75rem] flex flex-col items-center justify-center">
          <h1 className="text-2xl font-extrabold my-4">Referrals</h1>
        </div>
      </main>
    </>
  );
}

export default referrals;
