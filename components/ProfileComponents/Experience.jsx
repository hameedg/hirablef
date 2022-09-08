/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import classNames from '../../utils/constants/classNames';
import ShowExperienceModal from './ShowExperienceModal';
import 'draft-js/dist/Draft.css';

function Experience() {
  const [showmodal, setshowmodal] = useState(false);
  const [edit, setEdit] = useState({
    isedit: false,
    index: 0,
  });

  const [formData, setFormData] = useState({
    companyName: '',
    website: '',
    title: '',
    location: '',
    fromMonth: '',
    fromYear: '',
    toMonth: '',
    toYear: '',
    present: 'present',
    workedChecked: false,
    currentlyChecked: false,
    description: '',
  });

  const [experiences, setExperiences] = useState([]);
  const [displayFullExperience, setDisplayFullExperience] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setExperiences([...experiences, formData]);
    setFormData({
      companyName: '',
      website: '',
      title: '',
      location: '',
      fromMonth: '',
      fromYear: '',
      toMonth: '',
      toYear: '',
      workedChecked: false,
      currentlyChecked: false,
      description: '',
      // editorState: EditorState.createEmpty(),
    });
    setshowmodal(false);
  };

  const handleDelete = () => {
    const temp = experiences;
    temp.splice(edit.index, 1);
    setExperiences(temp);
    setEdit({ isedit: false, index: 0 });
    setshowmodal(false);
    setFormData({
      companyName: '',
      website: '',
      title: '',
      location: '',
      fromMonth: '',
      fromYear: '',
      toMonth: '',
      toYear: '',
      workedChecked: false,
      currentlyChecked: false,
      description: '',
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    const temp = experiences;
    temp.splice(edit.index, 1, formData);
    setExperiences(temp);
    setshowmodal(false);
    setFormData({
      companyName: '',
      website: '',
      title: '',
      location: '',
      fromMonth: '',
      fromYear: '',
      toMonth: '',
      toYear: '',
      workedChecked: false,
      currentlyChecked: false,
      description: '',
    });
  };

  const handleEdit = (index) => {
    setFormData(experiences[index]);
    setEdit({
      isedit: true,
      index,
    });
    setshowmodal(true);
  };

  useEffect(() => {
    const body = document.getElementsByTagName('body');
    if (showmodal) {
      body[0].style.overflow = 'hidden';
      body[0].style.position = 'fixed';
      body[0].style.width = '100%';
    } else {
      body[0].style.overflow = 'auto';
      body[0].style.position = 'relative';
    }
  }, [showmodal]);

  // const handleDescriptionToggle = (e, index) => {
  //   e.preventDefault();
  //   document
  //     .getElementById(`experience_description_${index}`)
  //     .classList.toggle("experience_description_full");
  //   if (
  //     document
  //       .getElementById(`experience_description_${index}`)
  //       .classList.contains("experience_description_full")
  //   )
  //     e.target.innerText = "Hide";
  //   else e.target.innerText = "View More";
  // };

  const getTruncatedDescription = (description, index) => {
    if (displayFullExperience.includes(index)) {
      description = `${description} <span class="experience-view-more" id="${index}"
        style="cursor:pointer; font-size: 12px; margin-left: 2px; color: blue; text-decoration:underline;
        font-weight:500;"
      >Hide</span>`;
      return description;
    }
    let limit = 154;

    if (description.charAt(limit) === '>') limit++;

    let truncatedText = description.substring(0, limit);

    if (truncatedText.charAt(truncatedText.length - 1) === '<')
      truncatedText = truncatedText.substring(0, truncatedText.length - 1);
    else if (truncatedText.charAt(truncatedText.length - 1) === '/') {
      if (truncatedText.charAt(truncatedText.length - 2) === '<')
        truncatedText = truncatedText.substring(0, truncatedText.length - 2);
    }
    if (description.length > limit)
      truncatedText = `${truncatedText} <span class="experience-view-more" id="${index}"
        style="cursor:pointer; font-size: 12px; margin-left: 5px; color: blue; text-decoration:underline;
        font-weight:500;"
      >...Read more</span>`;

    return truncatedText;
  };

  const handleExperienceDescriptionClick = (e) => {
    let hasClass =
      Array.from(e.target.classList).indexOf('experience-view-more') > -1;
    hasClass = e.target.classList.contains('experience-view-more');

    if (hasClass) {
      if (displayFullExperience.includes(+e.target.id))
        setDisplayFullExperience(
          displayFullExperience.filter((exp) => exp !== +e.target.id)
        );
      else setDisplayFullExperience([...displayFullExperience, +e.target.id]);
    }
  };

  return (
    <>
      {experiences.length > 0 ? (
        <div
          className="relative py-6 px-8 ml-0 border-[1.5px] border-[#d9d9d9] 
        rounded-[9px] mb-[15px] w-[648px] bg-white"
        >
          <h1 className="mb-[1rem] text-[0.95rem] leading-[1.375rem] font-medium">
            EXPERIENCE
          </h1>
          {experiences.map((item, index) => (
            <div className="relative" key={index}>
              <div className="relative flex mb-[22px]">
                <img
                  src="https://wi-images.condecdn.net/image/nrjyg4aGK0k/crop/2040/f/hangout.jpg"
                  alt=""
                  className="h-[60px] w-[60px] object-contain rounded-[3px] mr-[1.25rem] align-middle max-w-none"
                />
                <div className="w-[90%] text-[0.875rem] leading-[150%] group">
                  <h2 className="font-semibold text-[1rem] leading-[150%] m-0 text-[#355761] inline">
                    {item.title}-{item.companyName}
                  </h2>
                  <h3 className="text-[0.875rem] text-[#201e27] leading-[150%] m-0">
                    {item.fromMonth} {item.fromYear}{' '}
                    {item.currentlyChecked
                      ? '- present'
                      : `- ${item.toMonth}
                      ${item.toYear}`}
                  </h3>
                  <p
                    className={classNames(
                      'opacity-70 text-[#597780] text-[0.875rem] font-medium m-0'
                    )}
                  >
                    {item.workedChecked ? 'Remote' : item.location}
                  </p>
                  {item.description !== '<p><br></p>' ? (
                    <div>
                      <div
                        id={`experience_description_${index}`}
                        className="experience_description"
                        onClick={handleExperienceDescriptionClick}
                        dangerouslySetInnerHTML={{
                          __html: getTruncatedDescription(
                            item.description,
                            index
                          ),
                        }}
                      />
                      {/* <button
                          className="mt-1 text-xs float-right text-blue-700 font-medium cursor-pointer"
                          onClick={(e) => handleDescriptionToggle(e, index)}
                        >
                          View More
                        </button> */}
                    </div>
                  ) : (
                    <></>
                  )}
                  <svg
                    className="flex items-center font-medium leading-[1rem] w-[1rem] h-[1rem] absolute right-0 top-2
                     text-[#aaa] cursor-pointer text-[25px] mr-[5px] opacity-0 transition ease-in group-hover:opacity-100"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    onClick={() => handleEdit(index)}
                  >
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
          <button
            type="button"
            className="absolute top-[26px] right-[20px] text-[#62d5bc] text-[0.85rem] font-semibold outline-none border-none bg-transparent cursor-pointer"
            onClick={() => {
              setshowmodal(true);
              setFormData({
                companyName: '',
                website: '',
                title: '',
                location: '',
                fromMonth: '',
                fromYear: '',
                toMonth: '',
                toYear: '',
                present: 'present',
                workedChecked: false,
                currentlyChecked: false,
                description: '',
              });
              setEdit({ isedit: false, index: 0 });
            }}
          >
            + Add Experience
          </button>
        </div>
      ) : (
        // <div
        //   className="py-6 px-8 ml-0 border-[1.5px] border-[#d9d9d9] rounded-[9px]
        //   mb-[15px] w-[648px] newbg_experience"
        // >
        //   <h1 className="mb-[1rem] text-[0.95rem] leading-[1.375rem] font-medium">
        //     EXPERIENCE
        //   </h1>
        //   <div className="text-center">
        //     <h3 className="text-[0.875rem] text-[#201e27] mt-[8.5rem] mr-0 mb-0 font-medium">
        //       Add your experience
        //     </h3>
        //     <p className="text-[0.875rem] mt-[0.5rem] ml-0 mb-[1rem] text-gray-500 text-medium">
        //       Stand out to recruiters by adding your past and upcoming
        //       experiences
        //     </p>
        //     <button
        //       className="experience_button"
        //       onClick={() => {
        //         setshowmodal(true);
        //       }}
        //     >
        //       Add Experience
        //     </button>
        //   </div>
        // </div>
        <div
          className="bg-white  border-[1.5px] border-[#d9d9d9] h-80
          rounded-[9px] py-6 px-7 flex gap-7 w-[648px]"
          style={{
            background: `url("/svg/experience.svg") no-repeat
            center center/cover`,
          }}
        >
          <div className="flex flex-col justify-between">
            <p className="font-medium text-lg">EXPERIENCE</p>
            <div className="text-center ml-16">
              <p className="font-medium">Add your experience</p>
              <p className="mt-1 text-sm">
                Stand out to recruiters by adding your past and upcoming
                experiences
              </p>
              <button
                type="button"
                className="experience_button mt-5"
                onClick={() => setshowmodal(true)}
              >
                Add Experience
              </button>
            </div>
          </div>
        </div>
      )}

      <ShowExperienceModal
        handleEditSubmit={handleEditSubmit}
        handleDelete={handleDelete}
        isedit={edit.isedit}
        handleSubmit={handleSubmit}
        showmodal={showmodal}
        setshowmodal={setshowmodal}
        formData={formData}
        setFormData={setFormData}
      />
    </>
  );
}

export default Experience;
