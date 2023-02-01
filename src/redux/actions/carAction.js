import axios from "axios";
import { API } from "../../const/endpoint";

export const handleCarList = (config) => (dispatch) => {
  axios
    .get(API.CARLIST, config)
    .then((res) => {
      dispatch({
        type: "GETALLCARS",
        payload: res.data.cars,
      });
      //   console.log(res);
    })
    .catch((err) => console.log(err));
};

export const handleGetCarId = (id) => (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      access_token: token,
    },
  };
  axios
    .get(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, config)
    .then((res) => {
      dispatch({
        type: "GETCARBYID",
        payload: res.data,
      });
      //   console.log(res);
    })
    .catch((err) => console.log(err));
};

export const handleDelete = (id) => (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      access_token: token,
    },
  };
  axios
    .delete(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, config)
    .then((res) => {
      dispatch({
        type: "DELETECARS",
        payload: res.data.name,
      });
      //   console.log(res);
      handleCarList(config);
    })
    .catch((err) => console.log(err));
};

export const handleAdd = (formData) => (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      access_token: token,
    },
  };
  axios
    .post(
      `https://bootcamp-rent-cars.herokuapp.com/admin/car`,
      formData,
      config
    )
    .then((res) => {
      dispatch({
        type: "ADDCARS",
        payload: res.statusText,
      });
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const handleEdit = (id) => (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      access_token: token,
    },
  };
  axios
    .delete(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, config)
    .then((res) => {
      dispatch({
        type: "EDITCARS",
        payload: res.data.name,
      });
      //   console.log(res);
    })
    .catch((err) => console.log(err));
};
