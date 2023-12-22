import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';
import About from './components/About';
import Links from './components/Links';
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
    transition: color 0.3s ease; /* Add smooth transition for color change */
  }

  a:hover,
  a:focus,
  a:active {
    color: blue;
  }
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Links">Links</Link>
        </Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Links" element={<Links />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;
