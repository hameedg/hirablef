import Button from './Button';

const EventCard = () => (
  <div className="border p-3.8 border-border flex group relative bg-white flex-col rounded-md hover:shadow-lg duration-150 ease-in">
    <div
      className="absolute border-border bg-cover bg-center h-20 w-full left-0 top-0 border-b rounded-t-md z-10"
      style={{ background: 'url(https://picsum.photos/500/300)' }}
    />
    <div className="z-20">
      <img
        alt="company_logo"
        src="https://jumpstart-static.s3.amazonaws.com/backend/organizations/organization/SiRk1YdMTjaHVPatuXryaA.jpg"
        width={60}
        height={60}
        className="mt-7 mb-2.5 border-border rounded-md object-contain border"
      />
      <h4 className="font-medium text-base mb-2 leading-snug">
        Black Professional Network Info Session w/ Citrix
      </h4>
      <div className="flex items-center cursor-pointer mb-2.5">
        <p className="hover:underline hover:text-highlight text-sm leading-4">
          Wrike
        </p>
        <span className="text-xs mx-1 text-light">• Webinar</span>
      </div>
      <div className="flex items-center mb-1">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fal"
          data-icon="calendar-day"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-2.5 mr-2 text-lighter"
        >
          <path
            fill="currentColor"
            d="M400 64h-48V8c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v56H128V8c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v56H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm16 400c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V192h384v272zm0-304H32v-48c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v48zM112 384h96c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16zm16-96h64v64h-64v-64z"
          />
        </svg>
        <span className="text-xs inline-block">September 15, 2021</span>
      </div>
      <div className="flex items-center">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fal"
          data-icon="clock"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512 "
          className="w-3 mr-2 text-lighter"
        >
          <path
            fill="currentColor"
            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216zm-148.9 88.3l-81.2-59c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h14c6.6 0 12 5.4 12 12v146.3l70.5 51.3c5.4 3.9 6.5 11.4 2.6 16.8l-8.2 11.3c-3.9 5.3-11.4 6.5-16.8 2.6z"
          />
        </svg>
        <span className="text-xs inline-block">11:00 AM - 5:00 PM GMT-5</span>
      </div>
    </div>
    <hr className="bg-border" style={{ margin: '.9375rem calc(-.9375rem)' }} />
    <div className="flex justify-between items-center">
      <Button>Save</Button>
      <Button>Learn more</Button>
    </div>
  </div>
);

export default EventCard;
