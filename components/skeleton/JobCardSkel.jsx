import Skeleton from './Skeleton';

const JobCardSkel = () => (
  <div className="border p-3.8 group bg-white cursor-pointer  rounded-md hover:shadow-lg duration-150 ease-in">
    <Skeleton avatarSquare />
    <div className="mt-3">
      <Skeleton text />
    </div>
    <div className="mt-3 w-4/5">
      <Skeleton text />
    </div>

    <div className="mt-3 w-2/5">
      <Skeleton smallText />
    </div>

    <hr className="bg-border" style={{ margin: '.9375rem calc(-.9375rem)' }} />
    <div className="mt-3 flex justify-between">
      <Skeleton button />
      <Skeleton button />
    </div>
  </div>
);

export default JobCardSkel;
