/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import PreferredLocationModal from './PreferredLocationModal';

function PreferredLocation({ setshowlocation, setlocation }) {
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
  return (
    <>
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
          <p className="text-light-grey text-[0.85rem] leading-[1.25rem] font-normal">
            What do you wanna work?
          </p>
        ) : (
          userPreferredLocation.map((role, index) => (
            <span
              key={index}
              className="text-[0.75rem] bg-[#eff2f6] font-normal inline-block py-[0.25rem] px-[0.5rem] rounded-[5px] mt-[0.5rem] mr-[0.5rem] mb-0 ml-0"
            >
              {role.name}
            </span>
          ))
        )}
        <PreferredLocationModal
          setlocation={setlocation}
          setshowlocation={setshowlocation}
          preferredLocation={preferredLocation}
          updatePreferredLocation={updatePreferredLocation}
          handlePreferredRolesSave={handlePreferredRolesSave}
          closePreferredRolesModal={closePreferredRolesModal}
          inputValue={inputValue}
          handleInputValueChange={handleInputValueChange}
          autocomplete={autocomplete}
          setAutocomplete={setAutocomplete}
        />
      </div>
    </>
  );
}

export default PreferredLocation;
