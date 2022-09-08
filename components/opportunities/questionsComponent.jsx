import React from 'react';

export default function QuestionsComponent() {
  return (
    <div className="bg-white rounded-[20px] w-[fit-content] py-[20px] px-[10px] mt-[2rem]  pb-[15px]">
      <h1 className="text-gray-500 cursor-[cursor] mb-[5px] mr-[18px]">
        Have Qs?We&apos;re here to help 🤝
      </h1>
      <div className="flex cursor-pointer line-under relative w-[fit-content]">
        <div>Check out our guides</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="black"
        >
          <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
        </svg>
      </div>
    </div>
  );
}
