import React from 'react';
import Button from '../components/common/Button';
import CommonModal from './CommonModal';
import Flash from '../components/svg/Flash';

const JobsModal = ({ handleClose }) => (
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
            src="https://picsum.photos/200"
            width={100}
            height={100}
            alt="company_logo"
            className="object-contain object-center h-[6.25rem] rounded"
          />
          <div className="flex flex-col justify-between ml-5">
            <h3 className="mb-0.5 text-base leading-[1.375rem] font-medium ">
              Software Engineer, Backend - University Graduate 2022
            </h3>

            <div className="mb-2">
              <span className="cursor-pointer text-sm leading-4 hover:underline hover:text-highlight">
                Verkada
              </span>{' '}
              <span className="text-xs text-light ">
                • Full Time • Posted about 12 hours ago
              </span>
            </div>
            <div className="flex items-center">
              <svg
                data-v-18568cdd=""
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="map-marker-alt"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="w-[9px] h-3 text-lighter mr-2"
              >
                <path
                  data-v-18568cdd=""
                  fill="currentColor"
                  d="M192 96c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64zm0-256C85.961 0 0 85.961 0 192c0 77.413 26.97 99.031 172.268 309.67 9.534 13.772 29.929 13.774 39.465 0C357.03 291.031 384 269.413 384 192 384 85.961 298.039 0 192 0zm0 473.931C52.705 272.488 32 256.494 32 192c0-42.738 16.643-82.917 46.863-113.137S149.262 32 192 32s82.917 16.643 113.137 46.863S352 149.262 352 192c0 64.49-20.692 80.47-160 281.931z"
                />
              </svg>
              <span className="inline-block  text-xs mt-0.5">
                San Mateo, CA
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-border my-3.8 -mx-3.8" />
      <div className="flex ml-[1.125rem]">
        <div className="flex space-x-3">
          {/* <Button>
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
          </Button> */}
          <Button>
            <span className="inline-block">Get Experience</span>
          </Button>
        </div>
        <div className="ml-auto">
          <button
            type="button"
            className="shadow-sm space-x-1.5 text-white bg-blue-600 border self-center duration-150 ease-in border-blue-500 px-4 flex items-center justify-center rounded font-semibold text-sm leading-[18.2px] antialiased h-10 select-none hover:shadow-md hover:-translate-y-0.5"
          >
            <Flash />
            Get Referral
          </button>
        </div>
      </div>
    </div>
    <div className="overflow-y-scroll">
      <div className="pt-6 px-3.8 block md:flex md:!space-x-4">
        <div className="w-full md:w-[70%] mb-3.8 ">
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
        <div className="w-full md:max-w-[30%] !mx-auto md:!mx-0 pb-8">
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

export default JobsModal;
