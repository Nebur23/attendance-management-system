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
      <div className='flex justify-center items-center flex-col shadow-[5px_7px_2px_1px_#000] bg-white  w-full m-10 h-[95%]  rounded-3xl px-5 py-[50px] max-w-xl '>
        <h1 className='text-black font-extrabold text-2xl mt-2 text-center w-full px-5'>
          Welcome to ams
        </h1>
        <form onSubmit={handleSubmit} className='max-w-full w-full '>
          <div className='flex flex-col items-baseline m-5  '>
            <label htmlFor='title' className='font-semibold py-[5px] '>
              Usename
            </label>
            <input
              type='text'
              className='outline-none border-2 border-black shadow-[3px_4px_0px_1px_#000] px-[10px] py-3 rounded-md text-base w-full focus:shadow-[1px_2px_0px_0px_#000] translate-y-1'
              id='title'
              placeholder='Enter a username'
              value={form.title}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col items-baseline m-5 '>
            <label htmlFor='link' className='font-semibold py-[5px] '>
              Password
            </label>
            <input
              type='url'
              className='outline-none border-2 border-black shadow-[3px_4px_0px_1px_#000] px-[10px] py-3 rounded-md text-base w-full focus:shadow-[1px_2px_0px_0px_#000] translate-y-1'
              id='link'
              placeholder='Enter a password'
              value={form.link}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col items-baseline m-5 '>
            <label htmlFor='description' className='font-semibold py-[5px] '>
              ConfirmPassword
            </label>
            <input
              type='text'
              className='outline-none border-2 border-black shadow-[3px_4px_0px_1px_#000] px-[10px] py-3 rounded-md text-base w-full focus:shadow-[1px_2px_0px_0px_#000] translate-y-1'
              id='description'
              placeholder='Please enter again Pasword'
              value={form.description}
              onChange={handleChange}
            />
          </div>

          <div className='flex flex-col items-baseline m-5 '>
            <button className='p-[15px] my-[30px]  text-base rounded-md font-extrabold shadow-[5px_5px_0px_0px_#000] text-black bg-green-400 w-full focus:shadow-[1px_2px_0px_0px_#000] translate-y-1'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
