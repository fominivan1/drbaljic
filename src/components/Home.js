import React from 'react';
import styled from 'styled-components';


const WelcomeContainer = styled.div`
  text-align: center;
  font-size: 30px;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: #333;
`;

const OfficeInfo = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: #333;
`;

const Home = () => (
    <div>
    <WelcomeContainer>
      <h1>Welcome to Dr. Baljic Family Care</h1>
      <p>Quality Care You Can Trust</p>
    </WelcomeContainer>
    <Description>
      Our clinic is dedicated to providing high-quality healthcare services to our patients. With a team of
      experienced and compassionate doctors, we are committed to promoting the well-being of our community.
      Explore our patient management system, schedule appointments, and stay connected with your healthcare journey.
    </Description>
    <OfficeInfo>
      <p>{/* Your office info content goes here */}</p>
    </OfficeInfo>
    </div>
);

export default Home;
