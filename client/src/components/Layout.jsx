import { Link, Outlet } from 'react-router-dom';
import NavBar from './NavBar';


const Layout=()=>{
    return(
        <>
        <NavBar/>
        <Outlet/>
        <div className='bg-black text-white  '>
        <h6 className='text-center'>Footer Part</h6>
        </div>

        
        </>
    )
}
export default Layout;