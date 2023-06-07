import React from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import mensImg  from '../../../assets/mens.webp'
const AppointmentBanner = ({selected, setSelected}) => {

    return (
        <section>
            <div className="hero container py-20 ">
  <div className="hero-content flex-col lg:flex-row-reverse justify-center gap-5">
  <div className='lg:w-1/2'>
  <img src={mensImg} alt='dentist chair'  className='w-full rounded '/>
  </div>
    <div className='lg:w-1/2'>
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
    />
    </div>
  </div>
</div>
        </section>
    );
};

export default AppointmentBanner;