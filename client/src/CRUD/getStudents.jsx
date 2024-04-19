import axios from "axios";
import { useEffect, useState } from "react";
import Dropdown from "../components/dropdown";
import { useParams } from "react-router";

const GetStudents = () => {
  const [students, setStudents] = useState([]);
  let params = useParams();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getStudents = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/students/${params.id}`,
          {
            signal: controller.signal,
          }
        )
        isMounted && setStudents(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    getStudents();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [params.id]);


  return (
    <tbody className='divide-y divide-gray-200'>
      {students && students.students?.length ? (
        students.students?.map((student, indx) => (
          <tr key={indx}>
            <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
              {student.name}
            </td>
            <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
              {student.matricule}
            </td>
            <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
              {student.sexe}
            </td>
            <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
              <Dropdown />
            </td>
          </tr>
        ))
      ) : (
        <p> No students</p>
      )}
    </tbody>
  );
};

export default GetStudents;
