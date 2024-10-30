import Header from '../Header/Header';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>Weather App</h1>
      <Header />
    </div>
  );
}

export default App;
