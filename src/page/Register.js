import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Register.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    handleRedirect();
  }, [regis.message]);

  const handleRedirect = () => {
    setTimeout(() => {
      if (regis.message.length) {
        navigate("/login");
      }
      dispatch({
        type: "REMOVE_MESSAGE",
        payload: "",
      });
    }, 2000);
  };

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
          <p>already have an account? please &nbsp;</p>
        </div>
        <div>
          <Link to={"/login"}>
            <p>login!</p>
          </Link>
        </div>

        <div>{regis.message.length ? <p>{regis.message}</p> : null}</div>
      </div>
    </div>
  );
};

export default Register;
