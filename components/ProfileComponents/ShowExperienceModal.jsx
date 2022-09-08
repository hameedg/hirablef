/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import Editor from '../Editor/Editor';
import ExperienceForm from './ExperienceForm';

function ShowExperienceModal({
  showmodal,
  setshowmodal,
  formData,
  setFormData,
  handleSubmit,
  isedit,
  handleDelete,
  handleEditSubmit,
}) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [userInput, setUserInput] = useState('');

  const suggestions = [
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
      name: 'Facebook',
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/300px-Google_%22G%22_Logo.svg.png',
      name: 'Google',
    },
    {
      img: 'https://download.logo.wine/logo/Alphabet_Inc./Alphabet_Inc.-Logo.wine.png',
      name: 'Alphabet',
    },
    {
      img: 'https://i.insider.com/5850334bca7f0c1b008b55eb?width=1200&format=jpeg',
      name: 'Waymo',
    },
    {
      img: 'https://www.logotaglines.com/wp-content/uploads/2016/08/td-amazon-smile-logo-01-large.jpg',
      name: 'Amazon',
    },
    {
      img: 'https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-2006.png',
      name: 'Netflix',
    },
    {
      img: 'https://cdn2.iconfinder.com/data/icons/social-icons-color/512/paytm-512.png',
      name: 'Paytm',
    },
    { img: 'https://i.ibb.co/T1W3Ctq/amwalcom.png', name: 'Amwalcom' },
    { img: 'https://i.ibb.co/fv0XS7D/ARVORE.png', name: 'ARVORE' },
    {
      img: 'https://i.ibb.co/5TSTY4C/Administrate.jpg',
      name: 'Administrate',
    },
    { img: 'https://i.ibb.co/Njp0GMr/Antwork.png', name: 'Antwork' },
    { img: 'https://i.ibb.co/XZJstjB/Andovar.png', name: 'Andovar' },
    { img: 'https://i.ibb.co/9nBjbwz/Arthur-AI.png', name: 'ArthurAI' },
  ];

  const SuggestionsList = () => {
    const handleSelect = (name) => {
      setFormData((f) => ({ ...f, companyName: name }));
      setShowSuggestions(false);
    };

    return (
      showSuggestions &&
      userInput &&
      filteredSuggestions.length > 0 && (
        <ul className="bg-white absolute w-[89%] border-1 border-[#ddd] mt-2 py-[10px] px-0 rounded-[10px] overflow-y-scroll overflow-x-hidden max-h-[140px] z-10">
          {filteredSuggestions.map((suggestions, index) => (
            <li
              onClick={() => handleSelect(suggestions.name)}
              key={index}
              className="flex cursor-pointer items-center  transitiion duration-200 ease-in text-[0.875rem] text-[#201e27] m-0 font-semibold py-[5px] px-[10px] hover:bg-[#c6c9cc]"
            >
              <img
                alt=""
                src={suggestions.img}
                className="mr-[10px] w-[25px] rounded-[10px] align-middle"
              />
              {suggestions.name}
            </li>
          ))}
        </ul>
      )
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    const usrInput = e.target.value;
    const newFilteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.name.toLowerCase().indexOf(usrInput.toLowerCase()) === 0
    );
    setFilteredSuggestions(newFilteredSuggestions);
    if (e.target.name === 'companyName') {
      setShowSuggestions(true);
    }
    setUserInput(e.target.value);
    e.preventDefault();
  };

  return (
    <div>
      {showmodal ? (
        <>
          <div className="bg-black bg-opacity-70 w-full h-full fixed z-50 inset-0 flex items-center justify-center edit-overlay">
            <div className="relative max-h-[784px] flex-col h-[94%] rounded-lg w-[600px] overflow-y-auto bg-white z-10 text-black">
              <div className="top-0 sticky z-50 flex items-center justify-between p-5 bg-[#eff2f6] py-[9px] px-6 rounded-t-lg max-h-[60px] min-h-[60px] rounded-b-sm my-auto mb-[11px]">
                <h3 className="text-[14px] font-semibold">Add Experience</h3>
                <button
                  type="button"
                  className="h-10 w-10 flex items-center justify-center rounded-full p-1 mt-2 mr-[-8px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-[#808080]"
                    onClick={() => setshowmodal(false)}
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
              </div>
              <ExperienceForm
                formData={formData}
                setFormData={setFormData}
                handleSubmit={handleSubmit}
                handleEditSubmit={handleEditSubmit}
                handleDelete={handleDelete}
                isedit={isedit}
              />
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default ShowExperienceModal;
