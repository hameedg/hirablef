import React from 'react';
import Button from '../common/Button';

const Card = ({ imageName }) => (
  <div className="border p-3.8 group bg-white rounded-md hover:shadow-lg duration-150 ease-in relative">
    <img
      height={150}
      className="rounded-t-md absolute top-0 left-0 right-0 h-[9.375rem] w-full"
      src={`/images/${imageName}`}
      alt="Career Accelerator"
    />

    <div className="mt-36 cursor-default">
      <h4 className="font-semibold text-lg leading-snug mb-2">
        Career Accelerator
      </h4>
      <div className="mb-2 text-black">
        <p className="text-sm leading-6 mb-2">
          Don’t wait for the right opportunity. Create it.
        </p>
        <p className="text-sm leading-6 mb-2">
          Give your job search what it lacks
        </p>
        <p className="text-sm leading-6 mb-2">
          Begin your professional transformation journey and land your dream
          career with GradTheory. You wished it, we got it.
        </p>
      </div>

      <hr
        className="bg-border"
        style={{ margin: '.9375rem calc(-.9375rem)' }}
      />
      <div className="flex justify-between">
        <Button>
          <svg
            data-v-4a7785f2=""
            aria-hidden="true"
            focusable="false"
            data-prefix="fal"
            data-icon="bookmark"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="w-3 inline-block"
          >
            <path
              data-v-4a7785f2=""
              fill="currentColor"
              d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm16 456.287l-160-93.333-160 93.333V48c0-8.822 7.178-16 16-16h288c8.822 0 16 7.178 16 16v408.287z"
            />
          </svg>
          <span className="inline-block">Save</span>
        </Button>
        <Button>Learn More</Button>
      </div>
    </div>
  </div>
);

export default Card;
