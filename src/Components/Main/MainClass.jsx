import React from 'react';
import { mockData } from '../../mockData';
import Card from '../Card/Card';
import './main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      data: mockData,
    };
  }
  render() {
    const { data } = this.state;

    const handleSortData = () => {
      const sortedData = data.sort((a, b) => {
        let fa = a.title.toLowerCase(),
          fb = b.title.toLowerCase();
        if (fa < fb) return -1;
        if (fa > fb) return 1;
        return 0;
      });
      this.setState({
        data: sortedData,
      });
    };

    const SortData = () => {
      const sortedData = data.sort((a, b) => {
        let fa = a.title.toLowerCase(),
          fb = b.title.toLowerCase();
        if (fa < fb) return 1;
        if (fa > fb) return -1;
        return 0;
      });
      this.setState({
        data: sortedData,
      });
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
            />
          );
        })}
      </main>
    );
  }
}

export default Main;
