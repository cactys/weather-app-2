import { useContext } from 'react';
import Card from '../Card/Card';
import styles from './CardList.module.css';
import DataContext from '../../../contexts/DataContext';

const CardList = () => {
  const { articles } = useContext(DataContext);

  console.log(articles);

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
