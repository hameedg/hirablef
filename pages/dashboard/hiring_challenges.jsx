import { useState } from 'react';
import Sidebar from '../../components/common/Sidebar';
import HiringChallengesModal from '../../modals/HiringChallengesModal';
import HeaderNav from '../../components/Hiring-Challenges/HeaderNav';
import Card from '../../components/Hiring-Challenges/Card';

const posts1 = [
  {
    id: 'p1',
    level: 'Level 1',
    heading: 'Payroll-as-a-service API',
    description:
      'Payroll-as-a-service API that can embed payroll directly in a vertical SaaS, HR, or time-tracking platform. If you use an ERP without a payroll, the API to can be used to incorporate payroll functionality.',
    likes: 2,
    isLiked: false,
  },

  {
    id: 'p2',
    level: 'Level 1',
    heading: '### Sharing payroll information with just a click',
    description:
      ' API that lets people seamlessly and securely share their payroll data with the third parties they authorize – such as lenders, landlords, hiring managers, or other fintech services. Through partnerships with leading payroll providers, human capital vendors, and professional employer organizations, the application provides direct-source payroll data.',
    likes: 5,
    isLiked: false,
  },

  {
    id: 'p3',
    level: 'Level 1',
    heading: 'Simple payroll and HRIS API',
    description:
      '   An API for customer companies, allowing them to rapidly verify details of employment. Users can connect their payroll account and instantly share the information needed to run verifications for pre-employment screening.',
    likes: 5,
    isLiked: false,
  },

  {
    id: 'p4',
    level: 'Level 1',
    heading: '### Accounting Software for SMBs',
    description:
      ' A simple accounting software for SMBs with features such as Cloud Accounting, Invoicing, Online Banking, Cash Flow Management, Time Tracking and more...',
    likes: 5,
    isLiked: false,
  },
];

// function getHiringChallengesPosts() {
//     return posts
// }
const HiringChallenges = () => {
  const [posts, setposts] = useState(posts1);

  const [showModalDesc, setShowModalDesc] = useState(false);

  const onShowDescription = () => {
    document.body.style.position = 'fixed';
    setShowModalDesc(true);
  };

  const onHideDescription = () => {
    document.body.style.position = 'relative';
    setShowModalDesc(false);
  };

  const onLikeHandler = (e, postId) => {
    e.stopPropagation();

    const updatedPostindex = posts.findIndex((post) => post.id === postId);
    const updatedPost = posts[updatedPostindex];

    if (updatedPost.isLiked) {
      updatedPost.isLiked = false;
      updatedPost.likes -= 1;
    } else {
      updatedPost.isLiked = true;
      updatedPost.likes += 1;
    }
    const updatedPosts = [...posts];
    updatedPosts[updatedPostindex] = updatedPost;

    setposts(updatedPosts);
  };

  return (
    <>
      {showModalDesc && (
        <HiringChallengesModal handleClose={onHideDescription} />
      )}
      <Sidebar />
      <div className="float-right w-main bg-white">
        <HeaderNav />
        <div className="pt-4 lg:pt-16 lg:flex justify-center bg-[#fafafa]">
          <div className="ml-0 lg:ml-4 xl:ml-0 lg-max:max-w-[40rem] px-4 lg:px-0 lg-max:mx-auto">
            {posts.map((post) => (
              <Card
                level={post.level}
                postTitle={post.heading}
                postDescription={post.description}
                likes={post.likes}
                isLiked={post.isLiked}
                onLikeHandler={onLikeHandler}
                key={post.id}
                onShowDescription={onShowDescription}
                id={post.id}
              />
            ))}
          </div>
          <div className="hidden lg:block mr-0 lg:mr-4 xl:mr-0 w-[18.625rem] bg-white rounded-2xl mt-4 ml-[1.2rem] h-[80vh] border border-[#ebedf1]">
            <div className="p-5 uppercase text-gray-500 font-medium text-trending-title-font border-b border-solid border-[#d9d9d9]">
              Trending Roles
            </div>
            <div className="cursor-pointer p-4 flex border-b-[1.5px] border-solid border-[#d9d9d9] hover:bg-[#f4f1f1]">
              <img
                alt="avatar"
                src="/images/Avatar1.png"
                className="align-middle border-none max-w-none h-[3.063rem] w-[3.125rem] mr-4"
              />
              <div
                title="Generalist Intern"
                className="font-semibold text-base leading-6"
              >
                Lyft Software Engineer Internship (2022)
              </div>
            </div>
            <div className="cursor-pointer p-4 flex border-b-[1.5px] border-solid border-[#d9d9d9] hover:bg-[#f4f1f1]">
              <img
                alt="avatar"
                src="/images/Avatar2.png"
                className="align-middle border-none max-w-none h-[3.063rem] w-[3.125rem] mr-4"
              />
              <div
                title="Generalist Intern"
                className="font-semibold text-base leading-6"
              >
                Lyft Software Engineer Internship (2022)
              </div>
            </div>
            <div className="cursor-pointer p-4 flex border-b-[1.5px] border-solid border-[#d9d9d9] hover:bg-[#f4f1f1]">
              <img
                alt="avatar"
                src="/images/Avatar3.png"
                className="align-middle border-none max-w-none h-[3.063rem] w-[3.125rem] mr-4"
              />
              <div
                title="Generalist Intern"
                className="font-semibold text-base leading-6"
              >
                Lyft Software Engineer Internship (2022)
              </div>
            </div>
            <div className="cursor-pointer p-4 flex border-b-[1.5px] border-solid border-[#d9d9d9] hover:bg-[#f4f1f1]">
              <img
                alt="avatar"
                src="/images/Avatar4.png"
                className="align-middle border-none max-w-none h-[3.063rem] w-[3.125rem] mr-4"
              />
              <div
                title="Generalist Intern"
                className="font-semibold text-base leading-6"
              >
                Lyft Software Engineer Internship (2022)
              </div>
            </div>
            <div className="cursor-pointer p-4 flex border-b-[1.5px] border-solid border-[#d9d9d9] hover:bg-[#f4f1f1]">
              <img
                alt="avatar"
                src="/images/Avatar5.png"
                className="align-middle border-none max-w-none h-[3.063rem] w-[3.125rem] mr-4"
              />
              <div
                title="Generalist Intern"
                className="font-semibold text-base leading-6"
              >
                Lyft Software Engineer Internship (2022)
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// export async function getServerSideProps() {
//     const hiringPosts = getHiringChallengesPosts()

//     return {
//         props: {
//             posts: hiringPosts,
//         },
//     }
// }

export default HiringChallenges;
