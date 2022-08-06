import Backdrop from '../components/common/Backdrop';

const CommonModal = ({ children }) => (
  <Backdrop>
    <div className="commonModal  w-full xl:px-0 top-0 bottom-0 left-0 right-0 absolute sm:relative rounded-md">
      <div className="bg-[#f2f2f2] w-full max-w-5xl mx-auto h-full flex flex-col overflow-hidden rounded-md">
        {children}
      </div>
    </div>
  </Backdrop>
);

export default CommonModal;
