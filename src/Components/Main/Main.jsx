// components, is didziosios raides rasome
import Card from '../Card/Card';
import './main.scss';

function Main({ setCardData, data, setData }) {
  const handleSortData = () => {
    const sortedData = data.toSorted((a, b) => {
      let fa = a.title.toLowerCase(),
        fb = b.title.toLowerCase();
      if (fa < fb) return -1;
      if (fa > fb) return 1;
      return 0;
    });
    setData(sortedData);
  };

  const SortData = () => {
    const sortedData = data.toSorted((a, b) => {
      let fa = a.title.toLocaleLowerCase(),
        fb = b.title.toLocaleLowerCase();
      if (fa < fb) return 1;
      if (fa > fb) return -1;
      return 0;
    });
    setData(sortedData);
  };

  return (
    <main className="main-container">
      <div className="main-action-btn">
        <button className="btn1" onClick={handleSortData}>
          Sort A-Z
        </button>
        <button className="btn1" onClick={SortData}>
          Sort Z-A
        </button>
      </div>

      {data.map((item) => {
        return (
          <Card
            key={item.title}
            title={item.title}
            description={item.description}
            img={item.img}
            setCardData={setCardData}
          />
        );
      })}
    </main>
  );
}

export default Main;
