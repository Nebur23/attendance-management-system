import { useNavigate } from "react-router";
import axios from "axios";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    link: "",
    description: "",
  });

  const handleChange = e => {
    setForm(prev => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .post(`${import.meta.env.VITE_API_URL}/api/anime`, form)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

    setForm({
      title: "",
      link: "",
      description: "",
    });

    navigate("/skip");
  };
  return (
    <section className='flex flex-col justify-center items-center   mx-auto  h-[100vh] max-w-5xl bg-[#fafafa] text-center w-full p-6'>
      <div className='flex justify-center items-center flex-col shadow-[5px_7px] shadow-blue-500 bg-white  w-full m-10 h-[95%]  rounded-3xl px-5 py-[50px] max-w-xl '>
        <h1 className='text-blue-500 font-extrabold text-2xl mt-2 text-center w-full px-5'>
          Welcome to ams
        </h1>
        <form onSubmit={handleSubmit} className='max-w-full w-full '>
          <div className='flex flex-col items-baseline m-5  '>
            <label htmlFor='title' className='text-blue-500 font-semibold py-[5px] text-lg '>
              Username
            </label>
            <input
              type='text'
              className='outline-none border-2 focus:border-blue-500 px-[10px] py-3 rounded-md text-base w-full  translate-y-1'
              id='title'
              placeholder='Enter a username'
              value={form.title}
              onChange={handleChange}
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
              value={form.link}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col items-baseline m-5 '>
            <label htmlFor='description' className='text-blue-500 font-semibold py-[5px] text-lg '>
              ConfirmPassword
            </label>
            <input
              type='text'
              className='outline-none border-2 focus:border-blue-500 px-[10px] py-3 rounded-md text-base w-full  translate-y-1'
              id='description'
              placeholder='Please enter again Pasword'
              value={form.description}
              onChange={handleChange}
            />
          </div>

          <div className='flex flex-col items-baseline m-5 '>
            <button className='p-[15px] my-[30px]   rounded-md font-extrabold text-2xl text-white bg-blue-500 w-full f] translate-y-1 focus:opacity-40'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
