import React from 'react'
import Logo10 from "../assets/Group 16.png"

const Footer = () => {
  return (
   
    <div className='h-auto bg-gray-700'>
    <div className='flex md:flex-row flex-col md:gap-5 '>
        <div className='md:mx-48 mx-28 my-10'>
            <img className='' src={Logo10} width={150} height={200}  alt="" />
        </div>
        <div className='flex my-10 justify-center md:mx-10 gap-10 md:gap-48'>
            <div>
                <p className='text-green-700'>Quick Links</p>
                <p className='text-white'>Home</p>
                <p className='text-white'>About Us</p>
                <p className='text-white'>Courses</p>
                <p className='text-white'>Gallery</p>
            </div>
            <div>
                <p className='text-green-700'>Quick Links</p>
                <p className='text-white'>Home</p>
                <p className='text-white'>About Us</p>
                <p className='text-white'>Courses</p>
                <p className='text-white'>Gallery</p>
            </div>
            <div>
                <p className='text-green-700'>Quick Links</p>
                <p className='text-white'>Home</p>
                <p className='text-white'>About Us</p>
                <p className='text-white'>Courses</p>
                <p className='text-white'>Gallery</p>
            </div>
        </div>
        
    </div>
    <p className='text-white text-center pb-5'>Copyright © 2024 DeployAd School</p>
    </div>
  )
}

export default Footer