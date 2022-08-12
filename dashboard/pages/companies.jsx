import { useState } from 'react';
import Container from '../components/common/Container';
import CompanyCard from '../components/common/CompanyCard';
import Sidebar from '../components/common/Sidebar';
import NewComapanyModal from '../modals/NewComapanyModal';

const JobOpenings = () => {
  const [modal, setModal] = useState(false);
  const handleOpenModal = () => {
    setModal(true);
  };

  const [companies, setCompanies] = useState([
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
              All Companies
            </p>
            <div className="grid grid-cols-3 gap-3.8">
              {companies.map((c, index) => (
                <div key={c.id}>
                  <CompanyCard
                    openModal={handleOpenModal}
                    name={c.companyName}
                    logo={c.logo}
                    tagline={c.tagline}
                    employees={c.employees}
                    funding={c.funding}
                    tags={c.tags}
                    openings={c.openings}
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};

export default JobOpenings;
