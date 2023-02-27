import Link from 'next/link';
import { useEffect } from 'react';
import { logout } from '../../../utils/apis/profile';

const SettingsModal = ({ handleCancel }) => {
  useEffect(() => {
    const handleClose = () => handleCancel();
    document.addEventListener('click', handleClose);
    return () => document.removeEventListener('click', handleClose);
  });

  const handleLogout = async () => {
    try {
      const { data } = await logout();
      document.cookie = null;
      // window.location.href = 'https://collabbi.tech/';
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="fixed bg-white top-8 rounded-2xl shadow-md border"
      style={{
        left: '266px',
        width: '22.5rem',
        borderColor: '#ededed',
        zIndex: '200',
      }}
    >
      <div className="px-6 pt-6 pb-4 justify-between text-sm text-light border-b border-border flex items-center">
        <p className="cursor-default" style={{ lineHeight: '130%' }}>
          Your Account
        </p>
        <button type="button" onClick={handleCancel}>
          <img
            alt="close"
            src="/svg/cancel.svg"
            width={9}
            className="opacity-60 hover:opacity-40 duration-150 ease-in"
          />
        </button>
      </div>
      <div className="py-1">
        <Link href="/settings" passHref legacyBehavior>
          <div className="py-3 duration-150 ease-in px-6 cursor-pointer text-sm leading-6.8 hover:bg-hover">
            <span>Settings</span>
          </div>
        </Link>
        <Link href="/settings" passHref legacyBehavior>
          <div className="py-3 px-6 duration-150 ease-in cursor-pointer text-sm leading-6.8 hover:bg-hover">
            <span>Referrals</span>
          </div>
        </Link>
        <button
          className="w-full text-left"
          type="button"
          onClick={handleLogout}
        >
          <div className="py-3 px-6 duration-150 ease-in cursor-pointer text-sm leading-6.8 hover:bg-hover">
            <span>Log Out</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SettingsModal;
