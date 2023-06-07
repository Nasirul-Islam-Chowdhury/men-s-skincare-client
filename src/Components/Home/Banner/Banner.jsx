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
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="btn btn-outline rounded-full px-16 mt-10">
            Learn More
          </button>
        </div>
        <div className="lg:w-2/6 w-1/2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <h3>Lorem ipsum dolor sit amet.</h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
