

import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken';

// import useTitle from '../../hooks/useTitle';


const Register = () => {
  const {createUser,updateUserProfile }=useContext(AuthContext)
  const [createdUser ,setCreatedUser]= useState('')
  const [token]=useToken(createdUser)

 const navigate =useNavigate()

 if(token){
  navigate('/login')
 }


    const handleSignup=event=>{
        event.preventDefault()
        const form =event.target
        const name=form.name.value
        
        const email =form.email.value;
        const password=form.password.value
        console.log(name,email,password)

        createUser(email,password)
        .then(result=>{
          const user=result.user
          toast.success('user created successfully')

          const profile ={
           displayName: name
          }
          updateUserProfile(profile)
          .then(()=>{
            saveUser(name,email);
          })
          .catch(err=>console.log(err))
          console.log('regi user', user)
          
          
        })
        .catch(e=>console.error(e))

     
    }

    const saveUser =(name, email)=>{
      const user ={name, email};
      fetch('https://doctors-portal-server-julianatonu.vercel.app/users',{
        method:'POST',
        headers: {
          'content-type':'application/json'
        },
        body:JSON.stringify(user)
      })
      .then(res=>res.json())
      .then(data =>{
       
        setCreatedUser(email)
        console.log(data)
        // getUserToken(email)
      
      })
    }

    // const getUserToken = email =>{
    //   fetch(`https://doctors-portal-server-julianatonu.vercel.app/jwt?email=${email}`)
    //   .then(res=>res.json())
    //   .then(data=>{
    //     if(data.accessToken){
    //       localStorage.setItem('accessToken', data.accessToken)
    //       navigate('/')
    //       console.log('tokeeen',data.accessToken)
    //     }
    //   })
    // }
    return (
        <div className="hero  ">
       <div className="card flex-shrink-0  shadow-2xl w-96 border-2 my-10 py-3">
          <h1 className="text-4xl text-center text-info font-bold">Register </h1>

            <form onSubmit={handleSignup}  className="card-body">

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="your name" className="input input-bordered" />
              </div>

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
                  <a href className="label-text-alt link link-hover" >Forgot password?</a>
                </label>
              </div>


              <div className="form-control mt-6">
                <input type="submit" value="Register" className="btn bg-primary"/>
           
               
              </div>
            </form>

            <p className=' text-center '>Already have an account?<Link className='text-pink-600 font-bold' to='/login'>Login</Link></p>
          </div>
      </div>
    );
};

export default Register;