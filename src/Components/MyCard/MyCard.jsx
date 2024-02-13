import React from 'react';
// component
import Card from '../Card/Card';

function MyCard({ cardData, setCardData }) {
  return (
    <main className="container">
      {cardData?.map(({ title, description, img }) => (
        <Card
          key={title}
          title={title}
          description={description}
          img={img}
          setCardData={setCardData}
          card={true}
        />
      ))}
    </main>
  );
}

export default MyCard;
