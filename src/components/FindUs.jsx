import { FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
const FindUs = () => {
    return (
        <div>
            <h3 className="font-semibold">Find us on</h3>
            <div className="join flex join-vertical *:bg-slate-100">
             <button className="btn join-item justify-start"><FaFacebook></FaFacebook>Facebook</button>
             <button className="btn join-item justify-start"><CiTwitter></CiTwitter>Twitter</button>
             <button className="btn join-item justify-start"><FaInstagram></FaInstagram>Instragram</button>
            </div>
        </div>
    );
};

export default FindUs;