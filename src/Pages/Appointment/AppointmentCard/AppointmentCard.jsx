import React from 'react';

const AppointmentCard = ({service, setCare}) => {
    return (
        <div key={service._id} className="card card-compact w-96 bg-base-100 shadow-xl ">
        <figure>
          <img
            src={service.img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{service.name}</h2>
        
          <p>{service.description}</p>
          <div className="flex justify-between">
          <p className="text-lg">Price: <span className="font-semibold">${service.price}</span></p>
          <p className="text-lg">Duration: <span className="font-semibold">{service.duration} day</span></p>
          </div>
          <div className='flex justify-center my-4'>
          
          <a onClick={setCare()} href="#my_modal_8"   className="btn btn-outline" >Book Now</a>
          </div>
        </div>
      </div>
    );
};

export default AppointmentCard;