import React from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
