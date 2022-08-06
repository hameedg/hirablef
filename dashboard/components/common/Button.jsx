import PropTypes from 'prop-types';

const Button = ({ children, handleClick }) => (
  <button
    type="button"
    onClick={handleClick}
    className="shadow-sm space-x-1.5 bg-white border self-center duration-150 ease-in border-black px-4 flex items-center justify-center rounded font-semibold text-sm leading-[18.2px] antialiased h-10 select-none hover:shadow-md hover:-translate-y-0.5"
  >
    {children}
  </button>
);
Button.propTypes = {
  handleClick: PropTypes.func,
};
Button.defaultProps = {
  handleClick: () => {},
};
export default Button;
