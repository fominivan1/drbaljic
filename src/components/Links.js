import React from 'react';
import styled from 'styled-components';

const LinksContainer = styled.div`
  text-align: center;
  font-size: 20px;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const StyledLink = styled.a`
  display: block;
  margin-top: 10px;
  color: #333;
  text-decoration: none;
  margin-bottom: 50px;

  &:hover {
    color: blue;
  }

  &:active {
    color: darkblue;
  }
`;

const StyledImage1 = styled.img`
  width: 30%;
  height: 30%;
`;

const StyledImage2 = styled.img`
  width: 30%;
  height: 30%;
`;



const Links = () => (
  <div class='linksdiv'>
    <LinksContainer>
      <h2>Useful Links</h2>
      <StyledImage1 src="images/ncbi.jpg" alt="Description of the photo" />
      <StyledLink class="linkclass" href="https://www.ncbi.nlm.nih.gov/books/NBK501922/m" target="_blank">National Library of Medicine</StyledLink>
      <StyledImage2 src="images/cdc.jpg" alt="Description of the photo" />
      <StyledLink class="linkclass" href="https://www.cdc.gov/growthcharts/clinical_charts.htm" target="_blank">Clinical Growth Charts</StyledLink>
    </LinksContainer>
  </div>
);

export default Links;
