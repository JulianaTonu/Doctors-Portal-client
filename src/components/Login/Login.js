import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import useToken from '../../hooks/useToken';
// import useTitle from './../../hooks/useTitle';

const Login = () => {
 const { signIn }=useContext(AuthContext)
const [loginError, setLoginError]=useState('')
const [loginUserEmail, setLoginUserEmail]=useState('')
const [token] =useToken(loginUserEmail)
const location= useLocation()
const navigate =useNavigate()

const from =location.state?.from?.pathname || '/' ;

if(token){
  navigate(from,{replace:true})
}
    const handleSubmit=event=>{

      
    event.preventDefault()
        const form =event.target
        const email =form.email.value;     
        const password=form.password.value
        console.log(email,password)

        signIn(email,password)
        .then(result=>{
        const user=
        result.user
        console.log('login user', user)
        setLoginUserEmail(email)

      })
      .catch(err=>{
        console.log(err.message)
        setLoginError(err.message)
      })
    
      
  
        }
    return (
        <div className="hero ">
      
          <div className="card flex-shrink-0 w-96 border-2  shadow-2xl my-10 py-5">
          <h1 className="text-4xl text-center pt-2 font-bold text-info">Login </h1>
            <form onSubmit={handleSubmit}  className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-2">
                <input type="submit" value="Login" className="btn bg-primary font-bold"/>
           
              </div>

              {/* //google */}
              <div className="form-control mt-2">
            
           <button className="btn bg-success font-bold" type="submit" ><FcGoogle/>Google</button>
              </div>

              <div>
                {loginError && <p className='text-red-600 font-bold'>{loginError}</p>}
              </div>
            </form>

            <p className=' text-center font-semibold '>New to this website? Please <Link className='text-pink-600 font-bold' to='/register'>Register</Link></p>
          </div>
        </div>
      
    );
};

export default Login;