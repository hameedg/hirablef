import { useState } from 'react';
import { useSelector } from 'react-redux';
import ProfilePreference from '../components/ProfileComponents/ProfilePreference';
import Experience from '../components/ProfileComponents/Experience';
import AddCollabs from '../components/ProfileComponents/AddCollabs';
import Socialmedia from '../components/ProfileComponents/SocialMedia';
import Badges from '../components/ProfileComponents/Badges/Badges';
import Documents from '../components/ProfileComponents/Documents/Documents';
import Document from '../components/ProfileComponents/Documents/Document';
import EditProfile from '../components/ProfileComponents/EditProfile';
import classNames from '../utils/constants/classNames';
import Sidebar from '../components/common/Sidebar';
import Layout from '../components/ProfileComponents/Layout';

export default function Profile() {
  const [documents, setdocuments] = useState(false);

  const profile = useSelector((state) => state.user.profile);
  const profilePreferences = useSelector((state) => state.user.preferences);

  return (
    <>
      <Sidebar />
      <main className="w-main float-right overflow-hidden">
        <div className={classNames(documents && 'hidden')}>
          <Layout>
            <div className="flex">
              <section className="w-[670px] space-y-4 block">
                <EditProfile profile={profile} />
                <Experience />
                <Document setdocuments={setdocuments} />
              </section>
              <section className="max-w-[309px] w-[309px] space-y-4">
                <ProfilePreference preferences={profilePreferences} />
                <Socialmedia />
                {/* <AddCollabs /> */}
                <Badges />
              </section>
            </div>
          </Layout>
        </div>
        <div className={classNames(documents === '' ? 'hidden' : '')}>
          <Documents documents={documents} setdocuments={setdocuments} />
        </div>
      </main>
    </>
  );
}
