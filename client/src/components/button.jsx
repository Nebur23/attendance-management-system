import PropTypes from "prop-types";
import arrow from "../assets/arrow.svg";

const Button = ({ label, onClick, disabled, icon, logout }) => {
  return (
    <button
      className='group flex items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-indigo-600 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500'
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <img src={arrow} className='rotate-180 w-4' />}
      {logout && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='size-5 opacity-75'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth='2'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
          />
        </svg>
      )}
      <span className='font-medium transition-colors group-hover:text-white'>
        {label}
      </span>
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  icon: PropTypes.bool,
  logout: PropTypes.bool,
};

export default Button;
