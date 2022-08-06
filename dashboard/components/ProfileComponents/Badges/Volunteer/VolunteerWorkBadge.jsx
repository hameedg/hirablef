import React, { useState } from 'react';
import VolunteerWorkEditForm from './VolunteerWorkEditForm';
import VolunteerWorkIcon from './VolunteerWorkIcon';

const VolunteerWorkBadge = ({ data, badges, setBadges }) => {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer m-2"
        onClick={() => setDisplayModal(true)}
        role=""
      >
        <VolunteerWorkIcon />
      </div>
      <VolunteerWorkEditForm
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
        data={data}
        badges={badges}
        setBadges={setBadges}
      />
    </>
  );
};

export default VolunteerWorkBadge;
