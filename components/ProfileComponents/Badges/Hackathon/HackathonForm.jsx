import React, { useState } from 'react';
import Editor from '../../../Editor/Editor';

const HackathonForm = ({
  formData,
  setFormData,
  formDataErrors,
  handleChange,
}) => {
  const handleEditorChange = (htmlContent) => {
    setFormData({ ...formData, description: htmlContent });
  };
  const [lenExceeded, setLenExceeded] = useState(false);

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
            Hackathon Name
          </label>
          <input
            type="text"
            id="organization"
            className={`border h-[38px] rounded-md outline-none px-3 
            focus:border-[#2dc5a1] transition-all ease-linear duration-75 ${
              formDataErrors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            autoComplete="off"
            placeholder="Hack the Future"
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
            placeholder="Frontend Developer"
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
        {!formData.current ? (
          <div className="flex flex-col w-[30%] mr-8">
            <label htmlFor="to" className="mb-2 font-medium">
              Date Participated
            </label>
            <input
              type="text"
              id="recievedDate"
              name="dateParticipated"
              value={formData.dateParticipated}
              placeholder="MM/YYYY"
              className="border border-gray-300 h-[38px] rounded-md outline-none px-3
            focus:border-[#2dc5a1] transition-all ease-linear duration-75"
              autoComplete="off"
              onChange={handleDateChange}
            />
          </div>
        ) : null}
        {/* <div className={`mt-6 flex items-center w-full`}>
          <input
            type="checkbox"
            name="current"
            id="current"
            className="mr-2 outline-none"
            checked={formData.current}
            onClick={() =>
              setFormData({ ...formData, current: !formData.current })
            }
            onChange={() => {}}
          />
          <label htmlFor="current" className="text-sm">
            Current Experience
          </label>
        </div> */}
      </div>
      <div className="mt-6">
        <label htmlFor="description" className="font-medium inline-block mb-2">
          Description (Optional)
        </label>
        <Editor
          htmlContent={formData.description}
          handleEditorChange={handleEditorChange}
          lenExceeded={lenExceeded}
          setLenExceeded={setLenExceeded}
        />
      </div>
    </div>
  );
};

export default HackathonForm;
