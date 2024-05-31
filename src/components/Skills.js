import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiCplusplus } from 'react-icons/si';

const gradient = 'linear-gradient(90deg, #5A00CC, #B200CC)';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SkillsSection = styled.section`
  padding: 60px 20px;
  background: #121212;
  animation: ${fadeIn} 2s ease-in-out;
`;

const Title = styled.h2`
  color: #ffffff;
  background: ${gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin-bottom: 50px;
  font-size: 3em;
  font-weight: bold;
  letter-spacing: 1.5px;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  justify-items: center;
  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const SkillItem = styled.div`
  background: #1c1c1c;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  color: #ffffff;
  padding: 40px 20px;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }
`;

const IconWrapper = styled.div`
  font-size: 3em;
  margin-bottom: 15px;
  display: inline-block;

  svg {
    width: 100%;
    height: 100%;
    fill: url(#icon-gradient);
  }
`;

const SkillName = styled.span`
  font-size: 1.2em;
  font-weight: bold;
  background: ${gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: <FaJsSquare /> },
    { name: 'ReactJS', icon: <FaReact /> },
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'C++', icon: <SiCplusplus /> },
  ];

  return (
    <SkillsSection id="skills">
      <svg width="0" height="0">
        <defs>
          <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#5A00CC', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#B200CC', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
      <Title>My Skills</Title>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillItem key={index}>
            <IconWrapper>{skill.icon}</IconWrapper>
            <SkillName>{skill.name}</SkillName>
          </SkillItem>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills;
