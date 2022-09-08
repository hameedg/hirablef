import React, { useState } from 'react';

function CompanyProduct() {
  const [data, setdata] = useState({});
  setTimeout(() => {
    setdata({
      img: 'https://picsum.photos/58',
      name: 'Babbel',
    });
  }, 5000);
  return (
    <div className="cursor-pointer my-2 w-[4.875rem] h-[6.375rem]">
      {data.img ? (
        <div className="rounded-full inline-block border w-[4.375rem] h-[4.375rem] border-[#800080]">
          <img
            alt="Company logo"
            src={data.img}
            className="rounded-full w-[4.25rem] p-[0.313rem]"
          />
        </div>
      ) : (
        <div className="rounded-full inline-block border w-[4.375rem] h-[4.375rem] border-gray-300 bg-gray-200 animate-pulse" />
      )}
      {data.name ? (
        <p className="text-center mt-1 text-sm font-semibold text-[#033443]">
          {data.name}
        </p>
      ) : (
        <div className="h-[14px] rounded-full w-[90%] animate-pulse bg-gray-200" />
      )}
    </div>
  );
}

export default CompanyProduct;
