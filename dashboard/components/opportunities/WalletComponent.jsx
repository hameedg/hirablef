import React from 'react';

export default function WalletComponent() {
  return (
    <div className="w-[fit-content] bg-white p-[32px] rounded-[20px]  flex flex-col justify-between items-center max-w-[300px] mt-[2rem]">
      <div className="w-full mb-[20px]  p-[10px]  bg-[#eeeeee] wallet min-h-[138px] border-[8px] border-[#e1e1e1] rounded-[20px]">
        <h1 className="14px mb-[20px] leading-[1.42] text-[#c1c1c1] font-semibold">
          Wallet Balance
        </h1>
        <h1 className="text-[31px] tracking-[-0.5px] text-[#d1d1d1] font-semibold">
          $0.00
        </h1>
      </div>
      <div className="mb-[20px]">
        <h1 className="font-semibold text-[1rem] leading-[1.5]">
          You haven&apos;t set up payments!
        </h1>
        <p className="text-[0.75rem] leading-[16px] tracking-[0.15px]">
          Set up you Collabbi Wallet to start getting paid 💸
        </p>
      </div>
      <div
        onClick={() => {}}
        className="bg-yellow-400 px-[50px] py-[15px] rounded-[2rem] cursor-pointer hover:bg-yellow-300 w-[fit-content] transition-all duration-75 font-semibold mb-[4px] "
      >
        Set Up Payments
      </div>
    </div>
  );
}
