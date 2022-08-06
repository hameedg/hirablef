import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { updateProfile } from '../../utils/apis/profile';

function ShowEditProfileModal({
  showeditprofile,
  setShowEditProfile,
  formData,
  setFormData,
}) {
  const [profileFormData, setProfileFormData] = useState(formData);

  useEffect(() => {
    setProfileFormData({
      ...profileFormData,
      name: formData.name,
      username: formData.username,
      college: formData.college,
      graduationYear: formData.graduationYear,
      degree: formData.degree,
      stream: formData.stream,
      location: formData.location,
      email: formData.email,
      email2: formData.email2,
      mobile: formData.mobile.toString(),
      mobile2: formData.mobile2.toString(),
      aboutMe: formData.aboutMe,
    });
  }, [formData]);

  const handleChange = (e) => {
    setProfileFormData({ ...profileFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      name: profileFormData.name,
      username: profileFormData.username,
      college: profileFormData.college,
      graduationYear: profileFormData.graduationYear,
      degree: profileFormData.degree,
      major: profileFormData.stream,
      location: profileFormData.location,
      email: profileFormData.email,
      alternateEmail: profileFormData.email2,
      mobileNo: profileFormData.mobile.toString(),
      altMobileNo: profileFormData.mobile2.toString(),
      about: profileFormData.aboutMe,
    };

    try {
      await updateProfile(body);
      setFormData(profileFormData);
      setShowEditProfile(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      {showeditprofile ? (
        <>
          <div className="bg-black bg-opacity-70 w-full h-full fixed z-50 inset-0 flex items-center justify-center edit-overlay">
            <div className="relative max-h-[784px] flex-col h-[94%] rounded-lg w-[37.5rem] overflow-y-auto bg-white z-10 text-black">
              <div className="top-0 sticky z-50 flex items-center justify-between p-5 bg-[#eff2f6] py-[9px] px-6 rounded-t-lg max-h-[60px] rounded-b-sm my-auto h-[200px]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  aria-label="Close modal"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-5 right-5 w-[32px] h-[32px] pt-0 z-50 text-[#808080] cursor-pointer"
                  onClick={() => setShowEditProfile(false)}
                >
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
                <h3 className="text-[0.875rem] leading-5 font-semibold m-0">
                  Edit Profile
                </h3>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="relative p-6 flex-auto">
                  <div className="flex items-center justify-between  h-[[">
                    <div className="flex-grow">
                      <h3 className="text-[12px] font-semibold text-[#201e27]">
                        Full Name
                      </h3>
                      <input
                        type="text"
                        name="name"
                        value={profileFormData.name}
                        onChange={handleChange}
                        placeholder="John"
                        className="appearance-none px-3 py-2 placeholder-[#6B7280] text-[#030303] placeholder-opacity-90 relative w-full bg-white rounded text-sm border-[1.5px] focus:outline-none focus:border-[#2dc5a1] focus:border-2 transition duration-200 ease-in mt-1 bg-transparent"
                      />
                    </div>
                  </div>
                  <div className="mb-3 pt-0">
                    <h1 className="text-[12px] font-semibold h-[[ p-1 mt-1">
                      Username
                    </h1>
                    <input
                      type="text"
                      value={profileFormData.username}
                      disabled
                      placeholder="Enter Your desired Username"
                      className="px-3 py-2 placeholder-[#6B7280] text-[#030303] placeholder-opacity-90 relative bg-white rounded text-sm border-[1.5px] focus:outline-none focus:border-[#2dc5a1] focus:border-2  w-full transition duration-200 ease-in"
                    />
                  </div>
                  <div className="mb-3 pt-0">
                    <h1 className="text-[12px] font-semibold p-1 h-[[">
                      College/University
                    </h1>
                    <input
                      type="text"
                      name="college"
                      value={profileFormData.college}
                      onChange={handleChange}
                      placeholder="Enter Your College/University Name"
                      className="px-3 py-2 placeholder-[#6B7280] text-[#030303] placeholder-opacity-90 relative bg-white rounded text-sm border-[1.5px] focus:outline-none focus:border-[#2dc5a1] focus:border-2  w-full transition duration-200 ease-in"
                    />
                  </div>
                  <div className="mb-3 pt-0">
                    <h1 className="text-[12px] font-semibold p-1 h-[[">
                      Graduation Year
                    </h1>
                    <input
                      type="text"
                      name="graduationYear"
                      value={profileFormData.graduationYear}
                      onChange={handleChange}
                      placeholder="Enter graduation year of expected year"
                      className="px-3 py-2 placeholder-[#6B7280] text-[#030303] placeholder-opacity-90 relative bg-white rounded text-sm border-[1.5px] focus:outline-none focus:border-[#2dc5a1] focus:border-2  w-full transition duration-200 ease-in"
                    />
                  </div>
                  <div className="mb-3 pt-0">
                    <h1 className="text-[12px] font-semibold p-1 h-[[">
                      Degree
                    </h1>
                    <input
                      type="text"
                      name="degree"
                      value={profileFormData.degree}
                      onChange={handleChange}
                      placeholder="Enter Degree Name like B.tech,B.E,MA,etc"
                      className="px-3 py-2 placeholder-[#6B7280] text-[#030303] placeholder-opacity-90 relative bg-white rounded text-sm border-[1.5px] focus:outline-none focus:border-[#2dc5a1] focus:border-2  w-full transition duration-200 ease-in"
                    />
                  </div>
                  <div className="mb-3 pt-0">
                    <h1 className="text-[12px] font-semibold p-1 h-[[">
                      Stream
                    </h1>
                    <input
                      type="text"
                      name="stream"
                      value={profileFormData.stream}
                      onChange={handleChange}
                      placeholder="Enter field of study"
                      className="px-3 py-2 placeholder-[#6B7280] text-[#030303] placeholder-opacity-90 relative bg-white rounded text-sm border-[1.5px] focus:outline-none focus:border-[#2dc5a1] focus:border-2  w-full transition duration-200 ease-in"
                    />
                  </div>
                  <div className="mb-3 pt-0">
                    <h1 className="text-[12px] font-semibold p-1 h-[[">
                      Current Location
                    </h1>
                    <input
                      type="text"
                      name="location"
                      disabled
                      value={`${profileFormData.location.city}, ${profileFormData.location.country}`}
                      onChange={handleChange}
                      placeholder="Enter your current residence"
                      className="px-3 py-2 placeholder-[#6B7280] text-[#030303] placeholder-opacity-90 relative bg-white rounded text-sm border-[1.5px] focus:outline-none focus:border-[#2dc5a1] focus:border-2  w-full transition duration-200 ease-in"
                    />
                  </div>
                  <div className="mb-3 pt-0">
                    <h1 className="text-[12px] font-semibold p-1">
                      Email Address
                    </h1>
                    <input
                      type="text"
                      name="email"
                      value={profileFormData.email}
                      disabled
                      placeholder="johnsmith@gmail.com"
                      className="px-3 py-2 placeholder-[#6B7280] text-[#030303] placeholder-opacity-90 relative bg-white rounded text-sm border-[1.5px] focus:outline-none focus:border-[#2dc5a1] focus:border-2  w-full transition duration-200 ease-in"
                    />
                  </div>
                  <div className="mb-3 pt-0">
                    <h1 className="text-[12px] font-semibold p-1">
                      Alternate Email Address
                      <span className="opacity-80">(optional)</span>
                    </h1>
                    <input
                      type="text"
                      name="email2"
                      value={profileFormData.email2}
                      onChange={handleChange}
                      placeholder="johnsmith@gmail.com"
                      className="px-3 py-2 placeholder-[#6B7280] text-[#030303] placeholder-opacity-90 relative bg-white rounded text-sm border-[1.5px] focus:outline-none focus:border-[#2dc5a1] focus:border-2  w-full transition duration-200 ease-in"
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className=" flex flex-col w-full">
                      <h3 className="text-[12px] font-semibold">
                        Mobile number
                      </h3>
                      <PhoneInput
                        country="in"
                        value={profileFormData.mobile}
                        onChange={(num) =>
                          setProfileFormData({
                            ...profileFormData,
                            mobile: num,
                          })
                        }
                        countryCodeEditable={false}
                        placeholder="99999 99999"
                        inputStyle={{ width: '100%' }}
                      />
                    </div>
                    <div className="w-full">
                      <h3 className="text-[12px] font-semibold">
                        Alternate Mobile Number{' '}
                        <span className="opacity-80">(optional)</span>
                      </h3>
                      <PhoneInput
                        country="in"
                        value={profileFormData.mobile2}
                        onChange={(num) =>
                          setProfileFormData({
                            ...profileFormData,
                            mobile2: num,
                          })
                        }
                        countryCodeEditable={false}
                        placeholder="99999 99999"
                        inputStyle={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className="mt-5">
                    <h3 className="text-[12px] h-[[ font-semibold">
                      About Me <span className="opacity-60">(optional)</span>
                    </h3>
                    <textarea
                      id=""
                      cols="8"
                      rows="8"
                      name="aboutMe"
                      value={profileFormData.aboutMe}
                      onChange={handleChange}
                      className="p-4 mt-2 h-52 w-full border-[#ddd] outline-none rounded-md border-[1.5px] focus:outline-none focus:border-[#2dc5a1] transition duration-150"
                    />
                  </div>
                  <div className="float-right ml-[0.75rem] mt-[1.5rem]">
                    <button
                      type="submit"
                      className="ml-[0.9375rem] outline-none min-w-[9.0625rem] py-[0.625rem] px-[0.75rem] rounded-[0.3125rem] font-semibold text-[0.875rem] h-[2.5rem] cursor-pointer text-white bg-[#1a73e8] mb-[20px] border-none mt-[10px]"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default ShowEditProfileModal;
