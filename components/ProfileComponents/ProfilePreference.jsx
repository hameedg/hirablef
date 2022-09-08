/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import PreferredExperience from './PreferredExperience';
import PreferredRoles from './PreferredRoles';
import PreferredSkill from './PreferredSkills';

function ProfilePreference({ preferences }) {
  const [showroles, setshowroles] = useState(false);
  const [showskills, setshowskills] = useState(false);
  const [showexperience, setshowexperience] = useState(false);
  const [showlocation, setshowlocation] = useState(false);
  const [preferredLocation, setPreferredLocation] = useState([
    { name: 'Totally Open', selected: false },
    { name: 'Remote', selected: false },
    { name: 'Alanta, TX', selected: false },
    { name: 'Boston, MA', selected: false },
    { name: 'Chicago, IL', selected: false },
    { name: 'Denver, CO', selected: false },
    { name: 'Los Angeles, CA', selected: false },
    { name: 'Nashville, TN', selected: false },
    { name: 'New York, NY', selected: false },
    { name: 'Raleigh, NC', selected: false },
    { name: 'San Diego, CA', selected: false },
    { name: 'San Francisco, CA', selected: false },
    { name: 'Seattle, WA', selected: false },
    { name: 'Wilmington, DE', selected: false },
    { name: 'Houston, TX', selected: false },
    { name: 'Dallas, TX', selected: false },
    { name: 'Detroit MI', selected: false },
  ]);
  const [userPreferredLocation, setUserPrefferedLocation] = useState([]);
  const [totalPreferredLocation, setTotalPreferredLocation] = useState(0);
  const [autocomplete, setAutocomplete] = useState({
    disabled: true,
    data: [],
  });
  const [inputValue, setInputValue] = useState('');

  const updatePreferredLocation = (roleName) => {
    const newData = preferredLocation.map((role) => {
      if (role.name === roleName)
        if (!role.selected && totalPreferredLocation === 7);
        else role.selected = !role.selected;

      return role;
    });
    setPreferredLocation(newData);
    setInputValue('');
    setAutocomplete({
      disabled: true,
      data: [],
    });
  };

  const handlePreferredRolesSave = () => {
    const userRoles = preferredLocation.filter((role) => role.selected);
    setUserPrefferedLocation(userRoles);
    setInputValue('');
    setshowlocation('');
    setAutocomplete({ disabled: true, data: [] });
  };

  const closePreferredRolesModal = () => {
    const rolesList = userPreferredLocation.map((role) => role.name);
    const updatedRoles = preferredLocation.map((role) => {
      if (rolesList.includes(role.name)) role.selected = true;
      else role.selected = false;
      return role;
    });
    setPreferredLocation(updatedRoles);
    setshowlocation('');
    setInputValue('');
    setAutocomplete({ disabled: true, data: [] });
  };

  useEffect(() => {
    let temp = 0;

    preferredLocation.forEach((role) => {
      if (role.selected) temp++;
    });
    setTotalPreferredLocation(temp);
  }, [preferredLocation]);

  const handleInputValueChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value.trim() === '')
      setAutocomplete({ disabled: true, data: [] });
    else {
      const autocompleteData = [];
      const regex = new RegExp(e.target.value, 'i');

      preferredLocation.forEach((role) => {
        if (regex.test(role.name)) autocompleteData.push(role.name);
      });

      setAutocomplete({
        disabled: false,
        data: [e.target.value, ...autocompleteData],
      });
    }
  };
  useEffect(() => {
    const body = document.getElementsByTagName('body');
    if (showroles || showskills || showexperience || showlocation) {
      body[0].style.overflow = 'hidden';
      body[0].style.position = 'fixed';
      body[0].style.width = '100%';
    } else {
      body[0].style.overflow = 'auto';
      body[0].style.position = 'relative';
    }
  }, [showroles, showskills, showexperience, showlocation]);

  return (
    <>
      <div className="w-[305px] rounded-[9px] border-[#D9D9D9] bg-white border-[1.5px] p-6 space-y-[15px]">
        <PreferredRoles
          roles={preferences.roles}
          showroles={showroles}
          setshowroles={setshowroles}
        />
        <PreferredExperience
          experiences={preferences.experiences}
          showexperience={showexperience}
          setshowexperience={setshowexperience}
        />
        <PreferredSkill
          skills={preferences.skills}
          showskills={showskills}
          setshowskills={setshowskills}
        />
        <div className="group">
          <div className="flex items-center justify-between">
            <h2 className="font-inter font-semibold text-[0.875rem]">
              Preferred locations
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 opacity-0 group-hover:opacity-100 transformation cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#A9AAAA"
              onClick={() => setshowlocation(true)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </div>
          {userPreferredLocation.length === 0 ? (
            <p className="text-gray-400 text-sm w-60">
              Where do you want to work?
            </p>
          ) : (
            userPreferredLocation.map((role, index) => (
              <span key={index} className="prefered-tags inline-block">
                {role.name}
              </span>
            ))
          )}
        </div>

        {showlocation ? (
          <div>
            <div className="bg-black bg-opacity-70 w-full h-full fixed z-50 inset-0 flex items-center justify-center edit-overlay">
              <div className="relative max-h-[746px] flex-col h-[94%] rounded-lg w-[640px] overflow-y-auto bg-white z-10 text-black min-w-[640px] my-6 mx-auto font-inter">
                <div className="p-6 max-w-full">
                  {/* CONTENT START */}
                  <div className="flex items-center justify-between h-12 py-0 px-[25px] sticky mb-4">
                    <button
                      type="button"
                      className="mr-2 h-8 w-8 tranform ease-in-out duration-200 flex items-center justify-center rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7 text-[#033443]"
                        onClick={() => setshowlocation(false)}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                    <button
                      className="bg-[#201e27] text-white background-transparent font-bold px-3 py-2  min-w-[100px] h-10 text-sm rounded-[5px] outline-none focus:outline-none mr-1"
                      type="button"
                      onClick={handlePreferredRolesSave}
                    >
                      Save
                    </button>
                  </div>
                  <div className="w-[90%] m-auto">
                    <h2 className="font-bold font-inter text-center text-2xl mb-4">
                      Edit My Interests
                    </h2>
                    <div className="text-left ml-[10px]">
                      <h5 className="text-[0.875rem] font-semibold text-[#201e27]">
                        Which location would you like to work in?
                      </h5>
                      <p className="text-[#788699] mt-1 font-inter">
                        Choose up to 7
                      </p>
                    </div>
                    <div className="relative flex-auto">
                      <input
                        className="tags-input"
                        type="text"
                        value={inputValue}
                        onChange={handleInputValueChange}
                        placeholder="Example: Boston, Houston"
                      />
                      <div
                        className={`${
                          autocomplete.disabled ? 'hidden' : ''
                        } absolute z-10 border rounded-md border-gray-300 py-1 bg-white ml-2 max-h-60 overflow-y-scroll`}
                        style={{ width: 'calc(100% + 20px)' }}
                      >
                        {autocomplete.data.map((item, index) => (
                          <div
                            key={index}
                            className="autocomplete-options"
                            onClick={() => updatePreferredLocation(item)}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="ml-1">
                      {preferredLocation.map((role, index) => (
                        <span
                          key={index}
                          className="inline-block border border-gray-300
                  rounded-full mr-2 mb-3 py-3 px-4 text-sm cursor-pointer text-gray-500 select-none"
                          style={{
                            background: role.selected ? '#61a0ff' : '',
                            color: role.selected ? '#fff' : '',
                          }}
                          onClick={() => updatePreferredLocation(role.name)}
                        >
                          {role.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* CONTENT END */}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default ProfilePreference;
