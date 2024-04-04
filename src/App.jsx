import React from 'react';
import { Routes, Route } from 'react-router-dom';
import useAuth from './hooks/useAuth';

// components import
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import MyCard from './Components/MyCard/MyCard';
import Best from './Components/Best/Best';
import Admin from './Components/Admin/Admin';
import './App.scss';

function App() {
  const { token } = useAuth();
  return (
    <>
      {/* kad importuotusi i html, funk kompon is didzios raides */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/my-cart" element={<MyCard />} />
        <Route path="/best" element={<Best />} />
        {token && <Route path="/admin" element={<Admin />} />}
      </Routes>
    </>
  );
}

export default App;
