import sortBy from 'lodash/sortBy';
import Card from '../components/Companies/Card';
import CardSkel from '../components/Companies/CardSkel';
import classNames from '../utils/constants/classNames';
import CommonModal from './CommonModal';

const Tags = ({ text }) => (
  <button
    type="button"
    className="inline-block mr-[15px] mb-[15px] select-none bg-[#eff2f6] rounded-md p-1.5 text-sm border border-[#d6dae0]"
  >
    {text}
  </button>
);
const ComapanyModal = ({ handleClose, companyData }) => {
  const {
    tags,
    companyLocation,
    description,
    companyName,
    logoUrl,
    noOfOpening,
    noOfAssignments,
    teamSize,
    socialMedia,
    companyWebsite
  } = companyData;

  const name = companyName;

  const isRemote = tags.findIndex((x) => x === 'Remote');
  const temp =
    companyLocation.length > 0
      ? {
          city: companyLocation[0].city,
          state: companyLocation[0].state,
          country:
            !companyLocation[0].city || !companyLocation[0].state
              ? companyLocation[0].country
              : undefined,
        }
      : undefined;
  const location =
    temp &&
    `${temp.city ? `${temp.city}, ` : ''}${
      temp.state ? `${temp.state}${temp.country ? ', ' : ''}` : ''
    }${temp.country ? `${temp.country}` : ''}`;
  const sortedTags = sortBy(tags, (e) => e.length);

  const isHtml = description[0] === '<';

  return (
    <CommonModal>
      <div className="bg-white sticky top-0 inline-block w-full p-3.8  border-b border-border">
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
          <div className="flex items-start w-11/12">
            <img
              src={logoUrl}
              width={75}
              height={75}
              alt="company_logo"
              className="object-contain object-center h-[4.688rem] rounded-md"
            />
            <div className="flex flex-col justify-between ml-4">
              <h3 className="text-lg tracking-tight mt-[1px] mb-0.5 mx-[10px] font-semibold">
                {companyName}
              </h3>
              {location && (
                <div className="font-medium tracking-[-0.03em] text-base leading-[14px] mx-[10px] mb-2">
                  {location}
                </div>
              )}
              <div className="text-sm leading-[14px] tracking-[-0.03em] text-black mx-[10px] mb-2">
                {noOfAssignments > 1
                  ? `${noOfAssignments} Assignments`
                  : `1 Assignment`}
              </div>
              <div className="text-sm leading-[14px] tracking-[-0.03em] text-black mx-[10px] mb-2">
                {noOfOpening === 0
                  ? 'Openings yet to be updated'
                  : `${noOfOpening} Openings`}
              </div>
            </div>
            {isRemote !== -1 && (
              <p
                className="ml-auto mt-2 rounded-md cursor-default select-none text-[#005a37] 
              bg-[#e1faf3] px-1.5 py-2 text-xs"
              >
                Remote
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="overflow-y-scroll">
        <div className="pt-6 px-3.8 block md:flex md:!space-x-4">
          <div className="w-full md:w-[66.7%] mb-3.8 ">
            <div
              style={{ height: 'fit-content' }}
              className="bg-white rounded-md border border-border p-3.8"
            >
              <h4 className="ml-[1%] mb-4 text-opacity-90 text-[#666] font-medium  uppercase text-[0.8125rem] leading-[1.125rem]">
                About Company
              </h4>
              <div className="!leading-[20px] break-words text-sm">
                <div
                  className={classNames(
                    isHtml ? 'whitespace-normal' : 'whitespace-pre-wrap'
                  )}
                  dangerouslySetInnerHTML={{ __html: description }}
                />
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
          <div className="w-full md:max-w-[32.3%] !mx-auto md:!mx-0 pb-8">
            <div className="bg-white rounded-md border border-border mb-3.8 p-5">
              <div>
                <h4 className="mb-3 text-opacity-90 text-[#666] font-medium  uppercase text-[0.8125rem]">
                  About {companyName}
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
                    {socialMedia.facebook && (
                      <a
                        href={socialMedia.facebook}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="/images/facebook.png"
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
    </CommonModal>
  );
};

export default ComapanyModal;
