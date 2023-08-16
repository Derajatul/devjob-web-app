'use client'
import React, { useState } from 'react';
import Styles from './page.module.css';
import data from './data.json';
import Card from './components/Card';
import SearchBar from './components/SearchBar';

type SearchParams = {
  term: string;
  location: string;
  fullTime: boolean;
};

const Home = () => {
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (searchParams: SearchParams) => {
    const { term, location, fullTime } = searchParams;
    let filtered = data.filter((el) =>
      el.position.toLowerCase().includes(term.toLowerCase())
    );

    if (location) {
      filtered = filtered.filter((el) =>
        el.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (fullTime) {
      filtered = filtered.filter((el) => el.contract === 'Full Time');
    }

    setFilteredData(filtered);
  };

  return (
    <>
      <section>
        <SearchBar onSearch={handleSearch} />
        <div className={Styles.cardContainer}>
          {filteredData.map((el) => (
            <Card
              key={el.id}
              onHref={el.id.toString()}
              logo={el.logo}
              logoBackground={el.logoBackground}
              postedAt={el.postedAt}
              contract={el.contract}
              position={el.position}
              company={el.company}
              location={el.location}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;