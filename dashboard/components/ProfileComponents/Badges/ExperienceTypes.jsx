import React from 'react';

const ExperienceTypes = ({
  experienceType,
  setExperienceType,
  list,
  allowUnselected,
}) => {
  return (
    <div className="mt-5 w-full">
      <p className="text-sm text-black font-medium">Experience type</p>
      <div className="flex flex-wrap w-full">
        {list.map((item, index) => (
          <span
            key={index}
            className="preferred_roles"
            style={{
              background: experienceType === item ? '#61a0ff' : '',
              color: experienceType === item ? '#fff' : '',
            }}
            onClick={() => {
              if (experienceType !== item) setExperienceType(item);
              else if (experienceType === item && allowUnselected)
                setExperienceType('');
              else;
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTypes;
