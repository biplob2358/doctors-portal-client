import React from "react";
import chair from "../../../assets/images/chair.png";
import background from "../../../assets/images/bg.png";

const Banner = () => {
  return (
    <div
      className="hero"
      style={{
        width: "100%",
        height: "600px",
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
