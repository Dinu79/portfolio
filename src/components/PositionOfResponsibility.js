import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaChalkboardTeacher, FaLaptopCode, FaResearchgate } from 'react-icons/fa';

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

const PositionsSection = styled.section`
  padding: 60px 20px;
  background: #121212;
  animation: ${fadeIn} 2s ease-in-out;
  border-radius: 12px;
  text-align: center;
`;

const gradientText = `
  background: linear-gradient(90deg, #7F00FF, #E100FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const PositionsTitle = styled.h2`
  ${gradientText}
  margin-bottom: 50px;
  font-size: 3.5em;
  font-weight: bold;
  letter-spacing: 2px;
  font-family: 'Poppins', sans-serif;
`;

const PositionsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-items: center;
`;

const PositionItem = styled.div`
  background: #1f1f1f;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  color: #ffffff;
  padding: 30px 20px;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  min-height: 280px;
  width: 100%;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7);
  }
`;

const PositionYear = styled.h3`
  ${gradientText}
  font-size: 1.5em;
  margin-bottom: 8px;
  font-family: 'Montserrat', sans-serif;
  word-wrap: break-word;
`;

const PositionTitle = styled.p`
  font-size: 1.1em;
  margin-bottom: 8px;
  color: #d3d3d3;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  word-wrap: break-word;
`;

const PositionCompany = styled.p`
  font-size: 1em;
  color: #b3b3b3;
  font-family: 'Roboto', sans-serif;
  word-wrap: break-word;
`;

const IconWrapper = styled.div`
  font-size: 3em;
  margin-bottom: 20px;
  color: #E100FF;
`;

const PositionOfResponsibility = () => {
  const positions = [
    { year: 'May 2023 - July 2023', title: 'Moderator and Problem Setter', company: 'Coding Club, NIT Silchar, Assam', icon: <FaChalkboardTeacher /> },
    { year: 'May 2023 - July 2023', title: 'Competitive Programming Wing Member', company: 'Computer Science Society, NIT Silchar', icon: <FaLaptopCode /> },
    { year: 'June 2022 - July 2022', title: 'Research Intern', company: 'S.N. Bose National Centre for Basic Sciences, Kolkata', icon: <FaResearchgate /> },
  ];

  return (
    <PositionsSection id="por">
      <PositionsTitle>My Experience</PositionsTitle>
      <PositionsList>
        {positions.map((position, index) => (
          <PositionItem key={index}>
            <IconWrapper>
              {position.icon}
            </IconWrapper>
            <PositionYear>{position.year}</PositionYear>
            <PositionTitle>{position.title}</PositionTitle>
            <PositionCompany>{position.company}</PositionCompany>
          </PositionItem>
        ))}
      </PositionsList>
    </PositionsSection>
  );
};

export default PositionOfResponsibility;
