import React from "react";
import HomePageCarousel from "../HomePageCarousel/HomePageCarousel";
import img from "./../../../assets/man_men_mensgrooming_male_skincare_facemask_facecare_selfcare_wellbeing_pampering_beauty.avif";
import { MdVerified } from "react-icons/md";

const Quantity = () => {
  const cards = [
    {
      title: "Dermatologist Tested",
      class: "text-white ",
      img: <MdVerified />,
      description:
        "We bring wright people together to challenge established thinking and drive transfirm in 2023",
    },
    {
      title: "Experinenced",
      img: <MdVerified />,
      class: "bg-[#80807F] text-white",
      description:
        "We bring wright people together to challenge established thinking and drive transfirm in 2023",
    },
    {
      title: "Certified staff",
      img: <MdVerified />,
      class: "bg-[#F4F3EE] text-black",
      description:
        "We bring wright people together to challenge established thinking and drive transfirm in 2023",
    }
  ];
  return (
    <div>
      <div className="bg-[#252422] text-white ">
        <div className="container py-10 lg:flex justify-between items-center ">
          <div className="lg:w-3/12 ">
            <h2 className="text-2xl font-bold font-primary italic ">
              LookBook Glowmen
            </h2>
            <div className="w-full">
              <HomePageCarousel className="w-full mx-auto" />
            </div>
          </div>
          <div className="lg:w-6/12 mx-auto">
            <div className="relative w-4/6 h-full lg:top-[-250px] mx-auto">
              <img className="rounded-full w-full " src={img} alt="" />
            </div>
          </div>
          <div className=" lg:w-3/12">
            <div className="flex justify-center items-center gap-5">
              <h2 className="text-8xl font-secondary italic">01</h2>
              <h4 className="font-bold text-xl font-primary">
                Number One Quality
              </h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi dolorum minus ducimus culpa a sit adipisci ad debitis
              pariatur et!
            </p>
          </div>
        </div>

        <div className="inline-flex items-center justify-center w-full  mx-auto text-light">
          <hr className="w-full h-0.5  bg-gray-100 border-0 rounded container" />
        </div>
      </div>

      <div className="bg-[#252422] py-32">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 container mx-auto">
          {cards.map((card, i) => (
            <div key={i} className={`card w-96 border-2  p-5 my-5 ${card.class} mx-auto`}>
              <div className="card-body">
               
                  <MdVerified className="w-14 h-14 mx-0"/>
           
                <h2 className="card-title font-bold text-2xl font-primary italic">{card.title}</h2>
                <p >{card.description}</p>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quantity;
