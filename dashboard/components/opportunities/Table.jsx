import React from 'react';

function Table() {
  return (
    <>
      <div className="text-xl font-bold tracking-tighter text-gray-900 mt-6">
        Application <span className="font-medium text-gray-500">(1)</span>
      </div>
      <section className="w-full text-sm text-left  text-gray-500 mt-6">
        <section className="text-xs text-gray-900 font-bold rounded-t-xl border capitalize bg-gray-50">
          <div className="flex justify-between">
            <div className="py-3 px-6">Position</div>
            <div className="py-3 px-6">Date applied</div>
          </div>
        </section>
        <section>
          <section className="bg-white border flex justify-between rounded-b-xl hover:bg-gray-50">
            <div className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap">
              <img
                className="w-10 h-10 rounded-full"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/24px-Google_%22G%22_Logo.svg.png?20210618182606
                "
                alt="Jese image"
              />
              <div className="pl-3">
                <div className="text-base font-semibold">
                  Talent Acquisition Coordinator
                </div>
                <div className="font-normal text-gray-500">Degreed</div>
              </div>
            </div>
            <div className="py-4 px-6">
              <a href="#" className="font-medium text-gray-800 ">
                Jul 3,2021
              </a>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}

export default Table;
