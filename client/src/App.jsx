import { Route, Routes } from "react-router";
import Register from "./Pages/Register";
import Success from "./Pages/Success";
import Skip from "./Pages/Skip";
import Login from "./Pages/Login";
import Teacher from "./Pages/Teacher";
import Forgot from "./Pages/Forgot";
import Presence from "./Pages/Presence";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/success' element={<Success />} />
        <Route path='/skip' element={<Skip />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot' element={<Forgot />} />
        <Route path='/teacher' element={<Teacher />} />
        <Route path='/presence' element={<Presence />} />
      </Routes>
    </div>
  );
}
