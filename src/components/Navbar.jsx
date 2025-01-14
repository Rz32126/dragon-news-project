import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"

const Navbar = () => {
    return (
        <div className="flex justify-between">
           <div></div>
           <div className="nav space-x-5">
            <Link to="/">Home</Link>
            <Link to="/career">Career</Link>
            <Link to="/about">About</Link>
           </div>
           <div className="login">
            <div className="flex gap-3">
                <img src={userIcon} />
                <Link to="/auth/login" className="btn btn-neutral rounded-none">Login</Link>
            </div>

           </div>
        </div>
    );
};

export default Navbar;