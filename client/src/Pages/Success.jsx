import React from "react";
import { useNavigate } from "react-router";

export default function Success() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col justify-center items-center  mx-auto mt-40 h-[100%]">
      <p className="font-serif text-lg md:text-xl text-center font-medium text-black/40">
        Thanks for registering in AMS app. Click to continue to Login!
      </p>
      <div className=" rounded-md mx-4 p-2 mt-4 hover:opacity-80 bg-green-500 outline-none text-white text-xl  md:text-3xl font-serif text-center  ">
        <input
          type="button"
          value="Continue"
          onClick={() => {
            navigate("/login");
          }}
          className="outline-none "
        />
      </div>
    </section>
  );
}
