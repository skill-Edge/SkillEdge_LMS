import { Link } from "react-router-dom";

const NavBar=()=>{
    return(
        <>
        <div className="navContainer max-width: 1280px">
            <div className="navleft">
            <img src="https://res.cloudinary.com/ds2zp2aa3/image/upload/v1727856364/logo_rlwwtg.jpg" alt="Logo" />
            <h6>Course</h6>
            </div>
            <div className="navcenter">
                <Link to={"home"}>Home</Link>
                <Link to={"resourses"}>Resourses</Link>
                <Link to={"coachinghubs"}>Coaching Hubs</Link>
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

// import { Link } from "react-router-dom";

// const NavBar = () => {
//   return (
//     <>
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between bg-gray-100 shadow-lg rounded-lg">
//         <div className="flex items-center gap-4">
//           <img
//             src="https://res.cloudinary.com/ds2zp2aa3/image/upload/v1727856364/logo_rlwwtg.jpg"
//             alt="Logo"
//             className="w-12" // width of 50px
//           />
//           <h6 className="text-lg font-semibold text-gray-800">Course</h6>
//         </div>

//         <div className="hidden md:flex gap-8">
//           <Link to={"home"} className="text-gray-800 hover:text-blue-600">Home</Link>
//           <Link to={"resourses"} className="text-gray-800 hover:text-blue-600">Resources</Link>
//           <Link to={"coachinghubs"} className="text-gray-800 hover:text-blue-600">Coaching Hubs</Link>
//         </div>

//         <div className="flex items-center gap-4">
//           <input
//             type="search"
//             className="px-3 py-1 border border-gray-300 rounded-md w-48 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Search..."
//           />
//           <button className="px-4 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
//             Login/Register
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NavBar;
