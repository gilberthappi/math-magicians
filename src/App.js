import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route path="Quote" element={<Quote />} />
      <Route path="calculator" element={<Calculator />} />
      <Route path="Home" element={<Home />} />
    </Routes>
  </div>
);

export default App;
