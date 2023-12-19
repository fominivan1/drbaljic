// src/components/AppointmentScheduler.js
import React, { useState } from 'react';
import styled from 'styled-components';

const ScheduleForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin-top: 20px;
`;

const ScheduleButton = styled.button`
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

const AppointmentScheduler = ({ scheduleAppointment }) => {
  const [patientName, setPatientName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');

  const handlePatientNameChange = (e) => {
    setPatientName(e.target.value);
  };

  const handleAppointmentDateChange = (e) => {
    setAppointmentDate(e.target.value);
  };

  const handleScheduleAppointment = (e) => {
    e.preventDefault();

    // Basic validation
    if (!patientName || !appointmentDate) {
      alert('Please enter both patient name and appointment date.');
      return;
    }

    // Pass the data to the parent component for handling
    scheduleAppointment({ patientName, appointmentDate });

    // Clear the form fields
    setPatientName('');
    setAppointmentDate('');
  };

  return (
    <div>
      <h2>Schedule Appointment</h2>
      <ScheduleForm onSubmit={handleScheduleAppointment}>
        <label>
          Patient Name:
          <input type="text" value={patientName} onChange={handlePatientNameChange} />
        </label>
        <label>
          Appointment Date:
          <input type="date" value={appointmentDate} onChange={handleAppointmentDateChange} />
        </label>
        <ScheduleButton type="submit">Schedule Now</ScheduleButton>
      </ScheduleForm>
    </div>
  );
};

export default AppointmentScheduler;
