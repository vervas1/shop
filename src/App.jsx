import React from 'react';
// components import
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import './App.css';

function App() {
  return (
    <React.Fragment>
      {/* kad importuotusi i html, funk kompon is didzios raides */}
      <Navbar />
      <Main />
    </React.Fragment>
  );
}

export default App;
