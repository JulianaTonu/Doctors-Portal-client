import { useQuery } from '@tanstack/react-query';

import React from 'react';
import { toast } from 'react-hot-toast';

const AllUsers = () => {
    const {data:users = [], refetch}= useQuery({
        queryKey:['users'],
        queryFn: async() =>{
            const res = await fetch('https://doctors-portal-server-julianatonu.vercel.app/users')
            const data =await res.json()
            return data;
        }
    })

    const handleMakeAdmin= id =>{
      fetch(`https://doctors-portal-server-julianatonu.vercel.app/users/admin/${id}`,{
        method: 'PUT',
        headers: {
          authorization:`bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then(res =>res.json())
      .then(data=>{
        if(data.modifiedCount > 0){
          toast.success('Make Admin SuccessFull')
          refetch();
        }
      })
    }
    return (
        <div>
            <h2 className="text-2xl font-bold text-primary mt-32">All Users</h2>

            <div className="overflow-x-auto lg:ml-8 sm:mx-3">
  <table className=" mt-10  w-full transform -translate-x -translate-y backdrop-blur-xl bg-white/40 shadow-xl p-10 rounded-lg">
   
    <thead>
      <tr>
        <th className='p-5'></th>
        <th className='p-5'>Name</th>
        <th className='p-5'>Email</th>
        <th className='p-5'>Date</th>
        <th className='p-5'>Time</th>
      </tr>
    </thead>
    <tbody>
      
      {users.map((user, i) =><tr key={user._id} >
        <th className='p-5'>{i+1}</th>
        <td className='p-5'>{user.name}</td>
        <td className='p-5'>{user.email}</td>
        <td className='p-5'>{ user?.role !=='admin' && <button onClick={()=> handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
        <td className='p-5 mt-5'><button className='btn btn-xs btn-Danger'>Delete</button></td>
       
      </tr>)}
      
      
    </tbody>
  </table>
</div>


        </div>
    );
};

export default AllUsers;