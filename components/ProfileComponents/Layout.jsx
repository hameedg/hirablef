import React from 'react';

const Layout = ({ children }) => (
  <div className="min-h-screen pb-[20px] bg-[#f8f8f8] overflow-hidden">
    <div className="w-full h-[133px] bg-white flex flex-col items-center justify-center" />
    <div className="text-[#033443] max-w-[968px] mx-auto pt-5 my-0">
      {children}
    </div>
  </div>
);

export default Layout;
