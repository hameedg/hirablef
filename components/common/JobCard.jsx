import Button from './Button';

const JobCard = ({ openModal }) => (
  <div className="border p-3.8 group bg-white cursor-pointer rounded-md hover:shadow-lg duration-150 ease-in">
    <button type="button" onClick={openModal} className="text-left w-full">
      <div className="flex justify-between mb-2.5">
        <img
          width={90}
          height={90}
          className="h-[5.625rem] rounded-md"
          src="https://jumpstart-static.s3.amazonaws.com/backend/organizations/organization/0unx3UBmQyq6mXkH0PtAuw.png"
          alt="company_logo"
        />
        <div className="opacity-0 h-min items-center  group-hover:opacity-100 flex space-x-1.5 duration-150 ease-in">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fal"
            data-icon="clock"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="text-highlight block w-3 h-3"
          >
            <path
              fill="currentColor"
              d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216zm-148.9 88.3l-81.2-59c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h14c6.6 0 12 5.4 12 12v146.3l70.5 51.3c5.4 3.9 6.5 11.4 2.6 16.8l-8.2 11.3c-3.9 5.3-11.4 6.5-16.8 2.6z"
            />
          </svg>
          <span className="text-xs block text-lighter">
            Be an early applicant
          </span>
        </div>
      </div>
      <h4 className="font-medium text-base leading-snug mb-2">
        Product Manager
      </h4>
      <div className="flex items-center cursor-pointer mb-3 break-words truncate">
        <p className="hover:underline hover:text-highlight leading-4 text-sm">
          Samsung Research America
        </p>
        <span className="text-xs mx-1 font-normal text-light">• Full Time</span>
      </div>
      <div className="flex items-center whitespace-pre-wrap">
        <img
          src="/svg/location.svg"
          alt="location_icon"
          width="9"
          height="12"
          className="mr-2 opacity-40"
        />
        <p className="text-xs">Mountain View, CA</p>
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
          className="inline-block"
        >
          <path
            data-v-4a7785f2=""
            fill="currentColor"
            d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm16 456.287l-160-93.333-160 93.333V48c0-8.822 7.178-16 16-16h288c8.822 0 16 7.178 16 16v408.287z"
          />
        </svg>
        <span className="inline-block">Save</span>
      </Button>
      <Button handleClick={openModal}>Learn More</Button>
    </div>
  </div>
);

export default JobCard;
