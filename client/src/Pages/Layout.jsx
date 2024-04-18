import { Outlet, useLocation } from "react-router";
import Navbar from "../components/navbar";

const Layout = () => {
  const location = useLocation();
  const renderNavbar =
    location.pathname !== "/success" &&
    location.pathname !== "/account/settings";
  return (
    <div>
      {renderNavbar && <Navbar />}
      <Outlet />
    </div>
  );
};

export default Layout;
