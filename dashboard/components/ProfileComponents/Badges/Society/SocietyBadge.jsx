import React, { useState } from 'react';
import SocietyEditForm from './SocietyEditForm';

const SocietyBadge = ({ data, badges, setBadges }) => {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <>
      <div className="cursor-pointer m-2" onClick={() => setDisplayModal(true)}>
        S
      </div>
      <SocietyEditForm
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
        data={data}
        badges={badges}
        setBadges={setBadges}
      />
    </>
  );
};

export default SocietyBadge;
