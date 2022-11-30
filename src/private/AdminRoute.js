
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from './../hooks/useAdmin';


const AdminRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const [isAdmin,isAdminLoading] =useAdmin(user?.email)
    const location =useLocation()
    
if(loading || isAdminLoading){
    
    return<div>Loading....</div>
}
    
    if(!user && isAdmin){
            return <Navigate to='/login' state={{from:location}}
            replace></Navigate>
        }
    
    return children;
};

export default AdminRoute;