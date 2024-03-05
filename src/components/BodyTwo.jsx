import React from "react";
import Logo1 from "../assets/SMM1.png";
import Logo2 from "../assets/growth-hacking 1.png";
import Logo3 from "../assets/Design 1.png";
import Logo4 from "../assets/SEO 1.png";
import Logo5 from "../assets/Performance-Marketing 1.png";
import Logo6 from "../assets/Branding 1.png";
import Logo7 from "../assets/Group 8.png";
import Logo8 from "../assets/Group 9.png";

const BodyTwo = () => {
  return (
    <div className="py-10">
      <h1 className="text-4xl font-semibold text-center text-gray-700">
        What We Teach Here
      </h1>
      <div className="mx-[-133px] md:mx-auto gap-20 grid grid-cols-2 md:grid-cols-3  pl-48 md:pl-56  container py-10">
        <div className="w-48 md:pb-10 ">
          <img src={Logo1} alt="" />
          <p className="text-[14px] mt-10">SOCIAL MARKETING</p>
          <p className="text-xs w-32">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente,
            similique aut. Omnis recusandae praesen
          </p>
        </div>
        <div className="w-48 md:pb-10">
          <img src={Logo2} alt="" />
          <p className="text-[14px] mt-[31px]">Search Engine Optimisation</p>
          <p className="text-xs w-32">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente,
            similique aut. Omnis recusandae praesen
          </p>
        </div>
        <div className="w-48 md:pb-10">
          <img src={Logo3} alt="" />
          <p className="text-[14px] mt-10 md:mt-5">Growth Hacking</p>
          <p className="text-xs w-32">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente,
            similique aut. Omnis recusandae praesen
          </p>
        </div>
        <div className="w-48 pt-2">
          <img src={Logo4} alt="" />
          <p className="text-[14px] mt-1">Branding</p>
          <p className="text-xs w-32">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente,
            similique aut. Omnis recusandae praesen
          </p>
        </div>
        <div className="w-48">
          <img src={Logo5} alt="" />
          <p className="text-[14px] mt-10">Design</p>
          <p className="text-xs w-32">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente,
            similique aut. Omnis recusandae praesen
          </p>
        </div>
        <div className="w-48">
          <img src={Logo6} alt="" />
          <p className="text-[14px] mt-10">Performance Marketing</p>
          <p className="text-xs w-32">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente,
            similique aut. Omnis recusandae praesen
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center py-10">
        <img src={Logo7} alt="" />
      </div>
      <div className="flex items-center justify-center py-10">
        <img src={Logo8} alt="" />
      </div>
    </div>
  );
};

export default BodyTwo;
