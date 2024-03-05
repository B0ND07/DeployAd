import React from "react";
import Logo from "../assets/Person.svg";

const BodyOne = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-start items-center my-10">
      <div className="w-[50%] flex justify-center items-center text-center">
        <p className="text-5xl font-semibold text-gray-700 line leading-relaxed ">
          Welcome to the <span className="text-green-600">Best</span>
          <br></br> <span className="text-green-600">Digital Marketing</span>{" "}
          <br></br>Institute In Calicut
        </p>
      </div>
      <div>
        <img src={Logo} alt="" />
      </div>
    </div>
  );
};

export default BodyOne;
