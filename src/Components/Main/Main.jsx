// components, is didziosios raides rasome
import React, { useContext, useState } from 'react';

import { handleSort } from '../../utils/sortUtils';

import Card from '../Card/Card';
import SortButtons from '../SortButtons/SortButtons';
import './main.scss';
import { AppContext } from '../../context/AppContext';

function Main() {
  const { data, setData, handleAddToCard, loadingProducts } =
    useContext(AppContext);
  // kintamasis paieskai
  const [searchValue, setSearchValue] = useState('');

  const handleSortData = (direction) => {
    const sortedData = handleSort(data, direction);
    setData(sortedData);
  };

  return (
    <main className="custom-container">
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
      {loadingProducts && !data.length && <h2>Loading...</h2>}
      {!data.length && !loadingProducts && <h2>No items in the store...</h2>}

      {data
        // paieskos filterinimas
        .filter(({ title }) => title.toLowerCase().includes(searchValue))
        .map((item) => {
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
