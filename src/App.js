import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import PositionOfResponsibility from './components/PositionOfResponsibility';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Education />
        <PositionOfResponsibility id="por" /> 
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
