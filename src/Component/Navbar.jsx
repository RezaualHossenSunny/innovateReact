import React from 'react'
import logo from '../assets/Logo.png'
import { IoIosArrowDown } from "react-icons/io";
import Button from '../Layout/Button';
import Buttonsecond from '../Layout/Buttonsecond';
const Navbar = () => {
  return (
 <div  className='bg-covers bg-no-repeat bg-cover bg-center'>
     <div className='max-w-container mx-auto py-8'>
       <div className='flex'>
       <div className='w-1/5'>
       <img src={logo}/>
       </div>
        <div className='w-2/5 flex justify-between ml-32 py-4'>
        <div className='flex gap-1'>
          <p className='text-white text-lg font-medium'>Home</p>
          <IoIosArrowDown  className='text-white text-lg font-medium mt-2'/>
        </div>
        <div>
          <p className='text-white text-lg font-medium'>Features</p>
        </div>
        <div className='flex gap-1'>
          <p className='text-white text-lg font-medium'>Service</p>
          <IoIosArrowDown  className='text-white text-lg font-medium mt-2'/>
        </div>
        <div className='flex gap-1'>
          <p className='text-white text-lg font-medium'>Pages</p>
          <IoIosArrowDown  className='text-white text-lg font-medium mt-2'/>
        </div>
        <div>
          <p className='text-white text-lg font-medium'>Blog</p>
        </div>
       
        </div>
        <div className='w-2/5 flex  py-2 ml-10 gap-x-10 justify-end'>
        <Buttonsecond/>
        <Button/>
        </div>
       </div>
    </div>
 </div>
  )
}

export default Navbar