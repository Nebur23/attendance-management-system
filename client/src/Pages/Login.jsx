import React from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col justify-center items-center  mx-auto mt-40 h-[100%]">
      <form className=" rounded-lg shadow-xl shadow-gray-200 h-[80%] p-10  ">
        <div>
          <p className="text-center font-serif text-xl md:text-3xl mt-4 text-green-400 animate-pulse">
            Welcome Back to AMS
          </p>
        </div>
        <div className="border-2 rounded-md mx-4 p-2 mt-4">
          <input type="text" placeholder="username" className="outline-none" />
        </div>
        <div className="border-2 rounded-md mx-4 p-2 mt-4">
          <input type="text" placeholder="password" className="outline-none" />
        </div>
        <div className="mt-4 flex justify-end text-green-500 hover:underline">
          <a
            href=""
            onClick={() => {
              navigate("/forgot");
            }}
          >
            Forgot Password
          </a>
        </div>

        <div className=" rounded-md mx-4 p-2 mt-4 hover:opacity-80 bg-green-500 outline-none text-white font-serif text-xl  md:text-3xl text-center  ">
          <input
            type="button"
            value="Login"
            onClick={() => {
              navigate("/teacher");
            }}
            className="outline-none"
          />
        </div>
      </form>
    </section>
  );
}
