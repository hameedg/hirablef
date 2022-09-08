import { useState } from 'react';
import Container from '../../components/common/Container';

import Sidebar from '../../components/common/Sidebar';
import RolesCard from '../../components/roles/RolesCard';
import RolesModal from '../../modals/RolesModal';

const JobOpenings = () => {
  const [modal, setModal] = useState(false);

  const handleOpen = () => {
    setModal(true);
  };
  return (
    <>
      <Sidebar />
      {modal && <RolesModal handleClose={() => setModal(false)} />}
      <main className="w-main float-right">
        <Container>
          <div className="p-3.8 border border-border rounded-sm">
            <p className="text-xsm uppercase font-medium mb-3.8 text-light">
              new roles on canvas
            </p>
            <div className="grid grid-cols-3 gap-3.8">
              <RolesCard
                handleOpen={handleOpen}
                openings={7}
                url="/images/fashion-designer.png"
              />
              <RolesCard
                handleOpen={handleOpen}
                openings={10}
                url="/images/front-end-develover.png"
              />
              <RolesCard
                handleOpen={handleOpen}
                openings={18}
                url="/images/product-designer.png"
              />
              <RolesCard
                handleOpen={handleOpen}
                openings={2}
                url="/images/python-developer.png"
              />
              <RolesCard
                handleOpen={handleOpen}
                openings={4}
                url="/images/technical-analyst.png"
              />
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};

export default JobOpenings;
