import axios from "axios";

export const registerAction = (payload) => (dispatch) => {
  axios
    .post(
      "https://bootcamp-rent-cars.herokuapp.com/admin/auth/register",
      payload
    )
    .then((res) => {
      dispatch({
        type: "REGIS",
        payload: res.statusText,
      });
    })
    .catch((err) => console.log(err));
};
