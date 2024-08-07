import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";

export default function SignIn() {
  const navigate = useNavigate();
  const { setAuth, persist, setPersist } = useAuth();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const [form, setForm] = useState({
    name: "",
    password: "",
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
      .post("http://localhost:8000/auth", form)
      .then(res => {
        const accessToken = res?.data?.accessToken;
        const roles = res?.data?.roles;
        setAuth({ ...form, roles, accessToken });
        toast.success("Successfully login", { autoClose: 1000 });
        navigate(from);
      })
      .catch(err => {
        console.log(err);
        if (err.response.status === 400) {
          toast.error("name and password required", { autoClose: 1000 });
        } else if (err.response.status === 401) {
          toast.error("password is incorrect", { autoClose: 1000 });
        }
      });
  };

  const togglePersist = () => {
    setPersist(prev => !prev);
  };

  useEffect(() => {
    localStorage.setItem("persist", persist);
  }, [persist]);
  return (
    <section className='flex flex-col justify-center items-center   mx-auto  h-[100vh] max-w-5xl bg-[#fafafa] text-center w-full p-6'>
      <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-lg'>
          <h1 className='text-center text-2xl font-bold text-indigo-600 sm:text-3xl'>
            Welcome back
          </h1>

          <p className='mx-auto mt-4 max-w-md text-center text-gray-500'>
            The Attendance Management System is a feature that allows users to
            track and manage attendance records efficiently within your app
          </p>

          <form
            onSubmit={handleSubmit}
            className='mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 '
          >
            <p className='text-center text-lg font-medium'>
              Sign In to your account
            </p>

            <div>
              <label htmlFor='name' className='sr-only'>
                Username
              </label>

              <div className='relative'>
                <input
                  type='text'
                  className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                  id='name'
                  placeholder='Enter a username'
                  value={form.name}
                  onChange={handleChange}
                  autoComplete='off'
                  required
                />

                <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='size-4 text-gray-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* password */}

            <div>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>

              <div className='relative'>
                <input
                  type='password'
                  className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                  placeholder='Enter password'
                  id='password'
                  value={form.password}
                  onChange={handleChange}
                  autoComplete='off'
                  required
                />

                <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='size-4 text-gray-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      placeholder='Enter a password'
                      strokeWidth='2'
                      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* submit btn */}

            <button
              onClick={handleSubmit}
              type='submit'
              className='block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white disabled:opacity-50'
              disabled={(form.name && form.password) === ""}
            >
              Sign In
            </button>

            <div className='persistCheck hidden'>
              <input
                type='checkbox'
                id='persist'
                onChange={togglePersist}
                checked={persist}
              />
              <label htmlFor='persist'>Trust This Device</label>
            </div>

            <p className='text-center text-sm text-gray-500'>
              Dont have an account?
              <Link to='/register' className='underline'>
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
