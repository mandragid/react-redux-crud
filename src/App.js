import { Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import Register from "./page/Register";
import Home from "./page/Home";
import ProtectedRoutes from "./hoc/ProtectedRoutes";
import Discovery from "./page/Discovery";
import AddCar from "./page/AddCar";
import EditCar from "./page/EditCar";

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/Discovery" element={<Discovery />} />
        <Route path="/edit-car/:id" element={<EditCar />} />
        <Route path="/addcar" element={<AddCar />} />
      </Route>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
