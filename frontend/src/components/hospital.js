import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HospitalComponent = () => {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/hospital_list');
        setHospitals(response.data.hospitals);
      } catch (error) {
        console.error('Error fetching hospitals:', error);
      }
    };

    fetchHospitals();
  }, []);

  return (
    <div>
      <h1>Hospitals</h1>
      <ul>
        {hospitals.map((hospital, index) => (
          <li key={index}>
            <strong>Name:</strong> {hospital.name}, <strong>Location:</strong> {hospital.location}, <strong>Beds:</strong> {hospital.beds}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HospitalComponent;
