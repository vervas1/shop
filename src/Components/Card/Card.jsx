import React from 'react';
import './card.scss';

// kad isakarto eitu i title ir descrip, kuriam masyva ir nurodome ka ieskoti
function Card({ title, description, img, handleCardButton, card }) {
  const handleAddToCard = () => {
    handleCardButton({ title, description, img });
  };
  return (
    <div className="card">
      <img src={img} alt="fruit" />
      <h3> {title} </h3>
      <p>{description} </p>
      <button onClick={handleAddToCard}>
        {card ? 'Remove from cart' : 'Add to cart'}
      </button>
    </div>
  );
}

export default Card;
