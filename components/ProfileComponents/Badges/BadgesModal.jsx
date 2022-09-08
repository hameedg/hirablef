import React, { useEffect, useState } from 'react';
import AchievementForm from './Achievement/AchievementForm';
import BaseModal from './BaseModal';
import ExperienceTypes from './ExperienceTypes';
import HackathonForm from './Hackathon/HackathonForm';
import VolunteerWorkForm from './Volunteer/VolunteerWorkForm';
import SocietyForm from './Society/SocietyForm';
import ClubForm from './Club/ClubForm';
import CompetitionChallengesForm from './CompetitionChallenges/CompetitionChallengesForm';

const BadgesModal = ({ displayModal, setDisplayModal, badges, setBadges }) => {
  const [experienceType, setExperienceType] = useState('');
  const experienceTypesList = [
    'Volunteer Work',
    'Achievement',
    'Hackathon',
    'Society',
    'Club',
    'Competition/Challenges',
  ];

  // Form Data
  const initialVolunteerWorkFormData = {
    organization: '',
    role: '',
    from: '',
    to: '',
    current: false,
    description: '',
  };
  const [volunteerWorkFormData, setVolunteerWorkFormData] = useState(
    initialVolunteerWorkFormData
  );
  const [volunteerWorkFormDataErrors, setVolunteerWorkFormDataErrors] =
    useState({});

  const initialAchievementFormData = {
    organization: '',
    title: '',
    recievedDate: '',
    current: false,
    description: '',
  };
  const [achievementFormData, setAchievementFormData] = useState(
    initialAchievementFormData
  );
  const [achievementFormDataErrors, setAchievementFormDataErrors] = useState(
    {}
  );

  const initialHackathonFormData = {
    name: '',
    role: '',
    dateParticipated: '',
    current: false,
    description: '',
  };
  const [hackathonFormData, setHackathonFormData] = useState(
    initialHackathonFormData
  );
  const [hackathonFormDataErrors, setHackathonFormDataErrors] = useState({});

  const initialSocietyFormData = {
    name: '',
    role: '',
    startDate: '',
    endDate: '',
  };
  const [societyFormData, setSocietyFormData] = useState(
    initialSocietyFormData
  );
  const [societyFormDataErrors, setSocietyFormDataErrors] = useState({});

  const initialClubFormData = {
    name: '',
    role: '',
    startDate: '',
    endDate: '',
  };
  const [clubFormData, setClubFormData] = useState(initialClubFormData);
  const [clubFormDataErrors, setClubFormDataErrors] = useState({});

  const initialCompetitionChallengesFormData = {
    name: '',
    participationDate: '',
    result: '',
  };
  const [competitionChallengesFormData, setCompetitionChallengesFormData] =
    useState(initialCompetitionChallengesFormData);
  const [
    competitionChallengesFormDataErrors,
    setCompetitionChallengesFormDataErrors,
  ] = useState({});

  useEffect(() => {
    if (displayModal) document.body.style.overflow = 'hidden';
    else {
      setExperienceType('');
      setVolunteerWorkFormData(initialVolunteerWorkFormData);
      setAchievementFormData(initialAchievementFormData);
      setHackathonFormData(initialHackathonFormData);
      setSocietyFormData(initialSocietyFormData);
      setClubFormData(initialClubFormData);
      setCompetitionChallengesFormData(initialCompetitionChallengesFormData);

      document.body.style.overflow = 'auto';
    }
    setVolunteerWorkFormDataErrors({});
    setAchievementFormDataErrors({});
    setHackathonFormDataErrors({});
    setSocietyFormDataErrors({});
    setCompetitionChallengesFormDataErrors({});
  }, [displayModal]);

  const handleVolunteerFormDataChange = (e) => {
    setVolunteerWorkFormData({
      ...volunteerWorkFormData,
      [e.target.name]: e.target.value,
    });
  };
  const handleAchievementFormDataChange = (e) => {
    setAchievementFormData({
      ...achievementFormData,
      [e.target.name]: e.target.value,
    });
  };
  const handleHackathonFormDataChange = (e) => {
    setHackathonFormData({
      ...hackathonFormData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSocietyFormDataChange = (e) => {
    setSocietyFormData({
      ...societyFormData,
      [e.target.name]: e.target.value,
    });
  };
  const handleClubFormDataChange = (e) => {
    setClubFormData({
      ...clubFormData,
      [e.target.name]: e.target.value,
    });
  };
  const handleCompetitionChallengesFormDataChange = (e) => {
    setCompetitionChallengesFormData({
      ...competitionChallengesFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (experienceType === 'Volunteer Work') {
      const validationErrors = {};
      if (volunteerWorkFormData.organization.trim() === '')
        validationErrors.organization = '*Organization name is required';
      if (volunteerWorkFormData.role.trim() === '')
        validationErrors.role = '*Role is required';

      if (Object.keys(validationErrors).length > 0) {
        setVolunteerWorkFormDataErrors(validationErrors);
        document.getElementById('badges-base-modal').scrollTop =
          document.getElementById('badges-base-modal').scrollTop = 0;
        return;
      }
      setBadges({
        ...badges,
        volunteerWork: [...badges.volunteerWork, volunteerWorkFormData],
      });
      setVolunteerWorkFormData({});
    } else if (experienceType === 'Achievement') {
      const validationErrors = {};
      if (achievementFormData.organization.trim() === '')
        validationErrors.organization = '*Organization name is required';
      if (achievementFormData.title.trim() === '')
        validationErrors.title = '*Title is required';

      if (Object.keys(validationErrors).length > 0) {
        setAchievementFormDataErrors(validationErrors);
        document.getElementById('badges-base-modal').scrollTop =
          document.getElementById('badges-base-modal').scrollTop = 0;
        return;
      }
      setBadges({
        ...badges,
        achievement: [...badges.achievement, achievementFormData],
      });
    } else if (experienceType === 'Hackathon') {
      const validationErrors = {};
      if (hackathonFormData.name.trim() === '')
        validationErrors.name = '*Hackathon name is required';
      if (hackathonFormData.role.trim() === '')
        validationErrors.role = '*Role is required';

      if (Object.keys(validationErrors).length > 0) {
        setHackathonFormDataErrors(validationErrors);
        document.getElementById('badges-base-modal').scrollTop =
          document.getElementById('badges-base-modal').scrollTop = 0;
        return;
      }
      setBadges({
        ...badges,
        hackathon: [...badges.hackathon, hackathonFormData],
      });
    } else if (experienceType === 'Society') {
      const validationErrors = {};
      if (societyFormData.name.trim() === '')
        validationErrors.name = '*Society name is required';
      if (societyFormData.role.trim() === '')
        validationErrors.role = '*Role is required';

      if (Object.keys(validationErrors).length > 0) {
        setSocietyFormDataErrors(validationErrors);
        document.getElementById('badges-base-modal').scrollTop =
          document.getElementById('badges-base-modal').scrollTop = 0;
        return;
      }

      setBadges({
        ...badges,
        society: [...badges.society, societyFormData],
      });
    } else if (experienceType === 'Club') {
      const validationErrors = {};
      if (clubFormData.name.trim() === '')
        validationErrors.name = '*Club name is required';
      if (clubFormData.role.trim() === '')
        validationErrors.role = '*Role is required';

      if (Object.keys(validationErrors).length > 0) {
        setClubFormDataErrors(validationErrors);
        document.getElementById('badges-base-modal').scrollTop =
          document.getElementById('badges-base-modal').scrollTop = 0;
        return;
      }

      setBadges({
        ...badges,
        club: [...badges.club, clubFormData],
      });
    } else if (experienceType === 'Competition/Challenges') {
      const validationErrors = {};
      if (competitionChallengesFormData.name.trim() === '')
        validationErrors.name = '*Competition/Challenge name is required';
      if (competitionChallengesFormData.result.trim() === '')
        validationErrors.result = '*Competition/Challenge result is required';

      if (Object.keys(validationErrors).length > 0) {
        setCompetitionChallengesFormDataErrors(validationErrors);
        document.getElementById('badges-base-modal').scrollTop =
          document.getElementById('badges-base-modal').scrollTop = 0;
        return;
      }

      setBadges({
        ...badges,
        competitionChallenges: [
          ...badges.competitionChallenges,
          competitionChallengesFormData,
        ],
      });
    } else;

    setDisplayModal(false);
    setExperienceType('');
  };

  return (
    <div
      className={`${
        displayModal ? '' : 'hidden'
      } fixed inset-0 bg-black bg-opacity-70 z-50`}
      style={{ margin: '0' }}
      onClick={() => {
        setDisplayModal(false);
      }}
    >
      <BaseModal
        setDisplayModal={setDisplayModal}
        handleSave={handleSave}
        experienceType={experienceType}
      >
        <div className="mx-[60px] my-[30px] flex flex-col items-center">
          <p className="text-black text-sm font-medium">Add Experience</p>
          <ExperienceTypes
            experienceType={experienceType}
            setExperienceType={setExperienceType}
            list={experienceTypesList}
            allowUnselected
          />
          <div className={`w-full ${experienceType === 'Other' ? '' : 'mt-8'}`}>
            {experienceType === 'Volunteer Work' ? (
              <VolunteerWorkForm
                formData={volunteerWorkFormData}
                setFormData={setVolunteerWorkFormData}
                formDataErrors={volunteerWorkFormDataErrors}
                handleChange={handleVolunteerFormDataChange}
              />
            ) : experienceType === 'Achievement' ? (
              <AchievementForm
                formData={achievementFormData}
                setFormData={setAchievementFormData}
                formDataErrors={achievementFormDataErrors}
                handleChange={handleAchievementFormDataChange}
              />
            ) : experienceType === 'Hackathon' ? (
              <HackathonForm
                formData={hackathonFormData}
                setFormData={setHackathonFormData}
                formDataErrors={hackathonFormDataErrors}
                handleChange={handleHackathonFormDataChange}
              />
            ) : experienceType === 'Society' ? (
              <SocietyForm
                formData={societyFormData}
                setFormData={setSocietyFormData}
                formDataErrors={societyFormDataErrors}
                handleChange={handleSocietyFormDataChange}
              />
            ) : experienceType === 'Club' ? (
              <ClubForm
                formData={clubFormData}
                setFormData={setClubFormData}
                formDataErrors={clubFormDataErrors}
                handleChange={handleClubFormDataChange}
              />
            ) : experienceType === 'Competition/Challenges' ? (
              <CompetitionChallengesForm
                formData={competitionChallengesFormData}
                setFormData={setCompetitionChallengesFormData}
                formDataErrors={competitionChallengesFormDataErrors}
                handleChange={handleCompetitionChallengesFormDataChange}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </BaseModal>
    </div>
  );
};

export default BadgesModal;
