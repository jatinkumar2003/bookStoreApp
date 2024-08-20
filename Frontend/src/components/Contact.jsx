import React from 'react'
import {Link}  from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"

function Contact() {

    const {
        register,
          handleSubmit,
          formState: { errors },
        } = useForm()
      
        const onSubmit = (data) => console.log(data)

  return (
    <>
      <div className='flex h-screen items-center justify-center'> 
      <div className="  w-[600px]">   
          <h3 className="font-bold text-xl">Contact Us</h3>
          {/* Name */}
          <div className='mt-4 space-y-2'>
            <span>Name</span>
            <br/>
            <input type="text"
              placeholder='Enter your fullname'
              className='w-80 px-3 py-1 border rounded-md outline-none'
              {...register("name", { required: true })}/>
              <br/>
              {errors.name && <span className='text-sm text-red-500 '>This field is required</span>}
          </div>
          {/* Email */}
          <div className='mt-4 space-y-2'>
            <span>Email</span>
            <br/>
            <input type="email"
              placeholder='Enter your email'
              className='w-80 px-3 py-1 border rounded-md outline-none'
              {...register("email", { required: true })}/>
              <br/>
              {errors.email && <span className='text-sm text-red-500 '>This field is required</span>}
          </div>
          {/* Message */}
          <div className='mt-4 space-y-2'>
            <span>Message</span>
            <br/>
            <input type="text"
              placeholder='Enter your Password'
              className='w-80 px-3 py-1 border rounded-md outline-none'
              {...register("message", { required: true })}/>
              <br/>
              {errors.message && <span className='text-sm text-red-500 '>This field is required</span>}
          </div>
          {/* Button */}
           <div className=' mt-8'>
             <button className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                Submit</button>
           
                </div>
         </div>
    </div>
    </>
  )
}

export default Contact