import React from "react";
import user from "../Images/user12.png";
import { useNavigate } from "react-router";

export default function Teacher() {
  const navigate = useNavigate();
  return (
    <section>
      <div className="flex flex-row  justify-between mt-4 mx-4">
        <p className="font-serif text-lg md:text-xl md:pl-4 text-center font-medium mt-10 text-black/40">
          BENG Attendance Sheet
        </p>
        <img src={user} alt="user" className="mt-4" />
      </div>
      <div className="font-serif text-lg md:text-xl md:pl-4  font-medium mt-10 ">
        <p className="text-green-500 text-center text-3xl ">
          Class attendance activities
        </p>
        <div className="mx-10 mt-4 ">
          <div className="relative inline-block  w-[45%]">
            <select className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500">
              <option className="text-gray-800" value="">
                CSE
              </option>
              <option className="text-gray-800" value="option1">
                {" "}
                1
              </option>
              <option className="text-gray-800" value="option2">
                {" "}
                2
              </option>
              <option className="text-gray-800" value="option3">
                {" "}
                3
              </option>
              <option className="text-gray-800" value="option4">
                {" "}
                4
              </option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 12l-6-6h12l-6 6z" />
              </svg>
            </div>
          </div>
          <div className="relative inline-block w-[45%] ml-4">
            <select className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500">
              <option className="text-gray-800" value="">
                CHE
              </option>
              <option className="text-gray-800" value="option1">
                {" "}
                1
              </option>
              <option className="text-gray-800" value="option2">
                {" "}
                2
              </option>
              <option className="text-gray-800" value="option3">
                {" "}
                3
              </option>
              <option className="text-gray-800" value="option4">
                {" "}
                4
              </option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 12l-6-6h12l-6 6z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mx-10 mt-4 ">
          <div className="relative inline-block  w-[45%]">
            <select className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500">
              <option className="text-gray-800" value="">
                CEE
              </option>
              <option className="text-gray-800" value="option1">
                {" "}
                1
              </option>
              <option className="text-gray-800" value="option2">
                {" "}
                2
              </option>
              <option className="text-gray-800" value="option3">
                {" "}
                3
              </option>
              <option className="text-gray-800" value="option4">
                {" "}
                4
              </option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 12l-6-6h12l-6 6z" />
              </svg>
            </div>
          </div>
          <div className="relative inline-block w-[45%] ml-4">
            <select className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500">
              <option className="text-gray-800" value="">
                EME
              </option>
              <option className="text-gray-800" value="option1">
                {" "}
                1
              </option>
              <option className="text-gray-800" value="option2">
                {" "}
                2
              </option>
              <option className="text-gray-800" value="option3">
                {" "}
                3
              </option>
              <option className="text-gray-800" value="option4">
                {" "}
                4
              </option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 12l-6-6h12l-6 6z" />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <p className="text-green-500 text-center text-3xl mt-10 ">
            Other activities
          </p>
          <div className="flex flex-row justify-center">
            <div className=" rounded-md mx-4 p-2 mt-4 hover:opacity-80 bg-green-500 outline-none text-white font-serif text-xl  md:text-3xl text-center  ">
              <input
                type="button"
                value="Manage time table"
                onClick={() => {
                  navigate("/presence");
                }}
                className="outline-none"
              />
            </div>
            <div className=" rounded-md mx-4 p-2 mt-4 hover:opacity-80 bg-green-500 outline-none text-white font-serif text-xl  md:text-3xl text-center  ">
              <input
                type="button"
                value="Manage Students"
                onClick={() => {
                  navigate("/presence");
                }}
                className="outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
