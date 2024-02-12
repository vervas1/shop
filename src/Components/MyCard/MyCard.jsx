import React from 'react';
// component
import Card from '../Card/Card';

function MyCard({ cardData, setCardData }) {
  return (
    <main>
      {cardData?.map(({ title, description, img }) => (
        <Card
          key={title}
          title={title}
          description={description}
          img={img}
          setCardData={setCardData}
        />
      ))}
    </main>
  );
}

export default MyCard;
