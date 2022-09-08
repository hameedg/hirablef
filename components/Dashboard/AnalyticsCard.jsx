const AnalyticsCard = () => (
  <div className="bg-white shadow-lg p-4 mt-4 border rounded-lg min-h-[10.625rem] flex flex-col justify-evenly">
    <div className=" flex justify-between">
      <h2 className="font-semibold">Analytics</h2>
      <h2 className="text-sm text-blue-500 font-semibold cursor-pointer hover:underline">
        See more
      </h2>
    </div>
    <div className="px-10 py-6 flex justify-between">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-blue-500 flex items-center">
          62,345
          <span className="text-sm text-blue-500 bg-blue-100 rounded-full px-1 ml-2">
            ↑
          </span>
        </h2>
        <div className="text-sm text-blue-500 font-semibold">Total Users</div>
      </div>
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-blue-500 flex items-center">
          345
          <span className="text-sm text-blue-500 bg-blue-100 rounded-full px-1 ml-2">
            ↑
          </span>
        </h2>
        <div className="text-sm text-blue-500 font-semibold">Companies</div>
      </div>
    </div>
  </div>
);

export default AnalyticsCard;
