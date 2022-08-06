/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import PreferredRolesModal from './PreferredRolesModal';
import { updateProfile } from '../../utils/apis/profile';

function PreferredRoles({ roles, setshowroles, showroles }) {
  const [preferredRoles, setPreferredRoles] = useState([
    { name: 'IT System Administrator', selected: false },
    { name: 'Sales', selected: false },
    { name: 'Data Scientist', selected: false },
    { name: 'Data Engineer', selected: false },
    { name: 'ML Engineer', selected: false },
    { name: 'Back End Developer', selected: false },
    { name: 'Product Manager', selected: false },
    { name: 'HR', selected: false },
    { name: 'Full Stack Developer', selected: false },
    { name: 'Front End Developer', selected: false },
    { name: 'Business Operations', selected: false },
    { name: 'Finance', selected: false },
    { name: 'Legal', selected: false },
    { name: 'Product Designer', selected: false },
    { name: 'Devops Engineer', selected: false },
    { name: 'Marketing', selected: false },
    { name: 'Systems Engineer', selected: false },
    { name: 'IOS Engineer', selected: false },
    { name: 'Consulting', selected: false },
    { name: 'Android Engineer', selected: false },
    { name: 'Supply Chain Management', selected: false },
    { name: 'Network Engineer', selected: false },
    { name: 'Content Strategist', selected: false },
    { name: 'Security Engineer', selected: false },
    { name: 'Recruiting', selected: false },
    { name: 'Accounting', selected: false },
    { name: 'Hardware Engineer', selected: false },
    { name: 'Graphic Designer', selected: false },
    { name: 'Logistics Coordinator', selected: false },
    { name: 'Copywriting', selected: false },
    { name: 'Not Sure Yet', selected: false },
  ]);
  const [userPreferredRoles, setUserPrefferedRoles] = useState([]);
  const [totalPreferredRoles, setTotalPreferredRoles] = useState(0);
  const [autocomplete, setAutocomplete] = useState({
    disabled: true,
    data: [],
  });
  const [inputValue, setInputValue] = useState('');

  const updatePreferredRoles = (roleName) => {
    const newData = preferredRoles.map((role) => {
      if (role.name === roleName)
        if (!role.selected && totalPreferredRoles === 7);
        else role.selected = !role.selected;

      return role;
    });
    setPreferredRoles(newData);
    setInputValue('');
    setAutocomplete({
      disabled: true,
      data: [],
    });
  };

  useEffect(() => {
    roles.forEach((roleName) => updatePreferredRoles(roleName));
    setUserPrefferedRoles(
      roles.map((roleName) => ({
        name: roleName,
        selected: true,
      }))
    );
    setTotalPreferredRoles(roles.length);
  }, [roles]);

  const handlePreferredRolesSave = async () => {
    const userRoles = preferredRoles.filter((role) => role.selected);
    const intrestedRoles = userRoles.map((role) => role.name);
    setUserPrefferedRoles(userRoles);
    setshowroles('');

    try {
      await updateProfile({ intrestedRoles });
      setUserPrefferedRoles(userRoles);
      setInputValue('');
      setshowroles('');
      setAutocomplete({ disabled: true, data: [] });
    } catch (error) {
      console.log(error);
    }
  };

  const closePreferredRolesModal = () => {
    // const rolesList = userPreferredRoles.map((role) => role.name);
    // const updatedRoles = preferredRoles.map((role) => {
    //   if (rolesList.includes(role.name)) role.selected = true;
    //   else role.selected = false;
    //   return role;
    // });
    // setPreferredRoles(updatedRoles);

    setshowroles('');
    setInputValue('');
    setAutocomplete({ disabled: true, data: [] });
  };

  useEffect(() => {
    let temp = 0;

    preferredRoles.forEach((role) => {
      if (role.selected) temp++;
    });
    setTotalPreferredRoles(temp);
  }, [preferredRoles]);

  const handleInputValueChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value.trim() === '')
      setAutocomplete({ disabled: true, data: [] });
    else {
      const autocompleteData = [];
      const regex = new RegExp(e.target.value, 'i');

      preferredRoles.forEach((role) => {
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
      <div className="group mt-1">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-[0.875rem] leading-5">
            Preferred roles
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#A9AAAA"
            onClick={() => setshowroles(true)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </div>
        {userPreferredRoles.length === 0 ? (
          <p className="text-light-grey text-[0.85rem] leading-[1.25rem] font-normal">
            What are your roles
          </p>
        ) : (
          userPreferredRoles.map((role, index) => (
            <span key={index} className="prefered-tags inline-block">
              {role.name}
            </span>
          ))
        )}
      </div>
      <PreferredRolesModal
        showroles={showroles}
        setshowroles={setshowroles}
        preferredRoles={preferredRoles}
        updatePreferredRoles={updatePreferredRoles}
        handlePreferredRolesSave={handlePreferredRolesSave}
        closePreferredRolesModal={closePreferredRolesModal}
        inputValue={inputValue}
        handleInputValueChange={handleInputValueChange}
        autocomplete={autocomplete}
        setAutocomplete={setAutocomplete}
      />
    </>
  );
}

export default PreferredRoles;
