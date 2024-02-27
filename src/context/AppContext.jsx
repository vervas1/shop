import { createContext, useState, useEffect } from 'react';
import { mockData } from '../mockData';
import { CardText } from 'react-bootstrap';

export const AppContext = createContext();

function AppContextProvider(props) {
  const [cardData, setCardData] = useState(
    JSON.parse(localStorage.getItem('cardData')) || []
  );
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem('data')) || mockData
  );
  const [favoritesData, setFavoritesData] = useState(
    JSON.parse(localStorage.getItem('favoritesData')) || []
  );

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
    localStorage.setItem('cartData', JSON.stringify(cardData));
  }, [data, cardData]);

  useEffect(() => {
    localStorage.setItem('favoritesData', JSON.stringify(favoritesData));
  }, [favoritesData]);

  const handleAddToCard = (item) => {
    setCardData([...cardData, item]);
    // isfiltruojame itema is maino
    const filteredData = data.filter(
      // jeigu title jau yra tada ismesti ji is saraso
      (dataItem) => dataItem.title !== item.title
    );
    // nurodome kad turi buti atvaizduojamas atnujintas sarasas
    setData(filteredData);
  };

  const handleRemoveFromCard = (item) => {
    setData([...data, item]);

    const filteredCardData = cardData.filter(
      (dataItem) => dataItem.title !== item.title
    );
    setCardData(filteredCardData);
  };

  const handleAddToFavorites = (item) => {
    setFavoritesData([...favoritesData, item]);
  };

  const handleRemoveFromFavorites = (item) => {
    const filteredFavoritesData = favoritesData.filter(
      (dataItem) => dataItem.title !== item.title
    );
    setFavoritesData(filteredFavoritesData);
  };

  return (
    <AppContext.Provider
      value={{
        cardData,
        setCardData,
        favoritesData,
        setFavoritesData,
        data,
        setData,
        handleAddToCard,
        handleRemoveFromCard,
        handleRemoveFromFavorites,
        handleAddToFavorites,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
