import { useNavigate } from "react-router";
import Confetti from "react-confetti";
//import useWindowSize from "react-use/lib/useWindowSize";

export default function Success() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex items-center justify-center mx-auto ">
      <Confetti width={500} height={500} recycle={true} className="md:w-full" />
      <section className='flex flex-col justify-center items-center  mx-auto mt-40 h-[100%]'>
        <p className='text-lg font-medium md:text-3xl text-center mr-10  mt-10 text-black'>
          Thanks for registering in AMS app. <br /> Click on continue to Login!
        </p>

        <button
          onClick={() => {
            navigate("/login");
          }}
          className=' flex gap-3 md:mt-64 mt-40 items-center px-0 mr-10 bg-blue-500 justify-center py-[15px] max-w-80 my-[30px]  text-2xl rounded-md font-extrabold ] text-white w-full  translate-y-1'
        >
          Continue
        </button>
      </section>
    </div>
  );
}
