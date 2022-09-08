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
            <Link href="/" passHref>
              <img
                alt="Collabbi"
                src="/images/collabbi-logo.png"
                width={100}
                className="cursor-pointer"
              />
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
