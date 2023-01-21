import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Navbar.css";
import { useDispatch } from "react-redux";

const Navbar = () => {
  //   get token
  const token = localStorage.getItem("token");
  //  assign useNavigate hooks
  const navigate = useNavigate();
  //   assign useDispatch hooks
  const dispatch = useDispatch();

  const handleLogout = () => {
    // remove login token
    localStorage.removeItem("token");

    // set the timeout to 2s
    setTimeout(() => {
      navigate("/login");
    }, 2000);

    // change isLogin state to false
    dispatch({
      type: "LOGIN",
      payload: false,
    });
  };

  return (
    <div className="navbar-section-bg">
      <div className="navbar-section">
        <div className="navbar-left">
          <h1>React-Redux-CRUD</h1>
        </div>
        <div className="navbar-right">
          <div>
            <Link to={"/"}>
              <p>Home</p>
            </Link>
          </div>
          <div>
            {/* checks the availability of login token, if available, render logout button,  otherwise render register button that navigate to register page */}
            {!!token ? (
              <button className="navbar-right-register" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <Link to={"/register"}>
                <button className="navbar-right-register">Register</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
