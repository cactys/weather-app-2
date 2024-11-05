import { useEffect, useMemo, useState } from 'react';
import styles from './BarValue.module.css';

const BarValue = ({ title, rangeValue }) => {
  useEffect(() => {
    const bar = document.querySelector(`.${styles.bar}`);
    const ellipse = document.querySelector(`.${styles.bar__ellipse}`);

    bar.style.setProperty('--ellipse-position', `${rangeValue}%`);
    ellipse.style.setProperty('--ellipse-position', `${rangeValue}%`);

    return () => {
      bar.style.removeProperty('--ellipse-position');
      ellipse.style.removeProperty('--ellipse-position');
    };
  }, [rangeValue]);

  return (
    <div
      className={`${styles.bar} ${
        title === 'Давление' ? styles.bar_pressure : ''
      }`}
    >
      <span className={styles.bar__ellipse} />
    </div>
  );
};

export default BarValue;
