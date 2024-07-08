import useAuth from "../hooks/useAuth";
import useLogout from "../hooks/useLogout";
import user from "../Images/user12.png";
import Button from "./button";
import MobileNavbar from "./navbar-mobile";

const Navbar = () => {
  const { auth } = useAuth();
  const name = auth?.name;
  const logout =  useLogout()

  const signOut = async () => {
    await logout()
  }
  return (
    <div className='flex mt-2 justify-between items-center  mx-6 mb-8  lg:max-w-5xl lg:mx-auto'>
      <MobileNavbar />
      <p className=' text-md md:text-xl md:pl-4 text-center font-medium  text-indigo-600'>
        BENG Attendance System
      </p>
      <div className='flex items-center justify-center gap-2 '>
        {auth.url ? (
          <img src={user} alt='user' className='mt-4 w-14 h-14' />
        ) : auth.name ? (
          <div className=' w-14 h-14 border-2 bg-indigo-600 rounded-full flex items-center justify-center'>
            {name.charAt(0).toUpperCase()}
          </div>
        ) : (
          <p></p>
        )}
        <div className="md:flex hidden">
          <Button label='logout' onClick={signOut} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
