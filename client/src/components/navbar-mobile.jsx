import { useState } from "react";
import menu from "../Images/ellipsis-vertical-solid.svg";
import Sidebar from "./sidebar";

const MobileNavbar = () => {
  const [active, setActive] = useState(false);
  const handleClose = () => {
    return setActive(!active);
  };
  return (
    <div className='md:hidden'>
      <button onClick={() => setActive(!active)}>
        <img src={menu} className='w-6 h-6' />
      </button>
      <Sidebar active={active} handleClose={handleClose} />
    </div>
  );
};

export default MobileNavbar;
