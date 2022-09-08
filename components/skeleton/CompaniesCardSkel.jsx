import Skeleton from './Skeleton';

const CompaniesCardSkel = () => (
  <div className="flex bg-white select-none w-96  p-[1.7rem] rounded-[2rem] shadow-md">
    <Skeleton avatarSquare />
    <div className="ml-7 w-4/5">
      <Skeleton text />
      <div className="mt-4">
        <Skeleton text />
      </div>
      <div className="mt-4">
        <Skeleton text />
      </div>
    </div>
  </div>
);

export default CompaniesCardSkel;
