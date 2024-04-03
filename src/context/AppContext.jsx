import { createContext, useState, useEffect, useCallback } from 'react';
import { cfg } from '../cfg/cfg';

export const AppContext = createContext();

function AppContextProvider(props) {
  const [cardData, setCardData] = useState(
    JSON.parse(localStorage.getItem('cardData')) || []
  );
  const [data, setData] = useState([]);
  const [favoritesData, setFavoritesData] = useState(
    JSON.parse(localStorage.getItem('favoritesData')) || []
  );

  const fetchData = async () => {
    try {
      const response = await fetch(`${cfg.API.HOST}/product`);

      const products = await response.json();

      const filteredData = products.filter(
        (item) => !cardData.some((cardItem) => cardItem.title === item.title)
      );

      setData(filteredData);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, [cardData]);

  useEffect(() => {
    localStorage.setItem('cartData', JSON.stringify(cardData));
  }, [cardData]);

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
        fetchData,
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
