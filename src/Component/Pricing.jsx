import React from 'react'
import icon from '../assets/i1.png' 
import icon1 from '../assets/Check icon.png' 
const Pricing = () => {
  return (
    <div>
        <div className='py-12 max-w-container mx-auto '>
           <h1 className='mx-auto  text-3xl md:text-5xl font-bold font-chirvo w-[330px] md:w-[644px] text-center'>Pricing Designed To Fit Your Business</h1>

  {/* content */}


           <div className=' p-4 md:p-0  md:flex justify-center gap-10 mt-[76px]'>
               
               {/* 1st content */}

            <div className=' w-full md:w-1/3 border-2 rounded-3xl border-[#DCE7FE]'>

            <div className='py-9'>
                <img className='mx-auto' src={icon}/>
                <p className='mt-4 text-center font-chirvo text-lg font-medium text-second'>Personal</p>
                <h2 className='mt-1 text-center text-5xl font-bold text-second font-chirvo'>$10/mth</h2>
                <p className='text-lg mt-3 font-normal text-center'>Annual pricing <span className='text-second'>(save 20%)</span></p>

                <div className='mt-8 ml-5'>
                    <div className='flex gap-10'>
                        <img src={icon1}/>
                        <p>Calendar View</p>

                    </div>

                    <div className='flex gap-10 mt-2'>
                        <img src={icon1}/>
                        <p> Custom Templates</p>

                    </div>

                    <div className='flex gap-10 mt-2'>
                        <img src={icon1}/>
                        <p>list view</p>

                    </div>

                    <div className='flex gap-10 mt-2'>
                        <img src={icon1}/>
                        <p>board view</p>

                    </div>

                    <div className='flex gap-10 mt-2'>
                        <img src={icon1}/>
                        <p>Assignees & Due Dates</p>

                    </div>

                    



                    
             

                </div>

                {/* button */}

                <div className=' py-2 md:py-4 px-6 md:px-10 border-2 bg-blue rounded-md  w-[300px] md:w-[330px] mt-[20px]  md:mt-[90px] border-white mx-auto'>
        <p className='text-white text-lg font-medium text-center'>Purchase Now</p>


        
    </div>

            </div>



            </div>


        {/* 2nd content */}


            <div className=' w-full md:w-1/3 border-2 rounded-3xl border-[#DCE7FE] mt-4 md:mt-0'>

<div className='py-9'>
    <img className='mx-auto' src={icon}/>
    <p className='mt-4 text-center font-chirvo text-lg font-medium text-second'>Personal</p>
    <h2 className='mt-1 text-center text-5xl font-bold text-second font-chirvo'>$10/mth</h2>
    <p className='text-lg mt-3 font-normal text-center'>Annual pricing <span className='text-second'>(save 20%)</span></p>

    <div className='mt-8 ml-5'>
        <div className='flex gap-10'>
            <img src={icon1}/>
            <p>Calendar View</p>

        </div>

        <div className='flex gap-10 mt-2'>
            <img src={icon1}/>
            <p> Custom Templates</p>

        </div>

        <div className='flex gap-10 mt-2'>
            <img src={icon1}/>
            <p>list view</p>

        </div>

        <div className='flex gap-10 mt-2'>
            <img src={icon1}/>
            <p>board view</p>

        </div>

        <div className='flex gap-10 mt-2'>
            <img src={icon1}/>
            <p>Assignees & Due Dates</p>

        </div>

        



        


    </div>

        {/* button */}

        <div className=' py-2 md:py-4 px-6 md:px-10 border-2 bg-blue rounded-md  w-[300px] md:w-[330px] mt-[20px]  md:mt-[90px] border-white mx-auto'>
        <p className='text-white text-lg font-medium text-center'>Purchase Now</p>


        
    </div>

</div>



</div>
  

  {/* 3rd content */}

<div className=' w-full md:w-1/3 border-2 rounded-3xl border-[#DCE7FE] mt-4 md:mt-0'>

<div className='py-9'>
    <img className='mx-auto' src={icon}/>
    <p className='mt-4 text-center font-chirvo text-lg font-medium text-second'>Personal</p>
    <h2 className='mt-1 text-center text-5xl font-bold text-second font-chirvo'>$10/mth</h2>
    <p className='text-lg mt-3 font-normal text-center'>Annual pricing <span className='text-second'>(save 20%)</span></p>

    <div className='mt-8 ml-5'>
        <div className='flex gap-10'>
            <img src={icon1}/>
            <p>Calendar View</p>

        </div>

        <div className='flex gap-10 mt-2'>
            <img src={icon1}/>
            <p> Custom Templates</p>

        </div>

        <div className='flex gap-10 mt-2'>
            <img src={icon1}/>
            <p>list view</p>

        </div>

        <div className='flex gap-10 mt-2'>
            <img src={icon1}/>
            <p>board view</p>

        </div>

        <div className='flex gap-10 mt-2'>
            <img src={icon1}/>
            <p>Assignees & Due Dates</p>

        </div>

        



        


    </div>

         {/* button */}

         <div className=' py-2 md:py-4 px-6 md:px-10 border-2 bg-blue rounded-md  w-[300px] md:w-[330px] mt-[20px]  md:mt-[90px] border-white mx-auto'>
        <p className='text-white text-lg font-medium text-center'>Purchase Now</p>


        
    </div>

</div>



</div>

           </div>
        </div>
    </div>
  )
}

export default Pricing