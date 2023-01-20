import { Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import Register from "./page/Register";
import Home from "./page/Home";
import ProtectedRoutes from "./hoc/ProtectedRoutes";

function App() {
	return (
		<Routes>
			<Route element={<ProtectedRoutes />}>
				<Route path="/" element={<Home />} />
			</Route>

			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
		</Routes>
	);
}

export default App;
