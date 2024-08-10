import React from "react";
import { AiTwotoneCar } from "react-icons/ai";
import { BsChevronDoubleDown, BsTools } from "react-icons/bs";
import { GiCartwheel } from "react-icons/gi";
import { PiOfficeChair } from "react-icons/pi";

const HeroNavbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full">
      {/* This is start Navbar */}
      <div className="md:flex hidden justify-between">
        {/* div 1 for  Sale Dashboard */}
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-slate-950 text-slate-50">
            <BsChevronDoubleDown />
          </div>
          <h1 className="py-1 px-16 border border-slate-950">Sale Dashboard</h1>
        </div>
        {/* div 2 for years */}
        <div className="flex gap-1">
          <h1 className="py-1 px-4 border border-slate-500">2021</h1>
          <h1 className="py-1 px-4 border border-slate-500">2022</h1>
          <h1 className="py-1 px-4 border border-slate-500 bg-slate-950 text-slate-50">
            2023
          </h1>
          <h1 className="py-1 px-4 border border-slate-500 bg-slate-950 text-slate-50">
            2024
          </h1>
        </div>
      </div>
      {/* This is end Navbar */}
      <div className="p-3 flex justify-between ">
        {/* This is sales Tab */}
        <div className="md:p-5 p-0 flex items-center  gap-1 md:gap-8">
          <PiOfficeChair className="text-xl md:text-4xl" />
          <div className="text-center ">
            <h1 className="md:text-xl text-[7px] font-bold">746K</h1>
            <h2 className="text-[7px] md:text-base">SALE</h2>
          </div>
        </div>
        {/* This is sales Tab */}
        <div className="md:p-5 p-0 flex items-center  gap-1 md:gap-8">
          <GiCartwheel className="text-lg md:text-4xl" />
          <div className="text-center ">
            <h1 className="md:text-xl text-[7px] font-bold">21.4%</h1>
            <h2 className="text-[7px] md:text-base">GROWTH</h2>
          </div>
        </div>
        {/* This is sales Tab */}
        <div className="md:p-5 p-0 flex items-center  gap-1 md:gap-8">
          <AiTwotoneCar className="text-lg md:text-4xl" />
          <div className="text-center ">
            <h1 className="md:text-xl text-[7px] font-bold">614K</h1>
            <h2 className="text-[7px] md:text-base">PER SALE</h2>
          </div>
        </div>
        {/* This is sales Tab */}
        <div className="md:p-5 p-0 flex items-center  gap-1 md:gap-8">
          <BsTools className="text-lg md:text-4xl" />
          <div className="text-center ">
            <h1 className="md:text-xl text-[7px] font-bold">473K</h1>
            <h2 className="text-[7px] md:text-base">BUDGET</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroNavbar;
