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

function JobsModal({ handleClose }) {
  const router = useRouter();

  const companyData = router.query;

  const {
    tags = ['DemoTag'],
    city,
    state,
    country,
    description = [],
    companyName,
    logoUrl,
    noOfOpening,
    noOfAssignments,
    teamSize = 201,
    socialMedia = {
      instagram: 'instagram',
      linkedin: 'linkedin',
      twitter: 'twitter',
    },
    companyWebsite = 'tiktok.com',
  } = companyData;
  const sortedTags = sortBy(tags, (e) => e.length);
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
              src="https://seeklogo.com//images/T/tiktok-app-icon-logo-0F5AD7AE01-seeklogo.com.png"
              width={100}
              height={100}
              alt="company_logo"
              className="object-contain object-center h-[6.25rem] rounded"
            />
            <div className="flex flex-col justify-between ml-5">
              <h3 className="mb-0.5 text-base leading-[1.375rem] font-medium ">
                TikTok
              </h3>

              <div className="mb-2">
                <span className="cursor-pointer text-sm leading-4">
                  Samsung Research America Tagline Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit.
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 fill-current opacity-40 mr-3"
                  viewBox="0 0 17.924 17.924"
                >
                  <polygon points="12.475,8.868 12.481,8.859 12.48,8.858   " />
                  <path d="M17.211,10.107c0,0-0.183-0.249-0.616-0.415c0,0-0.036-0.011-0.092-0.029    c-0.386-0.181-0.752-0.297-0.752-0.297c-0.078-0.028-0.146-0.056-0.21-0.083c-0.261-0.13-0.45-0.279-0.45-0.279    s-0.002-0.002-0.203-0.203c0.361-0.374,0.626-0.882,0.709-1.368c0.064-0.066,0.129-0.172,0.157-0.341    c0.052-0.188,0.117-0.517,0.002-0.67c-0.007-0.008-0.013-0.015-0.02-0.022c0.108-0.396,0.246-1.214-0.244-1.772    c-0.044-0.056-0.318-0.384-0.906-0.558l-0.28-0.097c-0.463-0.143-0.754-0.174-0.766-0.176c-0.021-0.002-0.043,0-0.063,0.005    c-0.016,0.005-0.071,0.019-0.113,0.013c-0.111-0.016-0.277,0.041-0.307,0.053c-0.038,0.015-0.934,0.374-1.205,1.208    c-0.025,0.067-0.134,0.422,0.01,1.292c-0.021,0.014-0.04,0.032-0.058,0.054c-0.116,0.153-0.051,0.48,0.002,0.669    c0.027,0.167,0.092,0.272,0.155,0.339c0.072,0.48,0.302,0.942,0.605,1.296c0,0,0.23,0.398,0.259,0.435    c0.729,1.08,0.821,3.162,0.83,3.396l0.001,0.015l-0.001,0.016c-0.012,0.728-0.374,0.981-0.568,1.065    c-0.094,0.042-0.192,0.079-0.291,0.117c0.049-0.072,0.097-0.197,0.1-0.418c0,0-0.071-3.059-0.688-3.972    c0,0-0.176-0.24-0.593-0.399c0,0-0.034-0.011-0.089-0.028c-0.37-0.174-0.722-0.285-0.722-0.285    c-0.075-0.027-0.142-0.053-0.202-0.08c-0.25-0.125-0.433-0.268-0.433-0.268s-0.002-0.002-0.195-0.196    c0.347-0.36,0.602-0.848,0.681-1.314c0.063-0.063,0.125-0.166,0.152-0.328c0.049-0.181,0.112-0.497,0.001-0.644    c-0.006-0.007-0.012-0.014-0.018-0.021c0.104-0.381,0.236-1.167-0.235-1.704c-0.043-0.053-0.307-0.369-0.871-0.536l-0.27-0.092    C8.97,3.348,8.69,3.317,8.678,3.316c-0.02-0.002-0.041,0-0.061,0.006C8.601,3.326,8.549,3.34,8.508,3.335    c-0.106-0.016-0.266,0.039-0.294,0.05C8.178,3.399,7.317,3.744,7.056,4.546c-0.024,0.065-0.128,0.406,0.01,1.242    C7.045,5.802,7.027,5.819,7.011,5.84C6.9,5.986,6.963,6.302,7.012,6.483c0.027,0.161,0.089,0.263,0.15,0.326    c0.069,0.461,0.29,0.906,0.582,1.246L7.661,8.182L7.659,8.174L7.656,8.191C7.657,8.188,7.659,8.184,7.66,8.182v0.001L7.655,8.191    C7.538,8.556,6.137,8.982,6.137,8.982C5.721,9.141,5.545,9.381,5.545,9.381c-0.616,0.913-0.688,3.971-0.688,3.971    c0.003,0.219,0.05,0.342,0.097,0.414c-0.095-0.035-0.192-0.071-0.283-0.111c-0.194-0.084-0.557-0.339-0.568-1.066v-0.016v-0.016    c0.009-0.234,0.102-2.314,0.817-3.376c0.039-0.054,0.167-0.214,0.403-0.379c0,0,0-0.001-0.001-0.001    c0.361-0.374,0.626-0.882,0.709-1.368C6.095,7.367,6.16,7.261,6.189,7.092c0.052-0.188,0.117-0.517,0.001-0.67    C6.184,6.414,6.177,6.407,6.171,6.4c0.108-0.396,0.246-1.214-0.244-1.772C5.886,4.572,5.611,4.244,5.023,4.07l-0.28-0.097    C4.28,3.83,3.989,3.799,3.977,3.797c-0.021-0.002-0.043,0-0.063,0.005C3.898,3.808,3.843,3.822,3.8,3.816    C3.69,3.8,3.524,3.857,3.494,3.869C3.456,3.883,2.561,4.242,2.289,5.077c-0.025,0.067-0.133,0.422,0.01,1.292    C2.278,6.383,2.258,6.401,2.241,6.423c-0.116,0.153-0.05,0.48,0.001,0.669c0.027,0.167,0.092,0.272,0.155,0.339    c0.072,0.48,0.302,0.942,0.606,1.296L2.917,8.859L2.915,8.85L2.911,8.868c0.001-0.003,0.004-0.007,0.005-0.01v0.001L2.911,8.868    C2.79,9.248,1.332,9.691,1.332,9.691c-0.433,0.166-0.616,0.415-0.616,0.415C0.075,11.056,0,13.171,0,13.171    c0.008,0.482,0.217,0.533,0.217,0.533c1.473,0.657,3.785,0.773,3.785,0.773c0.125,0.004,0.24-0.003,0.356-0.01l0.003,0.012    c0,0,0.87-0.045,1.881-0.23c1.219,0.295,2.46,0.358,2.46,0.358c0.119,0.003,0.231-0.004,0.342-0.011l0.003,0.012    c0,0,1.295-0.066,2.538-0.379c1.053,0.201,1.979,0.248,1.979,0.248c0.124,0.004,0.24-0.003,0.356-0.01l0.003,0.012    c0,0,2.312-0.117,3.785-0.773c0,0,0.208-0.051,0.216-0.534C17.927,13.173,17.852,11.058,17.211,10.107z" />
                </svg>
                <span className="inline-block  text-xs mt-0.5">
                  101-200 Employee
                </span>
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
                About Company
              </h4>
              <div className="!leading-[20px] break-words text-sm">
                <p className="whitespace-normal !text-sm break-words antialiased text-black">
                  <p className="my-2">
                    Degreed is all about building a better future — for people
                    and for businesses. We’re doing our part by crafting
                    products and a company culture to fuel innovation and drive
                    the change the world needs right now.
                  </p>
                  <p className="my-2">
                    We believe everyone is driven by an innate desire to learn
                    and grow. By equipping people with the skills the world
                    needs, we help them redefine their careers, their companies,
                    and their fields. We believe that together we can push the
                    limits of what’s possible. We propel people and their
                    companies toward their aspirations and goals.
                  </p>
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
            <div className="bg-white rounded-md border border-border mb-3.8 p-3.8">
              <h4 className="mb-4 text-opacity-90 text-[#666] font-medium  uppercase text-[0.8125rem] leading-[1.125rem]">
                Info
              </h4>
              <p className="font-medium text-xs mb-2 mt-6">
                <span className="text-[#666]">Industry: </span> Enterprice
                Software, Social, Entertainment
              </p>
              <p className="font-medium text-xs mt-2 pb-2">
                <span className="text-[#666]">Location: </span>Los Angeles, CA
              </p>
              <p className="font-medium text-xs  mt-2 border-t pt-4">
                <span className="text-[#666]">Employee: </span> 200 - 300
              </p>
              <p className="font-medium text-xs  mt-2">
                <span className="text-[#666]">Funding: </span> $13M
              </p>
              <p className="font-medium text-xs  mt-2">
                <span className="text-[#666]">Founded: </span> 2012
              </p>
            </div>
            <div className="w-full !mx-auto md:!mx-0 pb-8">
              <div className="bg-white rounded-md border border-border mb-3.8 p-5">
                <div>
                  <h4 className="mb-3 text-opacity-90 text-[#666] font-medium  uppercase text-[0.8125rem]">
                    About TikTok
                  </h4>

                  <p className="font-medium text-xs mb-3 mt-4">
                    <span className="text-[#666]">Employee:</span>{' '}
                    {teamSize || '-'}
                  </p>
                  {companyWebsite ? (
                    companyWebsite && (
                      <p className="font-medium text-xs mb-3 mt-4">
                        <span className="text-[#666]">Website:</span>{' '}
                        <a
                          href={companyWebsite}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {companyWebsite}
                        </a>
                      </p>
                    )
                  ) : (
                    <></>
                  )}
                  <hr className="border-[#f2f2f2] my-5 -mx-8" />
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
                    {sortedTags.map((tag) => (
                      <Tags text={tag} key={tag} />
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
