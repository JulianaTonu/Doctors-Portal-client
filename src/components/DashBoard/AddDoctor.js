import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AddDoctor = () => {
    const imageHostKey = process.env.REACT_APP_imgbb_key
    
console.log('key',imageHostKey)

const {data: specialties, isLoading}=useQuery({
    queryKey: ['specialty'],
    queryFn :async ()=>{
        const res =await fetch('https://doctors-portal-server-julianatonu.vercel.app/appointmentSpecialty')
        const data =await res.json()
        return data;
    }
})

    const handleAddDoctor=event =>{
        event.preventDefault()
        const form =event.target
        const name=form.name.value
        const email =form.email.value;
        const specialty=form.specialty.value
        const photo=form.photo.value
        const formData =new FormData()
        formData.append('photo', photo);
        const url =`https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`
        fetch(url, {
            method:'POST',
            body: formData
        })
        .then(res =>res.json())
        .then(imgData=>{
            console.log(imgData)
        })
        console.log(name,email,specialty,photo)

    }

    if(isLoading){
        return<div>LOAdinGG..</div>
    }
    return (
        <div className='lg:ml-32 shadow-2xl w-96 mt-24 my-10 py-3 text-center'>
          <h2 className="text-2xl font-bold text-primary ">Add Doctor</h2>


          <form onSubmit={handleAddDoctor}  className="card-body">

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Specialty</span>
                </label>
                <select name='specialty' className="select select-bordered w-full max-w-xs">
  <option disabled selected>Please select a specialty</option>
{
    specialties.map(specialty=>  <option
    key={specialty._id}
    value={specialty.name}
    
    >{specialty.name}</option>)
}
  
</select>
                {/* <input type="text" name='specialty' placeholder="" className="input input-bordered" /> */}
                
              </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="file" name='photo' placeholder="photo" className="input input-bordered" />
              </div>

              <div className="form-control mt-6">
                <input type="submit" value="ADD" className="btn bg-primary"/>
           
               
              </div>
            </form>
        </div>
    );
};

export default AddDoctor;