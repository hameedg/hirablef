import React from 'react';

function Analytics() {
  return (
    <nav className="w-[40%] h-full mt-4">
      <div className="bg-white p-4 border rounded-lg h-auto w-full flex flex-col justify-start">
        <div className=" flex justify-between">
          <h2 className="font-semibold">Analytics</h2>
          <h2 className="text-sm text-blue-500 font-semibold cursor-pointer hover:underline">
            See more
          </h2>
        </div>
        <div className="px-3 py-4 grid grid-cols-2 gap-6 items-center justify-center mt-2">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold tracking-tight text-blue-500 flex items-center">
              62,345
              <span className="text-sm text-blue-500 bg-blue-100 rounded-full px-1 ml-2">
                ↑
              </span>
            </h2>
            <div className="text-sm text-blue-500 font-semibold">
              Total Users
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold tracking-tight text-blue-500 flex items-center">
              345
              <span className="text-sm text-blue-500 bg-blue-100 rounded-full px-1 ml-2">
                ↑
              </span>
            </h2>
            <div className="text-sm text-blue-500 font-semibold">Companies</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold tracking-tight text-blue-500 flex items-center">
              62,345
              <span className="text-sm text-blue-500 bg-blue-100 rounded-full px-1 ml-2">
                ↑
              </span>
            </h2>
            <div className="text-sm text-blue-500 font-semibold">
              Total Users
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold tracking-tight text-blue-500 flex items-center">
              345
              <span className="text-sm text-blue-500 bg-blue-100 rounded-full px-1 ml-2">
                ↑
              </span>
            </h2>
            <div className="text-sm text-blue-500 font-semibold">Companies</div>
          </div>
        </div>
      </div>
      <div className="h-20 p-4 rounded-lg bg-[#1E86FF] w-full mt-10 text-white flex items-center justify-between cursor-pointer transform  hover:scale-95 transition-transform  duration-200">
        <div className="flex items-center">
          <div className="text-4xl font-semibold px-2">74</div>
          <div>new candidates to review</div>
        </div>
        <div className="px-4 transform transition-transform duration-100 hover:translate-x-2">
          {' '}
          &gt;{' '}
        </div>
      </div>
      {/* <div className="bg-white p-4 mt-4 border rounded-lg h-[145px] w-full flex flex-col justify-start" /> */}
    </nav>
  );
}

export default Analytics;
