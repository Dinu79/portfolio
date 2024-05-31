import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaMedal, FaTrophy, FaChessKing, FaCode, FaAward, FaRobot } from 'react-icons/fa';

// Define the slideIn animation
const slideIn = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Define the gradientText style
const gradientText = `
  background: linear-gradient(90deg, #7F00FF, #E100FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const AchievementsSection = styled.section`
  padding: 60px 20px;
  background: #121212;
  animation: ${slideIn} 2s ease-in-out;
  border-radius: 12px;
  text-align: center;
`;

const AchievementsTitle = styled.h2`
  ${gradientText}
  margin-bottom: 50px;
  font-size: 3.5em;
  font-weight: bold;
  letter-spacing: 2px;
  font-family: 'Poppins', sans-serif;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-items: center;
`;

const Card = styled.div`
  background: #1f1f1f;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  color: #ffffff;
  padding: 30px 20px;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: left;
  font-family: 'Roboto', sans-serif;
  animation: ${slideIn} 2s ease-in-out;
  display: flex;
  align-items: center;

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
  font-size: 4em; /* Increased icon size */
  margin-right: 20px; /* Space between icon and text */
  display: flex;
  align-items: center;
  background: linear-gradient(90deg, #7F00FF, #E100FF); /* Apply gradient background */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Achievements = () => {
  const achievements = [
    {
      header: 'IMO',
      text: 'Achieved an international rank within the top 350 and a zonal rank of 150',
      icon: <FaMedal />,
    },
    {
      header: 'Techgig Code Gladiator',
      text: 'Semi-finalist in the prestigious competition',
      icon: <FaTrophy />,
    },
    {
      header: 'June Cook-Off 2022',
      text: 'Ranked 76th globally in the highly competitive contest',
      icon: <FaAward />,
    },
    {
      header: 'Chess Tournaments',
      text: 'Secured notable ranks in district and inter-district tournaments',
      icon: <FaChessKing />,
    },
    {
      header: 'Coding Contests',
      text: 'Achieved excellent ranks and ratings across various platforms',
      icon: <FaCode />,
    },
    {
      header: 'Kaggle Competitions',
      text: 'Attained impressive scores in several competitions',
      icon: <FaRobot />,
    },
  ];

  return (
    <AchievementsSection id="achievements">
      <AchievementsTitle>Achievements</AchievementsTitle>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#7F00FF', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#E100FF', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
      <Grid>
        {achievements.map((achievement, index) => (
          <Card key={index}>
            <IconWrapper>
              {React.cloneElement(achievement.icon, { style: { fill: "url(#icon-gradient)" } })}
            </IconWrapper>
            <div>
              <CardHeader>{achievement.header}</CardHeader>
              <CardContent>{achievement.text}</CardContent>
            </div>
          </Card>
        ))}
      </Grid>
    </AchievementsSection>
  );
};

export default Achievements;
