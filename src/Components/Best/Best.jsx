import React, { useContext, useState } from 'react';

import { handleSort } from '../../utils/sortUtils';

import Card from '../Card/Card';
import SortButtons from '../SortButtons/SortButtons';
import { AppContext } from '../../context/AppContext';

function Best() {
  const [searchValue, setSearchValue] = useState('');
  const { favoritesData, setFavoritesData } = useContext(AppContext);

  const handleSortData = (direction) => {
    const sortedData = handleSort(favoritesData, direction);
    setFavoritesData(sortedData);
  };

  return (
    <main className="main-container">
      <div className="container-actions">
        <SortButtons handleSortData={handleSortData} />
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearchValue(e.target.value.toLowerCase());
          }}
        />
      </div>

      {favoritesData
        .filter(({ title }) => title.toLowerCase().includes(searchValue))
        .map((item) => {
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
