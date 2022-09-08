import React from 'react';
import Sidebar from '../../components/common/Sidebar';
import Opportunities from '../../components/opportunities/opportunities';

import WalletComponent from '../../components/opportunities/WalletComponent';

function wallet() {
  return (
    <>
      <Sidebar />
      <main className="w-main float-right bg-[#edf3f3] ">
        <div className="bg-white h-[8.75rem] flex flex-col items-center justify-center">
          <h1 className="text-2xl font-extrabold my-4">Wallet</h1>
        </div>
        <div className="max-w-5xl px-4 grid grid-cols-3 mx-auto gap-2">
          <WalletComponent />
          <WalletComponent />
          <WalletComponent />
        </div>
        <div className="max-w-5xl px-4 mx-auto">
          <Opportunities />
        </div>
      </main>
    </>
  );
}

export default wallet;
