import React from "react";
import group1 from "../assets/g1.png";
import group2 from "../assets/g2.png";
import group3 from "../assets/g3.png";
import group4 from "../assets/g4.png";
import { FaArrowRight } from "react-icons/fa";
const Works = () => {
  return (
    <div>
      <div className="max-w-container mx-auto py-24">
        <p className="text-center mx-auto text-sm font-bold font-chirvo text-[#FF7364]">
          Our Services
        </p>

        <h2 className="font-chirvo text-second font-bold text-center mx-auto text-5xl mt-2">
          How It Works
        </h2>

        <div className="mt-[80px] flex justify-between gap-[30px]">
          <div className="w-1/4  border-2 border-[#DCE7FE]  rounded-3xl">
            <div className="py-8 ml-[26px]">
              <img src={group1} />
              <p className="mt-2 font-bold text-second  text-2xl font-chirvo">
                Plan Product Roadmap
              </p>

              <p className="mt-4 text-gray text-lg font-medium font-chirvo w-[258px] ">
                A product roadmap is a shared source of truth that outlines the
                vision, direction, priorities
              </p>

              <div className="py-3 flex gap-x-2">
                <p className="text-lg font-medium text-blue ">Read More</p>
                <FaArrowRight className="text-lg font-medium text-blue mt-2" />
              </div>
            </div>
          </div>

          <div className="w-1/4  border-2 border-[#DCE7FE]  rounded-3xl">
            <div className="py-8 ml-[26px]">
              <img src={group2} />
              <p className="mt-2 font-bold text-second  text-2xl font-chirvo">
              Assign Any Work
              </p>

              <p className="mt-4 text-gray text-lg font-medium font-chirvo w-[258px] ">
                A product roadmap is a shared source of truth that outlines the
                vision, direction, priorities
              </p>

              <div className="py-3 flex gap-x-2">
                <p className="text-lg font-medium text-blue ">Read More</p>
                <FaArrowRight className="text-lg font-medium text-blue mt-2" />
              </div>
            </div>
          </div>

          <div className="w-1/4  border-2 border-[#DCE7FE]  rounded-3xl">
            <div className="py-8 ml-[26px]">
              <img src={group3} />
              <p className="mt-2 font-bold text-second  text-2xl font-chirvo">
              Monitor Work Progress
              </p>

              <p className="mt-4 text-gray text-lg font-medium font-chirvo w-[258px] ">
                A product roadmap is a shared source of truth that outlines the
                vision, direction, priorities
              </p>

              <div className="py-3 flex gap-x-2">
                <p className="text-lg font-medium text-blue ">Read More</p>
                <FaArrowRight className="text-lg font-medium text-blue mt-2" />
              </div>
            </div>
          </div>

          <div className="w-1/4  border-2 border-[#DCE7FE]  rounded-3xl">
            <div className="py-8 ml-[26px]">
              <img src={group4} />
              <p className="mt-2 font-bold text-second  text-2xl font-chirvo">
              Pertect Intergration
              </p>

              <p className="mt-4 text-gray text-lg font-medium font-chirvo w-[258px] ">
                A product roadmap is a shared source of truth that outlines the
                vision, direction, priorities
              </p>

              <div className="py-3 flex gap-x-2">
                <p className="text-lg font-medium text-blue ">Read More</p>
                <FaArrowRight className="text-lg font-medium text-blue mt-2" />
              </div>
            </div>
          </div>
        </div>

        <div className='py-4 px-10  border-2 bg-white border-blue rounded-md w-[220px]  mt-[60px] mx-auto '>
    <p className='text-blue text-lg font-medium text-center'>View More</p>
</div>
      </div>
    </div>
  );
};

export default Works;
