import { useState } from 'react';
import Container from '../components/common/Container';
import JobCardDemo from '../components/common/JobCardDemo';
import Sidebar from '../components/common/Sidebar';
import JobsModal from '../modals/jobsModal';

const JobOpenings = () => {
  const [modal, setModal] = useState(false);
  const handleOpenModal = () => {
    setModal(true);
  };
  return (
    <>
      <Sidebar />
      {modal && <JobsModal handleClose={() => setModal(false)} />}
      <main className="w-main float-right">
        <Container>
          <div className="p-3.8 border border-border rounded-sm">
            <p className="text-xsm uppercase font-medium mb-3.8 text-light">
              new Job on canvas
            </p>
            <div className="grid grid-cols-3 gap-3.8">
              <JobCardDemo openModal={handleOpenModal} />
              <JobCardDemo openModal={handleOpenModal} />
              <JobCardDemo openModal={handleOpenModal} />
              <JobCardDemo openModal={handleOpenModal} />
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};

export default JobOpenings;
