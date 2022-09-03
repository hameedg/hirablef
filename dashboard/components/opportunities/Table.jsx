import React, { useState } from 'react';

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
        <TableRow
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/24px-Google_%22G%22_Logo.svg.png?20210618182606"
          name="Talent Acquisition Coordinator"
          status="Degreed"
          available="Jul 3,2021"
        />
        <TableRow
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/24px-Google_%22G%22_Logo.svg.png?20210618182606"
          name="Talent Acquisition Coordinator"
          status="Degreed"
          available="Jul 3,2021"
        />
        <section />
      </section>
    </>
  );
}

export default Table;

function TableRow({ img, name, status, available }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="bg-white border flex flex-col rounded-b-xl cursor-pointer">
        <sections
          className="flex justify-between"
          onClick={() => setShow(!show)}
        >
          <div className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap">
            <img
              className="w-10 h-10 rounded-full"
              src={img}
              alt="Jese image"
            />
            <div className="pl-3">
              <div className="text-base font-semibold">{name}</div>
              <div className="font-normal text-gray-500">{status}</div>
            </div>
          </div>
          <div className="py-4 px-6">
            <a href="#" className="font-medium text-gray-800 ">
              {available}
            </a>
          </div>
        </sections>
        {show && <Progress />}
      </div>
    </>
  );
}

function Progress() {
  const [bar, setBar] = useState(20);
  return (
    <>
      <sections className="bg-gray-50 flex p-2 gap-2">
        <div className="w-full md:w-1/2">
          <div className="h-full border border-gray-100 bg-white rounded-md shadow-xl">
            <div className="p-8 px-6 pb-0">
              <div className="flex flex-wrap items-center justify-between -m-2 mb-0">
                <div className="w-auto p-2">
                  <h2 className="text-gray-900 text-lg font-semibold">
                    Users Profile Progress
                  </h2>
                </div>
              </div>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                      Profile Completed
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-blue-600">
                      {bar}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                  <div
                    style={{ width: `${bar}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="h-full border border-gray-100 bg-gray-50 rounded-md shadow-xl">
            <ProgressStatus
              name="Sign up completed"
              status
              setBar={setBar}
              bar={bar}
            />
            <ProgressStatus
              name="Complete your profile page"
              status={false}
              setBar={setBar}
              bar={bar}
            />
            <ProgressStatus
              name="Complete personal assessment"
              status={false}
              setBar={setBar}
              bar={bar}
            />
            <ProgressStatus
              name="Apply, Participate & Compete"
              status={false}
              setBar={setBar}
              bar={bar}
            />
            <ProgressStatus
              name="Improve user rankings"
              status={false}
              setBar={setBar}
              bar={bar}
            />
          </div>
        </div>
      </sections>
    </>
  );
}

function ProgressStatus({ name, status, setBar, bar }) {
  const [check, setCheck] = useState(status);
  return (
    <>
      <div
        className={`flex flex-col items-center justify ${
          check ? 'bg-white' : 'bg-gray-50'
        }`}
        onClick={() => {
          setCheck(true);
          !check && bar < 100 && setBar(bar + 20);
        }}
      >
        <div className="flex border-b w-full h-fit p-4 gap-4">
          {check ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 rounded-full border"
              viewBox="0 0 118 118"
              fill="none"
            >
              <path
                d="M58.86 0C67.99 0 76.63 2.08 84.35 5.79C81.19 8.29 78.26 10.69 75.53 13C70.33 11.11 64.72 10.08 58.87 10.08C45.4 10.08 33.2 15.54 24.38 24.37C15.55 33.2 10.09 45.39 10.09 58.86C10.09 72.33 15.55 84.52 24.38 93.35C33.21 102.18 45.4 107.64 58.87 107.64C72.34 107.64 84.54 102.18 93.36 93.35C102.19 84.52 107.65 72.33 107.65 58.86C107.65 55.66 107.34 52.52 106.75 49.49C109.28 46.19 111.87 42.9 114.52 39.64C116.6 45.66 117.73 52.13 117.73 58.86C117.73 75.11 111.14 89.83 100.49 100.48C89.84 111.13 75.12 117.72 58.87 117.72C42.62 117.72 27.9 111.13 17.25 100.48C6.59 89.83 0 75.11 0 58.86C0 42.61 6.59 27.89 17.24 17.24C27.89 6.59 42.61 0 58.86 0ZM31.44 49.19L45.8 49L46.87 49.28C49.77 50.95 52.5 52.86 55.05 55.02C56.89 56.58 58.65 58.28 60.32 60.12C65.47 51.83 70.96 44.22 76.76 37.22C83.11 29.55 89.85 22.59 96.93 16.24L98.33 15.7H114L110.84 19.21C101.13 30 92.32 41.15 84.36 52.65C76.4 64.16 69.28 76.04 62.95 88.27L60.98 92.07L59.17 88.2C55.83 81.03 51.83 74.45 47.06 68.57C42.29 62.69 36.74 57.47 30.27 53.03L31.44 49.19Z"
                fill="#01A601"
              />
            </svg>
          ) : (
            <div className="h-5 w-5 rounded-full border border-gray-100" />
          )}
          <div className="flex font-semibold mb-1 leading-5 text-[14px] text-gray-800 tracking-[-0.015em]">
            {name}
          </div>
        </div>
      </div>
    </>
  );
}
