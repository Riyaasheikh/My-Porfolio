import React from 'react';
import Navbar from './Components/global/Navbar';
import Hero from './Components/ui/Hero';
import About from './Components/ui/About';
import Projects from './Components/ui/Projects';
import Skills from './Components/ui/Skills';
import Contact  from './Components/ui/Contact';
import './App.css';
import Footer from './Components/global/Footer';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills/>
      <Contact/>
      <Footer/>
      
     
    </div>
  );
}

export default App;