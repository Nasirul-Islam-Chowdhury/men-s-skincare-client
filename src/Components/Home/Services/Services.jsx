import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../../Shared/Loading/Loading";

const Services = () => {
  const [services, setServices] = useState([]);
  const [laoding, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://men-s-skincare-server.vercel.app/limitedServices")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setServices(data);
      });
  }, []);
  if (laoding) {
    return <Loading/>
  }
  return (
    <div className="container py-20">
      <h1 className="italic lg:text-7xl text-5xl font-secondary font-extralight underline text-center ">
        Our Services
      </h1>
      <h2 className="font-semibold font-primary italic mt-6 lg:text-5xl text-3xl text-center ">
        We Provide the Best Services
      </h2>
      <p className="text-center lg:w-1/2 my-5 mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
        {services.map((service) => (
          <div key={service._id} className="card card-compact lg:w-96 w-full  shadow-xl mx-auto">
            <figure>
              <img
                src={service.img}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service.name}</h2>
              <div className="flex justify-between ">
              <p className="text-lg">Price: <span className="font-semibold">${service.price}</span></p>
              <p className="text-lg">Duration: <span className="font-semibold">{service.duration} day</span></p>
              </div>
              <p>{service.description}</p>
            </div>
          </div>
        
        ))}
        
      </div>
      <div className="text-center my-10">
            <button className="btn btn-outline">
              <Link to="/appointment">See All Services</Link>
            </button>
            </div>
    </div>
  );
};

export default Services;
