import axios from "axios";
import { API } from "../../const/endpoint";

export const authAction = (loginPayload) => (dispatch) => {
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

export const handleToken = () => (dispatch) => {
  const token = localStorage.getItem("token");

  if (!token) {
    dispatch({
      type: "TOKEN_CHECK",
      payload: {
        isLogin: false,
        loading: false,
      },
    });
  } else {
    dispatch({
      type: "TOKEN_CHECK",
      payload: {
        isLogin: true,
        loading: false,
      },
    });
  }
};
