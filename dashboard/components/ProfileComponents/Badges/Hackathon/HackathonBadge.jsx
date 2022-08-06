import React, { useState } from 'react';
import HackathonEditForm from './HackathonEditForm';

const HackathonBadge = ({ data, badges, setBadges }) => {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <>
      <div className="cursor-pointer m-2" onClick={() => setDisplayModal(true)}>
        H
      </div>
      <HackathonEditForm
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
        data={data}
        badges={badges}
        setBadges={setBadges}
      />
    </>
  );
};

export default HackathonBadge;
