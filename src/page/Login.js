import Navbar from "../components/Navbar";
import { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginEmail, setLoginemail] = useState("");
  const [loginPassword, setLoginpassword] = useState("");
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  const handleLoginEmail = (e) => {
    setLoginemail(e.target.value);
    console.log(loginEmail);
  };

  const handleLoginPassword = (e) => {
    setLoginpassword(e.target.value);
    console.log(loginPassword);
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
          <button onClick={""}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
