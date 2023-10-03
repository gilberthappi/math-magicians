import React from 'react';
import './App.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
// import Quote from './components/Quote';

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route path="Quote" element={<Quote />} />
      <Route path="calculator" element={<Calculator />} />
    </Routes>
  </div>
);

export default App;
