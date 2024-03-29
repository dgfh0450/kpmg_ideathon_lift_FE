import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './layout/Navbar';
import BusinessIdea from './pages/BusinessIdea';
import Result from './pages/Result';
import GlobalStyle from './layout/GlobalStyle';
import Example from './pages/Example';

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/idea/result' element={<Result />} />
          <Route path='/idea' element={<BusinessIdea />} />
          <Route path='/example/:num' element={<Example/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
