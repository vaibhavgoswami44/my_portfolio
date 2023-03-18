import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';


function App() {
  return (
    <>
      <div className='mb-5'>
        <Navbar />
      </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='projects' element={<Projects />} />
        </Routes>
      <footer className='pb-5 d-flex flex-row justify-content-center align-items-center pb-5'>
        <div className='d-flex justify-content-around'>
          <a href='https://github.com/vaibhavgoswami44' rel="noreferrer" target='_blank'>  <i className="fa fa-github" aria-hidden="true">GitHub</i></a>
          <a href='mailto:vaibhavgoswami404@gmail.com' rel="noreferrer" target='_blank'>  <i className="fa fa-envelope" aria-hidden="true"></i></a>
          <a href='https://www.linkedin.com/in/vaibhav-goswami-09734426a' rel="noreferrer" target='_blank'>  <i className="fa fa-linkedin" aria-hidden="true"></i></a>
          <a href='https://wa.me/+919687437661' rel="noreferrer" target='_blank'>  <i className="fa fa-whatsapp" aria-hidden="true"></i></a>
        </div>
      </footer>
    </>
  )
}

export default App;
