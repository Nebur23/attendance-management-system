import React from "react";
import { useNavigate } from "react-router";

export default function Forgot() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col justify-center items-center  mx-auto mt-40 h-[100%]">
      <form className=" rounded-lg shadow-xl shadow-gray-200 h-[80%] p-10  ">
        <div>
        <h1 className='text-blue-500 font-extrabold text-2xl mt-2 text-center w-full px-5'>
          Forgot Password
        </h1>
          <p className="text-center font-serif text-lg  md:text-xl mt-4 text-gray-400 ">
            No worries, we'll send you reset instructions.
          </p>
        </div>
        <div className='flex flex-col items-baseline m-5  '>
          <label htmlFor='title' className='text-blue-500 font-semibold py-[5px] text-lg '>
            E-mail
          </label>
          <input
            type='text'
            className='outline-none border-2 focus:border-blue-500 px-[10px] py-3 rounded-md text-base w-full  translate-y-1'
            id='title'
            placeholder='Enter Email'
           
          />
        </div>

        <div className=" rounded-md mx-4 p-2 mt-4 hover:opacity-80 bg-blue-500 text-white outline-none font-serif text-xl  md:text-3xl text-center  ">
          <input
            type="button"
            value="Reset Password"
            onClick={() => {
              navigate("/login");
            }}
            className="outline-none"
          />
        </div>

        <div className="  mt-4 font-serif text-lg hover:opacity-80 md:text-xl text-center  ">
          <input
            type="button"
            value="Back to Login"
            onClick={() => {
              navigate("/login");
            }}
            className="outline-none"
          />
        </div>
      </form>
    </section>
  );
}
