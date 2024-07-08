import PropTypes from "prop-types";
import Button from "./button";
import useLogout from "../hooks/useLogout";

const Sidebar = ({ active, setActive }) => {
  const logout = useLogout();

  const signOut = async () => {
    await logout();
  };
  return (
    <aside
      className={`fixed top-0 w-[100%] z-50 transition-all ${
        active ? "left-0" : "-left-[100%]"
      }`}
    >
      <div className='flex h-screen flex-col justify-between bg-white'>
        <div className='flex flex-col border h-full'>
          <div className='p-4 border flex items-center justify-between'>
            <span className='grid size-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600'>
              L
            </span>

            <Button
              label='close'
              onClick={() => {
                setActive(false);
              }}
            />
          </div>
          <div className='flex gap-3 border p-4'>
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
                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
              />
            </svg>
            account
          </div>
        </div>

        <div className='flex gap-3 border p-4'>
          <Button label='logout' onClick={signOut} logout={true} />
        </div>
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default Sidebar;
