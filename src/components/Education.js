import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaSchool, FaUniversity } from 'react-icons/fa';

// Define the fadeIn animation
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

// Define the gradientText style
const gradientText = `
  background: linear-gradient(90deg, #7F00FF, #E100FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const EducationSection = styled.section`
  padding: 60px 20px;
  background: #121212;
  animation: ${fadeIn} 2s ease-in-out;
  text-align: center;
`;

const SectionTitle = styled.h2`
  ${gradientText}
  margin-bottom: 50px;
  font-size: 3em;
  font-weight: bold;
  letter-spacing: 1.5px;
  font-family: 'Poppins', sans-serif;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-items: center;
`;

const Card = styled.div`
  background-color: #1f1f1f;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  color: #ffffff;
  padding: 30px 20px;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  animation: ${fadeIn} 2s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7);
  }
`;

const CardHeader = styled.h3`
  ${gradientText}
  font-size: 1.5em;
  margin-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
`;

const CardContent = styled.p`
  font-size: 1em;
  margin-bottom: 10px;
  color: #a0a0a0;
  font-family: 'Roboto', sans-serif;
`;

const IconWrapper = styled.div`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #E100FF;
`;

const Education = () => {
  return (
    <EducationSection id="education">
      <SectionTitle>Education</SectionTitle>
      <Grid>
        <Card>
          <IconWrapper>
            <FaUniversity />
          </IconWrapper>
          <CardHeader>National Institute of Technology, Silchar</CardHeader>
          <CardContent>Bachelor of Technology - Computer Science and Engineering; CGPA: 8.77</CardContent>
          <CardContent>December 2021 - ongoing</CardContent>
        </Card>
        <Card>
          <IconWrapper>
            <FaSchool />
          </IconWrapper>
          <CardHeader>Mangal Vidyalayam, Chittoor</CardHeader>
          <CardContent>CBSE ; Percentage/CGPA: 94.2</CardContent>
          <CardContent>April 2018 - April 2020</CardContent>
        </Card>
        <Card>
          <IconWrapper>
            <FaSchool />
          </IconWrapper>
          <CardHeader>Mangal Vidyalayam, Chittoor</CardHeader>
          <CardContent>CBSE ; Percentage/CGPA: 92.2</CardContent>
          <CardContent>April 2012 - April 2018</CardContent>
        </Card>
      </Grid>
    </EducationSection>
  );
};

export default Education;
