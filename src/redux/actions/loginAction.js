import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { API } from "../../const/endpoint";

export const loginAction = (loginPayload) => (dispatch) => {
	axios
		.post(API.LOGIN, loginPayload)
		.then((res) => {
			dispatch({
				type: "LOGIN",
				payload: true,
			});
			localStorage.setItem("token", res.data.access_token);
		})
		.catch((err) => console.log(err));
};
