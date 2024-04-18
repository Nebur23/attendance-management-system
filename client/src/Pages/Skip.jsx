import Button from "../components/button";
import user from "../Images/user-solid.svg";
import { useNavigate } from "react-router";

export default function Skip() {
  const navigate = useNavigate();
  return (
    <section className='flex flex-col justify-between items-center   mx-auto  h-[100vh] max-w-5xl  text-center w-full p-6 '>
      <div>
        <img
          src={user}
          alt='user image'
          className='rounded-full w-48 h-48 p-10 mx-auto bg-gray-200'
        />

        <div className=' text-white mt-5'>
          <div className='mx-auto max-w-screen-xl px-4 lg:flex  lg:items-center'>
            <div className='mx-auto max-w-3xl text-center'>
              <h1 className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent'>
                To enhance your experience
                <span className='sm:block'>Feel free to upload a picture </span>
                <br />
              </h1>
            </div>
          </div>
        </div>
      </div>

      <Button label={"skip"} onClick={() => navigate("/")} />
    </section>
  );
}
