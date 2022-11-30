
import MyAppointment from "../components/DashBoard/MyAppointment";
import Home from "../components/HomePage/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import PracAppointment from "../practics/PracAppointment";
import PrivateRoute from "../private/PrivateRoute";
import Appointment from './../components/AppointmentPage/Appointment/Appointment';
import AllUsers from './../components/DashBoard/AllUsers';
import AdminRoute from './../private/AdminRoute';
// import AddDoctor from './../components/DashBoard/AddDoctor';
import AddDoctors from "../components/DashBoard/AddDoctors";
import ManageDoctors from "../components/DashBoard/ManageDoctors";
import Payment from "../components/DashBoard/Payment";
import DisplayError from './../components/DashBoard/DisplayError';

const { createBrowserRouter } = require("react-router-dom");



 export const router =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/appointment',
                element:<Appointment></Appointment>
            },
            {
                path:'/register',
                element:<Register></Register>
            },

            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/pracappoint',
                element:<PracAppointment></PracAppointment>
            }
        ]
    },
    {
path:'/dashboard',
element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
errorElement:<DisplayError></DisplayError>,
children:[
    {
        path:'/dashboard',
        element:<MyAppointment></MyAppointment>
    },
    {
        path:'/dashboard/users',
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
    },
    // {
    //     path:'/dashboard/adddoctor',
    //     element:<AdminRoute><AddDoctor></AddDoctor></AdminRoute>
    // },
    {
        path:'/dashboard/adddoctor',
        element:<AdminRoute><AddDoctors></AddDoctors></AdminRoute>
    },
    {
        path:'/dashboard/managedoctors',
        element:<AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
    },
    {
        path:'/dashboard/payment/:id',
        element:<AdminRoute><Payment></Payment></AdminRoute>,
        loader:({params}) =>fetch(`https://doctors-portal-server-julianatonu.vercel.app/bookings/${params.id}`)
    }
]
    }
])

