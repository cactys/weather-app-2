import { useContext } from 'react';
import Card from '../Card/Card';
import DataContext from '../../../contexts/DataContext';
import styles from './CardList.module.css';

const CardList = () => {
  const { articles } = useContext(DataContext);

  return (
    <ul className={styles['card-list']}>
      {articles.map((item, index) => (
        <li className={styles['card-list__item']} key={index}>
          <Card {...item} />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
