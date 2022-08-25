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
      <div
        className="bg-white border flex flex-col rounded-b-xl hover:bg-gray-50"
        onClick={() => setShow(!show)}
      >
        <sections className="flex justify-between">
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

function Progress({}) {
  return (
    <>
      <div className="ml-6 relative flex pb-6">
        <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
          <div className="pointer-events-none h-full w-1 bg-[#008000]" />
        </div>
        <div className="relative z-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ml-2 text-white bg-[#008000]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="h-8 w-8"
          >
            <path
              fill="currentColor"
              d="m14.83 4.89l1.34.94l-5.81 8.38H9.02L5.78 9.67l1.34-1.25l2.57 2.4z"
            />
          </svg>
        </div>
        <p className="ml-2.5 flex flex-row justify-between font-semibold mb-4 text-base max-w-2xl">
          Signed In
        </p>
      </div>
      <div className="ml-6 relative flex pb-6">
        <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
          <div className="pointer-events-none h-full w-1 bg-[#008000]" />
        </div>
        <div className="relative z-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ml-2 text-white bg-[#008000]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="h-8 w-8"
          >
            <path
              fill="currentColor"
              d="m14.83 4.89l1.34.94l-5.81 8.38H9.02L5.78 9.67l1.34-1.25l2.57 2.4z"
            />
          </svg>
        </div>
        <p className="ml-2.5 flex flex-row justify-between font-semibold mb-4 text-base max-w-2xl">
          Created a Post
        </p>
      </div>
      <div className="ml-6 relative flex pb-6">
        <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
          <div className="pointer-events-none h-full w-1 bg-gray-600" />
        </div>
        <div className="relative z-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ml-2 text-white bg-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15l-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152l2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
            />
          </svg>
        </div>
        <p className="ml-2.5 flex flex-row justify-between font-semibold mb-4 text-base max-w-2xl">
          Accepted a friend
        </p>
      </div>
      <div className="ml-6 relative flex pb-6">
        <div className="relative z-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ml-2 text-white bg-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0a3 3 0 1 1 3 3a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9Z"
            />
            <circle cx="12" cy="19" r="1" fill="currentColor" />
          </svg>
        </div>
        <p className="ml-2.5 flex flex-row justify-between font-semibold mb-4 text-base max-w-2xl">
          Rewards Collected
        </p>
      </div>
    </>
  );
}
