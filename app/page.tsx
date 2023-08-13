import Styles from './page.module.css'
import data from './data.json';
import Card from './components/Card'

const Home = () => {
  return (
    <section>
      <div className={Styles.cardContainer}>
        {data.map(el => (
        <Card key={el.id} onHref={el.id.toString()} logo={el.logo} logoBackground={el.logoBackground} postedAt={el.postedAt} contract={el.contract} position={el.position} company={el.company} location={el.location} />
      ))}
      </div>
    </section>
  );
};

export default Home;
