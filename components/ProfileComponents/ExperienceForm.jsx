import React, { useEffect, useState } from 'react';
import { filterCompanies } from '../../utils/apis/profile';
import { formatCompaniesData } from '../../utils/constants/formatProfileCompaniesData';
import Editor from '../Editor/Editor';
// import classNames

const ExperienceForm = ({
  formData,
  setFormData,
  handleSubmit,
  handleEditSubmit,
  handleDelete,
  formDataError,
  isLoading,
  isDeleting,
  setCompanyNameValid,
  isedit,
}) => {
  const classNames = (...classes) => classes.filter(Boolean).join(' ');

  const [companyName, setCompanyName] = useState('');
  const [lenExceeded, setLenExceeded] = useState(false);
  const [filteredCompanies, setFilteredCompanies] = useState([]);

  useEffect(() => {
    async function getFilteredCompanies() {
      try {
        const { data } = await filterCompanies({
          filter: formData.companyName,
        });
        const companiesList = formatCompaniesData(data);
        console.log(companiesList);
        setFilteredCompanies(companiesList);
      } catch (error) {
        setFilteredCompanies([]);
        console.log(error.response);
      }
    }
    if (companyName.trim().length > 0) getFilteredCompanies();
    else {
      setFilteredCompanies([]);
    }
  }, [companyName]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCompanyNameClick = (companyId, companyName) => {
    setCompanyName('');
    setFormData({ ...formData, companyId, companyName });
    setFilteredCompanies([]);
  };

  const handleEditorChange = (htmlContent) => {
    setFormData({ ...formData, description: htmlContent });
  };

  return (
    <form>
      <div className="relative p-6 flex-auto">
        <div className="mb-3 pt-0">
          <h1 className="text-[0.75rem] font-medium mb-1">
            Company / Organization Name{' '}
          </h1>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={(e) => {
              setFormData({ ...formData, companyName: e.target.value });
              if (setCompanyNameValid) setCompanyNameValid(false);
              setCompanyName(e.target.value);
            }}
            placeholder="Example: Google, Facebook..."
            className="px-3 py-3 placeholder-light-grey text-black placeholder-opacity-90 relative bg-white rounded text-sm border-1 focus:outline-none focus:border-[#2dc5a1] focus:border-2 w-full transition duration-200 ease-in h-[2.5rem]"
            autoComplete="off"
          />
          {filteredCompanies.length > 0 && companyName !== '' ? (
            <ul
              className="bg-white absolute w-[80%] border-1 border-[#ddd] mt-2 py-[10px] px-0 
                    rounded-[10px] overflow-y-scroll overflow-x-hidden max-h-[240px] z-10"
            >
              {filteredCompanies.map((company, index) => (
                <li
                  key={index}
                  onClick={() => {
                    handleCompanyNameClick(company._id, company.name);
                    if (setCompanyNameValid) setCompanyNameValid(true);
                  }}
                  className="h-12 w-full flex cursor-pointer items-center transition duration-200 ease-in 
                        text-[0.875rem] text-[#201e27] m-0 font-semibold py-[5px] 
                        px-[10px] hover:bg-[#c6c9cc]"
                >
                  <img
                    src={company.logo}
                    className="mr-[10px] w-[25px] rounded-[10px] align-middle"
                  />
                  {company.name}
                </li>
              ))}
            </ul>
          ) : (
            <></>
          )}
        </div>
        <div className="mb-3 pt-0">
          <h1 className="text-[0.75rem] font-medium mb-1">Website </h1>
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="https://www.scholarly-science.git"
            className="px-3 py-3 placeholder-light-grey text-black placeholder-opacity-90 relative bg-white rounded text-sm border-1 focus:outline-none focus:border-[#2dc5a1] focus:border-2 w-full transition duration-200 ease-in h-[2.5rem]"
            autoComplete="off"
          />
        </div>
        <div className="mb-3 pt-0">
          <h1 className="text-[0.75rem] font-medium mb-1">Title</h1>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Example: Software Engineer"
            className="px-3 py-3 placeholder-light-grey text-black placeholder-opacity-90 relative bg-white rounded text-sm border-1 focus:outline-none focus:border-[#2dc5a1] focus:border-2 w-full transition duration-200 ease-in h-[2.5rem]"
          />
        </div>
        <div
          className={classNames(
            'mb-3 pt-0',
            formData.workedChecked && 'hidden'
          )}
        >
          <h1 className="text-[0.75rem] font-medium mb-1">Location</h1>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Example: Banglore, Boston, London..."
            className="px-3 py-3 placeholder-light-grey text-black placeholder-opacity-90 relative bg-white rounded text-sm border-1 focus:outline-none focus:border-[#2dc5a1] focus:border-2 w-full transition duration-200 ease-in h-[2.5rem]"
          />
        </div>
        <div className="mt-[20px] ml-[5px] flex items-center mb-5">
          <span className="root">
            <span className="buttonlabel">
              <input
                type="checkbox"
                name="workedChecked"
                id="workedChecked"
                checked={formData.workedChecked}
                onChange={() =>
                  setFormData((f) => ({
                    ...f,
                    workedChecked: !f.workedChecked,
                  }))
                }
                className="mr-2"
                // className={classNames(
                //   "jjs8",
                //   formData.workedChecked
                //     ? "bg-[#FE0100] hover:bg-[#2563eb] border-none"
                //     : "bg-white"
                // )}
              />
            </span>
          </span>
          <label
            htmlFor="workedChecked"
            className="text-[0.75rem] font-semibold"
          >
            Worked Remotely
          </label>
        </div>
        <label htmlFor="" className="text-[0.75rem] font-medium">
          From
        </label>
        <label
          htmlFor="check"
          className="flex items-center cursor-pointer mt-4"
        />
        <div className="mt-1">
          <select
            name="fromMonth"
            value={formData.fromMonth}
            onChange={handleChange}
            id=""
            className="from_to mr-[5%] webkit"
          >
            <option value="" />
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="Augest">Augest</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
          <select
            name="fromYear"
            value={formData.fromYear}
            onChange={handleChange}
            id=""
            className="from_to webkit"
          >
            <option value="" />
            <option value={1995}>1995</option>
            <option value={1996}>1996</option>
            <option value={1997}>1997</option>
            <option value={1998}>1998</option>
            <option value={1999}>1999</option>
            <option value={2000}>2000</option>
            <option value={2001}>2001</option>
            <option value={2002}>2002</option>
            <option value={2003}>2003</option>
            <option value={2004}>2004</option>
            <option value={2005}>2005</option>
            <option value={2006}>2006</option>
            <option value={2007}>2007</option>
            <option value={2008}>2008</option>
            <option value={2009}>2009</option>
            <option value={2010}>2010</option>
            <option value={2011}>2011</option>
            <option value={2012}>2012</option>
            <option value={2013}>2013</option>
            <option value={2014}>2014</option>
            <option value={2015}>2015</option>
            <option value={2016}>2016</option>
            <option value={2017}>2017</option>
            <option value={2018}>2018</option>
            <option value={2019}>2019</option>
            <option value={2020}>2020</option>
            <option value={2021}>2021</option>
          </select>
        </div>
        <div
          className={classNames('mt-0', formData.currentlyChecked && 'hidden')}
        >
          <label htmlFor="" className="text-[0.75rem] font-medium">
            To
          </label>
          <div className="mt-1">
            <select
              name="toMonth"
              value={formData.toMonth}
              onChange={handleChange}
              id=""
              className="from_to mr-[5%] webkit"
            >
              <option value="" />
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="Augest">Augest</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
            <select
              name="toYear"
              value={formData.toYear}
              onChange={handleChange}
              id=""
              className="from_to webkit"
            >
              <option value="" />
              <option value={1995}>1995</option>
              <option value={1996}>1996</option>
              <option value={1997}>1997</option>
              <option value={1998}>1998</option>
              <option value={1999}>1999</option>
              <option value={2000}>2000</option>
              <option value={2001}>2001</option>
              <option value={2002}>2002</option>
              <option value={2003}>2003</option>
              <option value={2004}>2004</option>
              <option value={2005}>2005</option>
              <option value={2006}>2006</option>
              <option value={2007}>2007</option>
              <option value={2008}>2008</option>
              <option value={2009}>2009</option>
              <option value={2010}>2010</option>
              <option value={2011}>2011</option>
              <option value={2012}>2012</option>
              <option value={2013}>2013</option>
              <option value={2014}>2014</option>
              <option value={2015}>2015</option>
              <option value={2016}>2016</option>
              <option value={2017}>2017</option>
              <option value={2018}>2018</option>
              <option value={2019}>2019</option>
              <option value={2020}>2020</option>
              <option value={2021}>2021</option>
            </select>
          </div>
        </div>
        <div className="mt-[5px] ml-[5px] flex items-center mb-5">
          <span className="root">
            <span className="buttonlabel">
              <input
                type="checkbox"
                name=""
                id="currentWork"
                onChange={() =>
                  setFormData((f) => ({
                    ...f,
                    currentlyChecked: !f.currentlyChecked,
                  }))
                }
                value={formData.currentlyChecked}
                className="mr-2"
                // className={classNames(
                //   "jjs8",
                //   formData.currentlyChecked
                //     ? "bg-[#FE0100] hover:bg-[#2563eb] border-none"
                //     : "bg-white"
                // )}
              />
            </span>
          </span>
          <label htmlFor="currentWork" className="text-[0.75rem] font-semibold">
            I currently work here
          </label>
        </div>
        <div className="flex flex-col mt-[20px]">
          <div>
            <label htmlFor="" className="text-[0.75rem] font-medium">
              Description <span className="opacity-60">(optional)</span>
            </label>
            <div>
              <div className="w-full">
                <Editor
                  htmlContent={formData.description}
                  handleEditorChange={handleEditorChange}
                  lenExceeded={lenExceeded}
                  setLenExceeded={setLenExceeded}
                />
              </div>
              <div className="float-right ml-[0.75rem] mt-[1.5rem]">
                {isedit ? (
                  <div className="float-right ml-[0.75rem] mt-[1.5rem]">
                    <button
                      type="button"
                      onClick={handleDelete}
                      className="ml-[0.9375rem] outline-none min-w-[9.0625rem] 
                      py-[0.625rem] px-[0.75rem] rounded-[0.3125rem] font-semibold text-[0.875rem]
                       h-[2.5rem] cursor-pointer text-white bg-[#FE0100] mb-[20px] 
                       border-none mt-[10px]"
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className={`ml-[0.9375rem] outline-none 
                                min-w-[9.0625rem] py-[0.625rem] px-[0.75rem] rounded-[0.3125rem] 
                                font-semibold text-[0.875rem] h-[2.5rem] 
                                text-white bg-[#1a73e8] mb-[20px] border-none mt-[10px] ${
                                  lenExceeded
                                    ? 'cursor-not-allowed opacity-50'
                                    : 'cursor-pointer'
                                }`}
                      onClick={handleEditSubmit}
                      disabled={lenExceeded}
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <button
                    type="submit"
                    className={`ml-[0.9375rem] outline-none 
                            min-w-[9.0625rem] py-[0.625rem] px-[0.75rem] rounded-[0.3125rem] 
                            font-semibold text-[0.875rem] h-[2.5rem] 
                            text-white bg-[#1a73e8] mb-[20px] border-none mt-[10px] ${
                              lenExceeded
                                ? 'cursor-not-allowed opacity-50'
                                : 'cursor-pointer'
                            }`}
                    onClick={handleSubmit}
                    disabled={lenExceeded}
                  >
                    Save
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ExperienceForm;
