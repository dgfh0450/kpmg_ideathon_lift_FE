import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './layout/Navbar';
import BusinessIdea from './pages/BusinessIdea';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/idea' element={<BusinessIdea />} />
      </Routes>
    </>
  );
}

export default App;
