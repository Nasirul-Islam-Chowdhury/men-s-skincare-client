import React, { useState } from 'react';
import AppointmentOption from '../AppointmentOption/AppointmentOption';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div>
            <AppointmentBanner selected={selected} setSelected={setSelected}/>
            <AppointmentOption selected={selected}/>
        </div>
    );
};

export default Appointment;