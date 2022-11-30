import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import './Header.css'

const Header = () => {

  const {user,logout}=useContext(AuthContext)

const handleLogout=()=>{
  logout()
  .then(()=>{})
  .catch(e=>console.error(e))
}
  

    return (
        <div className="navbar  text-grey-200    mb-10  bg-1 fixed ">
        <div className="navbar-start ">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden transform -translate-x -translate-y backdrop-blur-xl bg-white/30 bg ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 text-center  bg ml-5 ">
             
            <li className='font-bold text-white font-serif'><Link to='/'>Home</Link></li>
            <li className='font-bold text-white font-serif'><Link to='/blog'>About</Link></li>
            
            <li className='font-bold text-white font-serif'><Link to='/pracappoint'>Prac</Link></li>
            <li className='font-bold text-white font-serif'><Link to='/appointment'>Appointment</Link></li>
            <li className='font-bold text-white font-serif'><Link to='/dashboard'>Dashboard</Link></li>

{/* //add condition for login and logout           */}
            {
          user?.email ?
          <>
          
         <li className='text-primary font-bold mt-3'>{user?.displayName}</li>
          <li className=''><button className='btn btn-ghost font-bold  font-serif' onClick={handleLogout}>Logout</button></li>
          </>
            :
           <>
                <li className='font-bold text-white  font-serif'><Link to='/login'>Login</Link></li>
                <li className='font-bold text-white font-serif'><Link to='/register'>Register</Link></li>
                </>
          }
             
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-2xl text-white text">Doctors Portal</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 mr-32 shadow-xl rounded-xl bg">
            
            <li className='font-bold text-white font-serif'><Link to='/'>Home</Link></li>
            <li className='font-bold text-white font-serif'><Link to='/appointment'>Appointment</Link></li>
            {/* <li className='font-bold text-white font-serif'><Link to='/pracappoint'>Prac</Link></li> */}
            <li className='font-bold text-white font-serif'><Link to='/about'>About</Link></li>
            
            <li className='font-bold text-white font-serif'><Link to='/dashboard'>Dashboard</Link></li>

            {
          user?.email ?
          <>
          
         <span 
         className='text-white font-bold text-lg  font-serif pt-2'
         
         >{user?.displayName}</span>
          <span className=''><button className='btn btn-ghost font-bold text-white font-serif' onClick={handleLogout}>Logout</button></span>
          </>
            :
           <>
                <li className='font-bold text-white font-serif'><Link to='/login'>Login</Link></li>
                <li className='font-bold text-white font-serif'><Link to='/register'>Register</Link></li>
                </>
          }
           
          </ul>
        </div>
        <label htmlFor="dashboard-drawer" tabIndex={1} className="btn btn-ghost lg:hidden ml-28 bg ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
      </div>
    );
};

export default Header;