import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Card from '../UI/Card/Card';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>Weather App</h1>
      <Header />
      <Main children={<Card />} />
      <Footer />
    </div>
  );
}

export default App;
