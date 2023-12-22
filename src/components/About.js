import React from 'react';
import styled from 'styled-components';

const PictureContainer = styled.div`
  text-align: center;
  font-size: 20px;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const StyledImage = styled.img`
  max-width: 100%; /* Make sure the image doesn't exceed the container's width */
  height: auto;
`;


const About = () => (
  <div>
<<<<<<< HEAD
    <h1>hi</h1>
=======
    <PictureContainer>
      <h1>Meet the Physician!</h1>
    <StyledImage src="images/crystal.jpg" alt="Description of the photo" />
    <div class="aboutmd">
    <h4>
      Dr. Christel Baljic, MD
    </h4>
    <p>Christel Baljic, MD graduated in 2004 from the University of Illinois at Chicago and completed her physician training in Sacramento, CA at the Mercy Methodist Family Practice Residency Program. After ten years of experience at Med7 Urgent Care Centers (now Carbon Health), Christel opened her own micropractice in Rio Linda, CA.</p>
    </div>
    </PictureContainer>
>>>>>>> 9522def (added stuff)
  </div>

  
);

export default About;
