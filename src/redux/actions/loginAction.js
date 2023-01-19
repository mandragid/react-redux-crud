import axios from "axios";
import { useNavigate } from "react-router-dom";

export const loginAction = (loginPayload) => (dispatch) => {
  axios
    .post(
      "https://bootcamp-rent-cars.herokuapp.com/admin/auth/login",
      loginPayload
    )
    .then((res) => {
      dispatch({
        type: "LOGIN",
        payload: true,
      });
      localStorage.setItem("token", res.data.access_token);
    })
    .catch((err) => console.log(err));
};
