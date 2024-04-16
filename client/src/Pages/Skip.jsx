import user from "../Images/user-solid.svg";
import arrow from "../assets/arrow-right-solid.svg";
import { useNavigate } from "react-router";

export default function Skip() {
  const navigate = useNavigate();
  return (
    <section className='flex flex-col justify-between items-center   mx-auto  h-[100vh] max-w-5xl  text-center w-full p-6 '>
      <div>
        <img
          src={user}
          alt='user image'
          className='rounded-full w-48 h-48 p-10 mx-auto bg-gray-200'
        />
        <p className='text-lg font-medium md:text-3xl text-center  mt-10 text-black'>
          To enhance your experience on AMS  <br /> feel free to upload a picture
        </p>
      </div>
      <button
        onClick={() => {
          navigate("/success");
        }}
        className='  flex gap-3 items-center px-0 justify-center py-[15px] max-w-80 my-[30px] bg-blue-500 text-white text-2xl   rounded-md font-extrabold  w-full  translate-y-1'
      >
        Skip
        <img src={arrow} className='w-6  h-6 hover:ml-2 ' />
      </button>
    </section>
  );
}
