import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import ConfirmationModal from '../Shared/ConfirmationModal';
import { toast } from 'react-hot-toast';

const ManageDoctors = () => {
const [deletingDoctor,setDeletingDoctor]=useState(null)
    const {data: doctors, isLoading, refetch}=useQuery({
queryKey :['doctors'],
queryFn: async ()=>{
    try{
        const res =await fetch('https://doctors-portal-server-julianatonu.vercel.app/doctors',{
            headers:{
                authorization:`bearer $localStorage.getItem('accessToken')`

            }
        })
        const data =await res.json()
        return data;

    }
    catch(error){

    }
}
    })

    if(isLoading){
      return<div>Loading..</div>
    }



    const closeModal =()=>{
      setDeletingDoctor(null)
    }

    const handleDeleteDoctor = doctor =>{
     fetch(`https://doctors-portal-server-julianatonu.vercel.app/doctors/${doctor._id}`,{
      method:'DELETE',
      headers:{
        authorization:`bearer ${localStorage.getItem('accesToken')}`
      }
     })
     .then(res=>res.json())
     .then(data=>{
      console.log(data)
      if(data.deletedCount > 0){
        refetch()
      toast.success('Doctor deleted successfully')
      }
     })
    }
    return (
        <div className="">
          <h2 className="text-4xl mt-24 text-primary">Manage Doctor</h2>

          <div className="overflow-x-auto w-full">
  <table className=" mt-10  w-96 mx-auto transform -translate-x -translate-y backdrop-blur-xl bg-white/40 shadow-xl p-10 rounded-lg">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Avater</th>
        <th>Name</th>
        <th>Email</th>
        <th>Specialty</th>
        <th>Action</th>

        <th></th>
      </tr>
    </thead>
    <tbody>
    
 {
    doctors.map((doctor, i)=><tr
    key={doctor._id}>
    <th className='p-3'>{i+1}</th>
    <td className='p-3'><div className="avatar">
  <div className="w-24 rounded-full">
    <img src={doctor.image} alt='' />
  </div>
  </div></td>
    <td className='p-3'>{doctor.name}</td>
    <td className='p-3'>{doctor.email}</td>
    <td className='p-3'>{doctor.specialty}</td>
    
    <td className='p-3'> <label onClick={()=> setDeletingDoctor(doctor)} htmlFor="confirm-modal" className="btn btn-sm">Delete</label></td>
   
  </tr>
    )
 }
      
    </tbody>
    
    
  </table>
</div>
{
  deletingDoctor && <ConfirmationModal
  title={`Are you sure you want to delete?`}
message={`If you delete ${deletingDoctor.name}.It can not be undone`}
successAction ={handleDeleteDoctor}
modalData ={deletingDoctor}
closeModal={closeModal}
  ></ConfirmationModal>
}
        </div>
    );
};

export default ManageDoctors;