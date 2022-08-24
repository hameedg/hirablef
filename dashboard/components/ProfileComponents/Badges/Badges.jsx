import React, { useEffect, useState } from 'react';
import AchievementBadge from './Achievement/AchievementBadge';
import BadgesModal from './BadgesModal';
import ClubBadge from './Club/ClubBadge';
import CompetitionChallengesBadge from './CompetitionChallenges/CompetitionChallengesBadge';
import HackathonBadge from './Hackathon/HackathonBadge';
import SocietyBadge from './Society/SocietyBadge';
import VolunteerWorkBadge from './Volunteer/VolunteerWorkBadge';

const Badges = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [badges, setBadges] = useState({
    achievement: [],
    volunteerWork: [],
    hackathon: [],
    society: [],
    club: [],
    competitionChallenges: [],
  });

  useEffect(() => {
    if (displayModal) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [displayModal]);

  return (
    <>
      <div
        className="bg-white rounded-[9px] border-[#D9D9D8] border-[1.5px]"
        style={{ minHeight: '300px' }}
      >
        <div
          className="my-[25px] px-[35px] flex flex-col items-center justify-between"
          style={{ minHeight: '250px' }}
        >
          <img
            src="https://sowmiya-home-page.herokuapp.com/static/media/badges.fbd62946.37b274f1.svg"
            alt="badges"
          />
          <p className="font-normal text-xl">Earn badges</p>
          <p className="text-sm text-center text-gray-500">
            Get noticed by recruitments. Add things like hackathons and classes
            you’ve TA’d.
          </p>
          <div className="flex">
            <VolunteerWorkBadge
              data={badges.volunteerWork}
              badges={badges}
              setBadges={setBadges}
            />
            <AchievementBadge
              data={badges.achievement}
              badges={badges}
              setBadges={setBadges}
            />

            {badges.volunteerWork.length > 0 && (
              <VolunteerWorkBadge
                data={badges.volunteerWork}
                badges={badges}
                setBadges={setBadges}
              />
            )}
            {badges.achievement.length > 0 && (
              <AchievementBadge
                data={badges.achievement}
                badges={badges}
                setBadges={setBadges}
              />
            )}
            {badges.hackathon.length > 0 && (
              <HackathonBadge
                data={badges.hackathon}
                badges={badges}
                setBadges={setBadges}
              />
            )}
            {badges.society.length > 0 && (
              <SocietyBadge
                data={badges.society}
                badges={badges}
                setBadges={setBadges}
              />
            )}
            {badges.club.length > 0 && (
              <ClubBadge
                data={badges.club}
                badges={badges}
                setBadges={setBadges}
              />
            )}
            {badges.competitionChallenges.length > 0 && (
              <CompetitionChallengesBadge
                data={badges.competitionChallenges}
                badges={badges}
                setBadges={setBadges}
              />
            )}
          </div>
          <button
            className="experience_button"
            onClick={() => setDisplayModal(true)}
          >
            Add ID Card
          </button>
        </div>
      </div>
      <BadgesModal
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
        badges={badges}
        setBadges={setBadges}
      />
    </>
  );
};

export default Badges;
