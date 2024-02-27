import React, { useContext, useState } from 'react';
import { handleSort } from '../../utils/sortUtils';
// component
import Card from '../Card/Card';
import SortButtons from '../SortButtons/SortButtons';
import { AppContext } from '../../context/AppContext';

function MyCard() {
  const [searchValue, setSearchValue] = useState('');
  const { cardData, setCardData, handleRemoveFromCard } =
    useContext(AppContext);
  const handleSortData = (direction) => {
    const sortedData = handleSort(cardData, direction);
    setCardData(sortedData);
  };

  return (
    <main className="container">
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

      {cardData
        ?.filter(({ title }) => title.toLowerCase().includes(searchValue))
        .map(({ title, description, img }) => (
          <Card
            key={title}
            title={title}
            description={description}
            img={img}
            handleCardButton={handleRemoveFromCard}
            card={true}
          />
        ))}
    </main>
  );
}

export default MyCard;
