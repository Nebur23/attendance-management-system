import React from "react";
import user from "../Images/user.png";
import { useNavigate } from "react-router";

export default function Skip() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col justify-center items-center  mx-auto mt-36 h-[100%] ">
      <div>
        <img
          src={user}
          alt="user image"
          className="rounded-full w-40 px-14 py-14 mx-auto bg-gray-200"
        />
        <p className="font-serif text-lg md:text-xl text-center font-medium mt-10 text-black/40">
          To enhance your experience on AMS feel free to upload a picture
        </p>
        <div className=" rounded-md mx-4 p-2 mt-10 hover:opacity-80  bg-green-500 outline-none  text-white font-serif text-xl  md:text-3xl text-center ">
          <input
            type="button"
            value="Skip"
            onClick={() => {
              navigate("/success");
            }}
            className="outline-none "
          />
        </div>
      </div>
    </section>
  );
}
