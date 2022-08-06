import React from 'react';
import Skeleton from '../skeleton/Skeleton';

const CardSkel = () => (
  <div className="w-full select-none bg-white border-border border rounded-md overflow-hidden">
    <Skeleton rectangle />
    <Skeleton rectangle />
    <div className="p-3.8">
      <div className="w-10/12">
        <Skeleton text />
      </div>
      {/* <div className="w-8/12 mt-2"> */}
      <div className="w-8/12 mt-3">
        <Skeleton smallText />
      </div>
      {/* <div className="w-8/12 mt-4 flex space-x-2">
        <Skeleton circle />
        <Skeleton circle />
      </div> */}
    </div>
  </div>
);

export default CardSkel;
