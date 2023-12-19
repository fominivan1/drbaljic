// src/components/PatientList.js
import React from 'react';
import styled from 'styled-components';

const PatientListItem = styled.li`
  padding: 10px;
  border: 1px solid #ccc;
  margin: 5px;
  border-radius: 5px;
`;

const PatientList = ({ patients }) => (
  <div>
    <h2>Patients</h2>
    <ul>
      {patients.map(patient => (
        <PatientListItem key={patient.id}>{patient.name}</PatientListItem>
      ))}
    </ul>
  </div>
);

export default PatientList;