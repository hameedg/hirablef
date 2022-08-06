/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../components/common/Button';
import Sidebar from '../components/common/Sidebar';
import classNames from '../utils/constants/classNames';
import timezones from '../utils/constants/zones';

import {
  updateProfile,
  updateEmail,
  deleteAccount,
} from '../utils/apis/profile';

// redux
import { pushToastMessage } from '../redux/utils';
import Input from '../components/common/Input';
import InputMessage from '../components/common/InputMessage';
import InputError from '../components/common/InputError';

const EditSvg = () => (
  <svg
    data-v-500e9fb5=""
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="pencil"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="hover:bg-blue-600 duration-150 ease-in hover:text-white text-blue-600 w-6 rounded-md p-1.3"
  >
    <path
      data-v-500e9fb5=""
      fill="currentColor"
      d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
    />
  </svg>
);

const Settings = () => {
  const profile = useSelector((state) => state.user.profile);

  const [checked, setChecked] = useState(false);
  const [timezonesList, setTimezoneList] = useState([]);
  const [displayTimezoneMenu, setDisplayTimezoneMenu] = useState(false);
  const [currentTimezone, setCurrentTimezone] = useState(null);
  const [edits, setEdits] = useState({
    emilEdit: false,
    nameEdit: false,
    countrySelected: '',
  });
  const [emailOtpModal, setEmailOtpModal] = useState(false);
  const [deleteAccountOtpModal, setDeleteAccountOtpModal] = useState(false);

  const [info, setInfo] = useState({ name: '', email: '' });
  const [tempInfo, setTempInfo] = useState({ name: '', email: '' });
  const { emilEdit, nameEdit, countrySelected } = edits;
  const { name, email } = info;
  const [initialLocationCountry, setInitialLocationCountry] = useState('');
  const [initialTimezone, setInitialTimezone] = useState(null);

  useEffect(() => {
    setInfo({ name: profile.name, email: profile.email });
    setTempInfo({ name: profile.name, email: profile.email });

    let countryCode = '';

    Object.keys(timezones.countries).forEach((key) => {
      if (timezones.countries[key].name === profile.location.country)
        countryCode = key;
    });
    setEdits({ ...edits, countrySelected: countryCode });
    setInitialLocationCountry(countryCode);
  }, [profile]);

  const handleChange = (e) => {
    setTempInfo((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (countrySelected.trim() !== '') {
      const filteredZones = Object.keys(timezones.countries).filter(
        (tz) => tz === countrySelected
      );
      setTimezoneList(timezones.countries[filteredZones[0]].zones);
      const countryZones = timezones.countries[countrySelected].zones;
      if (!currentTimezone) {
        for (let i = 0; i < countryZones.length; i++) {
          const timezoneCity = countryZones[i].split('/').pop();
          if (timezoneCity === profile.location.city.replace(/ /g, '_')) {
            setCurrentTimezone(countryZones[i]);
            if (initialTimezone === null) setInitialTimezone(countryZones[i]);
            break;
          }
        }
      } else if (countrySelected === initialLocationCountry)
        setCurrentTimezone(initialTimezone);
      else setCurrentTimezone(countryZones[0]);
    }
  }, [countrySelected]);

  const handleWindowClick = (e) => {
    if (e.target.id === 'timezone-dropdown') setDisplayTimezoneMenu(true);
    else setDisplayTimezoneMenu(false);
  };
  useEffect(() => {
    window.addEventListener('click', handleWindowClick);
    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

  const dispatch = useDispatch();

  const handleNameSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateProfile({ name: tempInfo.name });
      setInfo({ ...info, name: tempInfo.name });
      dispatch(
        pushToastMessage({
          message: 'saving your settings',
          type: 'toast-process',
        })
      );
      setTimeout(() => {
        dispatch(
          pushToastMessage({
            message: 'settings saved',
            type: 'toast-success',
          })
        );
      }, 3000);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(
        pushToastMessage({
          message: 'Saving your settings...',
          type: 'toast-process',
        })
      );
      const { data } = await updateEmail(info.email);
      setEmailOtpModal(true);
      // await updateEmail();
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleDeleteSubmit = async (e) => {
    e.preventDefault();

    try {
      await deleteAccount(info.email);
      setDeleteAccountOtpModal(true);
    } catch (error) {
      console.log(error.response);
    }
  };

  const [otp, setOtp] = useState({ isEnabled: false, otpData: '' });
  const [errors, setErrors] = useState({
    otpError: '',
    otpLoad: '',
  });
  const { isEnabled, otpData } = otp;
  const { otpError, otpLoad } = errors;

  const handleSetErrors = (field, value) =>
    setErrors((f) => ({ ...f, [field]: value }));

  useEffect(() => {
    if (otpData.length >= 6) {
      handleSetErrors('otpLoad', 'Validating OTP');
      setOtp((f) => ({ ...f, isEnabled: false }));
      if (emailOtpModal) {
        import('../utils/apis/profile').then(({ updateEmailConfirm }) => {
          updateEmailConfirm(otpData, info.email, tempInfo.email)
            .then(() => {
              handleSetErrors('otpLoad', 'OTP Validated');
              dispatch(
                pushToastMessage({
                  message: 'Email updated successfully!',
                  type: 'toast-success',
                })
              );
              setInfo({ ...info, email: tempInfo.email });
              setEmailOtpModal(false);
            })
            .catch(() => {
              handleSetErrors('otpLoad', '');
              setOtp((f) => ({ ...f, isEnabled: true }));
              handleSetErrors('otpError', 'Invalid OTP !');
            });
        });
      } else {
        import('../utils/apis/profile').then(({ deleteAccountConfirm }) => {
          deleteAccountConfirm(otpData, info.email)
            .then(() => {
              handleSetErrors('otpLoad', 'OTP Validated');
              setInfo({ ...info, email: tempInfo.email });
              setDeleteAccountOtpModal(false);
              //  window.location.href = 'https://collabbi.tech/';
            })
            .catch(() => {
              handleSetErrors('otpLoad', '');
              setOtp((f) => ({ ...f, isEnabled: true }));
              handleSetErrors('otpError', 'Invalid OTP !');
            });
        });
      }
    } else {
      handleSetErrors('otpLoad', '');
    }
  }, [otpData]);

  const resetErrors = () =>
    setErrors((f) => ({
      ...f,
      fNameError: '',
      usernameError: '',
      emailError: '',
      passwordError: '',
      collegeError: '',
      graduationYearError: '',
      degreeError: '',
      majorError: '',
      otpError: '',
    }));
  const handleOTP = (e) => {
    if (e.target.value.length <= 6) {
      setOtp((f) => ({ ...f, otpData: e.target.value }));
    }
    resetErrors();
  };

  const [displayLocationActions, setDisplayLocationActions] = useState(false);

  const handleLocationChangeSave = async (e) => {
    const country = timezones.countries[countrySelected].name;
    const city = currentTimezone.split('/').pop().replace(/_/g, ' ');

    try {
      await updateProfile({
        location: {
          country,
          city,
        },
      });
      dispatch(
        pushToastMessage({
          message: 'Location updated successfully',
          type: 'toast-success',
        })
      );
      setDisplayLocationActions(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <Sidebar />
      <main className="w-main float-right">
        <div className="bg-white pt-11 px-5 pb-6 leading-default">
          <h2
            className="max-w-5xl mx-auto font-medium leading-default"
            style={{ fontSize: '2rem' }}
          >
            Your Settings
          </h2>
        </div>
        <div className="p-5">
          <div
            className="container max-w-5xl mx-auto py-5 px-8 bg-white border rounded-2xl"
            style={{ borderColor: '#f2f2f2' }}
          >
            <div className="flex items-center py-2">
              <h6 className="w-44.2 text-sm font-semibold ">Preferred Name</h6>

              {!nameEdit ? (
                <p className="text-sm ">{name}</p>
              ) : (
                <div className="w-1/2 ">
                  <form onSubmit={handleNameSubmit}>
                    <input
                      type="text"
                      value={tempInfo.name}
                      name="name"
                      onChange={handleChange}
                      className="bg-white border w-4/5 border-border rounded-md text-base leading-snug px-3.5 py-0.5 h-12"
                      autoComplete="off"
                    />
                    <div className="flex mt-2 space-x-2">
                      <Button
                        handleClick={() => {
                          setTempInfo({ ...tempInfo, name: info.name });
                          setEdits((f) => ({
                            ...f,
                            nameEdit: false,
                          }));
                        }}
                      >
                        Cancel
                      </Button>
                      <button
                        disabled={tempInfo.name === name}
                        type="submit"
                        className="disabled:text-border disabled:cursor-default disabled:hover:translate-y-0 disabled:bg-hover bg-btn-green duration-150 ease-in px-4 rounded font-semibold text-sm h-10 select-none hover:bg-btn-green-hover hover:-translate-y-0.5"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              )}
              <button
                className="ml-auto"
                type="button"
                onClick={() =>
                  setEdits((f) => ({
                    ...f,
                    nameEdit: !nameEdit,
                  }))
                }
              >
                <EditSvg />
              </button>
            </div>
            <hr className="-mx-8 my-5" style={{ borderColor: '#f2f2f2' }} />
            <div className="flex items-center py-2">
              <h6 className="w-44.2 text-sm font-semibold ">Email Address</h6>

              {!emilEdit ? (
                <p className="text-sm ">{email}</p>
              ) : (
                <div className="w-1/2 ">
                  <form onSubmit={handleEmailSubmit}>
                    <input
                      type="email"
                      value={tempInfo.email}
                      name="email"
                      onChange={handleChange}
                      className="bg-white border w-4/5 border-border rounded-md text-base leading-snug px-3.5 py-0.5 h-12"
                    />
                    <div className="flex mt-2 space-x-2">
                      <Button
                        handleClick={() => {
                          setTempInfo({ ...tempInfo, email: info.email });
                          setEdits((f) => ({
                            ...f,
                            emilEdit: false,
                          }));
                        }}
                      >
                        Cancel
                      </Button>
                      <button
                        disabled={tempInfo.email === email}
                        type="submit"
                        className="disabled:text-border disabled:cursor-default disabled:hover:translate-y-0 disabled:bg-hover bg-btn-green duration-150 ease-in px-4 rounded font-semibold text-sm h-10 select-none hover:bg-btn-green-hover hover:-translate-y-0.5"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              )}
              <button
                className="ml-auto"
                type="button"
                onClick={() =>
                  setEdits((f) => ({
                    ...f,
                    emilEdit: !emilEdit,
                  }))
                }
              >
                <EditSvg />
              </button>
            </div>
            <hr className="-mx-8 my-5" style={{ borderColor: '#f2f2f2' }} />
            <div className="flex items-center py-2">
              <h6 className="w-44.2 text-sm font-semibold ">Privacy</h6>

              <label
                htmlFor="video"
                className="flex items-center cursor-pointer"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    id="video"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    className="sr-only"
                  />

                  <div
                    className={classNames(
                      'block w-12 h-7 rounded-full ',
                      checked ? 'bg-blue-600' : 'bg-blueGrey-300'
                    )}
                  />

                  <div
                    className={classNames(
                      'absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition',
                      checked && 'translate-x-full'
                    )}
                  />
                </div>
              </label>
              <div className="ml-4">
                <p className=" text-sm font-semibold leading-default">
                  Community Direct Messaging
                </p>
                <span className="text-xs leading-default">
                  Allow other community members to message you
                </span>
              </div>
            </div>
            <hr className="-mx-8 my-5" style={{ borderColor: '#f2f2f2' }} />
            <div className="flex items-center py-2">
              <h6 className="w-44.2 text-sm font-semibold">
                Location Settings
              </h6>
              <div className="max-w-md w-full">
                <div className="mb-4 ">
                  <label
                    htmlFor="location"
                    className="font-semibold inline-block mb-1 text-sm"
                  >
                    Location
                  </label>
                  <div className="relative appearance-none">
                    <ReactFlagsSelect
                      showSelectedLabel
                      className="appearance-none"
                      selected={countrySelected}
                      onSelect={(code) => {
                        setDisplayLocationActions(true);
                        setEdits((f) => ({ ...f, countrySelected: code }));
                      }}
                    />
                  </div>
                </div>

                <div className="mb-2 flex flex-col">
                  <label
                    htmlFor="timezone"
                    className="font-semibold inline-block mb-1 text-sm"
                  >
                    Timezone
                  </label>
                  <div className="h-10 w-full relative">
                    <div
                      className="w-full h-full pl-3 pr-6 rounded-md mb-2.5 border border-gray-300 text-sm 
                outline-none appearance-none cursor-pointer flex items-center"
                      id="timezone-dropdown"
                    >
                      {currentTimezone === '' ? (
                        <p className="pointer-events-none">Select Timezone</p>
                      ) : (
                        <p className="pointer-events-none">{currentTimezone}</p>
                      )}
                    </div>
                    <div className="absolute top-1/2 right-5 -translate-y-1/2 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          height: '12px',
                          width: '12px',
                        }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                    <div
                      className={classNames(
                        'w-full max-h-32 overflow-y-scroll absolute right-0 z-10 border rounded-md border-gray-300 bg-white py-1 ml-1',
                        !displayTimezoneMenu ? 'hidden' : ''
                      )}
                    >
                      {timezonesList.map((timezone, index) => (
                        <option
                          key={index}
                          className="px-3 h-8 flex items-center cursor-pointer 
                    font-medium text-sm hover:bg-gray-100"
                          onClick={() => {
                            setDisplayLocationActions(true);
                            setCurrentTimezone(timezone);
                          }}
                        >
                          {timezone}
                        </option>
                      ))}
                    </div>
                  </div>
                </div>
                {displayLocationActions ? (
                  <div className="flex mt-4 space-x-2">
                    <Button
                      handleClick={() => {
                        setDisplayLocationActions(false);
                        setEdits({
                          ...edits,
                          countrySelected: initialLocationCountry,
                        });
                        setCurrentTimezone(initialTimezone);
                      }}
                    >
                      Cancel
                    </Button>
                    <button
                      type="submit"
                      className="disabled:text-border disabled:cursor-default 
                      disabled:hover:translate-y-0 disabled:bg-hover bg-btn-green duration-150 ease-in
                       px-4 rounded font-semibold text-sm h-10 select-none hover:bg-btn-green-hover
                        hover:-translate-y-0.5"
                      onClick={handleLocationChangeSave}
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <hr className="-mx-8 my-5" style={{ borderColor: '#f2f2f2' }} />
            <div className="flex py-2">
              <h6 className="w-44.2 text-sm font-semibold ">
                Email Preferences
              </h6>
              <div>
                <label className="mb-2 select-none cursor-pointer text-sm block ">
                  <input
                    type="checkbox"
                    className="checked:bg-blue-600 checked:border checked:border-blue-600"
                  />
                  <span className="pl-3.5">
                    Weekly Digest: Top posts on Canvas, plus new jobs and events
                    you might be interested in
                  </span>
                </label>
                <label className="mb-2 select-none cursor-pointer text-sm block">
                  <input
                    type="checkbox"
                    className="checked:bg-blue-600 checked:border checked:border-blue-600"
                  />
                  <span className="pl-3.5">
                    Weekly Communities Activity: Any notifications or activity
                    in Canvas communities you may have missed
                  </span>
                </label>
                <label className="mb-2 select-none cursor-pointer text-sm block">
                  <input
                    type="checkbox"
                    className="checked:bg-blue-600 checked:border checked:border-blue-600"
                  />
                  <span className="pl-3.5">
                    Message Emails: Notifications that you received a message on
                    Canvas (such as from a recruiter)
                  </span>
                </label>
                <label className="mb-2 select-none cursor-pointer text-sm block">
                  <input
                    type="checkbox"
                    className="checked:bg-blue-600 checked:border checked:border-blue-600"
                  />
                  <span className="pl-3.5">
                    Comment Emails: Notifications that someone commented on your
                    post or replied to your comment
                  </span>
                </label>
                <label className="mb-2 select-none cursor-pointer text-sm block">
                  <input
                    type="checkbox"
                    className="checked:bg-blue-600 checked:border checked:border-blue-600"
                  />
                  <span className="pl-3.5">
                    Recruiter Posts: Notifications that a recruiter has posted
                    in a community you have joined
                  </span>
                </label>
                <label className="mb-2 select-none cursor-pointer text-sm block">
                  <input
                    type="checkbox"
                    className="checked:bg-blue-600 checked:border checked:border-blue-600"
                  />
                  <span className="pl-3.5">
                    Best Practices: Practical guidance to strengthen your
                    profile and connect with peers and recruiters on Canvas
                  </span>
                </label>
              </div>
            </div>
            <hr className="-mx-8 my-5" style={{ borderColor: '#f2f2f2' }} />

            <button
              type="button"
              className="border block ml-auto font-semibold hover:-translate-y-0.5 duration-150 ease-in-out border-black px-4 rounded text-sm h-10"
              onClick={handleDeleteSubmit}
            >
              Delete Account
            </button>
          </div>
        </div>
      </main>
      {emailOtpModal ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 z-50">
          <div
            className="absolute bg-white h-72 w-[750px] opacity-100 rounded-md p-10"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              className="absolute top-4 right-6 cursor-pointer"
              height={35}
              width={35}
              viewBox="0 0 50 50"
              enableBackground="new 0 0 50 50"
              xmlSpace="preserve"
              onClick={() => setEmailOtpModal(false)}
            >
              <path
                fill="#231F20"
                d="M9.016,40.837c0.195,0.195,0.451,0.292,0.707,0.292c0.256,0,0.512-0.098,0.708-0.293l14.292-14.309
	              l14.292,14.309c0.195,0.196,0.451,0.293,0.708,0.293c0.256,0,0.512-0.098,0.707-0.292c0.391-0.39,0.391-1.023,0.001-1.414
	              L26.153,25.129L40.43,10.836c0.39-0.391,0.39-1.024-0.001-1.414c-0.392-0.391-1.024-0.391-1.414,0.001L24.722,23.732L10.43,9.423
	              c-0.391-0.391-1.024-0.391-1.414-0.001c-0.391,0.39-0.391,1.023-0.001,1.414l14.276,14.293L9.015,39.423
	              C8.625,39.813,8.625,40.447,9.016,40.837z"
              />
            </svg>
            <div className="w-8/12 mx-auto">
              <div className="w-full text-center">
                <p className="text-lg font-semibold">
                  We need to verify your email
                </p>
                <p className="mt-4 mb-5">
                  We sent an OTP to your current Email address. Verify your
                  email to confirm changes.
                </p>
              </div>
              <Input
                handleChange={handleOTP}
                label="OTP"
                name="otpData"
                id="otp"
                placeholder="Enter OTP"
                type="text"
                value={otpData}
                disabled={!isEnabled}
                fieldName="OTP"
              />
              {otpLoad && (
                <InputMessage
                  message={otpLoad}
                  loading={otpLoad === 'Validating OTP'}
                />
              )}
              {otpError && <InputError error={otpError} />}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {deleteAccountOtpModal ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 z-50">
          <div
            className="absolute bg-white h-72 w-[750px] opacity-100 rounded-md p-10"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              className="absolute top-4 right-6 cursor-pointer"
              height={35}
              width={35}
              viewBox="0 0 50 50"
              enableBackground="new 0 0 50 50"
              xmlSpace="preserve"
              onClick={() => setEmailOtpModal(false)}
            >
              <path
                fill="#231F20"
                d="M9.016,40.837c0.195,0.195,0.451,0.292,0.707,0.292c0.256,0,0.512-0.098,0.708-0.293l14.292-14.309
	              l14.292,14.309c0.195,0.196,0.451,0.293,0.708,0.293c0.256,0,0.512-0.098,0.707-0.292c0.391-0.39,0.391-1.023,0.001-1.414
	              L26.153,25.129L40.43,10.836c0.39-0.391,0.39-1.024-0.001-1.414c-0.392-0.391-1.024-0.391-1.414,0.001L24.722,23.732L10.43,9.423
	              c-0.391-0.391-1.024-0.391-1.414-0.001c-0.391,0.39-0.391,1.023-0.001,1.414l14.276,14.293L9.015,39.423
	              C8.625,39.813,8.625,40.447,9.016,40.837z"
              />
            </svg>
            <div className="w-8/12 mx-auto">
              <div className="w-full text-center">
                <p className="text-lg font-semibold">
                  We need to verify your email
                </p>
                <p className="mt-4 mb-5">
                  We sent an OTP to your current email address. Verify your
                  email to delete your account.
                </p>
              </div>
              <Input
                handleChange={handleOTP}
                label="OTP"
                name="otpData"
                id="otp"
                placeholder="Enter OTP"
                type="text"
                value={otpData}
                disabled={!isEnabled}
                fieldName="OTP"
              />
              {otpLoad && (
                <InputMessage
                  message={otpLoad}
                  loading={otpLoad === 'Validating OTP'}
                />
              )}
              {otpError && <InputError error={otpError} />}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Settings;
