import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Socialmedia } from './components/SocialMedia';
import Footer from './components/Footer';



const App=()=> {
  return (
      <>

        <Header/> 

        <Home/>

        <About />
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
        <Socialmedia/>


      </>
  );
}

export default App;