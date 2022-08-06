/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { Editor, EditorState, ContentState, RichUtils } from 'draft-js';

function Earnbadges() {
  const [showModal, setShowModal] = useState(false);
  const [checked, setchecked] = useState(false);
  const [experience, setexperience] = useState(0);
  const classNames = (...classes) => classes.filter(Boolean).join(' ');
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const onEditorChange = (editorchange) => {
    setEditorState(editorchange);
  };
  const _onBoldClick = () => {
    onEditorChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };
  const _onItalicClick = () => {
    onEditorChange(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  };
  const _onUnderlineClick = () => {
    onEditorChange(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
  };
  const _onUnorderedClick = () => {
    onEditorChange(
      RichUtils.toggleBlockType(editorState, 'unordered-list-item')
    );
  };
  const _onOrderedClick = () => {
    onEditorChange(RichUtils.toggleBlockType(editorState, 'ordered-list-item'));
  };

  const initialVolunteerData = {
    company: '',
    jobTitle: '',
    from: 'Select...',
    to: 'Select...',
    description: '',
  };

  const intialAchievementData = {
    organization: '',
    jobTitle: '',
    dateRecieved: 'Select...',
    description: '',
  };

  const initialOtherData = {
    type: '',
    name: '',
    role: '',
    from: 'Select...',
    to: 'Select...',
    description: '',
  };

  const [badges, setBadges] = useState([]);
  const [currentBadge, setCurrentBadge] = useState(0);
  const [volunteerFormData, setVolunteerFormData] =
    useState(initialVolunteerData);
  const [achievementFormData, setAchievementFormData] = useState(
    intialAchievementData
  );
  const [otherFormData, setOtherFormData] = useState(initialOtherData);

  const [volunteerEditModal, setVolunteerEditModal] = useState(false);
  const [achievementEditModal, setAchievementEditModal] = useState(false);
  const [otherEditModal, setOtherEditModal] = useState(false);

  useEffect(() => {
    if (
      showModal ||
      volunteerEditModal ||
      achievementEditModal ||
      otherEditModal
    ) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showModal, volunteerEditModal, achievementEditModal, otherEditModal]);

  const handleVolunteerChange = (e) => {
    setVolunteerFormData({
      ...volunteerFormData,
      [e.target.name]: e.target.value,
    });
  };
  const handleAchievementChange = (e) => {
    setAchievementFormData({
      ...achievementFormData,
      [e.target.name]: e.target.value,
    });
  };
  const handleOtherChange = (e) => {
    setOtherFormData({
      ...otherFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setShowModal(false);

    if (experience === 0)
      setBadges([
        ...badges,
        {
          type: 'volunteer',
          data: {
            ...volunteerFormData,
            description: editorState.getCurrentContent().getPlainText('\u0001'),
          },
        },
      ]);
    else if (experience === 1)
      setBadges([
        ...badges,
        {
          type: 'achievement',
          data: {
            ...achievementFormData,
            description: editorState.getCurrentContent().getPlainText('\u0001'),
          },
        },
      ]);
    else if (experience === 2)
      setBadges([
        ...badges,
        {
          type: 'other',
          data: {
            ...otherFormData,
            description: editorState.getCurrentContent().getPlainText('\u0001'),
          },
        },
      ]);

    setVolunteerFormData(initialVolunteerData);
    setAchievementFormData(intialAchievementData);
    setOtherFormData(initialOtherData);
    setEditorState(() => EditorState.createEmpty());
  };

  const editBadge = (index) => {
    setCurrentBadge(index);
    const badgeItem = badges[index];

    if (badgeItem.type === 'volunteer') {
      setVolunteerFormData({ ...badgeItem.data });
      setVolunteerEditModal(true);
    } else if (badgeItem.type === 'achievement') {
      setAchievementFormData({ ...badgeItem.data });
      setAchievementEditModal(true);
    } else if (badgeItem.type === 'other') {
      setOtherFormData({ ...badgeItem.data });
      setOtherEditModal(true);
    }
    setEditorState(() =>
      EditorState.createWithContent(
        ContentState.createFromText(badgeItem.data.description)
      )
    );
  };

  const handleVolunteerEdit = () => {
    const newBadges = badges.map((badge, index) => {
      if (index === currentBadge && badge.type === 'volunteer') {
        badge.data = volunteerFormData;
        badge.data.description = editorState
          .getCurrentContent()
          .getPlainText('\u0001');
      }

      return badge;
    });

    setVolunteerFormData(initialVolunteerData);
    setBadges(newBadges);
    setCurrentBadge(0);
    setVolunteerEditModal(false);
    setEditorState(() => EditorState.createEmpty());
  };
  const handleAchievementEdit = () => {
    const newBadges = badges.map((badge, index) => {
      if (index === currentBadge && badge.type === 'achievement') {
        badge.data = achievementFormData;
        badge.data.description = editorState
          .getCurrentContent()
          .getPlainText('\u0001');
      }

      return badge;
    });

    setAchievementFormData(intialAchievementData);
    setBadges(newBadges);
    setCurrentBadge(0);
    setAchievementEditModal(false);
    setEditorState(() => EditorState.createEmpty());
  };
  const handleOtherEdit = () => {
    const newBadges = badges.map((badge, index) => {
      if (index === currentBadge && badge.type === 'other') {
        badge.data = otherFormData;
        badge.data.description = editorState
          .getCurrentContent()
          .getPlainText('\u0001');
      }

      return badge;
    });

    setOtherFormData(intialAchievementData);
    setBadges(newBadges);
    setCurrentBadge(0);
    setOtherEditModal(false);
    setEditorState(() => EditorState.createEmpty());
  };

  const updateOtherType = (e, type) => {
    e.preventDefault();
    if (otherFormData.type === type)
      setOtherFormData({ ...otherFormData, type: '' });
    else
      setOtherFormData({
        ...otherFormData,
        type,
      });
  };

  return (
    <div>
      {badges.length === 0 ? (
        <div className="w-[305px] rounded-[9px] border-[#D9D9D9] border-[1.5px] p-6 group transition bg-white">
          <div className="flex flex-col items-center">
            <img
              src="https://sowmiya-home-page.herokuapp.com/static/media/badges.fbd62946.37b274f1.svg"
              alt=""
            />
            <h6 className="mt-4 font-inter font-normal text-[18.72px] leading-[23px]">
              Earn badges
            </h6>
            <p className="text-sm text-center text-light-grey font-light mt-2 flex items-center leading-5">
              Get noticed by recruitments. Add things like hackathons and
              classes you’ve TA’d.
            </p>
            <button
              type="button"
              className="text-white bg-collabbi-green mt-4 py-2.5 px-4 rounded-md font-semibold cursor-pointer text-[13px]"
              onClick={() => setShowModal(true)}
            >
              Add ID Card
            </button>
          </div>
        </div>
      ) : (
        <div
          className="w-[305px] rounded-[9px] border-[#D9D9D9] border-[1.5px] p-6 group transition bg-white"
          style={{ height: '296px' }}
        >
          <div className="flex justify-between text-sm font-semibold">
            <p>My Badges</p>
            <p
              className="text-green-500 cursor-pointer"
              onClick={() => {
                setShowModal(true);
                setEditorState(() => EditorState.createEmpty());
              }}
            >
              + Add
            </p>
          </div>
          <div className="mt-5">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="cursor-pointer mb-2"
                onClick={() => editBadge(index)}
              >
                <p>{badge.type}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {showModal ? (
        <>
          <div className="bg-black bg-opacity-70 w-full h-full fixed z-50 inset-0 flex items-center justify-center edit-overlay">
            <div className="relative max-h-[746px] h-[90%] rounded-lg w-[600px] overflow-y-auto bg-white z-10 text-black min-w-[746px]">
              <div
                className="top-0 sticky z-50 flex items-center justify-between p-5 bg-white pt-3 pr-3 pb-3 pl-6 rounded-t-lg max-h-[60px] min-h-[75px] rounded-b-sm my-auto shadow-md"
                style={{ boxShadow: '2px 2px 8px rgb(0 0 0/8%)' }}
              >
                <button
                  type="button"
                  className="mr-2 h-8 w-8 transform ease-in-out duration-200 flex items-center justify-center rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-[#033443]"
                    onClick={() => setShowModal(false)}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <button
                  className="bg-[#201e27] text-white background-transparent font-bold px-3 py-2  min-w-[100px] h-10 text-sm rounded-[5px] outline-none focus:outline-none mr-1"
                  type="button"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
              <div>
                <h5 className="text-center text-[14px] leading-6 mt-[29px] non-italic font-medium">
                  Add Experience
                </h5>
                <form className="relative flex-auto block">
                  <div className="py-5 px-[60px] flex flex-col mb-5 ">
                    <label
                      htmlFor=""
                      className="text-[14px] leading-4 font-medium mb-2.5"
                    >
                      Experience type
                    </label>
                    <div className="flex flex-wrap justify-start space-x-[10px]">
                      <button
                        type="button"
                        className={classNames(
                          'text-[#afb7c2] bg-white border-1 border-[#afb7c2] font-medium no-underline py-[10px] px-8 text-[14px] rounded-full h-[44px]',
                          experience === 0 && '!text-white bg-[#1a73e8]'
                        )}
                        onClick={() => setexperience(0)}
                      >
                        Volunteer Work
                      </button>
                      <button
                        type="button"
                        className={classNames(
                          'text-[#afb7c2] bg-white border-1 border-[#afb7c2] font-medium no-underline	 py-[10px] px-8 text-[14px] rounded-full h-[44px]',
                          experience === 1 && '!text-white bg-[#1a73e8]'
                        )}
                        onClick={() => setexperience(1)}
                      >
                        Achievement
                      </button>
                      <button
                        type="button"
                        className={classNames(
                          'text-[#afb7c2] bg-white border-1 border-[#afb7c2] font-medium py-[10px] px-8 text-[14px] rounded-full h-[44px]',
                          experience === 2 && '!text-white bg-[#1a73e8]'
                        )}
                        onClick={() => setexperience(2)}
                      >
                        Other
                      </button>
                    </div>
                  </div>

                  {/* VOLUNTEER SECTION */}
                  <div className={classNames(experience !== 0 && 'hidden')}>
                    <div className="flex">
                      <div className="pr-[10px] flex flex-col w-1/2 pl-[60px]">
                        <label
                          htmlFor=""
                          className="text-[14px] leading-4 font-medium mb-2.5"
                        >
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Project title"
                          name="company"
                          className="p-[10px] text-[#a0a5af] border-1 focus:outline-none focus:border-[#2dc5a1] focus:border-2 transition duration-200 ease-in border-[#ddd] outline-none rounded-md text-[14px]"
                          value={volunteerFormData.company}
                          onChange={handleVolunteerChange}
                        />
                      </div>
                      <div className="pr-[60px] pl-[10px] flex flex-col w-1/2">
                        <label
                          htmlFor=""
                          className="text-[14px] leading-4 font-medium mb-2.5"
                        >
                          Job Title
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Job title"
                          name="jobTitle"
                          className="p-[10px] text-[#a0a5af] border-1 focus:outline-none focus:border-[#2dc5a1] focus:border-2 transition duration-200 ease-in border-[#ddd] outline-none rounded-md text-[14px]"
                          value={volunteerFormData.jobTitle}
                          onChange={handleVolunteerChange}
                        />
                      </div>
                    </div>
                    <div className="flex mt-[35px]">
                      <div className="flex flex-col w-1/2 pl-[60px] pr-[10px]">
                        <label
                          htmlFor=""
                          className="text-[14px] leading-4 font-medium mb-2.5"
                        >
                          From
                        </label>
                        <select
                          name="from"
                          id=""
                          className="webkit p-[10px] border-[#ddd] border-1 focus:outline-none focus:border-[#2dc5a1] focus:border-2 outline-none rounded-md text-[14px] text-[#a0a5af]"
                          value={volunteerFormData.from}
                          onChange={handleVolunteerChange}
                        >
                          <option value="Select...">Select...</option>
                          <option value="January">January</option>
                        </select>
                      </div>
                      <div className="flex flex-col w-1/2 pl-[10px] pr-[60px]">
                        <label
                          htmlFor=""
                          className="text-[14px] leading-4 font-medium mb-2.5"
                        >
                          To
                        </label>
                        <select
                          name="to"
                          id=""
                          className="webkit p-[10px] border-1 border-[#ddd] outline-none rounded-md text-[14px] text-[#a0a5af]"
                          value={volunteerFormData.to}
                          onChange={handleVolunteerChange}
                        >
                          <option value="Select...">Select...</option>
                          <option value="">January</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex mt-[25px]">
                      <div className="py-5 px-[60px] flex flex-col w-1/2 pl-[60px] pr-[10px]">
                        <select
                          name=""
                          id=""
                          className="webkit p-[10px] border-1 border-[#ddd] outline-none rounded-md text-[14px] text-[#a0a5af]"
                        >
                          <option value="Select...">Select...</option>
                          <option value="">January</option>
                        </select>
                      </div>
                      <div className="py-5 px-[60px] flex flex-col w-1/2 pl-[10px] pr-[60px]">
                        <select
                          name=""
                          id=""
                          className="webkit p-[10px] border-1 border-[#ddd] outline-none rounded-md text-[14px] text-[#a0a5af]"
                        >
                          <option value="Select...">Select...</option>
                          <option value="">January</option>
                        </select>
                      </div>
                    </div>
                    <div className="py-5 px-[60px] flex items-center space-x-[10px] w-1/2 pl-[60px pr-[10px]">
                      <div className="mt-[5px] ml-[5px] flex items-center mb-5 space-x-2">
                        <span className="root">
                          <span className="buttonlabel">
                            <input
                              type="checkbox"
                              name=""
                              id=""
                              onChange={() => setchecked(!checked)}
                              value={checked}
                              className={classNames(
                                'badges_input',
                                checked
                                  ? 'bg-red-600 hover:bg-[#a0a5af]'
                                  : 'bg-white'
                              )}
                            />
                          </span>
                        </span>
                        <p className="text-[0.75rem] font-medium">
                          I currently work here
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col mb-5">
                      <div className="pr-[50px] pl-[60px]">
                        <label
                          htmlFor=""
                          className="text-[14px] leading-4 font-medium mb-2.5"
                        >
                          Description
                        </label>
                        <div>
                          <div className="w-full">
                            <Editor
                              editorState={editorState}
                              onChange={setEditorState}
                              placeholder="Give a brief description"
                            />
                          </div>
                          <div className="w-full bg-[#f9f9f9] border-1 border-[#d6e0e1] py-[0.25rem] px-[0.725rem] pb-0 border-t-0 flex items-center z-50">
                            <div onClick={_onBoldClick}>
                              <svg
                                className="MuiSvgIcon-root"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                fill="#5a8a99"
                              >
                                <path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H8c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h5.78c2.07 0 3.96-1.69 3.97-3.77.01-1.53-.85-2.84-2.15-3.44zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" />
                              </svg>
                            </div>
                            <div onClick={_onItalicClick}>
                              <svg
                                className="MuiSvgIcon-root"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                fill="#5a8a99"
                              >
                                <path d="M10 5.5c0 .83.67 1.5 1.5 1.5h.71l-3.42 8H7.5c-.83 0-1.5.67-1.5 1.5S6.67 18 7.5 18h5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-.71l3.42-8h1.29c.83 0 1.5-.67 1.5-1.5S17.33 4 16.5 4h-5c-.83 0-1.5.67-1.5 1.5z" />
                              </svg>
                            </div>
                            <div onClick={_onUnderlineClick}>
                              <svg
                                className="MuiSvgIcon-root"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                fill="#5a8a99"
                              >
                                <path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z" />
                              </svg>
                            </div>
                            <div className="icons" onClick={_onUnorderedClick}>
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="list"
                                className="svg-inline--fa fa-list fa-w-16 fa-1x "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
                                />
                              </svg>
                            </div>
                            <div className="icons" onClick={_onOrderedClick}>
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="list-ol"
                                className="svg-inline--fa fa-list-ol fa-w-16 fa-1x "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M61.77 401l17.5-20.15a19.92 19.92 0 0 0 5.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h22.83a157.41 157.41 0 0 0-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.29 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 0 1-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.72 6.13-3.19 11.72 2.63 15.94 7.71 4.69 20.38 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM496 224H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H64V40a8 8 0 0 0-8-8H32a8 8 0 0 0-7.14 4.42l-8 16A8 8 0 0 0 24 64h8v64H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm-3.91 160H80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H41.32c3.29-10.29 48.34-18.68 48.34-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.46 18.75-4.37 5.59-3 10.84 2.8 15.37l8.58 6.88c5.61 4.56 11 2.47 16.12-2.44a13.44 13.44 0 0 1 9.46-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.09 320z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ACHEIVEMENTS SECTION */}
                  <div className={classNames(experience !== 1 && 'hidden')}>
                    <div className="flex not-italic">
                      <div className="pr-[10px] flex flex-col w-1/2 pl-[60px]">
                        <label
                          htmlFor=""
                          className="text-[14px] leading-4 font-medium mb-2.5"
                        >
                          Achievements Organization
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Project title"
                          name="organization"
                          className="p-[10px] text-[#a0a5af] border-1 focus:outline-none focus:border-[#2dc5a1] focus:border-2 transition duration-200 ease-in border-[#ddd] outline-none rounded-md text-[14px]"
                          value={achievementFormData.organization}
                          onChange={handleAchievementChange}
                        />
                      </div>
                      <div className="pr-[60px] pl-[10px] flex flex-col w-1/2">
                        <label
                          htmlFor=""
                          className="text-[14px] leading-4 font-medium mb-2.5"
                        >
                          Title
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Job title"
                          name="jobTitle"
                          className="p-[10px] text-[#a0a5af] border-1 focus:outline-none focus:border-[#2dc5a1] focus:border-2 transition duration-200 ease-in border-[#ddd] outline-none rounded-md text-[14px]"
                          value={achievementFormData.jobTitle}
                          onChange={handleAchievementChange}
                        />
                      </div>
                    </div>
                    <div className="flex mt-[25px]">
                      <div className="flex flex-col w-1/2 pl-[60px] pr-[10px]">
                        <label
                          htmlFor=""
                          className="text-[14px] leading-4 font-medium mb-2.5"
                        >
                          Data Received
                        </label>
                        <select
                          name="dateRecieved"
                          id=""
                          className="webkit p-[10px] border-1 border-[#ddd] focus:outline-none focus:border-[#2dc5a1] focus:border-2 outline-none rounded-md text-[14px] text-[#a0a5af]"
                          value={achievementFormData.dateRecieved}
                          onChange={handleAchievementChange}
                        >
                          <option value="Select...">Select...</option>
                          <option value="">January</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex mt-[25px]">
                      <div className="py-5 px-[60px] flex flex-col w-1/2 pl-[60px] pr-[10px]">
                        <select
                          name=""
                          id=""
                          className="webkit p-[10px] border-[#ddd] border-1 focus:outline-none focus:border-[#2dc5a1] focus:border-2 outline-none rounded-md text-[14px] text-[#a0a5af]"
                        >
                          <option value="Select...">Select...</option>
                          <option value="">January</option>
                        </select>
                      </div>
                    </div>
                    <div className="py-5 px-[60px] flex items-center space-x-[10px] w-1/2 pl-[60px pr-[10px]">
                      <div className="mt-[5px] ml-[5px] flex items-center mb-5 space-x-2">
                        <span className="root">
                          <span className="buttonlabel">
                            <input
                              type="checkbox"
                              name=""
                              id=""
                              onChange={() => setchecked(!checked)}
                              value={checked}
                              className={classNames(
                                'badges_input',
                                checked
                                  ? 'bg-[#FE0100] hover:bg-[#a0a5af]'
                                  : 'bg-white'
                              )}
                            />
                          </span>
                        </span>
                        <p className="text-[1rem] text-[#959FC5] font-medium">
                          Current experience
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col mb-5">
                      <div className="pr-[50px] pl-[60px]">
                        <label
                          htmlFor=""
                          className="text-[14px] leading-4 font-medium mb-2.5 not-italic"
                        >
                          Description
                        </label>
                        <div>
                          <div className="w-full">
                            <Editor
                              editorState={editorState}
                              onChange={setEditorState}
                              placeholder="Give a brief description"
                            />
                          </div>
                          <div className="w-full bg-[#f9f9f9] border-1 border-[#d6e0e1] py-[0.25rem] px-[0.725rem] pb-0 border-t-0 flex items-center z-50">
                            <div onClick={_onBoldClick}>
                              <svg
                                className="MuiSvgIcon-root"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                fill="#5a8a99"
                              >
                                <path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H8c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h5.78c2.07 0 3.96-1.69 3.97-3.77.01-1.53-.85-2.84-2.15-3.44zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" />
                              </svg>
                            </div>
                            <div onClick={_onItalicClick}>
                              <svg
                                className="MuiSvgIcon-root"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                fill="#5a8a99"
                              >
                                <path d="M10 5.5c0 .83.67 1.5 1.5 1.5h.71l-3.42 8H7.5c-.83 0-1.5.67-1.5 1.5S6.67 18 7.5 18h5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-.71l3.42-8h1.29c.83 0 1.5-.67 1.5-1.5S17.33 4 16.5 4h-5c-.83 0-1.5.67-1.5 1.5z" />
                              </svg>
                            </div>
                            <div onClick={_onUnderlineClick}>
                              <svg
                                className="MuiSvgIcon-root"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                fill="#5a8a99"
                              >
                                <path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z" />
                              </svg>
                            </div>
                            <div className="icons" onClick={_onUnorderedClick}>
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="list"
                                className="svg-inline--fa fa-list fa-w-16 fa-1x "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
                                />
                              </svg>
                            </div>
                            <div className="icons" onClick={_onOrderedClick}>
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="list-ol"
                                className="svg-inline--fa fa-list-ol fa-w-16 fa-1x "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M61.77 401l17.5-20.15a19.92 19.92 0 0 0 5.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h22.83a157.41 157.41 0 0 0-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.29 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 0 1-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.72 6.13-3.19 11.72 2.63 15.94 7.71 4.69 20.38 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM496 224H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H64V40a8 8 0 0 0-8-8H32a8 8 0 0 0-7.14 4.42l-8 16A8 8 0 0 0 24 64h8v64H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm-3.91 160H80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H41.32c3.29-10.29 48.34-18.68 48.34-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.46 18.75-4.37 5.59-3 10.84 2.8 15.37l8.58 6.88c5.61 4.56 11 2.47 16.12-2.44a13.44 13.44 0 0 1 9.46-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.09 320z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* OTHERS SECTIONS */}
                  <div className={classNames(experience !== 2 && 'hidden')}>
                    <div className="py-[20px] px-[60px] flex flex-col">
                      <label
                        htmlFor=""
                        className="mb-[10px] foont-medium text-[14px] text-[#000] leading-[17px] not-italic"
                      >
                        Experience type
                      </label>
                      <div className="inp-co-user">
                        <button
                          type="button"
                          id="club"
                          name="club"
                          className={classNames(
                            ' text-[#afb7c2] border-1 border-[#afb7c2] font-medium rounded-[50px] py-[0.625rem] px-[2rem] h-[44px] text-[0.875rem] min-w-[100px] mr-[10px]',
                            otherFormData.type === 'Club' &&
                              '!text-white bg-[#1a73e8]'
                          )}
                          onClick={(e) => updateOtherType(e, 'Club')}
                        >
                          Club
                        </button>
                        <button
                          type="button"
                          id="affiliation"
                          name="affiliation"
                          className={classNames(
                            ' text-[#afb7c2] border-1 border-[#afb7c2] font-medium rounded-[50px] py-[0.625rem] px-[2rem] h-[44px] text-[0.875rem] min-w-[100px] mr-[10px]',
                            otherFormData.type === 'Affiliation' &&
                              '!text-white bg-[#1a73e8]'
                          )}
                          onClick={(e) => updateOtherType(e, 'Affiliation')}
                        >
                          Affiliation
                        </button>
                        <button
                          type="button"
                          id="sport"
                          name="sport"
                          className={classNames(
                            ' text-[#afb7c2] border-1 border-[#afb7c2] font-medium rounded-[50px] py-[0.625rem] px-[2rem] h-[44px] text-[0.875rem] min-w-[100px] mr-[10px]',
                            otherFormData.type === 'Sport Team' &&
                              '!text-white bg-[#1a73e8]'
                          )}
                          onClick={(e) => updateOtherType(e, 'Sport Team')}
                        >
                          Sport Team
                        </button>
                        <button
                          type="button"
                          id="hackathone"
                          name="hackathon"
                          className={classNames(
                            ' text-[#afb7c2] border-1 border-[#afb7c2] font-medium rounded-[50px] py-[0.625rem] px-[2rem] h-[44px] text-[0.875rem] min-w-[100px] mr-[10px]',
                            otherFormData.type === 'Hackathon' &&
                              '!text-white bg-[#1a73e8]'
                          )}
                          onClick={(e) => updateOtherType(e, 'Hackathon')}
                        >
                          Hackathon
                        </button>
                        <button
                          type="button"
                          id="com"
                          name="competition"
                          className={classNames(
                            'mt-5 text-[#afb7c2] border-1 border-[#afb7c2] font-medium rounded-[50px] py-[0.625rem] px-[2rem] h-[44px] text-[0.875rem] min-w-[100px] mr-[10px]',
                            otherFormData.type === 'Competition' &&
                              '!text-white bg-[#1a73e8]'
                          )}
                          onClick={(e) => updateOtherType(e, 'Competition')}
                        >
                          Competition
                        </button>
                      </div>
                    </div>
                    <div className="flex not-italic">
                      <div className="pr-[10px] flex flex-col w-1/2 pl-[60px]">
                        <label
                          htmlFor=""
                          className="text-[14px] leading-4 font-medium mb-2.5"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Project title"
                          name="name"
                          className="p-[10px] text-[#a0a5af] border-1 focus:outline-none focus:border-[#2dc5a1] focus:border-2 transition duration-200 ease-in border-[#ddd] outline-none rounded-md text-[14px]"
                          value={otherFormData.name}
                          onChange={handleOtherChange}
                        />
                      </div>
                      <div className="pr-[60px] pl-[10px] flex flex-col w-1/2">
                        <label
                          htmlFor=""
                          className="text-[14px] leading-4 font-medium mb-2.5"
                        >
                          Role
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Job title"
                          name="role"
                          className="p-[10px] text-[#a0a5af] border-1 focus:outline-none focus:border-[#2dc5a1] focus:border-2 transition duration-200 ease-in border-[#ddd] outline-none rounded-md text-[14px]"
                          value={otherFormData.role}
                          onChange={handleOtherChange}
                        />
                      </div>
                    </div>
                    <div className="flex mt-[25px]">
                      <div className="flex flex-col w-1/2 pl-[60px] pr-[10px]">
                        <label
                          htmlFor=""
                          className="text-[14px] leading-4 font-medium mb-2.5"
                        >
                          From
                        </label>
                        <select
                          name="from"
                          id=""
                          className="webkit p-[10px] border-[#ddd] border-1 focus:outline-none focus:border-[#2dc5a1] focus:border-2 outline-none rounded-md text-[14px] text-[#a0a5af] transition duration-200"
                          value={otherFormData.from}
                          onChange={handleOtherChange}
                        >
                          <option value="Select...">Select...</option>
                          <option value="January">January</option>
                        </select>
                      </div>
                      <div className="flex flex-col w-1/2 pl-[10px] pr-[60px]">
                        <label
                          htmlFor=""
                          className="text-[14px] leading-4 font-medium mb-2.5"
                        >
                          To
                        </label>
                        <select
                          name="to"
                          id=""
                          className="webkit p-[10px] border-[#ddd] border-1 focus:outline-none focus:border-[#2dc5a1] focus:border-2 outline-none rounded-md text-[14px] text-[#a0a5af] transition duration-200"
                          value={otherFormData.to}
                          onChange={handleOtherChange}
                        >
                          <option value="Select...">Select...</option>
                          <option value="January">January</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex mt-[40px]">
                      <div className="flex flex-col w-1/2 pl-[60px] pr-[10px]">
                        <select
                          name=""
                          id=""
                          className="webkit p-[10px] border-[#ddd] border-1 focus:border-[#2dc5a1] focus:border-2 outline-none rounded-md text-[14px] text-[#a0a5af] transition duration-200"
                        >
                          <option value="Select...">Select...</option>
                          <option value="">January</option>
                        </select>
                      </div>
                      <div className="flex flex-col w-1/2 pl-[10px] pr-[60px]">
                        <select
                          name=""
                          id=""
                          className="webkit p-[10px] border-[#ddd] outline-none border-1 focus:outline-none focus:border-[#2dc5a1] focus:border-2 rounded-md text-[14px] text-[#a0a5af] transition duration-200"
                        >
                          <option value="Select...">Select...</option>
                          <option value="">January</option>
                        </select>
                      </div>
                    </div>
                    <div className="py-5 px-[60px] flex items-center space-x-[10px] w-1/2 pl-[60px pr-[10px]">
                      <div className="mt-[5px] ml-[5px] flex items-center mb-5 space-x-2">
                        <span className="root">
                          <span className="buttonlabel">
                            <input
                              type="checkbox"
                              name=""
                              id=""
                              onChange={() => setchecked(!checked)}
                              value={checked}
                              className={classNames(
                                'badges_input',
                                checked
                                  ? 'bg-[#FE0100] hover:bg-[#a0a5af]'
                                  : 'bg-white'
                              )}
                            />
                          </span>
                        </span>
                        <p className="text-[1rem] text-[#959FC5] font-medium">
                          Current experience
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col mb-5">
                      <div className="pr-[50px] pl-[60px]">
                        <label
                          htmlFor=""
                          className="text-[14px] leading-4 font-medium mb-2.5"
                        >
                          Description
                        </label>
                        <div>
                          <div className="w-full">
                            <Editor
                              editorState={editorState}
                              onChange={setEditorState}
                              placeholder="Give a brief description"
                            />
                          </div>
                          <div className="w-full bg-[#f9f9f9] border-1 border-[#d6e0e1] py-[0.25rem] px-[0.725rem] pb-0 border-t-0 flex items-center z-50">
                            <div onClick={_onBoldClick}>
                              <svg
                                className="MuiSvgIcon-root"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                fill="#5a8a99"
                              >
                                <path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H8c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h5.78c2.07 0 3.96-1.69 3.97-3.77.01-1.53-.85-2.84-2.15-3.44zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" />
                              </svg>
                            </div>
                            <div onClick={_onItalicClick}>
                              <svg
                                className="MuiSvgIcon-root"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                fill="#5a8a99"
                              >
                                <path d="M10 5.5c0 .83.67 1.5 1.5 1.5h.71l-3.42 8H7.5c-.83 0-1.5.67-1.5 1.5S6.67 18 7.5 18h5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-.71l3.42-8h1.29c.83 0 1.5-.67 1.5-1.5S17.33 4 16.5 4h-5c-.83 0-1.5.67-1.5 1.5z" />
                              </svg>
                            </div>
                            <div onClick={_onUnderlineClick}>
                              <svg
                                className="MuiSvgIcon-root"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                fill="#5a8a99"
                              >
                                <path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z" />
                              </svg>
                            </div>
                            <div className="icons" onClick={_onUnorderedClick}>
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="list"
                                className="svg-inline--fa fa-list fa-w-16 fa-1x "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
                                />
                              </svg>
                            </div>
                            <div className="icons" onClick={_onOrderedClick}>
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="list-ol"
                                className="svg-inline--fa fa-list-ol fa-w-16 fa-1x "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M61.77 401l17.5-20.15a19.92 19.92 0 0 0 5.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h22.83a157.41 157.41 0 0 0-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.29 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 0 1-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.72 6.13-3.19 11.72 2.63 15.94 7.71 4.69 20.38 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM496 224H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H64V40a8 8 0 0 0-8-8H32a8 8 0 0 0-7.14 4.42l-8 16A8 8 0 0 0 24 64h8v64H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm-3.91 160H80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H41.32c3.29-10.29 48.34-18.68 48.34-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.46 18.75-4.37 5.59-3 10.84 2.8 15.37l8.58 6.88c5.61 4.56 11 2.47 16.12-2.44a13.44 13.44 0 0 1 9.46-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.09 320z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                {/* footer */}
              </div>
            </div>
          </div>
        </>
      ) : volunteerEditModal ? (
        <div className="bg-black bg-opacity-70 w-full h-full fixed z-50 inset-0 flex items-center justify-center edit-overlay">
          <div className="relative max-h-[746px] h-[90%] rounded-lg w-[600px] overflow-y-auto bg-white z-10 text-black min-w-[746px]">
            <div
              className="top-0 sticky z-50 flex items-center justify-between p-5 bg-white pt-3 pr-3 pb-3 pl-6 rounded-t-lg max-h-[60px] min-h-[75px] rounded-b-sm my-auto shadow-md"
              style={{ boxShadow: '2px 2px 8px rgb(0 0 0/8%)' }}
            >
              <button
                type="button"
                className="mr-2 h-8 w-8 transform ease-in-out duration-200 flex items-center justify-center rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-[#033443]"
                  onClick={() => setVolunteerEditModal(false)}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <button
                className="bg-[#201e27] text-white background-transparent font-bold px-3 py-2  min-w-[100px] h-10 text-sm rounded-[5px] outline-none focus:outline-none mr-1"
                type="button"
                onClick={handleVolunteerEdit}
              >
                Save
              </button>
            </div>
            <div className="mt-8">
              <p className="pl-[60px] mb-4 font-semibold">Edit Volunteer</p>
              <div className="flex">
                <div className="pr-[10px] flex flex-col w-1/2 pl-[60px]">
                  <label
                    htmlFor=""
                    className="text-[14px] leading-4 font-medium mb-2.5"
                  >
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Project title"
                    name="company"
                    className="p-[10px] text-[#a0a5af] border-1 focus:outline-none focus:border-[#2dc5a1] focus:border-2 transition duration-200 ease-in border-[#ddd] outline-none rounded-md text-[14px]"
                    value={volunteerFormData.company}
                    onChange={handleVolunteerChange}
                  />
                </div>
                <div className="pr-[60px] pl-[10px] flex flex-col w-1/2">
                  <label
                    htmlFor=""
                    className="text-[14px] leading-4 font-medium mb-2.5"
                  >
                    Job Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Job title"
                    name="jobTitle"
                    className="p-[10px] text-[#a0a5af] border-1 focus:outline-none focus:border-[#2dc5a1] focus:border-2 transition duration-200 ease-in border-[#ddd] outline-none rounded-md text-[14px]"
                    value={volunteerFormData.jobTitle}
                    onChange={handleVolunteerChange}
                  />
                </div>
              </div>
              <div className="flex mt-[35px]">
                <div className="flex flex-col w-1/2 pl-[60px] pr-[10px]">
                  <label
                    htmlFor=""
                    className="text-[14px] leading-4 font-medium mb-2.5"
                  >
                    From
                  </label>
                  <select
                    name="from"
                    id=""
                    className="webkit p-[10px] border-[#ddd] border-1 focus:outline-none focus:border-[#2dc5a1] focus:border-2 outline-none rounded-md text-[14px] text-[#a0a5af]"
                    value={volunteerFormData.from}
                    onChange={handleVolunteerChange}
                  >
                    <option value="Select...">Select...</option>
                    <option value="January">January</option>
                  </select>
                </div>
                <div className="flex flex-col w-1/2 pl-[10px] pr-[60px]">
                  <label
                    htmlFor=""
                    className="text-[14px] leading-4 font-medium mb-2.5"
                  >
                    To
                  </label>
                  <select
                    name="to"
                    id=""
                    className="webkit p-[10px] border-1 border-[#ddd] outline-none rounded-md text-[14px] text-[#a0a5af]"
                    value={volunteerFormData.to}
                    onChange={handleVolunteerChange}
                  >
                    <option value="Select...">Select...</option>
                    <option value="">January</option>
                  </select>
                </div>
              </div>
              <div className="flex mt-[25px]">
                <div className="py-5 px-[60px] flex flex-col w-1/2 pl-[60px] pr-[10px]">
                  <select
                    name=""
                    id=""
                    className="webkit p-[10px] border-1 border-[#ddd] outline-none rounded-md text-[14px] text-[#a0a5af]"
                  >
                    <option value="Select...">Select...</option>
                    <option value="">January</option>
                  </select>
                </div>
                <div className="py-5 px-[60px] flex flex-col w-1/2 pl-[10px] pr-[60px]">
                  <select
                    name=""
                    id=""
                    className="webkit p-[10px] border-1 border-[#ddd] outline-none rounded-md text-[14px] text-[#a0a5af]"
                  >
                    <option value="Select...">Select...</option>
                    <option value="">January</option>
                  </select>
                </div>
              </div>
              <div className="py-5 px-[60px] flex items-center space-x-[10px] w-1/2 pl-[60px pr-[10px]">
                <div className="mt-[5px] ml-[5px] flex items-center mb-5 space-x-2">
                  <span className="root">
                    <span className="buttonlabel">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        onChange={() => setchecked(!checked)}
                        value={checked}
                        className={classNames(
                          'badges_input',
                          checked ? 'bg-red-600 hover:bg-[#a0a5af]' : 'bg-white'
                        )}
                      />
                    </span>
                  </span>
                  <p className="text-[0.75rem] font-medium">
                    I currently work here
                  </p>
                </div>
              </div>
              <div className="flex flex-col mb-5">
                <div className="pr-[50px] pl-[60px]">
                  <label
                    htmlFor=""
                    className="text-[14px] leading-4 font-medium mb-2.5"
                  >
                    Description
                  </label>
                  <div>
                    <div className="w-full">
                      <Editor
                        editorState={editorState}
                        onChange={setEditorState}
                        placeholder="Give a brief description"
                      />
                    </div>
                    <div className="w-full bg-[#f9f9f9] border-1 border-[#d6e0e1] py-[0.25rem] px-[0.725rem] pb-0 border-t-0 flex items-center z-50">
                      <div onClick={_onBoldClick}>
                        <svg
                          className="MuiSvgIcon-root"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          fill="#5a8a99"
                        >
                          <path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H8c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h5.78c2.07 0 3.96-1.69 3.97-3.77.01-1.53-.85-2.84-2.15-3.44zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" />
                        </svg>
                      </div>
                      <div onClick={_onItalicClick}>
                        <svg
                          className="MuiSvgIcon-root"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          fill="#5a8a99"
                        >
                          <path d="M10 5.5c0 .83.67 1.5 1.5 1.5h.71l-3.42 8H7.5c-.83 0-1.5.67-1.5 1.5S6.67 18 7.5 18h5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-.71l3.42-8h1.29c.83 0 1.5-.67 1.5-1.5S17.33 4 16.5 4h-5c-.83 0-1.5.67-1.5 1.5z" />
                        </svg>
                      </div>
                      <div onClick={_onUnderlineClick}>
                        <svg
                          className="MuiSvgIcon-root"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          fill="#5a8a99"
                        >
                          <path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z" />
                        </svg>
                      </div>
                      <div className="icons" onClick={_onUnorderedClick}>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="list"
                          className="svg-inline--fa fa-list fa-w-16 fa-1x "
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
                          />
                        </svg>
                      </div>
                      <div className="icons" onClick={_onOrderedClick}>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="list-ol"
                          className="svg-inline--fa fa-list-ol fa-w-16 fa-1x "
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M61.77 401l17.5-20.15a19.92 19.92 0 0 0 5.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h22.83a157.41 157.41 0 0 0-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.29 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 0 1-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.72 6.13-3.19 11.72 2.63 15.94 7.71 4.69 20.38 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM496 224H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H64V40a8 8 0 0 0-8-8H32a8 8 0 0 0-7.14 4.42l-8 16A8 8 0 0 0 24 64h8v64H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm-3.91 160H80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H41.32c3.29-10.29 48.34-18.68 48.34-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.46 18.75-4.37 5.59-3 10.84 2.8 15.37l8.58 6.88c5.61 4.56 11 2.47 16.12-2.44a13.44 13.44 0 0 1 9.46-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.09 320z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : achievementEditModal ? (
        <div className="bg-black bg-opacity-70 w-full h-full fixed z-50 inset-0 flex items-center justify-center edit-overlay">
          <div className="relative max-h-[746px] h-[90%] rounded-lg w-[600px] overflow-y-auto bg-white z-10 text-black min-w-[746px]">
            <div
              className="top-0 sticky z-50 flex items-center justify-between p-5 bg-white pt-3 pr-3 pb-3 pl-6 rounded-t-lg max-h-[60px] min-h-[75px] rounded-b-sm my-auto shadow-md"
              style={{ boxShadow: '2px 2px 8px rgb(0 0 0/8%)' }}
            >
              <button
                type="button"
                className="mr-2 h-8 w-8 transform ease-in-out duration-200 flex items-center justify-center rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-[#033443]"
                  onClick={() => setAchievementEditModal(false)}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <button
                className="bg-[#201e27] text-white background-transparent font-bold px-3 py-2  min-w-[100px] h-10 text-sm rounded-[5px] outline-none focus:outline-none mr-1"
                type="button"
                onClick={handleAchievementEdit}
              >
                Save
              </button>
            </div>
            <div className="mt-8">
              <p className="pl-[60px] mb-4 font-semibold">Edit Achievement</p>
              <div className="flex not-italic">
                <div className="pr-[10px] flex flex-col w-1/2 pl-[60px]">
                  <label
                    htmlFor=""
                    className="text-[14px] leading-4 font-medium mb-2.5"
                  >
                    Achievements Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Project title"
                    name="organization"
                    className="p-[10px] text-[#a0a5af] border-1 focus:outline-none focus:border-[#2dc5a1] focus:border-2 transition duration-200 ease-in border-[#ddd] outline-none rounded-md text-[14px]"
                    value={achievementFormData.organization}
                    onChange={handleAchievementChange}
                  />
                </div>
                <div className="pr-[60px] pl-[10px] flex flex-col w-1/2">
                  <label
                    htmlFor=""
                    className="text-[14px] leading-4 font-medium mb-2.5"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Job title"
                    name="jobTitle"
                    className="p-[10px] text-[#a0a5af] border-1 focus:outline-none focus:border-[#2dc5a1] focus:border-2 transition duration-200 ease-in border-[#ddd] outline-none rounded-md text-[14px]"
                    value={achievementFormData.jobTitle}
                    onChange={handleAchievementChange}
                  />
                </div>
              </div>
              <div className="flex mt-[25px]">
                <div className="flex flex-col w-1/2 pl-[60px] pr-[10px]">
                  <label
                    htmlFor=""
                    className="text-[14px] leading-4 font-medium mb-2.5"
                  >
                    Data Received
                  </label>
                  <select
                    name="dateRecieved"
                    id=""
                    className="webkit p-[10px] border-1 border-[#ddd] focus:outline-none focus:border-[#2dc5a1] focus:border-2 outline-none rounded-md text-[14px] text-[#a0a5af]"
                    value={achievementFormData.dateRecieved}
                    onChange={handleAchievementChange}
                  >
                    <option value="Select...">Select...</option>
                    <option value="">January</option>
                  </select>
                </div>
              </div>
              <div className="flex mt-[25px]">
                <div className="py-5 px-[60px] flex flex-col w-1/2 pl-[60px] pr-[10px]">
                  <select
                    name=""
                    id=""
                    className="webkit p-[10px] border-[#ddd] border-1 focus:outline-none focus:border-[#2dc5a1] focus:border-2 outline-none rounded-md text-[14px] text-[#a0a5af]"
                  >
                    <option value="Select...">Select...</option>
                    <option value="">January</option>
                  </select>
                </div>
              </div>
              <div className="py-5 px-[60px] flex items-center space-x-[10px] w-1/2 pl-[60px pr-[10px]">
                <div className="mt-[5px] ml-[5px] flex items-center mb-5 space-x-2">
                  <span className="root">
                    <span className="buttonlabel">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        onChange={() => setchecked(!checked)}
                        value={checked}
                        className={classNames(
                          'badges_input',
                          checked
                            ? 'bg-[#FE0100] hover:bg-[#a0a5af]'
                            : 'bg-white'
                        )}
                      />
                    </span>
                  </span>
                  <p className="text-[1rem] text-[#959FC5] font-medium">
                    Current experience
                  </p>
                </div>
              </div>
              <div className="flex flex-col mb-5">
                <div className="pr-[50px] pl-[60px]">
                  <label
                    htmlFor=""
                    className="text-[14px] leading-4 font-medium mb-2.5 not-italic"
                  >
                    Description
                  </label>
                  <div>
                    <div className="w-full">
                      <Editor
                        editorState={editorState}
                        onChange={setEditorState}
                        placeholder="Give a brief description"
                      />
                    </div>
                    <div className="w-full bg-[#f9f9f9] border-1 border-[#d6e0e1] py-[0.25rem] px-[0.725rem] pb-0 border-t-0 flex items-center z-50">
                      <div onClick={_onBoldClick}>
                        <svg
                          className="MuiSvgIcon-root"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          fill="#5a8a99"
                        >
                          <path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H8c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h5.78c2.07 0 3.96-1.69 3.97-3.77.01-1.53-.85-2.84-2.15-3.44zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" />
                        </svg>
                      </div>
                      <div onClick={_onItalicClick}>
                        <svg
                          className="MuiSvgIcon-root"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          fill="#5a8a99"
                        >
                          <path d="M10 5.5c0 .83.67 1.5 1.5 1.5h.71l-3.42 8H7.5c-.83 0-1.5.67-1.5 1.5S6.67 18 7.5 18h5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-.71l3.42-8h1.29c.83 0 1.5-.67 1.5-1.5S17.33 4 16.5 4h-5c-.83 0-1.5.67-1.5 1.5z" />
                        </svg>
                      </div>
                      <div onClick={_onUnderlineClick}>
                        <svg
                          className="MuiSvgIcon-root"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          fill="#5a8a99"
                        >
                          <path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z" />
                        </svg>
                      </div>
                      <div className="icons" onClick={_onUnorderedClick}>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="list"
                          className="svg-inline--fa fa-list fa-w-16 fa-1x "
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
                          />
                        </svg>
                      </div>
                      <div className="icons" onClick={_onOrderedClick}>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="list-ol"
                          className="svg-inline--fa fa-list-ol fa-w-16 fa-1x "
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M61.77 401l17.5-20.15a19.92 19.92 0 0 0 5.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h22.83a157.41 157.41 0 0 0-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.29 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 0 1-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.72 6.13-3.19 11.72 2.63 15.94 7.71 4.69 20.38 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM496 224H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H64V40a8 8 0 0 0-8-8H32a8 8 0 0 0-7.14 4.42l-8 16A8 8 0 0 0 24 64h8v64H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm-3.91 160H80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H41.32c3.29-10.29 48.34-18.68 48.34-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.46 18.75-4.37 5.59-3 10.84 2.8 15.37l8.58 6.88c5.61 4.56 11 2.47 16.12-2.44a13.44 13.44 0 0 1 9.46-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.09 320z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : otherEditModal ? (
        <div className="bg-black bg-opacity-70 w-full h-full fixed z-50 inset-0 flex items-center justify-center edit-overlay">
          <div className="relative max-h-[746px] h-[90%] rounded-lg w-[600px] overflow-y-auto bg-white z-10 text-black min-w-[746px]">
            <div
              className="top-0 sticky z-50 flex items-center justify-between p-5 bg-white pt-3 pr-3 pb-3 pl-6 rounded-t-lg max-h-[60px] min-h-[75px] rounded-b-sm my-auto shadow-md"
              style={{ boxShadow: '2px 2px 8px rgb(0 0 0/8%)' }}
            >
              <button
                type="button"
                className="mr-2 h-8 w-8 transform ease-in-out duration-200 flex items-center justify-center rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-[#033443]"
                  onClick={() => setOtherEditModal(false)}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <button
                className="bg-[#201e27] text-white background-transparent font-bold px-3 py-2  min-w-[100px] h-10 text-sm rounded-[5px] outline-none focus:outline-none mr-1"
                type="button"
                onClick={handleOtherEdit}
              >
                Save
              </button>
            </div>
            <div className="mt-8">
              <p className="pl-[60px] mb-4 font-semibold">Edit Other</p>
              <div className="py-[20px] px-[60px] flex flex-col">
                <label
                  htmlFor=""
                  className="mb-[10px] foont-medium text-[14px] text-[#000] leading-[17px] not-italic"
                >
                  Experience type
                </label>
                <div className="inp-co-user">
                  <button
                    type="button"
                    id="club"
                    name="club"
                    className={classNames(
                      ' text-[#afb7c2] border-1 border-[#afb7c2] font-medium rounded-[50px] py-[0.625rem] px-[2rem] h-[44px] text-[0.875rem] min-w-[100px] mr-[10px]',
                      otherFormData.type === 'Club' &&
                        '!text-white bg-[#1a73e8]'
                    )}
                    onClick={(e) => updateOtherType(e, 'Club')}
                  >
                    Club
                  </button>
                  <button
                    type="button"
                    id="affiliation"
                    name="affiliation"
                    className={classNames(
                      ' text-[#afb7c2] border-1 border-[#afb7c2] font-medium rounded-[50px] py-[0.625rem] px-[2rem] h-[44px] text-[0.875rem] min-w-[100px] mr-[10px]',
                      otherFormData.type === 'Affiliation' &&
                        '!text-white bg-[#1a73e8]'
                    )}
                    onClick={(e) => updateOtherType(e, 'Affiliation')}
                  >
                    Affiliation
                  </button>
                  <button
                    type="button"
                    id="sport"
                    name="sport"
                    className={classNames(
                      ' text-[#afb7c2] border-1 border-[#afb7c2] font-medium rounded-[50px] py-[0.625rem] px-[2rem] h-[44px] text-[0.875rem] min-w-[100px] mr-[10px]',
                      otherFormData.type === 'Sport Team' &&
                        '!text-white bg-[#1a73e8]'
                    )}
                    onClick={(e) => updateOtherType(e, 'Sport Team')}
                  >
                    Sport Team
                  </button>
                  <button
                    type="button"
                    id="hackathone"
                    name="hackathon"
                    className={classNames(
                      ' text-[#afb7c2] border-1 border-[#afb7c2] font-medium rounded-[50px] py-[0.625rem] px-[2rem] h-[44px] text-[0.875rem] min-w-[100px] mr-[10px]',
                      otherFormData.type === 'Hackathon' &&
                        '!text-white bg-[#1a73e8]'
                    )}
                    onClick={(e) => updateOtherType(e, 'Hackathon')}
                  >
                    Hackathon
                  </button>
                  <button
                    type="button"
                    id="com"
                    name="competition"
                    className={classNames(
                      'mt-5 text-[#afb7c2] border-1 border-[#afb7c2] font-medium rounded-[50px] py-[0.625rem] px-[2rem] h-[44px] text-[0.875rem] min-w-[100px] mr-[10px]',
                      otherFormData.type === 'Competition' &&
                        '!text-white bg-[#1a73e8]'
                    )}
                    onClick={(e) => updateOtherType(e, 'Competition')}
                  >
                    Competition
                  </button>
                </div>
              </div>
              <div className="flex not-italic">
                <div className="pr-[10px] flex flex-col w-1/2 pl-[60px]">
                  <label
                    htmlFor=""
                    className="text-[14px] leading-4 font-medium mb-2.5"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Project title"
                    name="name"
                    className="p-[10px] text-[#a0a5af] border-1 focus:outline-none focus:border-[#2dc5a1] focus:border-2 transition duration-200 ease-in border-[#ddd] outline-none rounded-md text-[14px]"
                    value={otherFormData.name}
                    onChange={handleOtherChange}
                  />
                </div>
                <div className="pr-[60px] pl-[10px] flex flex-col w-1/2">
                  <label
                    htmlFor=""
                    className="text-[14px] leading-4 font-medium mb-2.5"
                  >
                    Role
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Job title"
                    name="role"
                    className="p-[10px] text-[#a0a5af] border-1 focus:outline-none focus:border-[#2dc5a1] focus:border-2 transition duration-200 ease-in border-[#ddd] outline-none rounded-md text-[14px]"
                    value={otherFormData.role}
                    onChange={handleOtherChange}
                  />
                </div>
              </div>
              <div className="flex mt-[25px]">
                <div className="flex flex-col w-1/2 pl-[60px] pr-[10px]">
                  <label
                    htmlFor=""
                    className="text-[14px] leading-4 font-medium mb-2.5"
                  >
                    From
                  </label>
                  <select
                    name="from"
                    id=""
                    className="webkit p-[10px] border-[#ddd] border-1 focus:outline-none focus:border-[#2dc5a1] focus:border-2 outline-none rounded-md text-[14px] text-[#a0a5af] transition duration-200"
                    value={otherFormData.from}
                    onChange={handleOtherChange}
                  >
                    <option value="Select...">Select...</option>
                    <option value="January">January</option>
                  </select>
                </div>
                <div className="flex flex-col w-1/2 pl-[10px] pr-[60px]">
                  <label
                    htmlFor=""
                    className="text-[14px] leading-4 font-medium mb-2.5"
                  >
                    To
                  </label>
                  <select
                    name="to"
                    id=""
                    className="webkit p-[10px] border-[#ddd] border-1 focus:outline-none focus:border-[#2dc5a1] focus:border-2 outline-none rounded-md text-[14px] text-[#a0a5af] transition duration-200"
                    value={otherFormData.to}
                    onChange={handleOtherChange}
                  >
                    <option value="Select...">Select...</option>
                    <option value="January">January</option>
                  </select>
                </div>
              </div>
              <div className="flex mt-[40px]">
                <div className="flex flex-col w-1/2 pl-[60px] pr-[10px]">
                  <select
                    name=""
                    id=""
                    className="webkit p-[10px] border-[#ddd] border-1 focus:border-[#2dc5a1] focus:border-2 outline-none rounded-md text-[14px] text-[#a0a5af] transition duration-200"
                  >
                    <option value="Select...">Select...</option>
                    <option value="">January</option>
                  </select>
                </div>
                <div className="flex flex-col w-1/2 pl-[10px] pr-[60px]">
                  <select
                    name=""
                    id=""
                    className="webkit p-[10px] border-[#ddd] outline-none border-1 focus:outline-none focus:border-[#2dc5a1] focus:border-2 rounded-md text-[14px] text-[#a0a5af] transition duration-200"
                  >
                    <option value="Select...">Select...</option>
                    <option value="">January</option>
                  </select>
                </div>
              </div>
              <div className="py-5 px-[60px] flex items-center space-x-[10px] w-1/2 pl-[60px pr-[10px]">
                <div className="mt-[5px] ml-[5px] flex items-center mb-5 space-x-2">
                  <span className="root">
                    <span className="buttonlabel">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        onChange={() => setchecked(!checked)}
                        value={checked}
                        className={classNames(
                          'badges_input',
                          checked
                            ? 'bg-[#FE0100] hover:bg-[#a0a5af]'
                            : 'bg-white'
                        )}
                      />
                    </span>
                  </span>
                  <p className="text-[1rem] text-[#959FC5] font-medium">
                    Current experience
                  </p>
                </div>
              </div>
              <div className="flex flex-col mb-5">
                <div className="pr-[50px] pl-[60px]">
                  <label
                    htmlFor=""
                    className="text-[14px] leading-4 font-medium mb-2.5"
                  >
                    Description
                  </label>
                  <div>
                    <div className="w-full">
                      <Editor
                        editorState={editorState}
                        onChange={setEditorState}
                        placeholder="Give a brief description"
                      />
                    </div>
                    <div className="w-full bg-[#f9f9f9] border-1 border-[#d6e0e1] py-[0.25rem] px-[0.725rem] pb-0 border-t-0 flex items-center z-50">
                      <div onClick={_onBoldClick}>
                        <svg
                          className="MuiSvgIcon-root"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          fill="#5a8a99"
                        >
                          <path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H8c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h5.78c2.07 0 3.96-1.69 3.97-3.77.01-1.53-.85-2.84-2.15-3.44zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" />
                        </svg>
                      </div>
                      <div onClick={_onItalicClick}>
                        <svg
                          className="MuiSvgIcon-root"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          fill="#5a8a99"
                        >
                          <path d="M10 5.5c0 .83.67 1.5 1.5 1.5h.71l-3.42 8H7.5c-.83 0-1.5.67-1.5 1.5S6.67 18 7.5 18h5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-.71l3.42-8h1.29c.83 0 1.5-.67 1.5-1.5S17.33 4 16.5 4h-5c-.83 0-1.5.67-1.5 1.5z" />
                        </svg>
                      </div>
                      <div onClick={_onUnderlineClick}>
                        <svg
                          className="MuiSvgIcon-root"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          fill="#5a8a99"
                        >
                          <path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z" />
                        </svg>
                      </div>
                      <div className="icons" onClick={_onUnorderedClick}>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="list"
                          className="svg-inline--fa fa-list fa-w-16 fa-1x "
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
                          />
                        </svg>
                      </div>
                      <div className="icons" onClick={_onOrderedClick}>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="list-ol"
                          className="svg-inline--fa fa-list-ol fa-w-16 fa-1x "
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M61.77 401l17.5-20.15a19.92 19.92 0 0 0 5.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h22.83a157.41 157.41 0 0 0-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.29 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 0 1-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.72 6.13-3.19 11.72 2.63 15.94 7.71 4.69 20.38 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM496 224H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H64V40a8 8 0 0 0-8-8H32a8 8 0 0 0-7.14 4.42l-8 16A8 8 0 0 0 24 64h8v64H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm-3.91 160H80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H41.32c3.29-10.29 48.34-18.68 48.34-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.46 18.75-4.37 5.59-3 10.84 2.8 15.37l8.58 6.88c5.61 4.56 11 2.47 16.12-2.44a13.44 13.44 0 0 1 9.46-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.09 320z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Earnbadges;
