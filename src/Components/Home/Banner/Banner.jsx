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

Using high-quality skin care and having skin treatments such as facials help promote clear and glowing skin. When you use good skin care products, you remove dead skin cells that regenerate into new cells that have you looking and feeling your best.
          </p>
          <button className="btn btn-outline rounded-full lg:px-16 mt-10">
            Learn More
          </button>
        </div>
        <div className="lg:w-2/6 w-1/2">
          <p>
If your skin appears shiny throughout, you likely have oily skin. If it feels tight and is flaky or scaly, you likely have dry skin. If the shine is only in your T-zone, you probably have combination skin. If your skin feels hydrated and comfortable, but not oily, you likely have normal skin.
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
