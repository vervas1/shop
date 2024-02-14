import React from 'react';
import { handleSort } from '../../utils/sortUtils';
// component
import Card from '../Card/Card';
import SortButtons from '../SortButtons/SortButtons';

function MyCard({ cardData, setCardData, handleRemoveFromCard }) {
  const handleSortData = (direction) => {
    const sortedData = handleSort(cardData, direction);
    setCardData(sortedData);
  };

  return (
    <main className="container">
      <SortButtons handleSortData={handleSortData} />

      {cardData?.map(({ title, description, img }) => (
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
