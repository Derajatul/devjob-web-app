"use client"

import Styles from './page.module.css'
import data from './data.json';
import Card from './components/Card'
import FilterBox from './components/FilterBox'
import { useState } from 'react';

const Home = () => {
  const [detail,setDetail] = useState(true)
  return (
    <section>
      <FilterBox />
      <div className={Styles.cardContainer}>
        {detail ? data.map(el => (
        <Card key={el.id} onHandleClick={() => setDetail(!detail)} logo={el.logo} logoBackground={el.logoBackground} postedAt={el.postedAt} contract={el.contract} position={el.position} company={el.company} location={el.location} />
      )) : <p>Nanti dulu</p>}
        
      </div>
    </section>
  );
};

export default Home;
