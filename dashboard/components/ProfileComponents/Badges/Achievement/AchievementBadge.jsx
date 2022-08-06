import React, { useState } from 'react';
import AchievementEditForm from './AchievementEditForm';
import AchievementIcon from './AchievementIcon';

const AchievementBadge = ({ data, badges, setBadges }) => {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer m-2"
        onClick={() => setDisplayModal(true)}
        role=""
      >
        <AchievementIcon />
      </div>
      <AchievementEditForm
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
        data={data}
        badges={badges}
        setBadges={setBadges}
      />
    </>
  );
};

export default AchievementBadge;
