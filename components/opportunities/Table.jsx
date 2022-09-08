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
        <div className="flex border-b w-full h-fit px-4 py-2 gap-4">
          {check ? (
            <svg viewBox="3 3 16 16" className="h-5 w-5 rounded-full border">
              <g
                transform="matrix(1.99997 0 0 1.99997-10.994-2071.68)"
                fill="#da4453"
              >
                <rect
                  y="1037.36"
                  x="7"
                  height="8"
                  width="8"
                  fill="#32c671"
                  rx="4"
                />
                <path
                  d="m123.86 12.966l-11.08-11.08c-1.52-1.521-3.368-2.281-5.54-2.281-2.173 0-4.02.76-5.541 2.281l-53.45 53.53-23.953-24.04c-1.521-1.521-3.368-2.281-5.54-2.281-2.173 0-4.02.76-5.541 2.281l-11.08 11.08c-1.521 1.521-2.281 3.368-2.281 5.541 0 2.172.76 4.02 2.281 5.54l29.493 29.493 11.08 11.08c1.52 1.521 3.367 2.281 5.54 2.281 2.172 0 4.02-.761 5.54-2.281l11.08-11.08 58.986-58.986c1.52-1.521 2.281-3.368 2.281-5.541.0001-2.172-.761-4.02-2.281-5.54"
                  fill="#fff"
                  transform="matrix(.0436 0 0 .0436 8.177 1039.72)"
                  stroke="none"
                  strokeWidth="9.512"
                />
              </g>
            </svg>
          ) : (
            <div className="h-5 w-5 rounded-full border border-gray-200" />
          )}
          <div className="flex font-semibold leading-5 text-[12px] text-gray-800 tracking-[-0.015em]">
            {name}
          </div>
        </div>
      </div>
    </>
  );
}
