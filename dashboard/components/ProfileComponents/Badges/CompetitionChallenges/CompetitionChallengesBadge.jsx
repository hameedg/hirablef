import React, { useState } from 'react';
import CompetitionChallengesEditForm from './CompetitionChallengesEditForm';

const CompetitionChallengesBadge = ({ data, badges, setBadges }) => {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <>
      <div className="cursor-pointer m-2" onClick={() => setDisplayModal(true)}>
        CC
      </div>
      <CompetitionChallengesEditForm
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
        data={data}
        badges={badges}
        setBadges={setBadges}
      />
    </>
  );
};

export default CompetitionChallengesBadge;
