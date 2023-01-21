import axios from "axios";
import { API } from "../../const/endpoint";

export const registerAction = (payload) => (dispatch) => {
  axios
    .post(API.REGISTER, payload)
    .then((res) => {
      dispatch({
        type: "REGIS",
        payload: res.statusText,
      });
      console.log(res);
    })
    .catch((err) => console.log(err));
};
