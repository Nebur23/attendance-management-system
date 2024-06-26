import { useNavigate, useParams } from "react-router";
import Table from "../components/table";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import Button from "../components/button";
import { toast } from "react-toastify";
import { getCurrentDateTime } from "../utils/date-time";

export default function Presence() {
  let params = useParams();
  const componentPDF = useRef();
  const navigate = useNavigate();

  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: `student attendance_${params.id}${getCurrentDateTime()}`,
    onAfterPrint: () => handleSuccess(),
  });
  const handleSuccess = () =>
    toast.success("Successfully pdf download", { autoClose: 1000 });
  return (
    <section className='min-h-screen'>
      <div className='flex items-center my-10 max-w-5xl  p-3 justify-between mx-auto'>
        <div>
          <label htmlFor='date' className='mr-2 text-gray-700'>
            Date:
          </label>
          <input
            type='date'
            id='date'
            className='px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500'
          />
        </div>

        <Button label='back' icon={true} onClick={() => navigate("/teacher")} />
      </div>

      <div className='bg-indigo-600  py-3 text-white flex items-center justify-between px-6 lg:px-8 mx-auto max-w-5xl '>
        <div>
          <span className='font-extrabold uppercase'> class :</span> {params.id}
        </div>
        <a
          className='rounded-lg bg-white px-5 py-3 text-center text-sm font-medium text-indigo-600 transition hover:bg-white/90 focus:outline-none focus:ring active:text-indigo-500 sm:mt-0'
          href='#'
        >
          Add new student
        </a>
      </div>

      <div ref={componentPDF} style={{ width: "100%" }}>
        <Table />
      </div>

      <div className='md:mx-auto flex justify-start max-w-5xl ml-4 mt-5 '>
        <Button label='download pdf' onClick={generatePDF} />
      </div>
    </section>
  );
}
