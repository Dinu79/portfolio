import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #1c1c1c, #2c2c2c);
  color: #ffffff;
  text-align: center;
  padding: 10px 20px;  /* Further reduced padding */
  box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.3);
  border-top: 2px solid #444;
  animation: ${fadeIn} 1.5s ease-in-out;
  position: relative;
  z-index: 1000;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.9em;  /* Slightly smaller font size */
  letter-spacing: 0.5px;
  font-family: 'Poppins', sans-serif;
`;

const SocialLinks = styled.div`
  margin-top: 10px;  /* Reduced margin */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;  /* Reduced gap */
`;

const SocialLink = styled.a`
  color: #ffffff;
  font-size: 1.5em;  /* Adjusted icon size */
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #E100FF;
    transform: scale(1.2);  /* Adjusted scale */
  }

  svg {
    fill: url(#icon-gradient);
    transition: fill 0.3s ease;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#7F00FF', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#E100FF', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
      <FooterText>&copy; 2024 Dinesh Aragonda. All rights reserved.</FooterText>
      <SocialLinks>
        <SocialLink href="https://github.com/Dinesh-aragonda" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </SocialLink>
        <SocialLink href="https://linkedin.com/in/dinesh-aragonda" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialLink>
        <SocialLink href="https://twitter.com/DineshAragonda" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </SocialLink>
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;
