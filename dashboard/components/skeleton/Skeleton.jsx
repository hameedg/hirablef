import PropTypes from 'prop-types';
import classNames from '../../utils/constants/classNames';

const Skeleton = ({
  avatar,
  text,
  avatarSquare,
  smallText,
  circle,
  button,
  rectangle,
}) => (
  <div
    className={classNames(
      'animate-pulse bg-skeleton',
      avatar && 'w-16 h-16 rounded-full',
      // text && 'h-5 rounded-md',
      text && 'h-5 rounded-md',
      smallText && 'h-3 rounded-md',
      avatarSquare && 'h-18 w-18 rounded-md',
      circle && 'h-4 w-4 rounded-full',
      button && 'w-20 h-10 rounded-md',
      // rectangle && 'h-11 w-full'
      rectangle && 'h-12 w-full'
    )}
  />
);
Skeleton.propTypes = {
  avatar: PropTypes.bool,
  text: PropTypes.bool,
  avatarSquare: PropTypes.bool,
  smallText: PropTypes.bool,
  circle: PropTypes.bool,
  button: PropTypes.bool,
  rectangle: PropTypes.bool,
};
Skeleton.defaultProps = {
  avatar: false,
  text: false,
  avatarSquare: false,
  smallText: false,
  circle: false,
  button: false,
  rectangle: false,
};
export default Skeleton;
