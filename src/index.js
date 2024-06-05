import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './pages/Navbar.tsx';
import About from "./pages/About.tsx";
import Footer from './pages/Footer.tsx';
import StarsCanvas from './pages/StarBackground.tsx';
import Jobs from "./pages/Jobs.tsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact.tsx';
import SingleJob from './pages/SingleJob.tsx';
import Appointment from './pages/Appointment.tsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StarsCanvas/>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Jobs" element={<Jobs/>}/>
        <Route path="/JobInformation/:JobId" element={<SingleJob/>}/>
        <Route path="/Appointment" element={<Appointment/>}/>
      </Routes>
    </BrowserRouter>
    <Footer/>
  </React.StrictMode>
);
