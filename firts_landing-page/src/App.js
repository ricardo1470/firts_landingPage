//import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import InitBanner from './components/InitBanner';
import Body from './components/Body';
import './App.css';

function App() {
  return (
    <div className="bg-indigo-900 m-5 text-white">
      {" "}
      <InitBanner />
      <Body />
    </div>
  );
}

export default App;
