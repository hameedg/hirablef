import Link from 'next/link';
import PropTypes from 'prop-types';
import classNames from '../../../utils/constants/classNames';

const SidebarItems = ({ url, isActive, linkText, children: icon }) => (
  <Link passHref href={url}>
    <div
      className={classNames(
        'flex items-center px-6 cursor-pointer h-12 relative rounded-r-md w-11/12',
        isActive && 'bg-nav-active'
      )}
    >
      {isActive && (
        <div className="w-1 bg-black rounded-r-full absolute left-0 h-full" />
      )}

      {icon}
      <span className="text-sm font-normal">{linkText}</span>
    </div>
  </Link>
);
SidebarItems.propTypes = {
  url: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};
SidebarItems.defaultProps = {
  isActive: false,
};

export default SidebarItems;
