const BlueCard = () => (
  <div className="h-20 p-4 rounded-lg bg-[#1E86FF] w-[450px] text-white flex items-center justify-between cursor-pointer transform  hover:scale-95 transition-transform  duration-200">
    <div className="flex items-center">
      <div className="text-4xl font-semibold px-2">74</div>
      <div>new candidates to review</div>
    </div>
    <div className="px-4 transform transition-transform duration-100 hover:translate-x-2">
      {' '}
      &gt;{' '}
    </div>
  </div>
);

export default BlueCard;
