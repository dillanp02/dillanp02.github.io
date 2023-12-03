import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { HOME_LINK, ABOUT_LINK, CONTACT_LINK } from './constants/url-links';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path={HOME_LINK} element={<Home />} />
        <Route path={ABOUT_LINK} element={<About />} />
        <Route path={CONTACT_LINK} element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
