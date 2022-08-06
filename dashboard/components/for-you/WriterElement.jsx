import React from 'react';

export default function WriterElement({ imageName, name, title }) {
  return (
    <div className="flex justify-between my-[4%]">
      <img
        className="h-[2.5rem] w-[2.5rem] m-[0.2rem] rounded-[1.25rem] object-cover"
        src={`/images/${imageName}`}
        alt="Career Accelerator"
      />
      <div className="w-[65%]">
        <div className="font-semibold text-[0.85rem]">{name}</div>
        <div className="text-[0.8rem] text-gray-600 leading-4">{title}</div>
      </div>
    </div>
  );
}
