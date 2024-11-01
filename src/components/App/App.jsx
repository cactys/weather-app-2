import { useState } from 'react';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Header from '../Header/Header';
import CityCard from '../UI/CityCard/CityCard';
import CardList from '../UI/CardList/CardList';
import DataContext from '../../contexts/DataContext';

import { articlesData, slider24Hours, slider5Days } from '../../mock/mockData';

import styles from './App.module.css';

function App() {
  const [valueData, setValueData] = useState({
    articles: articlesData,
    sliderForHouse: slider24Hours,
    sliderForDays: slider5Days,
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>Weather App</h1>
      <Header />
      <DataContext.Provider value={valueData}>
        <Main>
          <CityCard />
          <CardList />
        </Main>
      </DataContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
