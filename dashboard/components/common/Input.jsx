import PropTypes from 'prop-types';
import classNames from '../../utils/constants/classNames';

const Input = ({
  fullWidth,
  placeHolder,
  type,
  name,
  fieldName,
  autoComplete,
  handleChange,
  value,
  inputProps,
  required,
  rounded,
  error,
}) => (
  <div className="mt-6">
    <label htmlFor={name} className="block text-sm font-semibold text-light">
      {fieldName}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      {...inputProps}
      value={value}
      required={required}
      onChange={handleChange}
      placeholder={placeHolder}
      autoComplete={autoComplete}
      className={classNames(
        'my-2 bg-blueGrey-100 border border-gray-300 focus:ring-0 duration-150 ease-in focus:border-2 focus:border-focus-cyan px-2 py-3 outline-none',
        rounded ? 'rounded-full' : 'rounded-md',
        fullWidth && 'w-full',
        error && 'ring-red-700 border-red-700'
      )}
    />
    {error && (
      <p className="text-red-700 flex items-center text-sm mt-1 font-semibold ml-2">
        <svg
          className="mr-1.5"
          focusable="false"
          viewBox="0 0 24 24"
          fill="#e0133e"
          style={{
            fontSize: '1.1rem',
            width: '1em',
            height: '1em',
          }}
          aria-hidden="true"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
        </svg>
        <span className="inline-block">{error}</span>
      </p>
    )}
  </div>
);
Input.propTypes = {
  fullWidth: PropTypes.bool,
  placeHolder: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
  inputProps: PropTypes.object,
  required: PropTypes.bool,
  rounded: PropTypes.bool,
  error: PropTypes.string,
};
Input.defaultProps = {
  rounded: false,
  error: null,
  required: true,
  placeHolder: '',
  fullWidth: true,

  autoComplete: 'off',
  inputProps: {},
};
export default Input;
