import React from "react";

const Banner = () => {
  return (
    <div className="lg:mt-32 mt-10 container">
      <h1 className="italic lg:text-9xl text-7xl font-secondary font-extralight underline text-center ">
        Shine Up
      </h1>
      <h2 className="font-semibold font-primary italic mt-6 lg:text-7xl text-4xl text-center ">
        With Skin Care for Men
      </h2>
      <div className="flex justify-between gap-5 my-16">
        <div className="lg:w-2/6 w-1/2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <button className="btn btn-outline rounded-full lg:px-16 mt-10">
            Learn More
          </button>
        </div>
        <div className="lg:w-2/6 w-1/2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <div className="flex justify-end">

          <button className="btn btn-outline rounded-full lg:px-16 mt-10 ">
            Learn More
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
