// src/components/Appointments.js
import React from 'react';

const Appointments = ({ appointments }) => (
  <div>
    <h2>Appointments</h2>
    <ul>
      {appointments.map(appointment => (
        <li key={appointment.id}>
          {appointment.patientName} - {appointment.date}
        </li>
      ))}
    </ul>
  </div>
);

export default Appointments;
