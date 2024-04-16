import { useNavigate } from "react-router";
import Confetti from "react-confetti";
//import useWindowSize from "react-use/lib/useWindowSize";

export default function Success() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex items-center justify-center ">
      <Confetti width={500} height={500} recycle={true} className="md:hidden" />
      <section className='flex flex-col justify-center items-center  mx-auto mt-40 h-[100%]'>
        <p className='text-lg font-medium md:text-3xl text-center  mt-10 text-black'>
          Thanks for registering in AMS app. <br /> Click to continue to Login!
        </p>

        <button
          onClick={() => {
            navigate("/login");
          }}
          className=' flex gap-3 items-center px-0 bg-green-400 justify-center py-[15px] max-w-80 my-[30px]  text-base rounded-md font-extrabold shadow-[5px_5px_0px_0px_#000] text-black w-full focus:shadow-[1px_2px_0px_0px_#000] translate-y-1'
        >
          Continue
        </button>
      </section>
    </div>
  );
}
