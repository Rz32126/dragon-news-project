import moment from "moment";
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 py-4">
            <img className="w-[300px]" src={logo} alt=""/>
            <h1 className="text-gray-400">Journalism Without Fear or Favour</h1>
            <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;