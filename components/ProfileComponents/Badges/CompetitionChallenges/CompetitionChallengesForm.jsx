import React from 'react';

const CompetitionChallengesForm = ({
  formData,
  setFormData,
  formDataErrors,
  handleChange,
}) => {
  const handleDateChange = (e) => {
    if (e.target.value.indexOf('/') === 2)
      e.target.value = e.target.value.replace('/', '');
    if (e.target.value.length > 6) return;

    if (!isNaN(e.target.value)) {
      if (e.target.value.length < 2)
        setFormData({ ...formData, [e.target.name]: e.target.value });
      else if (e.target.value.length === 2)
        setFormData({ ...formData, [e.target.name]: `${e.target.value}/` });
      else {
        setFormData({
          ...formData,
          [e.target.name]: `${e.target.value.substring(
            0,
            2
          )}/${e.target.value.substring(2)}`,
        });
      }
    }
  };

  return (
    <div className="text-black text-sm">
      <div className="flex justify-between">
        <div className="flex flex-col w-full mr-8">
          <label htmlFor="organization" className="mb-2 font-medium">
            Competition/Challenge Name
          </label>
          <input
            type="text"
            id="organization"
            className={`border h-[38px] rounded-md outline-none px-3
            focus:border-[#2dc5a1] transition-all ease-linear duration-75 ${
              formDataErrors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            autoComplete="off"
            placeholder="Example: Write-A-Thon Article Writing"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {formDataErrors.name ? (
            <p className="text-red-500 text-xs">{formDataErrors.name}</p>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-between mt-8">
          <div className="flex flex-col w-full mr-8">
            <label htmlFor="from" className="mb-2 font-medium">
              Participation Date
            </label>
            <input
              type="text"
              id="from"
              name="participationDate"
              value={formData.participationDate}
              placeholder="MM/YYYY"
              className="border border-gray-300 h-[38px] rounded-md outline-none px-3
            focus:border-[#2dc5a1] transition-all ease-linear duration-75"
              autoComplete="off"
              onChange={handleDateChange}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <div className="flex flex-col w-full mr-8">
          <label htmlFor="organization" className="mb-2 font-medium">
            I am the
          </label>
          <div className="flex">
            <div className="flex items-center mr-5">
              <input
                type="radio"
                name="result"
                id="winner"
                value="winner"
                defaultChecked={formData.result === 'winner'}
                onChange={handleChange}
              />
              <label htmlFor="winner" className="ml-2 text-sm">
                Winner
              </label>
            </div>
            <div className="flex items-center mr-5">
              <input
                type="radio"
                name="result"
                id="runnerUp"
                value="runnerUp"
                defaultChecked={formData.result === 'runnerUp'}
                onChange={handleChange}
              />
              <label htmlFor="runnerUp" className="ml-2 text-sm">
                Runner Up
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="result"
                id="participant"
                value="participant"
                defaultChecked={formData.result === 'participant'}
                onChange={handleChange}
              />
              <label htmlFor="participant" className="ml-2 text-sm">
                Participant
              </label>
            </div>
          </div>
          {formDataErrors.result ? (
            <p className="text-red-500 text-xs mt-1.5">
              {formDataErrors.result}
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompetitionChallengesForm;
