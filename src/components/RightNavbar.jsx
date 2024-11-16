import FindUs from "./FindUs";
import Login from "./Login";


const RightNavbar = () => {
    return (
        <div className="space-y-5">
            <Login></Login>
            <FindUs></FindUs>
        </div>
    );
};

export default RightNavbar;