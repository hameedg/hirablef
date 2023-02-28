import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import SidebarItems from './SidebarItems';

const SettingModal = dynamic(() => import('./SettingsModal'));

const Sidebar = () => {
  const router = useRouter();
  const [settings, setSettings] = useState(false);

  return (
    <>
      {settings && <SettingModal handleCancel={() => setSettings(false)} />}

      <div className="bg-white fixed navbarScrollBar h-full shadow-xl flex flex-col  min-w-[16.25rem] z-30 top-0 overflow-y-auto">
        <header className="px-5 pt-6">
          <div className="flex justify-between items-center">
            <Link href="/" passHref legacyBehavior>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 186 35"
                xmlnsV="https://vecta.io/nano"
                width={120}
              >
                <linearGradient
                  id="A"
                  gradientUnits="userSpaceOnUse"
                  x1=".8"
                  y1="17.52"
                  x2="185.443"
                  y2="17.52"
                >
                  <stop offset="0" stop-color="#ffd295" />
                  <stop offset=".138" stop-color="#fdc995" />
                  <stop offset=".365" stop-color="#f9af93" />
                  <stop offset=".536" stop-color="#f59892" />
                  <stop offset=".994" stop-color="#7ea6b2" />
                </linearGradient>
                <path
                  d="M10.7 27.4c4.6 0 7.8-2.2 7.8-6 0-3-1.9-4.7-6.2-5.8l-2.2-.6c-2.6-.7-3.4-1.1-3.4-2.2 0-1 .8-1.5 2.2-1.5 2.3 0 4.7 1.1 6.6 3.1l2.6-3.8C16.7 8.9 13.6 7 9.4 7c-4.8 0-7.9 2.3-7.9 6.1 0 3.4 2.6 4.8 6.1 5.8l2.6.6c2.1.5 3.2.9 3.2 2 0 1-.9 1.5-2.5 1.5-3 0-5.8-1.7-7.4-3.5L.9 23.4c1.6 2.4 5.5 4 9.8 4zm15.6-.4V16.2c0-3.2.9-4.7 3.2-4.7s3.1 1.3 3.1 3.9V27h5.7V16.2c0-3.2.9-4.7 3.2-4.7s3.1 1.3 3.1 3.9V27h5.7V13.3c0-4-2-6.3-5.6-6.3-4 0-5.8 2.8-6.4 6.1 0-3.8-2-6.1-5.6-6.1-4 0-5.8 2.8-6.4 6V7.4h-5.7V27h5.7zm31.8.4c4 0 5.7-3 6.4-5.5v1.3c0 2.8 1.9 3.8 4 3.8h3.4v-4.6h-1.2c-.7 0-1-.3-1-1.2v-6.7c0-4.9-2.9-7.6-7.8-7.6-4.2 0-7.4 2-9.4 4.1l2.9 4.2c1.4-2 3.6-3.4 6.1-3.4 2.2 0 2.9.9 3.1 2.6l-6 2.2c-3.7 1.3-5.6 3-5.6 6 0 3.2 2.1 4.8 5.1 4.8zm.2-5.6c0-.8.5-1.3 2.1-2l4.2-1.7v1.4c0 2.4-1.5 3.8-4.2 3.8-1.5-.1-2.1-.6-2.1-1.5zM79.9 27V16.6c0-3.2 1.8-5.4 3.8-5.4 1.2 0 1.8.8 1.8 2s-.7 2.5-1.4 3.2h5.5c.5-.8 1.1-2.4 1.1-4.6 0-3.1-1.6-4.9-4.5-4.9-3.8 0-5.7 3.3-6.3 6.6V7.4h-5.7V27h5.7zm20.7.4c3 0 5-1.4 5.8-2.5l-1.6-4.7c-.6 1.1-1.7 2.1-2.9 2.1-1.1 0-1.9-.6-1.9-2.2v-8.4h5.4V7.4H100V2.1l-5.7 3v2.3h-2.9v4.4h2.9v9.4c0 3.6 2 6.2 6.3 6.2zm15.8-6.1c5.1 0 8.6-2.9 8.6-7.2 0-2.5-1.2-4.5-3.2-5.8l3.8-4-5.1-1.7-.9 4.7c-1-.3-2.1-.4-3.2-.4-5.1 0-8.6 2.9-8.6 7.2 0 2.5 1.2 4.6 3.2 5.8-1.9 1-3.6 2.7-3.6 4.7 0 1.7 1.3 2.6 2.9 3-2.4.3-4.3 1.2-4.3 3.1 0 2.3 3.2 4.1 9.2 4.1 7.8 0 11.4-3 11.4-6.7 0-2.9-2-4.7-6.3-4.7h-6.9c-1.6 0-2-.5-2-1.4 0-.6.2-1.2.5-1.6 1.3.6 2.8.9 4.5.9zm0-3.8c-1.8 0-3.2-1.1-3.2-3.3s1.4-3.3 3.2-3.3 3.2 1.1 3.2 3.3-1.3 3.3-3.2 3.3zm-.7 13.3c-3.7 0-5.1-.8-5.1-2 0-.5.3-.9.5-1.2h8.3c1.5 0 2.2.3 2.2 1.2.1 1.3-1.9 2-5.9 2zm18.4-3.8V16.6c0-3.2 1.8-5.4 3.8-5.4 1.2 0 1.8.8 1.8 2s-.7 2.5-1.4 3.2h5.5c.5-.8 1.1-2.4 1.1-4.6 0-3.1-1.6-4.9-4.5-4.9-3.8 0-5.7 3.3-6.3 6.6V7.4h-5.7V27h5.7zm16.9.4c4 0 5.7-3 6.4-5.5v1.3c0 2.8 1.9 3.8 4 3.8h3.4v-4.6h-1.2c-.7 0-1-.3-1-1.2v-6.7c0-4.9-2.9-7.6-7.8-7.6-4.2 0-7.4 2-9.4 4.1l2.9 4.2c1.4-2 3.6-3.4 6.1-3.4 2.2 0 2.9.9 3.1 2.6l-6 2.2c-3.7 1.3-5.6 3-5.6 6 0 3.2 2.1 4.8 5.1 4.8zm.1-5.6c0-.8.5-1.3 2.1-2l4.2-1.7v1.4c0 2.4-1.5 3.8-4.2 3.8-1.4-.1-2.1-.6-2.1-1.5zm22.6 5.6c4.1 0 5.5-2.8 6-6V27h5.7V.2h-5.7V13c-.6-3.2-2.2-6-6.2-6-4.5 0-7.5 3.7-7.5 10.2s3 10.2 7.7 10.2zm-1.9-10.2c0-3.7 1.6-5.8 4.2-5.8 2.4 0 3.8 1.5 3.8 4.7v2.1c0 3.2-1.3 4.7-3.7 4.7-2.7.1-4.3-1.9-4.3-5.7z"
                  fill="url(#A)"
                />
              </svg>
            </Link>
            <div className="flex items-center">
              <button type="button" onClick={() => setSettings(!settings)}>
                <img
                  alt="settings_icon"
                  src="/svg/settings.svg"
                  className="cursor-pointer mr-5 h-4 hover:brightness-0 hover:scale-110 duration-150 ease-in"
                />
              </button>

              <button type="button">
                <img
                  alt="notification_icon"
                  src="/svg/notifications.svg"
                  className="cursor-pointer h-4 hover:brightness-0 hover:scale-110 duration-150 ease-in"
                />
              </button>
            </div>
          </div>
          <hr className="mt-3 border-[#f2f2f2]" />
        </header>

        <div className="overflow-y-auto scrollbar-hide pt-3">
          <SidebarItems
            linkText="Dashboard"
            url="/dashboard"
            isActive={router.pathname === '/dashboard'}
          >
            <img
              alt="nav_icon"
              src="/svg/home.svg"
              width={22}
              className="mr-4 ml-1 h-5"
            />
          </SidebarItems>
          <SidebarItems
            linkText="Profile"
            url="/dashboard/profile"
            isActive={router.pathname === '/dashboard/profile'}
          >
            <img
              alt="nav_icon"
              src="/svg/home.svg"
              width={22}
              className="mr-4 ml-1 h-5"
            />
          </SidebarItems>
          <SidebarItems
            linkText="For You"
            url="/dashboard/for_you"
            isActive={router.pathname === '/dashboard/for_you'}
          >
            <img
              alt="nav_icon"
              src="/svg/home.svg"
              width={22}
              className="mr-4 ml-1 h-5"
            />
          </SidebarItems>
          <SidebarItems
            linkText="Companies"
            url="/dashboard/companies"
            isActive={router.pathname === '/dashboard/companies'}
          >
            <img
              alt="nav_icon"
              src="/svg/home.svg"
              width={22}
              className="mr-4 ml-1 h-5"
            />
          </SidebarItems>

          <SidebarItems
            linkText="Job Openings"
            url="/dashboard/job_openings"
            isActive={router.pathname === '/dashboard/job_openings'}
          >
            <img
              alt="nav_icon"
              src="/svg/home.svg"
              width={22}
              className="mr-4 ml-1 h-5"
            />
          </SidebarItems>

          <SidebarItems
            linkText="Events"
            url="/dashboard/events"
            isActive={router.pathname === '/dashboard/events'}
          >
            <img
              alt="nav_icon"
              src="/svg/home.svg"
              width={22}
              className="mr-4 ml-1 h-5"
            />
          </SidebarItems>
          <SidebarItems
            linkText="Ideas"
            url="/dashboard/ideas"
            isActive={router.pathname === '/dashboard/ideas'}
          >
            <img
              alt="nav_icon"
              src="/svg/home.svg"
              width={22}
              className="mr-4 ml-1 h-5"
            />
          </SidebarItems>
          <SidebarItems
            linkText="My assignments"
            url="/dashboard/my-assignments"
            isActive={router.pathname === '/dashboard/my-assignments'}
          >
            <img
              alt="nav_icon"
              src="/svg/home.svg"
              width={22}
              className="mr-4 ml-1 h-5"
            />
          </SidebarItems>
          <SidebarItems
            linkText="Roles"
            url="/dashboard/roles"
            isActive={router.pathname === '/dashboard/roles'}
          >
            <img
              alt="nav_icon"
              src="/svg/home.svg"
              width={22}
              className="mr-4 ml-1 h-5"
            />
          </SidebarItems>
          <SidebarItems
            linkText="Add Post"
            url="/dashboard/add-post"
            isActive={router.pathname === '/dashboard/add-post'}
          >
            <img
              alt="nav_icon"
              src="/svg/home.svg"
              width={22}
              className="mr-4 ml-1 h-5"
            />
          </SidebarItems>
          <SidebarItems
            linkText="Wallet"
            url="/dashboard/wallet"
            isActive={router.pathname === '/dashboard/wallet'}
          >
            <img
              alt="nav_icon"
              src="/svg/home.svg"
              width={22}
              className="mr-4 ml-1 h-5"
            />
          </SidebarItems>
          <SidebarItems
            linkText="Referrals"
            url="/dashboard/referrals"
            isActive={router.pathname === '/dashboard/referrals'}
          >
            <img
              alt="nav_icon"
              src="/svg/home.svg"
              width={22}
              className="mr-4 ml-1 h-5"
            />
          </SidebarItems>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
