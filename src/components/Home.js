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
  text-align: center;
`;

const Home = () => (
    <div>
    <WelcomeContainer>
      <h1>Welcome to Dr. Baljic Family Care</h1>
      <p>Quality Care You Can Trust</p>
    </WelcomeContainer>
    <Description>
      <p>Christel does not intend to replace your primary care physician, but rather supplement your current health care with one-time same day consultations (as available). She does not bill any insurance but can provide an itemized receipt if requested. </p>
      <p>There is no specific charge for services; please pay what you feel is reasonable and affordable. To keep expenses low, she does not carry malpractice insurance (an allowed option for physicians in California) or maintain a support staff.</p>
      <p>If you would like to be seen, please text Christel directly at 916-769-2412 with your name, general reason to be seen, and times available within the next 48 hours. Depending on availability, you will be texted back with an appointment time.</p>
    </Description>
    <OfficeInfo>
    <div class="alldivs">
    <div class="personalinfo">
    <h2>Location</h2>
    <p>Our home office is located at: 2544 I St, Rio Linda, CA 95673</p>
    </div>
    {/* <div class="personalinfo">
    <h2>Hours Of Operation</h2>
    <p>Monday - Friday : 7am - 5pm</p>
    </div> */}
    <div class="personalinfo">
    <h2>Contact Info</h2>
    <p>Phone: (916)769-2412</p>
    <p>Email: office@drbaljic.com</p>
    </div>
    </div>
    </OfficeInfo>
    </div>
);

export default Home;
