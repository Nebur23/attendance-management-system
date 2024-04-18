import { useState } from "react";
import Button from "./button";
import { useNavigate } from "react-router";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const handleTabClick = index => {
    setActiveTab(index);
  };

  const tabContent = [
    {
      key: "cs",
      content: (
        <div className='flex gap-3 flex-wrap ml-6 lg:ml-32'>
          <Button
            onClick={() => navigate("/presence/cse level 1")}
            label='cse 1'
          />
          <Button
            onClick={() => navigate("/presence/cse level 2")}
            label='cse 2'
          />
          <Button
            onClick={() => navigate("/presence/cse level 3")}
            label='cse 3'
          />
          <Button
            onClick={() => navigate("/presence/cse level 4")}
            label='cse 4'
          />
        </div>
      ),
    },
    {
      key: "em",
      content: (
        <div className='flex gap-3 flex-wrap ml-6 lg:ml-32'>
          <Button
            onClick={() => navigate("/presence/eme level 1")}
            label='eme 1'
          />
          <Button
            onClick={() => navigate("/presence/eme level 2")}
            label='eme 2'
          />
          <Button
            onClick={() => navigate("/presence/eme level 3")}
            label='eme 3'
          />
          <Button
            onClick={() => navigate("/presence/eme level 4")}
            label='eme 4'
          />
        </div>
      ),
    },
    {
      key: "che",
      content: (
        <div className='flex gap-3 flex-wrap ml-6 lg:ml-32'>
          <Button
            onClick={() => navigate("/presence/che level 1")}
            label='che 1'
          />
          <Button
            onClick={() => navigate("/presence/che level 2")}
            label='che 2'
          />
          <Button
            onClick={() => navigate("/presence/che level 3")}
            label='che 3'
          />
          <Button
            onClick={() => navigate("/presence/che level 4")}
            label='che 4'
          />
        </div>
      ),
    },
    {
      key: "ce",
      content: (
        <div className='flex gap-3 flex-wrap ml-6 lg:ml-32'>
          <Button
            onClick={() => navigate("/presence/cee level 1")}
            label='cee 1'
          />
          <Button
            onClick={() => navigate("/presence/cee level 2")}
            label='cee 2'
          />
          <Button
            onClick={() => navigate("/presence/cee level 3")}
            label='cee 3'
          />
          <Button
            onClick={() => navigate("/presence/cee level 4")}
            label='cee 4'
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className='lg:hidden flex items-center justify-start ml-2  '>
        <label htmlFor='Tab' className='sr-only'>
          Tab
        </label>
        <select
          id='Tab'
          className='ml-4 rounded-md bg-transparent p-5  border-gray-200 border'
          value={activeTab}
          onChange={e => handleTabClick(parseInt(e.target.value))}
        >
          <option value={0}>Computer Science Engineering</option>
          <option value={1}>ElectroMechanical Engineering</option>
          <option value={2}>Chemical Engineering</option>
          <option value={3}>Civil Engineering</option>
        </select>
      </div>

      <div className='hidden lg:block max-w-5xl mx-auto'>
        <div className='border-b border-gray-200'>
          <nav className='-mb-px flex gap-6'>
            {[
              "Computer Science Engineering",
              "ElectroMechanical Engineering",
              "Chemical Engineering",
              "Civil Engineering",
            ].map((tab, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                className={`shrink-0 border border-transparent p-3 text-sm font-medium ${
                  activeTab === index
                    ? "text-sky-600 border-gray-300 border-b-white"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className='mt-4'>{tabContent[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
