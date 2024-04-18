import PropTypes from "prop-types";

const Button = ({ label, onClick }) => {
  return (
    <button
      className='group flex items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-indigo-600 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500'
      onClick={onClick}
    >
      <span className='font-medium transition-colors group-hover:text-white'>
        {label}
      </span>
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
