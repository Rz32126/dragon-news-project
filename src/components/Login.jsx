
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
const Login = () => {
    return (
        <div>
            <h3 className="font-semibold">Login With</h3>
            <div className="*:w-full space-y-2">
                <button className="btn"><FaGoogle />Login With Google</button>
                <button className="btn"><FaGithub></FaGithub>Login With Github</button>
            </div>
        </div>
    );
};

export default Login;