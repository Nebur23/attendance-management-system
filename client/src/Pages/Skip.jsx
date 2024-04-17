import user from "../Images/user-solid.svg";
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
          To enhance your experience on AMS <br /> feel free to upload a picture
        </p>
      </div>

      <button
        className='group flex items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-indigo-600 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500'
        onClick={() => {
          navigate("/success");
        }}
      >
        <span className='font-medium transition-colors group-hover:text-white'>
          skip
        </span>

        <span className='shrink-0 rounded-full border border-indigo-600 bg-white p-2 group-active:border-indigo-500'>
          <svg
            className='size-5 rtl:rotate-180'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M17 8l4 4m0 0l-4 4m4-4H3'
            />
          </svg>
        </span>
      </button>
    </section>
  );
}
