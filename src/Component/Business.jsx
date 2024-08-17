import React from 'react'
import buis from '../assets/busisnes.png'
import icon1 from '../assets/Rocket.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/Security.png'
const Business = () => {
  return (
    <div>
        <div className='max-w-container mx-auto py-8 flex justify-between'>
            <div className='w-2/4'>
            <img src={buis}/>
            </div>
            <div className='w-2/4 ml-[163px]'>
            <h1 className='font-chirvo font-bold text-5xl text-second w-[553px]'>We provide features for your Business</h1>

            <div className='flex justify-between mt-[80px] gap-x-14' >
                <div className='w-2/4'>
                <div>
                    <img src={icon1}/>
                    <h3 className='font-chirvo text-xl font-bold py-3'>Fast and Easy to use</h3>
                    <p className='py-1 text-gray text-lg font-normal'>Easily to convert API with just a few clicks</p>

                </div>

                <div className='mt-[40px]'>
                    <img src={icon2}/>
                    <h3 className='font-chirvo text-xl font-bold py-3'>Get Organized</h3>
                    <p className='py-1 text-gray text-lg font-normal'>Easily to convert API with just a few clicks</p>

                </div>





                </div>

                <div className='w-2/4'>

                <div>
                    <img src={icon3}/>
                    <h3 className='font-chirvo text-xl font-bold py-3'>Safely Security</h3>
                    <p className='py-1 text-gray text-lg font-normal'>Easily to convert API with just a few clicks</p>

                </div>


                <div className='py-4 px-10 border-2 bg-blue rounded-md w-[196px]  mt-[90px] border-white'>
        <p className='text-white text-lg font-medium text-center'>Get Started</p>


        
    </div>
                
                </div>

            </div>
            </div>
        </div>
    </div>
  )
}

export default Business