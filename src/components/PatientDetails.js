// src/components/PatientDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const PatientDetails = ({ patients }) => {
  const { id } = useParams();
  const patient = patients.find(p => p.id === parseInt(id));

  return (
    <div>
      <h2>Patient Details</h2>
      {patient ? (
        <div>
          <h3>{patient.name}</h3>
          <p>ID: {patient.id}</p>
          {/* Add more patient details */}
        </div>
      ) : (
        <p>Patient not found.</p>
      )}
    </div>
  );
};

export default PatientDetails;

