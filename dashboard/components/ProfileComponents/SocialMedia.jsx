import React, { useState, useEffect } from 'react';
import Modal from './SocialModal';

function Socialmedia() {
  const [showmedia, setshowmedia] = useState(false);
  const [inputs, setInputs] = useState({
    linkedininput: '',
    websiteinput: '',
    projectinput: '',
    githubinput: '',
  });
  // const [websiteinput,setWebsiteinInput] = useState('');
  // const [projectinput,setProjectinInput] = useState('');
  // const [githubinput,setGithubInput] = useState('');
  const [print, setprint] = useState(false);
  const [saveddata, setSavedData] = useState({
    linkedininput: '',
    websiteinput: '',
    projectinput: '',
    githubinput: '',
  });

  const saveData = () => {
    setSavedData({ ...inputs });
    setshowmedia(false);
  };

  const { linkedininput, websiteinput, projectinput, githubinput } = inputs;

  const onInputChange = (e) => {
    setInputs((f) => ({ ...f, [e.target.name]: e.target.value }));
  };
  useEffect(() => {
    const body = document.getElementsByTagName('body');
    if (showmedia) {
      body[0].style.overflow = 'hidden';
      body[0].style.position = 'fixed';
      body[0].style.width = '100%';
    } else {
      body[0].style.overflow = 'auto';
      body[0].style.position = 'relative';
    }
  }, [showmedia]);
  return (
    <div className="">
      <div className="w-[305px] rounded-[9px] border-[#D9D9D8] border-[1.5px] p-6 group transition bg-white">
        <div className="flex items-center justify-between">
          <h1 className="font-inter font-semibold mb-2 text-[0.875rem] leading-[1.25rem]">
            Social media
          </h1>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 opacity-0 group-hover:opacity-100 cursor-pointer transformation"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#A9AAAA"
              onClick={() => setshowmedia(true)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </div>
        </div>
        <div className="mt-2 space-y-3">
          <div className="flex items-center space-x-2">
            <img
              src="https://sowmiya-home-page.herokuapp.com/static/media/personal-website.0111f690.3a4b7b54.svg"
              alt=""
              className="w-8 h-8"
            />
            <p className="text-light-grey font-normal leading-[1.25rem] text-[0.875rem]">
              {saveddata.websiteinput ? (
                <a className="transition duration-200 ease-in text-[#007bff] hover:text-[#25b2aa] no-underline cursor-pointer font-semibold">
                  {websiteinput}
                </a>
              ) : (
                'Add Website'
              )}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src="https://sowmiya-home-page.herokuapp.com/static/media/linkedin.2932a798.2de9fa6f.svg"
              alt=""
              className="w-8 h-8"
            />
            <p className="text-light-grey font-normal leading-[1.25rem] text-[0.875rem]">
              {saveddata.linkedininput ? (
                <a className="transition duration-200 ease-in text-[#007bff] hover:text-[#25b2aa] no-underline cursor-pointer font-semibold">
                  {linkedininput}
                </a>
              ) : (
                'Add Linkedin'
              )}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src="https://sowmiya-home-page.herokuapp.com/static/media/heart.079db34b.58a3d97a.svg"
              alt=""
              className="w-8 h-8"
            />
            <p className="text-light-grey font-normal leading-[1.25rem] text-[0.875rem]">
              {saveddata.projectinput ? (
                <a className="transition duration-200 ease-in text-[#007bff] hover:text-[#25b2aa] no-underline cursor-pointer font-semibold">
                  {projectinput}
                </a>
              ) : (
                'Add Passion Project'
              )}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src="https://sowmiya-home-page.herokuapp.com/static/media/github.09c9500e.ef4c8140.svg"
              alt=""
              className="w-8 h-8"
            />
            <p className="text-light-grey font-normal leading-[1.25rem] text-[0.875rem]">
              {saveddata.githubinput ? (
                <a className="transition duration-200 ease-in text-[#007bff] hover:text-[#25b2aa] no-underline cursor-pointer font-semibold">
                  {githubinput}
                </a>
              ) : (
                'Add Github'
              )}
            </p>
          </div>
        </div>
      </div>
      {showmedia ? (
        <>
          <Modal
            saveData={saveData}
            onInputChange={onInputChange}
            setshowmedia={setshowmedia}
            print={print}
            setprint={setprint}
            githubinput={githubinput}
            linkedininput={linkedininput}
            websiteinput={websiteinput}
            projectinput={projectinput}
          />
        </>
      ) : null}
    </div>
  );
}

export default Socialmedia;
