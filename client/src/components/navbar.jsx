import user from "../Images/user12.png";
import MobileNavbar from "./navbar-mobile";

const Navbar = () => {
  return (
    <div className='flex  justify-between items-center  mx-6 mb-8  lg:max-w-5xl lg:mx-auto'>
        <MobileNavbar />
      <p className=' text-md md:text-xl md:pl-4 text-center font-medium  text-indigo-600'>
        BENG Attendance System
      </p>
      <img src={user} alt='user' className='mt-4 w-14 h-14' />
    </div>
  );
};

export default Navbar;
