import React, { useState } from 'react';
import Sidebar from '../../components/common/Sidebar';
import Container from '../../components/common/Container';
import NewComapanyModal from '../../modals/NewComapanyModal';

const ForYou = () => {
  const [modal, setModal] = useState(false);
  const handleOpenModal = () => {
    setModal(true);
  };

  const [companies] = useState([
    {
      id: '01',
      open: false,
      companyName: 'Convosight',
      logo: 'https://global-uploads.webflow.com/62014002185c7b256316ef63/6267f1a4ac9dfdd13f1fd9d3_vC8FBy6C_400x400.jpeg',
      tagline: 'Creating conversations between brands and communities',
      website: 'https://www.convosight.com/',
      employees: '101-200',
      funding: '$13M',
      tags: ['SaaS', '•', 'Community Management'],
      description:
        'Convosight is on a mission to enable community creators generate sustainable income from their communities.Convosight is the first community management platform that uses the power of machine learning to help brands tap into closed communities, for insights and marketing. It enables community creators to become community entrepreneurs, by helping them earn a sustainable income through brand partnerships. Over 50,000 communities across 75 countries are managing 480 million members through Convosight.',
      openings: '36',
    },
    {
      id: '02',
      open: false,
      companyName: 'FINN',
      logo: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/bwriv1zlw0kwxkylqmzs',
      tagline: 'We make mobility fun and sustainable',
      website: 'https://www.finn.auto/',
      employees: '201-500',
      funding: '$908.3M',
      tags: ['Car subscription'],
      description:
        'FINN makes mobility fun and sustainable. We help everyone who loves driving their own car but refuses the struggle, commitment and intransparent costs associated with car ownership. We achieve this by offering all-inclusive, immediately available, monthly car-subscriptions. Best thing, yet: While you drive we plant trees as every journey is CO2 compensated.With a flexible car subscription, we bring a true e-commerce experience to car ownership and offset all CO2 emissions along the way.',
      openings: '92',
    },
  ]);
  return (
    <>
      <Sidebar />
      {modal && (
        <NewComapanyModal
          handleClose={() => setModal(false)}
          name={companies[0].companyName}
          logo={companies[0].logo}
          tagline={companies[0].tagline}
          employees={companies[0].employees}
          funding={companies[0].funding}
          tags={companies[0].tags}
          openings={companies[0].openings}
          description={companies[0].description}
          website={companies[0].website}
        />
      )}
      <main className="w-main float-right">
        <Container>
          <div className="p-3.8 border border-border rounded-sm">
            <p className="text-xsm uppercase font-medium mb-3.8 text-light">
              For You
            </p>
            <div className="grid grid-cols-3 gap-3.8">
              <butten
                type="butten"
                onClick={handleOpenModal}
                className=" w-[310px] h-[310px] border justify-center bg-cover cursor-pointer rounded-md hover:shadow-lg duration-150 ease-in"
                style={{
                  backgroundImage: `url('/images/foryou1.svg')`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              >
                <div className="max-w-[250px] flex flex-col justify-between max-h-[200px] mb-6 mt-24 mx-auto text-center">
                  <h1 className="font-bold text-lg pt-2 pb-4 text-black fontGazpacho">
                    Experience Improvement <br />
                    Program
                  </h1>
                  <div className="flex font-normal whitespace-normal tracking-tight px-2 !text-sm break-words pb-6 antialiased text-gray-800">
                    No company wants your certificates, but every company wants
                    your experience. It&apos;s time to work with companies and
                    gain experience
                  </div>
                </div>
              </butten>

              <butten
                type="butten"
                onClick={handleOpenModal}
                className=" w-[310px] h-[310px] border justify-center bg-cover cursor-pointer rounded-md hover:shadow-lg duration-150 ease-in"
                style={{
                  backgroundImage: `url('/images/foryou2.svg')`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              >
                <div className="max-w-[275px] flex flex-col justify-between max-h-[200px] mt-28 text-start pl-6">
                  <h1 className="font-bold text-3xl pb-4 fontGazpacho">
                    My First <br />
                    internship
                  </h1>
                  <div className="flex font-normal whitespace-normal tracking-tight !text-sm break-words antialiased text-gray-800">
                    Get your first internship with Hirable. Join the Internship
                    Challenge today!
                  </div>
                </div>
              </butten>

              <butten
                type="butten"
                onClick={handleOpenModal}
                className="w-[310px] h-[310px] border justify-center bg-cover cursor-pointer rounded-md hover:shadow-lg duration-150 ease-in"
              >
                <img
                  src="/images/foryou3.png"
                  className="h-[100%] w-full object-cover rounded-md overflow-hidden "
                />
              </butten>

              <div
                className="w-[310px] h-[310px] border justify-center cursor-pointer rounded-md hover:shadow-lg duration-150 ease-in bg-cover"
                style={{
                  backgroundImage: `url('/images/foryou4.svg')`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              >
                <div className="max-w-[250px] flex flex-col justify-between max-h-[200px] mt-16 text-start ml-10">
                  <h1 className="font-bold text-lg pb-4 fontGazpacho">
                    Minors/
                    <br />
                    Dual Degree Programs
                  </h1>
                  <div className="flex flex-col max-w-[200px] font-normal whitespace-normal tracking-tight !text-sm break-words antialiased text-gray-800">
                    A minor gives you an edge...
                    <span className="w-full h-[1px] pb-4" />
                    Explore a different academic interest that supplements your
                    major
                  </div>
                </div>
              </div>
              <div
                className="w-[637px] h-[310px] border justify-center col-span-2 cursor-pointer rounded-md hover:shadow-lg duration-150 ease-in bg-cover"
                style={{
                  backgroundImage: `url('/images/foryou5.svg')`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              >
                <div className="max-w-[250px] flex flex-col justify-between max-h-[200px] mt-10 text-start ml-10">
                  <h1 className="font-bold text-xl pb-4 fontGazpacho">
                    Career Acceleratior
                  </h1>
                  <div className="flex flex-col font-normal whitespace-normal tracking-tight !text-sm break-words antialiased text-gray-800">
                    Of all aspects of social misery nothing is so hartbreaking
                    as unemployment
                    <span className="w-full h-[1px] pb-4" />
                    Don’t wait for the opportunity. Create it! Give your job
                    search what it lacks. Get hired with Hirable Career
                    Acceleration
                  </div>
                </div>
                <div />
              </div>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};

export default ForYou;
