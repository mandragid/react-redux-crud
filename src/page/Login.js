import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../redux/actions/authAction";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginEmail, setLoginemail] = useState("");
  const [loginPassword, setLoginpassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { login } = useSelector((rootReducers) => rootReducers);

  const handleLoginEmail = (e) => {
    setLoginemail(e.target.value);
    console.log(loginEmail);
  };

  const handleLoginPassword = (e) => {
    setLoginpassword(e.target.value);
    console.log(loginPassword);
  };

  const handleLogin = () => {
    const loginPayload = {
      email: loginEmail,
      password: loginPassword,
    };
    dispatch(authAction(loginPayload));
  };
  console.log(login);

  useEffect(() => {
    handleRedirect();
  });

  const handleRedirect = () => {
    const token = localStorage.getItem("token");
    setTimeout(() => {
      if (!!token) {
        navigate("/");
      }
    }, 2000);
  };

  return (
    <div>
      <Navbar />
      <div class="container">
        <div className="form-container">
          <h1>Login</h1>
          <p>Please login first</p>
          <input onChange={handleLoginEmail} placeholder="Email"></input> <br />
          <input
            onChange={handleLoginPassword}
            placeholder="Password"
          ></input>{" "}
          <br />
          {login.isLogin ? (
            <p>anda berhasil login</p>
          ) : (
            <button onClick={handleLogin}>Login</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
