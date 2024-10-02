import { Link } from "react-router-dom";

const NavBar=()=>{
    return(
        <>
        <div className="navContainer">
            <div className="navleft">
            <img src="https://res.cloudinary.com/ds2zp2aa3/image/upload/v1727856364/logo_rlwwtg.jpg" alt="Logo" />
            <h6>Course</h6>
            </div>
            <div className="navcenter">
                <Link to={"home"}>Home</Link>
                <Link to={"resourses"}>Resourses</Link>
                <Link to={"coachinghubs"}>Coachig Hubs</Link>
            </div>
            <div className="navright">
            <input type="search" name="" id="" />
            <button>Login/Register</button>
            </div>
        </div>
        </>
    )
}
export default NavBar;