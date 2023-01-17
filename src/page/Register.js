import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Register.css"
import { useSelector } from "react-redux";

const Register = () => {
    const state = useSelector(rootReducers => rootReducers)
    console.log(state.regis.message)
    return (  
        <div>
            <Navbar />
            <h1>Register</h1>
            <div className="register-login-bg">
                <div>
                    <p>sudah punya akun?</p>
                </div>
                <div>
                    <Link to={"/login"}>
                        <p>Silahkan login!</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default Register;