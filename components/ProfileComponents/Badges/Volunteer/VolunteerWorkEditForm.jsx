import React, { useEffect, useState } from 'react';
import EditBaseModal from '../EditBaseModal';
import VolunteerWorkForm from './VolunteerWorkForm';

const VolunteerWorkEditForm = ({
  displayModal,
  setDisplayModal,
  data,
  badges,
  setBadges,
}) => {
  const [currentFormData, setCurrentFormData] = useState(null);
  const [formDataErrors, setFormDataErrors] = useState({});
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    setCurrentFormData(data[selectedIndex]);
  }, [selectedIndex]);

  const handleChange = (e) => {
    setCurrentFormData({ ...currentFormData, [e.target.name]: e.target.value });
  };

  const handleClose = (e) => {
    setDisplayModal(false);
    setFormDataErrors({});
    setSelectedIndex(null);
  };

  const handleSave = (e) => {
    const validationErrors = {};
    if (currentFormData.organization.trim() === '')
      validationErrors.organization = '*Organization name is required';
    if (currentFormData.role.trim() === '')
      validationErrors.role = '*Role is required';

    if (Object.keys(validationErrors).length > 0) {
      setFormDataErrors(validationErrors);
      return;
    }

    let badgeItem;

    const newBadges = data.map((badge, badgeIndex) => {
      if (badgeIndex === selectedIndex)
        badgeItem = {
          ...currentFormData,
        };
      else badgeItem = badge;
      return badgeItem;
    });

    setBadges({
      ...badges,
      volunteerWork: newBadges,
    });
    setFormDataErrors({});

    setSelectedIndex(null);
  };

  const handleDelete = (e) => {
    const newBadges = data.filter(
      (_, badgeIndex) => badgeIndex !== selectedIndex
    );

    setBadges({
      ...badges,
      volunteerWork: newBadges,
    });
    setSelectedIndex(null);
  };

  useEffect(() => {
    if (displayModal) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [displayModal]);

  console.log(data);

  return (
    <div
      className={`${
        displayModal ? '' : 'hidden'
      } fixed inset-0 bg-black bg-opacity-70 z-50`}
      style={{ margin: '0' }}
      onClick={handleClose}
    >
      <EditBaseModal
        handleClose={handleClose}
        handleSave={handleSave}
        handleDelete={handleDelete}
        selectedIndex={selectedIndex}
      >
        {currentFormData ? (
          <div className="mx-[60px] my-[30px] flex flex-col items-center">
            <p className="text-black text-sm font-medium">Edit Experience</p>
            <div className="w-full mt-8">
              <VolunteerWorkForm
                formData={currentFormData}
                setFormData={setCurrentFormData}
                formDataErrors={formDataErrors}
                handleChange={handleChange}
              />
            </div>
          </div>
        ) : (
          <div className="m-[60px] flex flex-col">
            <p className="mb-[30px] font-medium">Volunteer Work</p>
            {data.map((item, index) => (
              <div key={index} className="text-sm flex cursor-pointer mb-5">
                <p className="w-60">{item.organization}</p>
                <p className="w-60">{item.role}</p>
                <div className="flex-auto flex justify-end">
                  <svg
                    className="flex items-center font-medium leading-[1rem] 
              w-[1rem] h-[1rem] text-[#aaa] 
              cursor-pointer text-[25px] mr-[5px] opacity-100 transition 
              ease-in"
                    focusable="false"
                    viewBox="0 0 24 24"
                    onClick={() => setSelectedIndex(index)}
                  >
                    <path
                      d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 
              19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 
              1.83-1.83c.39-.39.39-1.02 0-1.41z"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        )}
      </EditBaseModal>
    </div>
  );
};

export default VolunteerWorkEditForm;
