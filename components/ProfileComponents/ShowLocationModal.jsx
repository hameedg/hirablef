import React from 'react';

function ShowLocationModal({ showLocationmodal, setshowLocationmodel }) {
  return (
    <div>
      {showLocationmodal ? (
        <>
          <div className="bg-black bg-opacity-70 w-full h-full fixed z-50 inset-0 flex items-center justify-center">
            <div className="relative h-[75%] rounded-lg w-[59.825rem] overflow-y-auto bg-white z-10 text-[#201e27]">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="absolute top-5 right-5 pt-0 cursor-pointer text-[#808080] h-8 w-8"
                aria-label="Close modal"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setshowLocationmodel(false)}
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
              <div className="w-full h-[200px] bg-[#eff2f6] rounded-lg flex">
                <img
                  src="https://sowmiya-home-page.herokuapp.com/static/media/globe2.c476c6e5.png"
                  className="w-[200px] p-[30px] bg-cover align-middle border-none max-w-none h-auto"
                  alt=""
                />
                <div className="w-[60%] h-auto mt-auto mb-auto">
                  <h4 className="mb-[0.5rem] font-medium leading-5">
                    We noticed that you&apos;re signing in from Singapore. Do
                    you want your current location to be updated as we
                    personalize the companies and opportunities for you
                    according to your location?
                  </h4>
                </div>
              </div>
              <div className="w-full h-auto rounded-lg">
                {/* left section */}
                <div className="h-full float-left p-5 text-center w-[40%]">
                  <h2 className="text-[1.5rem] block mb-[0.5rem]">
                    That&apos;s fine!
                  </h2>
                  <div className="border-1 border-[#d6dae0] w-[170px] h-[120px] mt-[15%] ml-auto mr-auto mb-auto rounded-lg p-[10px] text-center cursor-pointer">
                    <img
                      src="https://www.countryflags.io/in/shiny/64.png"
                      alt=""
                      className="m-auto align-middle h-auto"
                    />
                    <h4 className="mt-[10px] font-medium leading-[1.2px]">
                      Take me back! {'>'}
                    </h4>
                  </div>
                </div>
                {/* left section end */}

                {/* right section start */}
                <div className="w-[60%] h-full float-left p-5 text-center">
                  <h2 className="text-[1.5em] block mb-[0.5rem]">
                    Confirm your location
                  </h2>
                  <div className="w-full ml-0 mt-[5%] h-[174px] text-left p-0 border-1 border-[#d6dae0] rounded-lg mr-auto mb-auto">
                    <div className="p-[15px] border-b-1 boder-b-[#D6DAE0]">
                      <h3 className="font-medium">Locale Details</h3>
                    </div>
                    <div className="flex flex-row items-center p-[15px] space-x-[15px]">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="20px"
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="none"
                          strokeMiterlimit="10"
                          strokeWidth="32"
                          d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48z"
                        />
                        <path
                          fill="none"
                          strokeMiterlimit="10"
                          strokeWidth="32"
                          d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48z"
                        />
                        <path
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="32"
                          d="M117.33 117.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34m0 277.34c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34"
                        />
                        <path
                          fill="none"
                          strokeMiterlimit="10"
                          strokeWidth="32"
                          d="M256 48v416m208-208H48"
                        />
                      </svg>
                      <h3 className="font-medium">Location</h3>
                    </div>
                    <div className="flex flex-row items-center p-[15px] space-x-[15px]">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="20px"
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="32"
                          d="M256 232v-80"
                        />
                        <path
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="48"
                          d="M256 88V72m-124 60l-12-12"
                        />
                        <circle
                          cx="256"
                          cy="272"
                          r="32"
                          fill="none"
                          strokeMiterlimit="10"
                          strokeWidth="32"
                        />
                        <path
                          fill="none"
                          strokeMiterlimit="10"
                          strokeWidth="32"
                          d="M256 96a176 176 0 10176 176A176 176 0 00256 96z"
                        />
                      </svg>
                      <h3 className="font-medium">Location</h3>
                    </div>
                  </div>
                  <div className="mt-5 justify-end flex">
                    <button
                      type="button"
                      className="outline-none py-[10px] px-[15px] font-semibold h-[36px] bg-collabbi-green rounded-[5px] text-[13.333px] cursor-pointer text-white"
                      onClick={() => setshowLocationmodel(false)}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default ShowLocationModal;
