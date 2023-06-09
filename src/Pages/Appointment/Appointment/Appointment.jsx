import React, { useState } from 'react';
import AppointmentOption from '../AppointmentOption/AppointmentOption';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import { useTitle } from '../../../Shared/Title/useTitle';

const Appointment = () => {
    useTitle("Appointment")
    const [selected, setSelected] = useState(new Date());
    return (
        <div>
            <AppointmentBanner selected={selected} setSelected={setSelected}/>
            <AppointmentOption selected={selected}/>
        </div>
    );
};

export default Appointment;