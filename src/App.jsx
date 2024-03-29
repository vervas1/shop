import React from 'react';
import { Routes, Route } from 'react-router-dom';

// components import
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import MyCard from './Components/MyCard/MyCard';
import Best from './Components/Best/Best';
import Admin from './Components/Admin/Admin';
import './App.scss';
import AdminUser from './Components/AdminUser/AdminUser';

function App() {
  return (
    <>
      {/* kad importuotusi i html, funk kompon is didzios raides */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/my-cart" element={<MyCard />} />
        <Route path="/best" element={<Best />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
