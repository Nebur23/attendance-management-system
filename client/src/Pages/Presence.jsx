import React from "react";
import user from "../Images/user12.png";
export default function Presence() {
  return (
    <section>
      <div className="flex flex-row  justify-between mt-4 mx-8">
        <p className="font-serif text-lg md:text-xl md:pl-4 text-center font-medium mt-10 text-black/40">
          BENG Attendance Sheet
        </p>
        <img src={user} alt="user" className="mt-4" />
      </div>
      <div className="flex items-center pl-4 mt-10">
        <label htmlFor="date" className="mr-2 text-gray-700">
          Date:
        </label>
        <input
          type="date"
          id="date"
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="flex flex-row bg-green-500 justify-between mt-10 py-2 ">
        <p className="text-white text-lg md:text-3xl font-serif pl-4">CSE 1</p>
        <div className=" rounded-md mx-10 w-40 md:w-80 p-2 mt-4 hover:opacity-80 bg-green-300 outline-none text-white font-serif text-xl  md:text-3xl text-center  ">
          <input
            type="button"
            value="Add New Student"
            onClick={() => {
              navigate("/teacher");
            }}
            className="outline-none"
          />
        </div>
      </div>

      <div className="">
        <table className="min-w-full divide-y divide-gray-200 mt-10">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Attendance
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">name</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex flex-col md:flex-row gap-x-4">
                  <div className="flex  items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    />
                    <span className="ml-2">Present</span>
                  </div>
                  <div className="flex items-center ">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-yellow-500 transition duration-150 ease-in-out"
                    />
                    <span className="ml-2">Late</span>
                  </div>
                  <div className="flex items-center ">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-red-600 transition duration-150 ease-in-out"
                    />
                    <span className="ml-2">Absent</span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className=" rounded-md mx-auto w-64  p-2 mt-4 hover:opacity-80 bg-green-500 outline-none text-white font-serif text-xl  md:text-3xl text-center  ">
          <input
            type="button"
            value="Print Attendance"
            className="outline-none"
          />
        </div>
      </div>
    </section>
  );
}
