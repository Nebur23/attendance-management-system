import { useState } from "react";
import menu from "../Images/ellipsis-vertical-solid.svg";
import Sidebar from "./sidebar";

const MobileNavbar = () => {
  const [active, setActive] = useState(false);

  return (
    <section className='md:hidden'>
      <button
        onClick={() => {
          setActive(true);
        }}
      >
        <img src={menu} className='w-6 h-6' />
      </button>
      <Sidebar active={active} setActive={setActive} />
    </section>
  );
};

export default MobileNavbar;
