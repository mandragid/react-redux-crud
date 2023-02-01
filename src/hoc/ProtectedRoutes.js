import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { handleToken } from "../redux/actions/authAction";

const ProtectedRoute = () => {
  //   const { isLogin, loading } = useSelector((rootReducers) => rootReducers);
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  // console.log(state);

  useEffect(() => {
    dispatch(handleToken());
  }, [state.login.isLogin]);

  if (state.login.loading) {
    return "loading...";
  }

  return state.login.isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
