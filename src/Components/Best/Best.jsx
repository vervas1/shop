import React, { useContext } from 'react';

import { handleSort } from '../../utils/sortUtils';

import Card from '../Card/Card';
import SortButtons from '../SortButtons/SortButtons';
import { AppContext } from '../../context/AppContext';

function Best() {
  const { favoritesData, setFavoritesData } = useContext(AppContext);

  const handleSortData = (direction) => {
    const sortedData = handleSort(favoritesData, direction);
    setFavoritesData(sortedData);
  };

  return (
    <main className="main-container">
      <SortButtons handleSortData={handleSortData} />

      {favoritesData.map((item) => {
        return (
          <Card
            key={item.title}
            title={item.title}
            description={item.description}
            img={item.img}
            handleCardButton={() => {}}
          />
        );
      })}
    </main>
  );
}

export default Best;
