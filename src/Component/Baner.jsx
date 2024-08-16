import React from "react";
import laptop from "../assets/lap.png";
const Baner = () => {
  return (
    <div>
      <div className="max-w-container mx-auto py-18">
        <h1 className="text-white mx-auto text-center text-[56px] font-normal w-[796px]">
          Get your work done with Management Tool
        </h1>

        <p className="text-white mx-auto text-center text-lg font-normal w-[467px] py-4">
          The world's first project management platform that connects everything
        </p>

        <div className="mx-auto w-[480px] py-5 relative ">
          <input
            className="py-5 px-6 w-[480px] rounded-lg"
            placeholder="Your business email"
          />

          <div className="py-3 px-10 border-2 bg-comon rounded-md w-[180px] absolute top-6 right-1  ">
            <p className="text-second text-lg font-medium text-center">
              Try for free
            </p>
          </div>
        </div>

        <div className="py-2 mx-auto ml-2 "> 
            <img className="w-[1200px]" src={laptop}/>
        </div> 
       
        
      </div>
    </div>
  );
};

export default Baner;
