import React from 'react';
import './App.css';
import Header from './components/hesder/Header';
import Home from './components/hesder/home/Home';
import Skills from './components/hesder/skills/Skills';
import Contact from './components/hesder/contact/Contact';
import Footer from './components/hesder/footer/Footer';
import ScrollUp from './components/hesder/scrollup/ScrollUp';
import Works from './components/hesder/works/Works';
function App() {
  return (
   <>
   
 <Header/>
<main className='main'>
  <Home/>
  <Skills/>
  <Works/>
  <Contact/>
  <Footer/>
  <ScrollUp/>
</main>
   </>
  );
}

export default App;
