/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import PreferredExperienceModal from './PreferredExperienceModal';
import { updateProfile } from '../../utils/apis/profile';

function PreferredExperienceComp({
  experiences,
  setshowexperience,
  showexperience,
}) {
  const [PreferredExperience, setPreferredExperience] = useState([
    { name: 'Buisness', selected: false },
    { name: 'Sales', selected: false },
    { name: 'Marketing', selected: false },
    { name: 'Networking', selected: false },
    { name: 'Systems', selected: false },
    { name: 'Backend', selected: false },
    { name: 'Security', selected: false },
    { name: 'Frontend', selected: false },
    { name: 'Data Science', selected: false },
    { name: 'Testing', selected: false },
    { name: 'Product Management', selected: false },
    { name: 'Finance', selected: false },
    { name: 'Hardware', selected: false },
    { name: 'UI/UX Design', selected: false },
    { name: 'Full Stack', selected: false },
    { name: 'Mobile', selected: false },
    { name: 'Product Design', selected: false },
    { name: 'Machine Learning', selected: false },
    { name: 'Accounting', selected: false },
    { name: 'Trading', selected: false },
    { name: 'Art', selected: false },
    { name: 'Legal', selected: false },
    { name: 'Biotech', selected: false },
  ]);
  const [userPreferredExperience, setUserPrefferedExperience] = useState([]);
  const [totalPreferredExperience, setTotalPreferredExperience] = useState(0);
  const [autocomplete, setAutocomplete] = useState({
    disabled: true,
    data: [],
  });
  const [inputValue, setInputValue] = useState('');

  const updatePreferredExperience = (roleName) => {
    const newData = PreferredExperience.map((role) => {
      if (role.name === roleName)
        if (!role.selected && totalPreferredExperience === 7);
        else role.selected = !role.selected;

      return role;
    });
    setPreferredExperience(newData);
    setInputValue('');
    setAutocomplete({
      disabled: true,
      data: [],
    });
  };

  useEffect(() => {
    experiences.forEach((name) => updatePreferredExperience(name));
    setUserPrefferedExperience(
      experiences.map((name) => ({
        name,
        selected: true,
      }))
    );
    setTotalPreferredExperience(experiences.length);
  }, [experiences]);

  const handlePreferredRolesSave = async () => {
    const userRoles = PreferredExperience.filter((role) => role.selected);
    const newExperiences = userRoles.map((experience) => experience.name);
    setUserPrefferedExperience(userRoles);
    setshowexperience('');

    try {
      await updateProfile({ experience: newExperiences });
      setUserPrefferedExperience(userRoles);
      setInputValue('');
      setshowexperience('');
      setAutocomplete({ disabled: true, data: [] });
    } catch (error) {
      console.log(error.response);
    }
  };

  const closePreferredRolesModal = () => {
    const rolesList = userPreferredExperience.map((role) => role.name);
    const updatedRoles = PreferredExperience.map((role) => {
      if (rolesList.includes(role.name)) role.selected = true;
      else role.selected = false;
      return role;
    });
    setPreferredExperience(updatedRoles);
    setshowexperience('');
    setInputValue('');
    setAutocomplete({ disabled: true, data: [] });
  };

  useEffect(() => {
    let temp = 0;

    PreferredExperience.forEach((role) => {
      if (role.selected) temp++;
    });
    setTotalPreferredExperience(temp);
  }, [PreferredExperience]);

  const handleInputValueChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value.trim() === '')
      setAutocomplete({ disabled: true, data: [] });
    else {
      const autocompleteData = [];
      const regex = new RegExp(e.target.value, 'i');

      PreferredExperience.forEach((role) => {
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
            Experience
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 opacity-0 group-hover:opacity-100 transformation cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#A9AAAA"
            onClick={() => setshowexperience(true)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </div>
        {userPreferredExperience.length === 0 ? (
          <p className="text-light-grey text-[0.85rem] leading-[1.25rem] font-normal">
            What areas of experience do you have?
          </p>
        ) : (
          userPreferredExperience.map((role, index) => (
            <span key={index} className="prefered-tags inline-block">
              {role.name}
            </span>
          ))
        )}
      </div>
      <PreferredExperienceModal
        showexperience={showexperience}
        setshowexperience={setshowexperience}
        PreferredExperience={PreferredExperience}
        updatePreferredExperience={updatePreferredExperience}
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

export default PreferredExperienceComp;
