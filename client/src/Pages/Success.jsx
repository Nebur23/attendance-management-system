import { useNavigate } from "react-router";
import Confetti from "react-confetti";
import Button from "../components/button";
//import useWindowSize from "react-use/lib/useWindowSize";

export default function Success() {
  const navigate = useNavigate();
  return (
    <div className='w-full flex items-center justify-center '>
      <Confetti width={500} height={500} recycle={true} className='md:hidden' />
      <section className='flex flex-col justify-center items-center  mx-auto mt-40 h-[100%]'>
        <div className=' text-white mt-5'>
          <div className='mx-auto max-w-screen-xl px-4 lg:flex  lg:items-center'>
            <div className='mx-auto max-w-3xl text-center'>
              <h1 className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent'>
                Thanks for registering in AMS app.
                <span className='sm:block'>Click to continue! </span>
                <br />
              </h1>
            </div>
          </div>
        </div>
        <Button label='continue' onClick={() => navigate("/teacher")} />
      </section>
    </div>
  );
}
