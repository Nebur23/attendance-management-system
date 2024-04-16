import React from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  return (
    <section className='flex flex-col justify-center items-center   mx-auto  h-[100vh] max-w-5xl bg-[#fafafa] text-center w-full p-6'>
    <div className='flex justify-center items-center flex-col shadow-[5px_7px] shadow-blue-500 bg-white  w-full m-10 h-[95%]  rounded-3xl px-5 py-[50px] max-w-xl '>
      <h1 className='text-blue-500 font-extrabold text-2xl mt-2 text-center w-full px-5'>
        Welcome to ams
      </h1>
      <form  className='max-w-full w-full '>
        <div className='flex flex-col items-baseline m-5  '>
          <label htmlFor='title' className='text-blue-500 font-semibold py-[5px] text-lg '>
            Username
          </label>
          <input
            type='text'
            className='outline-none border-2 focus:border-blue-500 px-[10px] py-3 rounded-md text-base w-full  translate-y-1'
            id='title'
            placeholder='Enter a username'
           
          />
        </div>
        <div className='flex flex-col items-baseline m-5 '>
          <label htmlFor='link'className='text-blue-500 font-semibold py-[5px] text-lg '>
            Password
          </label>
          <input
            type='url'
            className='outline-none border-2 focus:border-blue-500 px-[10px] py-3 rounded-md text-base w-full  translate-y-1'
            placeholder='Enter a password'
            
          />
        </div>
        <div>
          <a href="" className="hover:underline text-blue-500 flex justify-end text-lg mt-10" onClick={()=>{navigate('/forgot')}}>Forgot password</a>
        </div>
      

        <div className='flex flex-col items-baseline m-5 '>
          <button onClick={()=>{navigate('/teacher')}} className='p-[15px] my-[30px]   rounded-md font-extrabold text-2xl text-white bg-blue-500 w-full translate-y-1 focus:opacity-40'>
            Login
          </button>
        </div>
      </form>
    </div>
  </section>
  );
}
