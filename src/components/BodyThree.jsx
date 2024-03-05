import React from "react";
import Logo9 from "../assets/Google_Ads_logo 1.png";
import Logo10 from "../assets/HubSpot-Logo 1.png";
import Logo11 from "../assets/LOGO NEW-01 1.png";
import Logo12 from "../assets/Logo_Google_Analytics 1.png";

const BodyThree = () => {
  return (
    <div className="pb-10">
      <p className="text-2xl font-semibold text-center text-gray-700">
        Our Certification
      </p>
      <div className="flex flex-col md:flex-row my-5 justify-center items-center md:gap-20 gap-10">
        <img src={Logo9} alt="" />
        <img src={Logo10} alt="" />
        <img src={Logo11} alt="" />
        <img src={Logo12} alt="" />
      </div>
    </div>
  );
};

export default BodyThree;
