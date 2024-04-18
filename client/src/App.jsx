import { Route, Routes } from "react-router";
import Register from "./Pages/Register";
import Success from "./Pages/Success";
import Skip from "./Pages/Skip";
import Teacher from "./Pages/Teacher";
import Forgot from "./Pages/Forgot";
import Presence from "./Pages/Presence";
import SignIn from "./Pages/SignIn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./Pages/Layout";
import RequireAuth from "./components/RequireAuth";
import Home from "./Pages/Home";
export default function App() {
  return (
    <div>
      <Routes>
        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='teacher' element={<Teacher />} />
            <Route path='presence/:id' element={<Presence />} />
            <Route path='success' element={<Success />} />
            <Route path='account/settings' element={<Skip />} />
          </Route>
        </Route>
        {/* public routes */}
        <Route path='/login' element={<SignIn />} />
        <Route path='/forgot' element={<Forgot />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <ToastContainer position='top-center' />
    </div>
  );
}
