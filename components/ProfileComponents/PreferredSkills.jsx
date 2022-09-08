/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import PreferredSkillsModal from './PreferredSkillsModal';
import { updateProfile } from '../../utils/apis/profile';

function PreferredSkill({ skills, setshowskills, showskills }) {
  const [preferredSkills, setPreferredSkills] = useState([
    { name: 'Angular JS', selected: false },
    { name: 'Apache Spark', selected: false },
    { name: 'C', selected: false },
    { name: 'C++', selected: false },
    { name: 'Kotlin', selected: false },
    { name: 'Java', selected: false },
    { name: 'Python', selected: false },
    { name: 'Node js', selected: false },
    { name: 'React js', selected: false },
    { name: 'Linux', selected: false },
    { name: 'Github', selected: false },
    { name: 'SQL', selected: false },
    { name: 'MongoDB', selected: false },
  ]);
  const [userPreferredSkills, setUserPrefferedSkills] = useState([]);
  const [totalPreferredSkills, setTotalPreferredSkills] = useState(0);
  const [autocomplete, setAutocomplete] = useState({
    disabled: true,
    data: [],
  });
  const [inputValue, setInputValue] = useState('');

  const updatePreferredSkills = (roleName) => {
    const newData = preferredSkills.map((role) => {
      if (role.name === roleName)
        if (!role.selected && totalPreferredSkills === 7);
        else role.selected = !role.selected;

      return role;
    });
    setPreferredSkills(newData);
    setInputValue('');
    setAutocomplete({
      disabled: true,
      data: [],
    });
  };

  useEffect(() => {
    skills.forEach((name) => updatePreferredSkills(name));
    setUserPrefferedSkills(
      skills.map((name) => ({
        name,
        selected: true,
      }))
    );
    setTotalPreferredSkills(skills.length);
  }, [skills]);

  const handlePreferredRolesSave = async () => {
    const userSkills = preferredSkills.filter((role) => role.selected);
    const newSkills = userSkills.map((skill) => skill.name);
    // console.log(newSkills);
    setUserPrefferedSkills(userSkills);
    setshowskills(false);
    try {
      await updateProfile({ skills: newSkills });
      setUserPrefferedSkills(userSkills);
      setInputValue('');
      setshowskills('');
      setAutocomplete({ disabled: true, data: [] });
    } catch (error) {
      console.log(error.response);
    }
  };

  const closePreferredRolesModal = () => {
    const rolesList = userPreferredSkills.map((role) => role.name);
    const updatedRoles = preferredSkills.map((role) => {
      if (rolesList.includes(role.name)) role.selected = true;
      else role.selected = false;
      return role;
    });
    setPreferredSkills(updatedRoles);

    setInputValue('');
    setAutocomplete({ disabled: true, data: [] });
  };

  useEffect(() => {
    let temp = 0;

    preferredSkills.forEach((role) => {
      if (role.selected) temp++;
    });
    setTotalPreferredSkills(temp);
  }, [preferredSkills]);

  const handleInputValueChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value.trim() === '')
      setAutocomplete({ disabled: true, data: [] });
    else {
      const autocompleteData = [];
      const regex = new RegExp(e.target.value, 'i');

      preferredSkills.forEach((role) => {
        if (regex.test(role.name)) autocompleteData.push(role.name);
      });

      setAutocomplete({
        disabled: false,
        data: [e.target.value, ...autocompleteData],
      });
    }
  };

  const [yoeSkill, setYOESkill] = useState(-1);

  return (
    <>
      <div className="group mt-1">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-[0.875rem] leading-5">Skills</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#A9AAAA"
            onClick={() => setshowskills(true)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </div>
        {userPreferredSkills.length === 0 ? (
          <p className="text-light-grey text-[0.85rem] leading-[1.25rem] font-normal">
            Rank your skills
          </p>
        ) : (
          userPreferredSkills.map((role, ind) => (
            <div key={ind} className="prefered-tags">
              {role.name}
            </div>
          ))
        )}
      </div>
      <PreferredSkillsModal
        showskills={showskills}
        setshowskills={setshowskills}
        preferredSkills={preferredSkills}
        updatePreferredSkills={updatePreferredSkills}
        handlePreferredRolesSave={handlePreferredRolesSave}
        inputValue={inputValue}
        handleInputValueChange={handleInputValueChange}
        autocomplete={autocomplete}
      />
    </>
  );
}

export default PreferredSkill;
