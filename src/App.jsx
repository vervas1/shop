import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { mockData } from './mockData';
// components import
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import MyCard from './Components/MyCard/MyCard';
import Best from './Components/Best/Best';
import './App.scss';

function App() {
  const [cardData, setCardData] = useState([]);
  const [data, setData] = useState(mockData);
  const handleAddToCard = (item) => {
    setCardData([...cardData, item]);
    // isfiltruojame itema is maino
    const filteredData = data.filter(
      // jeigu title jau yra tada ismesti ji is saraso
      (dataItem) => dataItem.title !== item.title
    );
    // nurodome kad turi buti atvaizduojamas atnujintas sarasas
    setData(filteredData);
  };
  // isfiltruojame is  pacio card kad griztu vel i main
  const handleRemoveFromCard = (item) => {
    setData([...data, item]);

    const filteredCardData = cardData.filter(
      (dataItem) => dataItem.title !== item.title
    );
    setCardData(filteredCardData);
  };

  return (
    <>
      {/* kad importuotusi i html, funk kompon is didzios raides */}
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              data={data}
              setData={setData}
              handleAddToCard={handleAddToCard}
            />
          }
        />
        <Route
          path="/my-cart"
          element={
            <MyCard
              cardData={cardData}
              setCardData={setCardData}
              handleRemoveFromCard={handleRemoveFromCard}
            />
          }
        />
        <Route path="/best" element={<Best />} />
      </Routes>
    </>
  );
}

export default App;
