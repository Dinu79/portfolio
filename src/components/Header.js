import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaUser, FaProjectDiagram, FaTools, FaTrophy, FaEnvelope, FaGraduationCap, FaClipboardList } from 'react-icons/fa';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: linear-gradient(135deg, #1c1c1c, #2c2c2c);
  color: #ffffff;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 1.5s ease-in-out;
`;

const Logo = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 1.5em;
  font-weight: 700;
  background: linear-gradient(90deg, #7F00FF, #E100FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }

  li {
    position: relative;
  }

  a {
    text-decoration: none;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    transition: color 0.3s ease;
    display: flex;
    align-items: center;
    gap: 5px;

    &:hover {
      color: #E100FF;
    }

    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      background: #E100FF;
      left: 50%;
      bottom: -5px;
      transition: width 0.3s ease, left 0.3s ease;
    }

    &:hover::after {
      width: 100%;
      left: 0;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Dinesh Aragonda</Logo>
      <Nav>
        <ul>
          <li><a href="#about"><FaUser /> About</a></li>
          <li><a href="#projects"><FaProjectDiagram /> Projects</a></li>
          <li><a href="#skills"><FaTools /> Skills</a></li>
          <li><a href="#achievements"><FaTrophy /> Achievements</a></li>
          <li><a href="#education"><FaGraduationCap /> Education</a></li>
          <li><a href="#por"><FaClipboardList /> POR</a></li>
          <li><a href="#contact"><FaEnvelope /> Contact</a></li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
