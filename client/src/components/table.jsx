import Dropdown from "./dropdown";

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

          <tbody className='divide-y divide-gray-200'>
            <tr>
              <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                John Doe
              </td>
              <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                IUC21E78009
              </td>
              <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                M
              </td>
              <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                <Dropdown />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;
