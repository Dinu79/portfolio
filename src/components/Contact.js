import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';

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

const ContactSection = styled.section`
  padding: 60px 20px;
  background: #121212;
  animation: ${fadeIn} 2s ease-in-out;
`;

const ContactTitle = styled.h2`
  ${gradientText}
  text-align: center;
  margin-bottom: 50px;
  font-size: 3em;
  font-weight: bold;
  letter-spacing: 1.5px;
  font-family: 'Poppins', sans-serif;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  align-items: stretch;
`;

const ContactForm = styled.form`
  flex: 1;
  max-width: 600px;
  background: #1f1f1f;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${fadeIn} 2s ease-in-out;
`;

const Label = styled.label`
  display: block;
  font-size: 1.1em;
  margin-bottom: 10px;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
  background: #333;
  color: #ffffff;
  font-size: 1em;
  font-family: 'Roboto', sans-serif;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
  background: #333;
  color: #ffffff;
  font-size: 1em;
  font-family: 'Roboto', sans-serif;
`;

const Button = styled.button`
  background: linear-gradient(90deg, #7F00FF, #E100FF);
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  font-size: 1em;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #E100FF, #7F00FF);
    transform: scale(1.05);
  }
`;

const ContactDetails = styled.div`
  flex: 1;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  animation: ${fadeIn} 2s ease-in-out;

  & > div {
    background: #1f1f1f;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 15px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  a {
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #E100FF;
    }
  }

  svg {
    color: #E100FF;
    font-size: 1.5em;
  }
`;

const EmojiContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 30px;
`;

const Emoji = styled.span`
  font-size: 2em;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactTitle>Contact Me</ContactTitle>
      <ContactContainer>
        <ContactForm>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name" required />
            
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" required />
            
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" rows="4" required></Textarea>
          </div>
          <Button type="submit">Send Message</Button>
        </ContactForm>
        <ContactDetails>
          <div>
            <FaPhoneAlt />
            <a href="tel:+011236548096">+01 123 654 8096</a>
          </div>
          <div>
            <FaEnvelope />
            <a href="mailto:gerolddesign@mail.com">gerolddesign@mail.com</a>
          </div>
          <div>
            <FaFacebook />
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
          <div>
            <FaInstagram />
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </ContactDetails>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
