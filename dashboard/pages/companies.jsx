import { useState } from 'react';
import Container from '../components/common/Container';
import CompanyCard from '../components/common/CompanyCard';
import Sidebar from '../components/common/Sidebar';
import JobCardSkel from '../components/skeleton/JobCardSkel';
import NewComapanyModal from '../modals/NewComapanyModal';

const JobOpenings = () => {
  const [modal, setModal] = useState(false);
  const handleOpenModal = () => {
    setModal(true);
  };

  const [companies, setCompanies] = useState([
    {
      keyMembers: [],
      _id: '5fb13828c11ab35544de8a7d',
      desption:
        'At Flow, we believe that rewarding tenants for being good renters rather than punishing them for being bad ones could be the key to disrupting the rental industry. Flow is a free mobile app that allows tenants to get up to 20% of their rent back in rewards, whether or not their landlord has the app. Flow rewards tenants for positive behavior, such as paying their rent on time, and looking after their homes. They also get points for registering and entering their property details.',
      tags: [
        'property rentals',
        'tenant rewards',
        'mobile app',
        'tenant engagement',
        'proptech',
      ],
      companyName: 'Flow',
      logoUrl: 'https://i.ibb.co/gmL8xS7/Flow.png',
      noOfOpening: 0,
      companyLocation: [
        {
          city: 'Johannesburg',
          state: '',
          country: 'South Africa',
          _id: '5fc2abe9b0b014001713f208',
        },
      ],
      noOfAssignments: 1,
      location: [],
    },
  ]);
  return (
    <>
      <Sidebar />
      {modal && <NewComapanyModal handleClose={() => setModal(false)} />}
      <main className="w-main float-right">
        <Container>
          <div className="p-3.8 border border-border rounded-sm">
            <p className="text-xsm uppercase font-medium mb-3.8 text-light">
              All Companies
            </p>
            <div className="grid grid-cols-3 gap-3.8">
              <CompanyCard openModal={handleOpenModal} />
              <CompanyCard openModal={handleOpenModal} />
              <CompanyCard openModal={handleOpenModal} />
              <CompanyCard openModal={handleOpenModal} />
              <JobCardSkel />
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};

export default JobOpenings;
