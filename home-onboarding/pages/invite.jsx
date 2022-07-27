import Link from 'next/link';
import React from 'react';

function index() {
  return (
    <>
      <div className="flex w-screen h-screen overflow-y-hidden bg-white">
        <div
          className="w-[40%] flex flex-col justify-center !bg-bottom !bg-contain !bg-no-repeat"
          style={{
            background: '#eff2f6',
            backgroundImage: 'url(/images/modal-bottom.b7365c4c.png)',
          }}
        >
          <div className="px-10">
            <h6
              className="my-6 text-2xl font-semibold"
              style={{ lineHeight: '1.875rem' }}
            >
              Create Your Profile
            </h6>
            <p
              className="mb-4 text-sm"
              style={{ color: '#788699', marginTop: '.7rem' }}
            >
              Share your story here.
            </p>
          </div>
        </div>
        <div className="w-[60%] self-center pt-24 pb-16 h-screen 2xl:h-[800px] 2xl:my-auto md:px-20 overflow-y-auto">
          {/*  */}
          <div className="w-full max-w-xl" style={{ color: '#141820' }}>
            <div class="self-center h-[60vh] overflow-y-auto">
              <div class="flex flex-col items-center max-w-xl m-4">
                <div>
                  <div class="space-y-8 justify-start font-inter">
                    <div class="leading-[1.3rem] overflow-hidden">
                      Hey, MetaDev is an exclusive invitation only web3
                      professional networking platform built for Developers.
                    </div>
                    <div class="leading-[1.3rem] overflow-hidden">
                      We're still opening up but anyone can join with an invite
                      from an existing user! To join, an existing user has to
                      send an invite and also give you access to join MetaDev.
                      Sign up to see if you have collaborators on MetaDev who
                      can let you in.
                    </div>
                    <div class="leading-[1.3rem]">
                      We can't wait for you to join!
                    </div>
                  </div>
                  <input
                    class=" w-full overflow-hidden sm:w-[200px] leading-[1.3rem] text-[14px] mt-5 tracking-[-0.015em] font-inter pl-[15px] border border-gray-400 rounded-lg  focus:outline-none py-[15px] h-[43px] "
                    type="email"
                    name="email"
                    placeholder="Invite Code"
                  />
                  <Link href={'/signup'}>
                    <a>
                      <div class="mt-5 font-inter hover:bg-slate-700 bg-black hidden sm:block text-white rounded-[2rem]  text-[0.9rem] p-[0.7rem] font-semibold cursor-pointer absolute px-[1.5rem]">
                        Unlock Access
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
