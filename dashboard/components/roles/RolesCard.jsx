const RolesCard = ({ url, openings, handleOpen }) => (
  <div className="border p-3.8 group bg-white cursor-pointer rounded-md hover:shadow-lg duration-150 ease-in">
    <button type="button" className="text-left w-full" onClick={handleOpen}>
      <div className="flex justify-between mb-2.5">
        <img
          width={90}
          height={90}
          className="h-[5.625rem] object-cover"
          src={url}
          alt="company_logo"
        />
      </div>
      <h4 className="font-medium text-base leading-snug mb-2">
        Product Manager
      </h4>
      <p className="leading-4 text-sm mb-3 break-words truncate">
        {openings} Openings
      </p>
    </button>
  </div>
);

export default RolesCard;
