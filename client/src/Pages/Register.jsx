import { useNavigate } from "react-router";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    password: "",
    confirmPassword: "",
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
      .post('http://localhost:8000/register', form)
      .then(res => {console.log(res.data); toast.success('Successfully registered',{autoClose:1000});navigate("/skip");})
      .catch(err => {console.log(err)});
      

   

    
  };
  return (
    <section className='flex flex-col justify-center items-center   mx-auto  h-[100vh] max-w-5xl bg-[#fafafa] text-center w-full p-6'>
      <div className='flex justify-center items-center flex-col shadow-[3px_4px_1px_1px_#561C24] bg-[#E8D8C4]  w-full m-10 h-[95%]  rounded-3xl px-5 py-[50px] max-w-xl '>
        <h1 className='text-[#6D2932] font-[Lora] font-extrabold text-xl md:text-4xl mt-2 text-center w-full px-5'>
          Welcome to ams
        </h1>
        <form onSubmit={handleSubmit} className='max-w-full w-full '>
          <div className='flex flex-col items-baseline m-5  '>
            <label htmlFor='title' className='font-semibold py-[5px] text-[#6D2932] font-[roboto] tracking-wider '>
              Username
            </label>
            <input
              type='text'
              className='outline-none border-2 border-[#C7B7A3] px-[10px] py-3 rounded-md text-base w-full translate-y-1'
              id='name'
              placeholder='Enter a username'
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col items-baseline m-5 '>
            <label htmlFor='link' className='font-semibold py-[5px] text-[#6D2932] font-[roboto] tracking-wider  '>
              Password
            </label>
            <input
              type='password'
              className='outline-none border-2 border-[#C7B7A3] px-[10px] py-3 rounded-md text-base w-full  translate-y-1'
              id='password'
              placeholder='Enter a password'
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col items-baseline m-5 '>
            <label htmlFor='description' className='font-semibold py-[5px] text-[#6D2932] font-[roboto] tracking-wider md:text-lg '>
              ConfirmPassword
            </label>
            <input
              type='password'
              className='outline-none border-2 border-[#C7B7A3] px-[10px] py-3 rounded-md text-base w-full  translate-y-1'
              id='confirmPassword'
              placeholder='Please enter again Pasword'
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <div className='flex flex-col items-baseline m-5 '>
            <button onClick={handleSubmit} className='p-[15px] my-[30px]  text-base rounded-md font-extrabold shadow-[2px_2px_#561C24] text-white md:text-2xl bg-[#6D2932] w-full  translate-y-1'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
