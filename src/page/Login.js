import Navbar from "../components/Navbar";
import { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../redux/actions/loginAction";
import rootReducers from "../redux/reducers";

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
    dispatch(loginAction(loginPayload));
  };
  console.log(login);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
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
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <button onClick={handleLogin}>Login</button>
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Login;
