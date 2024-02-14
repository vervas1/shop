// components, is didziosios raides rasome
import React from 'react';

import { handleSort } from '../../utils/sortUtils';

import Card from '../Card/Card';
import SortButtons from '../SortButtons/SortButtons';
import './main.scss';

function Main({ handleAddToCard, data, setData }) {
  const handleSortData = (direction) => {
    const sortedData = handleSort(data, direction);
    setData(sortedData);
  };

  return (
    <main className="main-container">
      <SortButtons handleSortData={handleSortData} />

      {data.map((item) => {
        return (
          <Card
            key={item.title}
            title={item.title}
            description={item.description}
            img={item.img}
            handleCardButton={handleAddToCard}
          />
        );
      })}
    </main>
  );
}

export default Main;
