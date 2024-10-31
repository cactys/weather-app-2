import CardList from '../CardList/CardList';
import CityCard from '../CityCard/CityCard';
import styles from './Card.module.css';

const Card = () => {
  return (
    <section className={styles.card}>
      <CityCard />
      <CardList />
    </section>
  );
};

export default Card;
