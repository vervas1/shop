import { createContext, useState, useEffect, useCallback } from 'react';
import { cfg } from '../cfg/cfg';

export const AppContext = createContext();

function AppContextProvider(props) {
  const [showLogin, setShowLogin] = useState(false);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [cardData, setCardData] = useState(
    JSON.parse(localStorage.getItem('cardData')) || []
  );
  const [data, setData] = useState([]);
  const [favoritesData, setFavoritesData] = useState(
    JSON.parse(localStorage.getItem('favoritesData')) || []
  );

  const fetchData = async () => {
    try {
      setLoadingProducts(true);
      const response = await fetch(`${cfg.API.HOST}/product`);

      const products = await response.json();

      const filteredData = products.filter(
        (item) => !cardData.some((cardItem) => cardItem.title === item.title)
      );

      setData(filteredData);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoadingProducts(true);
    }
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
        showLogin,
        setShowLogin,
        loadingProducts,
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
