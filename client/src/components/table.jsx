import GetStudents from "../CRUD/getStudents";

const Table = () => {
  return (
    <section className='max-w-5xl mx-auto h-full '>
      <div className='overflow-x-auto h-full'>
        <table className='min-w-full divide-y-2 divide-gray-200 bg-white text-sm'>
          <thead className='ltr:text-left rtl:text-right'>
            <tr>
              <th className='whitespace-nowrap text-left px-4 py-2 font-medium text-gray-900'>
                Name
              </th>
              <th className='whitespace-nowrap text-left px-4 py-2 font-medium text-gray-900'>
                Matricule
              </th>
              <th className='whitespace-nowrap text-left px-4 py-2 font-medium text-gray-900'>
                Sexe
              </th>
              <th className='whitespace-nowrap text-left px-4 py-2 font-medium text-gray-900'>
                Presence
              </th>
              <th className='px-4 py-2'></th>
            </tr>
          </thead>

          <GetStudents />
        </table>
      </div>
    </section>
  );
};

export default Table;
