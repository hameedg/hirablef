/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';

import ShowEditProfileModal from './ShowEditProfileModal';
import ShowLocationModal from './ShowLocationModal';
import ShowProfilePhoto from './ShowProfilePhoto';

function EditProfile({ profile }) {
  const [showeditprofile, setShowEditProfile] = useState(false);
  const [showLocationmodal, setshowLocationmodel] = useState(false);
  const [showprofilephoto, setShowprofilephoto] = useState(false);
  const [value, setvalue] = useState();
  const [value2, setvalue2] = useState();
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    username: '',
    college: '',
    graduationYear: '',
    degree: '',
    stream: '',
    location: '',
    email: '',
    email2: '',
    mobile: '',
    mobile2: '',
    aboutMe: '',
  });
  const [profilePhoto, setProfilePhoto] = useState(null);

  useEffect(() => {
    setFormData(profile);
  }, [profile]);

  useEffect(() => {
    const body = document.getElementsByTagName('body');
    if (showLocationmodal || showeditprofile || showprofilephoto) {
      body[0].style.overflow = 'hidden';
      body[0].style.position = 'fixed';
      body[0].style.width = '100%';
    } else {
      body[0].style.overflow = 'auto';
      body[0].style.position = 'relative';
    }
  }, [showeditprofile, showprofilephoto]);

  return (
    <div className="bg-white py-6 px-8 ml-0 rounded-[9px] mb-[15px] border-[1.5px] border-[#d9d9d9] w-[648px] block">
      <div className="flex items-start">
        <span className="relative inline-flex flex-shrink-0 align-middle">
          {profilePhoto === null ? (
            <div className="bg-[#c0f2ef] text-[#25b2aa] h-[4.6875rem] w-[4.6875rem] text-[2.5rem] font-bold mr-5 cursor-pointer flex overflow-hidden relative items-center flex-shrink-[1] rounded-full justify-center">
              A
            </div>
          ) : (
            <div
              className="h-[4.6875rem] w-[4.6875rem] mr-5 cursor-pointer rounded-full bg-no-repeat bg-center bg-cover"
              style={{
                backgroundImage: `url("${profilePhoto}")`,
              }}
            />
          )}
          <span className="absolute right_circle h-[50px] w-[50px] flex py-0 px-[6px] z-10 flex-wrap text-[0.75rem] min-w-[20px] items-center font-medium content-center rounded-[10px] flex-row justify-center top-[15%] right-[15%]">
            <img
              src="https://sowmiya-home-page.herokuapp.com/static/media/avatar-edit.1d269375.png"
              className="w-[20px] h-[20px] ml-[-35px] cursor-pointer align-middle border-none"
              alt=""
              onClick={() => setShowprofilephoto(true)}
            />
          </span>
        </span>
        <div>
          <h4 className="text-[#555] mt-1 mb-[1px] font-semibold text-[0.95rem] leading-[150%]">
            {formData.name}
          </h4>
          <h5 className="text-[#3e5963] leading-[1.25rem] font-medium text-[0.875rem] m-0">
            {formData.college}, {formData.graduationYear}
          </h5>
          <p className="text-[#aaa] text-[0.8rem] leading-[1.25rem] font-medium  mt-[2px] mb-[3px]">
            {formData.stream}, {formData.degree}
          </p>
          <button
            type="button"
            className="outline-none text-white rounded-[5px] bg-collabbi-green text-[13.33px] font-semibold py-[8px] px-[15px] border-none mt-1"
            onClick={() => setShowEditProfile(true)}
          >
            Edit Profile
          </button>
          <button
            type="button"
            className="outline-none text-white rounded-[5px] bg-collabbi-green text-[13.333px] font-semibold py-[8px] px-[15px] border-none mt-1 ml-2"
            onClick={() => setshowLocationmodel(true)}
          >
            Edit Location
          </button>
        </div>
      </div>
      <ShowProfilePhoto
        showprofilephoto={showprofilephoto}
        setShowprofilephoto={setShowprofilephoto}
        profilePhoto={profilePhoto}
        setProfilePhoto={setProfilePhoto}
      />
      <ShowLocationModal
        showLocationmodal={showLocationmodal}
        setshowLocationmodel={setshowLocationmodel}
      />
      <ShowEditProfileModal
        value={value}
        setvalue={setvalue}
        setvalue2={setvalue2}
        value2={value2}
        showeditprofile={showeditprofile}
        setShowEditProfile={setShowEditProfile}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
}

export default EditProfile;
