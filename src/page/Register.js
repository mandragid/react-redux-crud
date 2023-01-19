import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Register.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerAction } from "../redux/actions/registerAction";

const Register = () => {
  const [emailInput, setEmailinput] = useState("");
  const [passwordInput, setPasswordinput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { regis } = useSelector((rootReducers) => rootReducers);
  //   console.log(state.regis.message);

  const handleEmail = (e) => {
    setEmailinput(e.target.value);
    console.log(emailInput);
  };

  const handlePassword = (e) => {
    setPasswordinput(e.target.value);
    console.log(passwordInput);
  };

  const handleRegister = () => {
    const payload = {
      email: emailInput,
      password: passwordInput,
      role: "Admin",
    };
    dispatch(registerAction(payload));
  };

  console.log(regis);

  return (
    <div>
      <Navbar />
      <div class="navigation">
        <div class="container">
          <div className="form-container">
            <h1>Register Admin</h1>
            <input onChange={handleEmail} placeholder="Email"></input> <br />
            <input
              onChange={handlePassword}
              placeholder="Password"
            ></input>{" "}
            <br />
            <button onClick={handleRegister}>Register</button>
          </div>
        </div>
      </div>
      <div className="register-login-bg">
        <div>
          <p>sudah punya akun?</p>
        </div>
        <div>
          <Link to={"/login"}>
            <p>Silahkan login!</p>
          </Link>
        </div>

        <div>{regis.message.length ? <p>{regis.message}</p> : null}</div>
      </div>
    </div>
  );
};

export default Register;
