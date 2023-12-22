// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import styled from 'styled-components';
// import AppointmentScheduler from './components/AppointmentScheduler';
// import Appointments from './components/Appointments';
import Home from './components/Home';
import About from './components/About'
import './App.css';

const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Arial', sans-serif;
`;

const Navigation = styled.nav`
  text-align: center;
  padding: 10px;
  color: white;

  a {
    color: black;
    text-decoration: none;
    margin-right: 15px;
  }
`;

const App = () => {

  // const [appointments, setAppointments] = useState([
  //   { id: 1, patientName: 'John Doe', date: '2023-01-01' },
  //   { id: 2, patientName: 'Jane Smith', date: '2023-02-01' },
  //   // Add more appointment data as needed
  // ]);

  // const scheduleAppointment = ({ patientName, appointmentDate }) => {
  //   const newAppointment = {
  //     id: appointments.length + 1,
  //     patientName,
  //     date: appointmentDate,
  //   };

  //   setAppointments([...appointments, newAppointment]);

  //   // You can add logic to send this appointment data to a server for storage
  //   // This is a simplified example without server integration
  // };

  return (
    <Router>
      <AppContainer>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
        </Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;
