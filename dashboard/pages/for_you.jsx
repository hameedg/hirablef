import React, { useState } from 'react';
import Sidebar from '../components/common/Sidebar';
import LatestElement from '../components/for-you/LatestElement';

const ForYou = () => {
  const [latest, setLatest] = useState([
    {
      imageName: 'career-accelerator.png',
      title: 'Aka Smallditch',
      content:
        'I love sharing what I have learned , and passing the experiences.',
    },
    {
      imageName: 'career-accelerator.png',
      title: 'Aka Smallditch',
      content:
        'I love sharing what I have learned , and passing the experiences.',
    },
    {
      imageName: 'career-accelerator.png',
      title: 'Aka Smallditch',
      content:
        'I love sharing what I have learned , and passing the experiences.',
    },
    {
      imageName: 'career-accelerator.png',
      title: 'Aka Smallditch',
      content:
        'I love sharing what I have learned , and passing the experiences.',
    },
  ]);
  const [writers, setWriters] = useState([
    {
      imageName: 'career-accelerator.png',
      name: 'James Parker',
      title: 'Critic',
    },
    {
      imageName: 'career-accelerator.png',
      name: 'James Parker',
      title: 'Critic',
    },
    {
      imageName: 'career-accelerator.png',
      name: 'James Parker',
      title: 'Critic',
    },
    {
      imageName: 'career-accelerator.png',
      name: 'James Parker',
      title: 'Critic',
    },
  ]);

  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="fy-sidebar">
        <Sidebar />
      </div>
      <div
        onClick={() => {
          console.log(!open);
          setOpen(!open);
        }}
        className="z-100"
      >
        <svg
          data-name="Layer 3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
          className="h-[00px] m-[10px] mb-[0px] fy-svg cursor-pointer"
        >
          <path d="M97.092 36.078H30.908a2.111 2.111 0 0 0 0 4.222h66.184a2.111 2.111 0 0 0 0-4.222zM97.092 61.889H30.908a2.111 2.111 0 0 0 0 4.222h66.184a2.111 2.111 0 0 0 0-4.222zM97.092 87.7H30.908a2.111 2.111 0 0 0 0 4.222h66.184a2.111 2.111 0 0 0 0-4.222z" />
        </svg>
      </div>
      <div className={`${open ? '' : 'translate-x-[0px] pointer-events-none'}`}>
        <Sidebar />
      </div>
      {/* <Sidebar className="fy-openButton" /> */}
      {/* <main className="w-main float-right">
      <Container>
        <div className="p-3.8 border border-border rounded-sm">
          <p className="text-xsm uppercase font-medium mb-3.8 text-light">
            NEW JOBS ON CANVAS ‌
          </p>
          <div className="grid grid-cols-2 gap-3.8">
            <Card imageName="career-accelerator.png" />
            <Card imageName="dream-job.png" />
            <Card imageName="women-in-tech.png" />
          </div>
        </div>
      </Container>
    </main> */}
      <main className="w-main lg:float-right h-[100vh] ">
        <div className="bg-white h-[8.75rem] flex flex-col items-center justify-center">
          <h1 className="text-2xl font-extrabold my-4">For You</h1>
        </div>
        <div className="container rounded-md max-w-container mt-5 p-[5px] mx-auto bg-white mb-8 w-[998px]  h-[90%]  max-h-[530px]">
          <div className="width-[100%]  h-[60%] flex justify-between pb-[20px]">
            <div className=" w-[30%] flex flex-col justify-between p-[10px] border-[1px] border-black rounded-[1rem]">
              <h1 className="font-semibold">Experience Improvement Program</h1>
              <img
                src="/images/women-in-tech.png"
                className="h-[8em] object-cover rounded-[3rem]"
              />
              <div className="flex p-[10px] font-medium whitespace-normal !text-sm break-words antialiased text-black">
                No company wants your certificates, but every company wants your
                experience. It&apos;s time to work with companies and gain
                experience
              </div>
            </div>

            <div className=" w-[30%] -[10px] pl-[10px]">
              <div className="flex font-medium whitespace-normal !text-sm break-words antialiased text-black">
                Let&apos;s start from the belief that you are qualified to get a
                great job. Many aspiring students couldn&apos;t get their dream
                job because they don&apos;t have experience, guidance and
                they&apos;re not prepared. Don&apos;t let that happen to you.
              </div>
            </div>

            <div className=" w-[35%] px-[10px] pr-[15px]">
              <img
                src="/images/women-in-tech.png"
                className="h-[100%] w-full object-cover rounded-3xl overflow-hidden "
              />
            </div>

            {/* <div className=" w-[18%]">
              <h1 className="text-[1.5rem] mb-[0.2rem] ml-[1%]">WRITERS</h1>
              <div className="flex flex-col justify-between">
                {writers.map((w) => (
                  <WriterElement
                    imageName={w.imageName}
                    name={w.name}
                    title={w.title}
                  />
                ))}
              </div>
            </div> */}
          </div>

          <div className="width-[100%]  h-[40%] flex justify-between">
            <div className="w-[25%] relative bg-black text-white rounded-[1rem] ">
              <div className="text-[1.3rem] w-[80%] absolute rotate-[-90deg] h-[100%] ml-[25px]">
                <div className="m-auto">
                  Andy Warhol <span className="font-bold">to the power</span>
                </div>
              </div>
              <div className="flex flex-col justify-between  w-[50%] h-[80%] mt-[20px] mr-[12px] float-right">
                <img
                  src="/images/dream-job.png"
                  className="h-[6rem] w-[6rem] object-cover mx-auto"
                />
                <div className="float-right text-right text-[12px] mr-[10px]">
                  I Artsper
                </div>
              </div>
            </div>
            <div className=" w-[25%] flex flex-col justify-between p-[3px] border-[1px] border-black rounded-lg ml-[10px]">
              <div className="flex justify-between p-[5px]">
                <p className="text-[15px] pr-[10px] font-semibold">
                  Art exhibitions from around the world
                </p>
                <img
                  src="/images/dream-job.png"
                  className="h-[5rem] w-[3.5rem] object-cover"
                />
              </div>
              <div
                className="text-[12px] p-[5px] pr-[10px]"
                style={{ lineHeight: '20px' }}
              >
                Even if I had the means , I would still shoot on the iphone
                .Malick Kobe is one the rising talents.
              </div>
              <div className="font-semibold text-[15px] p-[3px]">
                <div className="float-right cursor-pointer mb-[4px] text-[15px] text-base leading-5">
                  Shop Now
                </div>
              </div>
            </div>
            <div className=" w-[50%] flex border-[1px] border-black rounded-lg ml-[10px]">
              <div className="w-[50%] border-r-[1px] border-black">
                <img
                  src="/images/career-accelerator.png"
                  className="h-[100%] object-cover rounded-tr-[8rem] rounded-br-[8rem] border-r-[0px] border-black overflow-hidden"
                />
              </div>
              <div className="w-[50%]  flex flex-col justify-between p-[10px]">
                <div className="w-[80%] font-semibold">
                  From pearly whites to sparkly delights
                </div>
                <div
                  className="text-[12px] w-[80%] "
                  style={{ lineHeight: '20px' }}
                >
                  Similarly , for the aqurarium , a group of what looks like
                  school children and accompanying adults are seen marvelling .
                </div>
                <div className="flex justify-between items-end">
                  <div className="font-semibold text-[15px] cursor-pointer text-base leading-5">
                    Shop Now
                  </div>
                  <div className="flex">
                    <div className=" px-[10px] py-[6px] bg-black text-white border-[1px] border-black mr-[10px] rounded-[0.5rem] cursor-pointer">
                      <svg
                        data-name="1-Arrow Up"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 25 25"
                        fill="white"
                        className="h-[20px]"
                      >
                        <path d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z" />
                      </svg>
                    </div>
                    <div className=" px-[10px] py-[6px] border-[1px] border-black mr-[10px] rounded-[0.5rem] cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 25 25"
                        fill="black"
                        className="h-[20px]"
                      >
                        <path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ForYou;
