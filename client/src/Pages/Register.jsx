import React from "react";
import { useNavigate } from "react-router";

export default function Register() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col justify-center items-center  mx-auto mt-40 h-[100%]">
      <form className=" rounded-lg shadow-xl shadow-gray-200 h-[80%] p-10  ">
        <div>
          <p className="text-center font-serif text-3xl mt-4 text-green-400 animate-pulse">
            Welcome to AMS
          </p>
        </div>
        <div className="border-2 rounded-md mx-4 p-2 mt-4">
          <input type="text" placeholder="username" className="outline-none" />
        </div>
        <div className="border-2 rounded-md mx-4 p-2 mt-4">
          <input type="text" placeholder="password" className="outline-none" />
        </div>
        <div className="border-2 rounded-md mx-4 p-2 mt-4 ">
          <input
            type="text"
            className="outline-none"
            placeholder="confirmPassword"
          />
        </div>
        <div className=" rounded-md mx-4 p-2 mt-4 hover:opacity-80 bg-green-500 outline-none text-white font-serif text-xl  md:text-3xl text-center  ">
          <input
            type="button"
            value="Register"
            onClick={() => {
              navigate("/skip");
            }}
            className="outline-none"
          />
        </div>
      </form>
    </section>
  );
}
