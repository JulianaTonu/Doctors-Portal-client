import React, { useContext } from 'react';
import Header from './../components/Shared/Header/Header';
import { Outlet, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from './../hooks/useAdmin';

const DashboardLayout = () => {

  const {user}= useContext(AuthContext)
  const [isAdmin] =useAdmin(user?.email)
    return (
        <div>
           <Header></Header> 
           <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
 
 <Outlet></Outlet>

    {/* <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
  
  </div> 
  <div className="drawer-side mt-16 ">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 ml-0 text-base-content transform -translate-x -translate-y backdrop-blur-xl bg-white/30 shadow-xl z-10">
      


      <li><Link to='/dashboard'>My Appointment</Link></li>
      
      {
        isAdmin && <>
        <li><Link to='/dashboard/users'>All Users</Link></li>
        <li><Link to='/dashboard/adddoctor'>Add a Doctor</Link></li>
        <li><Link to='/dashboard/managedoctors'>Manage Doctor</Link></li>
        </>
      }
      

    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;