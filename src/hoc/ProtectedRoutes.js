import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
	const [loading, setLoading] = useState();
	const { login } = useSelector((rootReducers) => rootReducers);
	const dispatch = useDispatch;
	console.log(login);

	useEffect(() => {
		setLoading(true);
		const token = localStorage.getItem("token");
		if (!token) {
			setLoading(false);
			dispatch({
				type: "LOGIN",
				payload: false,
			});
		} else {
			setLoading(false);
			dispatch({
				type: "LOGIN",
				payload: true,
			});
		}
	}, [login.isLogin]);

	if (loading) {
		return "loading...";
	}

	return login.isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
