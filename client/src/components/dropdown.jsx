const Dropdown = () => {
  return (
    <div>
      <select className='ml-4 rounded-md bg-transparent p-3 w-[200px] border-gray-200 border'>
        <option value={0}>Absent</option>
        <option value={1}>Present</option>
        <option value={2}>Late</option>
      </select>
    </div>
  );
};

export default Dropdown;
