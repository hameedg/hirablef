import React, { useState } from 'react';
import ClubEditForm from './ClubEditForm';

const ClubBadge = ({ data, badges, setBadges }) => {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <>
      <div className="cursor-pointer m-2" onClick={() => setDisplayModal(true)}>
        C
      </div>
      <ClubEditForm
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
        data={data}
        badges={badges}
        setBadges={setBadges}
      />
    </>
  );
};

export default ClubBadge;
