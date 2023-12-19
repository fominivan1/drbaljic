// src/components/Home.js
import React from 'react';
import styled from 'styled-components';

const WelcomeContainer = styled.div`
  background-color: #3498db;
  color: #fff;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: #333;
`;

const Home = () => (
  <div>
    <WelcomeContainer>
      <h1>Welcome to the Doctor Baljic's Clinic App</h1>
      <p>Your Trusted Partner in Healthcare</p>
    </WelcomeContainer>
    <Description>
      Our clinic is dedicated to providing high-quality healthcare services to our patients. With a team of
      experienced and compassionate doctors, we are committed to promoting the well-being of our community.
      Explore our patient management system, schedule appointments, and stay connected with your healthcare journey.
    </Description>
  </div>
);

export default Home;
