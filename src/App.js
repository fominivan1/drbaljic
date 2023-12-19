// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import styled from 'styled-components';
import PatientList from './components/PatientList';
import AppointmentScheduler from './components/AppointmentScheduler';
import PatientDetails from './components/PatientDetails';
import Appointments from './components/Appointments';
import Home from './components/Home';

const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Arial', sans-serif;
`;

const Navigation = styled.nav`
  background-color: #333;
  padding: 10px;
  color: white;

  a {
    color: white;
    text-decoration: none;
    margin-right: 15px;
  }
`;

const App = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    // Add more patient data as needed
  ]);

  const [appointments, setAppointments] = useState([
    { id: 1, patientName: 'John Doe', date: '2023-01-01' },
    { id: 2, patientName: 'Jane Smith', date: '2023-02-01' },
    // Add more appointment data as needed
  ]);

  const scheduleAppointment = ({ patientName, appointmentDate }) => {
    const newAppointment = {
      id: appointments.length + 1,
      patientName,
      date: appointmentDate,
    };

    setAppointments([...appointments, newAppointment]);

    // You can add logic to send this appointment data to a server for storage
    // This is a simplified example without server integration
  };

  return (
    <Router>
      <AppContainer>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/patients">Patients</Link>
          <Link to="/schedule">Schedule Appointment</Link>
          <Link to="/appointments">Appointments</Link>
        </Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patients" element={<PatientList patients={patients} />} />
          <Route path="/schedule" element={<AppointmentScheduler scheduleAppointment={scheduleAppointment} />} />
          <Route path="/appointments" element={<Appointments appointments={appointments} />} />
          <Route path="/patient/:id" element={<PatientDetails patients={patients} />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;
