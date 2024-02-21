import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import './card.scss';

// kad isakarto eitu i title ir descrip, kuriam masyva ir nurodome ka ieskoti
function Card({ title, description, img, handleCardButton, card }) {
  const { favoritesData, handleAddToFavorites, handleRemoveFromFavorites } =
    useContext(AppContext);

  const isFavorite = favoritesData.some((item) => item.title === title);

  const handleAddToCard = () => {
    handleCardButton({ title, description, img });
  };
  return (
    <div className="item">
      <img src={img} alt="fruit" />

      <FontAwesomeIcon
        icon={faHeart}
        // Jeigu paspausim tada active klase uzsides, jeigu ne tai palieka kokia buvo sirdele
        className={`favorite-icon ${isFavorite ? 'favorite-icon--active' : ''}`}
        onClick={() => {
          isFavorite
            ? handleRemoveFromFavorites({ title, description, img })
            : handleAddToFavorites({ title, description, img });
        }}
      />
      <h3> {title} </h3>
      <p>{description} </p>
      <button onClick={handleAddToCard}>
        {card ? 'Remove from cart' : 'Add to cart'}
      </button>
    </div>
  );
}

export default Card;
