import React from 'react';

export default function LatestElement({ imageName, title, content }) {
  return (
    <div className="flex justify-between my-[2%]">
      <img
        className="rounded-t-md h-[100%rem] w-[20%] m-[0.2rem] object-cover"
        src={`/images/${imageName}`}
        alt="Career Accelerator"
      />
      <div className="ml-[10px]">
        <div className="font-semibold text-[0.85rem]">{title}</div>
        <div className="text-[0.65rem] text-gray-600 leading-4">{content}</div>
      </div>
    </div>
  );
}
