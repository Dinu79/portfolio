import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #121212;
    color: #ffffff;
    line-height: 1.6;
    font-size: 16px;
  }

  html {
    scroll-behavior: smooth;
  }

  section {
    padding: 60px 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Arial', sans-serif;
    margin-bottom: 20px;
    color: #e0e0e0;
    line-height: 1.2;
  }

  p {
    color: #c0c0c0;
    margin-bottom: 20px;
  }

  a, button {
    color: #1e90ff;
    transition: color 0.3s ease, background-color 0.3s ease;
    text-decoration: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px 20px;
    font-size: 1em;
  }

  a:hover, button:hover {
    color: #ffffff;
    background-color: #1e90ff;
  }

  a {
    border-bottom: 1px solid transparent;
  }

  a:hover {
    border-bottom: 1px solid #1e90ff;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
  }

  input, textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #333;
    background-color: #1e1e1e;
    color: #ffffff;
    border-radius: 5px;
    font-size: 1em;
  }

  input:focus, textarea:focus {
    border-color: #1e90ff;
    outline: none;
  }

  button {
    display: inline-block;
    background-color: #1e90ff;
    color: #ffffff;
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
  }

  button:hover {
    background-color: #ffffff;
    color: #1e90ff;
  }
`;

export default GlobalStyle;
