import React from 'react';
import './card.scss';

// kad isakarto eitu i title ir descrip, kuriam masyva ir nurodome ka ieskoti
function Card({ title, description, img, setCardData }) {
  const handleAddToCard = () => {
    setCardData([{ title, description, img }]);
  };
  return (
    <div className="card">
      <img src={img} alt="fruit" />
      <h3> {title} </h3>
      <p>{description} </p>
      <button onClick={handleAddToCard}>Add to cart</button>
    </div>
  );
}

export default Card;
