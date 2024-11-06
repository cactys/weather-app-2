import styles from './BarValue.module.css';

const BarValue = ({ title, rangeValue }) => {
  return (
    <span
      className={`${styles.bar} ${
        title === 'Давление' ? styles.bar_pressure : ''
      }`}
      style={{ '--ellipse-position': `${rangeValue}%` }}
    />
  );
};

export default BarValue;
