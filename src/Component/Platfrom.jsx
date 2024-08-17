import React from 'react'
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
import pic4 from '../assets/v1.png'
import pic5 from '../assets/v2.png'

const Platfrom = () => {
  return (
    <div>
        <div  className='mt-[450px] max-w-container mx-auto'>
            <div className='flex justify-between'>
                <div className='w-6/12'>
                <h1 className='text-second text-5xl font-bold  w-[504px] font-Chivo'>How simple is it to use our platform?</h1>
                </div>
                <div className='w-6/12'>
                <p className='text-[#645E76] text-lg font-semibold w-[530px]'>This Innovate Con guide explores the most popular platforms and walks you through how to use them to grow your business.</p>
                </div>
            </div>


            <div className='py-32 flex justify-between'>

                <div className='w-1/4'>
                <img className='mx-auto' src={pic1}/>
                <h2 className='py-4 text-center  mx-auto w-[330px] text-second  text-2xl font-extrabold font-chirvo '> Login or sign up to be able use our platform </h2>

                <p className="text-gray py-1 w-[300px] text-center mx-auto text-lg font-normal">This quickstart shows you how to use Identity Platform to sign in a user with an email and password. </p>

                </div>
                 
                 <img className='w-[262px] h-[58px] py-2' src={pic4}/>

                <div className='w-1/4'>
                <img className='mx-auto' src={pic3}/>
                <h2 className='py-4 text-center  mx-auto w-[330px] text-second  text-2xl font-extrabold font-chirvo '>Connect your website with just a few click </h2>

                <p className="text-gray py-1 w-[300px] text-center mx-auto text-lg font-normal">Once your website is online, you can configure it, I will show you how to put your website online </p>

                </div>

                <img className='w-[262px] h-[58px] py-2' src={pic5}/>

                <div className='w-1/4'>
                <img className='mx-auto' src={pic2}/>
                <h2 className='py-4 text-center  mx-auto w-[330px] text-second  text-2xl font-extrabold font-chirvo '> Take some sales data that you want </h2>

                <p className="text-gray py-1 w-[300px] text-center mx-auto text-lg font-normal">Sell your data directly: The most straightforward method is to sell your data directly to another</p>

                </div>


            </div>




        </div>
    </div>
  )
}

export default Platfrom