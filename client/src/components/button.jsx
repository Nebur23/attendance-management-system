import PropTypes from "prop-types";
import arrow from "../assets/arrow.svg";

const Button = ({ label, onClick, disabled, icon }) => {
  return (
    <button
      className='group flex items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-indigo-600 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500'
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <img src={arrow} className='rotate-180 w-4' />}
      <span className='font-medium transition-colors group-hover:text-white'>
        {label}
      </span>
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  icon: PropTypes.bool.isRequired,
};

export default Button;
