import React from 'react';
import { useRouter } from 'next/router';
import sortBy from 'lodash/sortBy';
import Button from '../components/common/Button';
import CommonModal from './CommonModal';
import Flash from '../components/svg/Flash';
import Card from '../components/Companies/Card';
import CardSkel from '../components/Companies/CardSkel';

const Tags = ({ text }) => (
  <button
    type="button"
    className="inline-block mr-[15px] mb-[15px] select-none bg-[#eff2f6] rounded-md p-1.5 text-sm border border-[#d6dae0]"
  >
    {text}
  </button>
);

function JobsModal({
  handleClose,
  name,
  logo,
  tagline,
  employees,
  funding,
  tags,
  openings,
  description,
  website,
}) {
  const router = useRouter();

  const companyData = router.query;

  const {
    //   tags = ['DemoTag'],
    //   city,
    //   state,
    //   country,
    //   description = [],
    //   companyName,
    //   logoUrl,
    //   noOfOpening,
    //   noOfAssignments,
    //   teamSize = 201,
    socialMedia = {
      instagram: 'instagram',
      linkedin: 'linkedin',
      twitter: 'twitter',
    },
    companyWebsite = 'tiktok.com',
  } = companyData;
  // const sortedTags = sortBy(tags, (e) => e.length);
  return (
    <CommonModal className="overflow-y-scroll">
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
              src={logo}
              width={100}
              height={100}
              alt={name}
              className="object-contain object-center h-[6.25rem] rounded"
            />
            <div className="flex flex-col justify-between ml-5">
              <h3 className="mb-0.5 text-base leading-[1.375rem] font-medium ">
                {name}
              </h3>

              <div className="mb-2">
                <span className="cursor-pointer text-sm leading-4">
                  {tagline}
                </span>
              </div>
              <div className="flex space-x-2">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    className="w-4 h-4 fill-current opacity-60 mr-0.5"
                    viewBox="0 0 752 752"
                  >
                    <defs>
                      <clipPath id="a">
                        <path d="m158 139.21h436v473.58h-436z" />
                      </clipPath>
                    </defs>
                    <path d="m593.06 593.06v19.734h-434.11v-19.734c0-57.566 22.867-112.78 63.574-153.48 40.703-40.707 95.914-63.578 153.48-63.578 57.57 0 112.78 22.871 153.48 63.578 40.707 40.703 63.574 95.914 63.574 153.48zm-217.06-256.52c26.168 0 51.262-10.395 69.766-28.895 18.504-18.504 28.898-43.602 28.898-69.766 0-26.168-10.395-51.262-28.898-69.766s-43.598-28.898-69.766-28.898c-26.164 0-51.262 10.395-69.762 28.898-18.504 18.504-28.898 43.598-28.898 69.766 0 26.164 10.395 51.262 28.898 69.766 18.5 18.5 43.598 28.895 69.762 28.895z" />
                  </svg>
                  <span className="inline-block  text-xs mt-0.5">
                    {employees} Employee
                  </span>
                </div>
                <div className="flex items-center whitespace-pre-wrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    className="w-4 h-4 fill-current opacity-60 mr-0.5"
                    viewBox="0 0 752 752"
                  >
                    <defs>
                      <clipPath id="b">
                        <path d="m201 139.21h350v107.79h-350z" />
                      </clipPath>
                      <clipPath id="a">
                        <path d="m155 284h442v328.79h-442z" />
                      </clipPath>
                    </defs>
                    <path d="m550.24 188.9-62.191 57.871-224.12 0.003906-62.191-57.875s30.973-43.352 81.98-49.027c49.949-5.5508 67.277 25.066 92.316 26.332 24.973-1.2656 42.363-31.879 92.25-26.332 51.066 5.6758 81.957 49.027 81.957 49.027z" />
                    <path d="m384.58 466.77v43.691c6.625-1.0781 12.055-3.6367 16.188-7.7969 4.1914-4.1641 6.2578-9.0352 6.2578-14.586 0-4.9961-1.7578-9.3125-5.2695-12.918-3.4609-3.6406-9.2188-6.4141-17.176-8.3906z" />
                    <path d="m348.19 410.81c0 3.9766 1.418 7.6484 4.2539 11.008 2.8359 3.4531 7.1211 6.1719 12.871 8.2656v-38.727c-5.2266 1.4492-9.3711 4.0078-12.469 7.5859-3.1172 3.6289-4.6562 7.5195-4.6562 11.867z" />
                    <path d="m504.85 284.05h-257.71s-123.76 97.402-83.078 276.94c0 0 13.52 51.801 75.754 51.801h272.5c62.156 0 75.633-51.801 75.633-51.801 40.668-179.54-83.098-276.94-83.098-276.94zm-79.852 234.12c-9.6836 9.25-23.16 14.922-40.422 17.02v20.938l-19.262 0.003906v-20.418c-15.305-1.5078-27.719-6.3164-37.293-14.43-9.5586-8.0469-15.66-19.426-18.301-34.133l34.637-3.082c1.4219 5.918 4.0547 11.074 7.9414 15.422 3.8984 4.3125 8.2461 7.457 13.008 9.3711v-46.898c-17.328-4.1641-30.062-10.512-38.137-18.93-8.125-8.543-12.148-18.746-12.148-30.891 0-12.211 4.5469-22.508 13.719-30.836 9.1719-8.293 21.348-13.105 36.566-14.367v-11.102h19.258v11.102c14.062 1.4492 25.281 5.4883 33.578 12.148 8.3242 6.6602 13.625 15.629 15.969 26.797l-33.609 3.6641c-2.0352-8.7578-7.3359-14.766-15.938-17.883v43.75c21.242 4.9023 35.703 11.164 43.379 18.867 7.7383 7.7422 11.559 17.641 11.559 29.785 0.015625 13.441-4.8242 24.883-14.504 34.102z" />
                  </svg>

                  <p className="text-xs text-gray-700 antialiased">
                    {funding} Funding
                  </p>
                </div>
              </div>
            </div>
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
                About {name}
              </h4>
              <div className="!leading-[20px] break-words text-sm">
                <p className="whitespace-normal !text-sm break-words antialiased text-black">
                  {description}
                </p>
                <div>&nbsp;</div>
              </div>
            </div>
            <div className="mt-4 bg-white border border-border p-3.8 rounded-md">
              <h4 className="mb-6 text-opacity-90 text-[#666] font-medium  uppercase text-[0.8125rem]">
                Key Members
              </h4>
              <div className="grid grid-cols-2 gap-3.8">
                <Card />
                <CardSkel />
              </div>
            </div>
          </div>
          <div className="w-full md:max-w-[30%] !mx-auto md:!mx-0 pb-8">
            <div className="w-full !mx-auto md:!mx-0 pb-8">
              <div className="bg-white rounded-md border border-border mb-3.8 p-5">
                <div>
                  <h4 className="mb-3 text-opacity-90 text-[#666] font-medium  uppercase text-[0.8125rem]">
                    Social
                  </h4>
                  {website ? (
                    website && (
                      <p className="font-medium text-xs mb-3 mt-4">
                        <span className="text-[#666]">Website:</span>{' '}
                        <a href={website} target="_blank" rel="noreferrer">
                          {website}
                        </a>
                      </p>
                    )
                  ) : (
                    <></>
                  )}
                  {/* <hr className="border-[#f2f2f2] my-5 -mx-8" /> */}

                  {socialMedia && (
                    <div className="flex space-x-2">
                      {socialMedia.instagram && (
                        <a
                          href={socialMedia.instagram}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src="/images/instagram.png"
                            alt="instagram"
                            width={32}
                            height={32}
                            className="cursor-pointer"
                          />
                        </a>
                      )}
                      {socialMedia.linkedin && (
                        <a
                          href={socialMedia.linkedin}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src="/images/linkedin.png"
                            alt="twitter"
                            width={32}
                            className="rounded-md cursor-pointer"
                            height={32}
                          />
                        </a>
                      )}
                      {socialMedia.twitter && (
                        <a
                          href={socialMedia.twitter}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src="/images/twitter.png"
                            alt="twitter"
                            width={32}
                            className="rounded-md cursor-pointer"
                            height={32}
                          />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="bg-white rounded-md border border-border mb-3.8 p-5 mt-6">
                <div>
                  <h4 className="mb-3 text-opacity-90 text-[#666] font-medium  uppercase text-[0.8125rem]">
                    Tags
                  </h4>
                  <div className="flex flex-wrap">
                    {tags.map((t) => (
                      <div key={t}>{t == '•' ? '' : <Tags text={t} />}</div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="rounded-md mt-6">
                <img
                  className="w-full rounded-t-md"
                  alt="join"
                  src="https://cdn.hallothere.io/icons/apply.svg"
                />
                <div className="bg-white rounded-b-md">
                  <div
                    className="font-semibold text-[#231e21] text-lg pt-4 mx-6 mb-[1px] leading-7"
                    style={{ flex: '1 1 100%' }}
                  >
                    <div>Interested in a Career at</div>

                    <div>{name}</div>
                  </div>

                  <p className="text-[15px] leading-6 mx-6 mb-[10px] text-[#231e21">
                    Click here to let the team know.
                  </p>
                  <button
                    type="button"
                    className="px-3 py-1 mx-6 mb-6 bg-[#de5209] h-7 text-white text-sm font-medium leading-6 rounded outline-none"
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CommonModal>
  );
}

export default JobsModal;
