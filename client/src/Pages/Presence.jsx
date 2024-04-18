import Navbar from "../components/navbar";
import Table from "../components/table";

export default function Presence() {
  return (
    <section className='min-h-screen'>
      <Navbar />
      <div className='flex items-center pl-4 my-10 max-w-5xl mx-auto'>
        <label htmlFor='date' className='mr-2 text-gray-700'>
          Date:
        </label>
        <input
          type='date'
          id='date'
          className='px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500'
        />
      </div>

      <div className='bg-indigo-600  py-3 text-white flex items-center justify-between px-6 lg:px-8 mx-auto max-w-5xl '>
        CSE level 1
        <a
          className='rounded-lg bg-white px-5 py-3 text-center text-sm font-medium text-indigo-600 transition hover:bg-white/90 focus:outline-none focus:ring active:text-indigo-500 sm:mt-0'
          href='#'
        >
          Add new student
        </a>
      </div>

      <Table />
    </section>
  );
}
