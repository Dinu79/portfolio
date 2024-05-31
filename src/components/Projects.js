import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ProjectsSection = styled.section`
  padding: 60px 20px;
  background: #121212;
  animation: ${fadeIn} 2s ease-in-out;
`;

const gradientText = `
  background: linear-gradient(90deg, #7F00FF, #E100FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Title = styled.h2`
  ${gradientText}
  text-align: center;
  margin-bottom: 50px;
  font-size: 3em;
  font-weight: bold;
  letter-spacing: 1.5px;
  font-family: 'Poppins', sans-serif;
`;

const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-items: center;

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectCard = styled.div`
  background: #1f1f1f;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  color: #ffffff;
  padding: 30px 20px;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  font-family: 'Roboto', sans-serif;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7);
  }
`;

const ProjectTitle = styled.h3`
  ${gradientText}
  font-size: 1.5em;
  margin-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
`;

const ProjectDescription = styled.p`
  font-size: 1em;
  margin-bottom: 15px;
`;

const Technologies = styled.p`
  font-size: 0.9em;
  margin-bottom: 20px;
  strong {
    font-weight: bold;
  }
`;

const ProjectLink = styled.a`
  color: #ffffff;
  background: linear-gradient(90deg, #7F00FF, #E100FF);
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s ease, transform 0.3s ease;
  display: inline-block;
  font-family: 'Roboto', sans-serif;

  &:hover {
    background: linear-gradient(90deg, #E100FF, #7F00FF);
    transform: scale(1.05);
  }
`;

const Projects = () => {
  const projects = [
    {
      title: 'Book Search Website',
      description: 'A personalized book search project with an advanced cache system for fast search results.',
      technologies: 'HTML, CSS, JavaScript, ReactJS, Redux',
      link: 'https://github.com/Dinesh-aragonda/Book-Search-Website'
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase projects and skills.',
      technologies: 'HTML, CSS, JavaScript, ReactJS',
      link: 'https://github.com/Dinesh-aragonda/Portfolio'
    },
    {
      title: 'Weather App',
      description: 'A weather forecasting app providing accurate and real-time weather updates.',
      technologies: 'HTML, CSS, JavaScript, ReactJS',
      link: 'https://github.com/Dinesh-aragonda/Weather-App'
    },
    {
      title: 'To-Do List App',
      description: 'A simple and efficient to-do list app to manage daily tasks and boost productivity.',
      technologies: 'HTML, CSS, JavaScript, ReactJS',
      link: 'https://github.com/Dinesh-aragonda/ToDo-List-App'
    },
    {
      title: 'E-commerce Website',
      description: 'An online store platform for seamless shopping experience with various product categories.',
      technologies: 'HTML, CSS, JavaScript, ReactJS, Redux',
      link: 'https://github.com/Dinesh-aragonda/E-commerce-Website'
    },
    {
      title: 'Chat Application',
      description: 'A real-time chat application with support for multiple chat rooms and user authentication.',
      technologies: 'HTML, CSS, JavaScript, ReactJS, Firebase',
      link: 'https://github.com/Dinesh-aragonda/Chat-Application'
    }
  ];

  return (
    <ProjectsSection id="projects">
      <Title>My Projects</Title>
      <ProjectList>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <Technologies><strong>Technologies:</strong> {project.technologies}</Technologies>
            <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">View Project</ProjectLink>
          </ProjectCard>
        ))}
      </ProjectList>
    </ProjectsSection>
  );
};

export default Projects;
