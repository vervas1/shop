import React, { useContext } from 'react';
import { handleSort } from '../../utils/sortUtils';
// component
import Card from '../Card/Card';
import SortButtons from '../SortButtons/SortButtons';
import { AppContext } from '../../context/AppContext';

function MyCard() {
  const { cardData, setCardData, handleRemoveFromCard } =
    useContext(AppContext);
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
