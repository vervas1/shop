import React, { useState } from 'react';
// components import
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import MyCard from './Components/MyCard/MyCard';
import './App.css';

function App() {
  const [tab, setTab] = useState('all');
  const [cardData, setCardData] = useState([]);
  console.log('text');
  return (
    <>
      {/* kad importuotusi i html, funk kompon is didzios raides */}
      <Navbar setTab={setTab} />
      {tab === 'all' && <Main setCardData={setCardData} />}
      {tab === 'card' && (
        <MyCard cardData={cardData} setCardData={setCardData} />
      )}
    </>
  );
}

export default App;
