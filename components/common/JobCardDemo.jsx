import React from 'react';
import Button from './Button';
import Flash from '../svg/Flash';

const JobCardDemo = ({ openModal }) => (
  <div className="border p-3.8 group bg-white rounded-md hover:shadow-lg duration-150 ease-in cursor-pointer">
    <button type="button" onClick={openModal} className="text-left w-full">
      <div className="flex justify-between mb-2.5">
        <img
          width={90}
          height={90}
          className="rounded-md"
          src="https://jumpstart-static.s3.amazonaws.com/backend/organizations/organization/0unx3UBmQyq6mXkH0PtAuw.png"
          alt="company_logo"
        />
        <div className="mb-1 pt-0 inline-block px-2 h-6 bg-level-badge text-center text-black text-level-badge-fs leading-level-badge-lh rounded-4xl">
          Internship
        </div>
      </div>
      <h4 className="font-medium text-base leading-snug mb-2">
        Product Manager
      </h4>
      <div className="flex items-center cursor-pointer mb-3 break-words truncate">
        <p className="hover:underline hover:text-highlight leading-4 text-sm">
          Samsung Research America
        </p>
      </div>
    </button>
    <hr className="bg-border" style={{ margin: '.9375rem calc(-.9375rem)' }} />
    <div className="flex justify-between">
      <Button>
        <svg
          data-v-4a7785f2=""
          aria-hidden="true"
          focusable="false"
          data-prefix="fal"
          data-icon="bookmark"
          role="img"
          width="10.5"
          height="14"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className=" inline-block"
        >
          <path
            data-v-4a7785f2=""
            fill="currentColor"
            d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm16 456.287l-160-93.333-160 93.333V48c0-8.822 7.178-16 16-16h288c8.822 0 16 7.178 16 16v408.287z"
          />
        </svg>
        <span className="inline-block">Save</span>
      </Button>
      <button
        type="button"
        onClick={openModal}
        className="shadow-sm space-x-1.5 text-white bg-blue-600 border self-center duration-150 ease-in border-blue-500 px-4 flex items-center justify-center rounded font-semibold text-sm leading-[18.2px] antialiased h-10 select-none hover:shadow-md hover:-translate-y-0.5"
      >
        <Flash />
        Get Referral
      </button>
    </div>
  </div>
);

export default JobCardDemo;
