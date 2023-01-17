import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (  
        <div className="navbar-section-bg">
            <div className="navbar-section">
                <div className="navbar-left">
                    <h1>Binar Redux-New</h1>
                </div>
                <div className="navbar-right">
                    <div>
                        <Link to={"/"}>
                            <p>Home</p>
                        </Link>
                    </div>
                    <div>
                        <Link to={"/register"}>
                            <button className="navbar-right-register">Register</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;