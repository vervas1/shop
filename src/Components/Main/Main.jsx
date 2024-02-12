import React, { useState } from 'react';
import { mockData } from '../../mockData';
// components, is didziosios raides rasome
import Card from '../Card/Card';
import './main.scss';

function Main({ setCardData }) {
  const [data, setData] = useState(mockData);
  console.log('function', setCardData);
  console.log('text');
  return (
    <main className="main-container">
      {data.map((item) => {
        return (
          <Card
            key={item.title}
            title={item.title}
            description={item.description}
            img={item.img}
            setCardData={setCardData}
          />
        );
      })}
    </main>
  );
}

export default Main;
