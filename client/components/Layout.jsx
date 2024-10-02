import { Link, Outlet } from 'react-router-dom';
import NavBar from './NavBar';


const Layout=()=>{
    return(
        <>
        <NavBar/>
        <Outlet/>
        <h6 align="center">Footer Part</h6>
        </>
    )
}
export default Layout;