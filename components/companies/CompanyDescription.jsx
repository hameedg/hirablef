// USAGE:

{
  /*
    
  <CompanyDesc
        name="Acko"
        location="Banglore, Karnataka"
        assignments="2 Assignments"
        openings="6 openings"
        tags={["insureTech", "Fintech"]}
        companyDescription="All aobut the company"
    />;  
*/
}

const CompanyDescription = ({
  name,
  location,
  assignments,
  openings,
  companyDescription,
  tags,
}) => (
  <div className="flex justify-center m-4">
    <div
      style={{ width: '979px' }}
      className="description-container flex flex-col   mt-24 md:flex-row "
    >
      <div style={{ flex: '0.7' }} className="company-wrapper">
        <div className="company-info flex p-8 pl-6">
          <div className="companyImg-section">
            <img
              style={{ height: '75px', width: '75px' }}
              className="border rounded-xl border-gray-400"
              alt=""
              src="https://i.ibb.co/BcZKwM9/Acko.jpg"
            />
          </div>
          <div className="companyInfo-section ml-6">
            <div className="text-xl font-semibold">{name}</div>
            <div className="font-medium text-lg tracking-tight ">
              {location}
            </div>
            <div>{assignments}</div>
            <div>{openings}</div>
          </div>
        </div>
        <div
          // style={{ minWidth: "500px" }}
          className="company-description w-full mt-4 pr-6"
        >
          {companyDescription}
        </div>
        <button
          type="button"
          className="px-4 py-4 bg-indigo-600 my-4 text-white font-medium text-sm rounded outline-none"
        >
          View More
        </button>
      </div>

      <div
        style={{ flex: '0.4' }}
        className="right-content  w-full flex flex-col "
      >
        <div
          style={{ height: 'fit-content', minWidth: '240px' }}
          className="comapany-tags border border-gray-400 rounded  w-4/5 p-4 sm:fit-content"
        >
          <h2 className="text-lg font-semibold mb-2">Tags:</h2>
          <div style={{ width: 'fit-content' }} className="grid grid-flow-col">
            {tags.map((item) => (
              <div
                key={item}
                className="tag bg-gray-200 p-2 m-1 border border-gray-400 rounded text-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* right image */}
        <div className="right-halloContainer w-4/5 mt-6">
          <img
            style={{ minWidth: '240px' }}
            className="rounded-t-lg"
            alt=""
            src="https://cdn.hallothere.io/icons/apply.svg"
          />
          <div
            style={{
              backgroundColor: '#FEF8F4',
              minWidth: '240px',
              maxWidth: '294px',
            }}
            className="label rounded-b-lg"
          >
            <div className="font-semibold text-gray-900 text-2xl p-4 pb-0">
              <div>Interested in a </div>
              <div>Career at</div>
              <div>Awesomely </div>
              <div>authentic ?</div>
            </div>
            <p className="pl-4 text-sm text-gray-900">
              Click here to let the team know.
            </p>
            <button
              type="button"
              style={{ backgroundColor: '#de5209' }}
              className="px-4 py-2 ml-4 my-4 text-white font-medium text-sm rounded outline-none"
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CompanyDescription;
