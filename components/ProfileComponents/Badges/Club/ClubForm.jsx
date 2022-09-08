import React from 'react';

const ClubForm = ({ formData, setFormData, formDataErrors, handleChange }) => {
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
        <div className="flex flex-col w-6/12 mr-8">
          <label htmlFor="organization" className="mb-2 font-medium">
            Club Name
          </label>
          <input
            type="text"
            id="organization"
            className={`border h-[38px] rounded-md outline-none px-3
            focus:border-[#2dc5a1] transition-all ease-linear duration-75 ${
              formDataErrors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            autoComplete="off"
            placeholder="Literature Club"
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
        <div className="flex flex-col w-6/12">
          <label htmlFor="title" className="mb-2 font-medium">
            Role
          </label>
          <input
            type="text"
            id="title"
            className={`border h-[38px] rounded-md outline-none px-3
            focus:border-[#2dc5a1] transition-all ease-linear duration-75 ${
              formDataErrors.role ? 'border-red-500' : 'border-gray-300'
            }`}
            autoComplete="off"
            placeholder="Student Head"
            name="role"
            value={formData.role}
            onChange={handleChange}
          />
          {formDataErrors.role ? (
            <p className="text-red-500 text-xs">{formDataErrors.role}</p>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="h-16 flex justify-between items-center mt-6">
        <div className="flex justify-between mt-8">
          <div className="flex flex-col w-[50%] mr-8">
            <label htmlFor="from" className="mb-2 font-medium">
              Start Date
            </label>
            <input
              type="text"
              id="from"
              name="startDate"
              value={formData.startDate}
              placeholder="MM/YYYY"
              className="border border-gray-300 h-[38px] rounded-md outline-none px-3
            focus:border-[#2dc5a1] transition-all ease-linear duration-75"
              autoComplete="off"
              onChange={handleDateChange}
            />
          </div>
          {!formData.current ? (
            <div className="flex flex-col w-[50%] mr-8">
              <label htmlFor="to" className="mb-2 font-medium">
                End Date
              </label>
              <input
                type="text"
                id="to"
                name="endDate"
                value={formData.endDate}
                placeholder="MM/YYYY"
                className="border border-gray-300 h-[38px] rounded-md outline-none px-3
            focus:border-[#2dc5a1] transition-all ease-linear duration-75"
                autoComplete="off"
                onChange={handleDateChange}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ClubForm;
