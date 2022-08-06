import React from 'react';
import Button from '../components/common/Button';
import CommonModal from './CommonModal';
import Flash from '../components/svg/Flash';

const RolesModal = ({ handleClose }) => (
  <CommonModal>
    <div className="bg-white sticky antialiased top-0 inline-block w-full p-3.8  border-b border-border">
      <div className="relative">
        <button type="button" className="top-0 right-3.8 absolute">
          <svg
            viewBox="0 0 13 13"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            onClick={handleClose}
            style={{
              fill: 'none',
              stroke: 'rgba(0, 0, 0, 0.822)',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: '1.6px',
            }}
          >
            <g id="cross">
              <line x1="3" x2="10" y1="3" y2="10" />
              <line x1="3" x2="10" y1="10" y2="3" />
            </g>
          </svg>
        </button>
        <div className="flex items-center">
          <img
            src="/images/fashion-designer.png"
            width={100}
            height={100}
            alt="company_logo"
            className="object-contain object-center h-[6.25rem] rounded"
          />
          <div className="flex flex-col justify-between ml-5">
            <h3 className="mb-0.5 text-base leading-[1.375rem] font-medium ">
              Product Manager
            </h3>

            <div className="mb-2">
              <span className="cursor-pointer text-sm leading-4 hover:underline hover:text-highlight">
                8 Openings
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-border my-3.8 -mx-3.8" />
      <div className="flex ml-[1.125rem]">
        <div className="flex space-x-3">
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
            >
              <path
                data-v-4a7785f2=""
                fill="currentColor"
                d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm16 456.287l-160-93.333-160 93.333V48c0-8.822 7.178-16 16-16h288c8.822 0 16 7.178 16 16v408.287z"
              />
            </svg>
            <span className="inline-block">Save</span>
          </Button>
          <Button>
            <svg
              data-v-4a7785f2=""
              aria-hidden="true"
              focusable="false"
              data-prefix="fal"
              data-icon="share"
              role="img"
              width="15.75"
              height="14"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                data-v-4a7785f2=""
                fill="currentColor"
                d="M564.907 196.35L388.91 12.366C364.216-13.45 320 3.746 320 40.016v88.154C154.548 130.155 0 160.103 0 331.19c0 94.98 55.84 150.231 89.13 174.571 24.233 17.722 58.021-4.992 49.68-34.51C100.937 336.887 165.575 321.972 320 320.16V408c0 36.239 44.19 53.494 68.91 27.65l175.998-184c14.79-15.47 14.79-39.83-.001-55.3zm-23.127 33.18l-176 184c-4.933 5.16-13.78 1.73-13.78-5.53V288c-171.396 0-295.313 9.707-243.98 191.7C72 453.36 32 405.59 32 331.19 32 171.18 194.886 160 352 160V40c0-7.262 8.851-10.69 13.78-5.53l176 184a7.978 7.978 0 0 1 0 11.06z"
              />
            </svg>
            <span className="inline-block">Share</span>
          </Button>
        </div>
        <div className="ml-auto">
          <button
            type="button"
            className="flex items-center bg-btn-green rounded-md hover:bg-btn-green-hover px-4 font-semibold h-10 text-sm select-none"
          >
            <Flash />
            <span className="ml-1.5">Quick Apply</span>
          </button>
        </div>
      </div>
    </div>
    <div className="overflow-y-scroll">
      <div className="pt-6 px-3.8 block md:flex md:!space-x-4">
        <div className="w-full md:w-[67.6%] mb-3.8 ">
          <div
            style={{ height: 'fit-content' }}
            className="bg-white rounded-md border border-border p-3.8"
          >
            <h4 className="mb-4 text-opacity-90 text-[#666] font-medium  uppercase text-[0.8125rem] leading-[1.125rem]">
              JOB DESCRIPTION
            </h4>
            <div className="!leading-[20px] break-words text-sm">
              <p className="whitespace-normal !text-sm break-words antialiased text-black">
                Laboris reprehenderit exercitation id pariatur dolore commodo
                proident irure officia voluptate cupidatat dolore consectetur
                ut. Cillum eu occaecat ex dolore commodo nostrud in anim laboris
                commodo excepteur ex anim. Adipisicing deserunt id magna labore
                ad dolore ex eiusmod aliquip incididunt excepteur veniam nisi.
                In et aliqua voluptate ut occaecat deserunt et anim Lorem
                deserunt sit minim. Eu qui consequat excepteur ut amet proident
                amet veniam aliqua quis.
              </p>
              <div>&nbsp;</div>
            </div>
          </div>
        </div>
        <div className="w-full md:max-w-[31.9%] !mx-auto md:!mx-0 pb-8">
          <div className="bg-white rounded-md border border-border mb-3.8 p-3.8">
            <h4 className="mb-4 text-opacity-90 text-[#666] font-medium  uppercase text-[0.8125rem] leading-[1.125rem]">
              About CompanyName
            </h4>
            <p className="font-medium text-xs mb-3 mt-6">
              <span className="text-[#666]">Employee:</span> 200 - 300
            </p>
            <hr className="border-[#f2f2f2] my-4 -mx-3.8" />
            <div className="text-xs leading-[1.6] max-w-[40rem]">
              <p className="my-2">
                Degreed is all about building a better future — for people and
                for businesses. We’re doing our part by crafting products and a
                company culture to fuel innovation and drive the change the
                world needs right now.
              </p>
              <p className="my-2">
                We believe everyone is driven by an innate desire to learn and
                grow. By equipping people with the skills the world needs, we
                help them redefine their careers, their companies, and their
                fields. We believe that together we can push the limits of
                what’s possible. We propel people and their companies toward
                their aspirations and goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </CommonModal>
);

export default RolesModal;
