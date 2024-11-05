import BarValue from '../BarValue/BarValue';
import SvgSprite from '../SvgSprite/SvgSprite';
import styles from './Card.module.css';

const Card = ({ title, iconId, value, isHaveRange, rangeValue, details }) => {
  return (
    <article className={styles.card}>
      <header className={styles.card__header}>
        <h2 className={styles.card__title}>{title}</h2>
        <figure className={styles.card__figure}>
          <SvgSprite id={iconId} className={styles.card__icon} />
        </figure>
        <h3 className={styles.card__subtitle}>{value}</h3>
      </header>
      <div className={styles.card__body}>
        {isHaveRange && <BarValue title={title} rangeValue={rangeValue} />}
        <div
          className={`${styles['card__value-container']} ${
            details.length >= 2 ? styles['card__double-value'] : ''
          }`}
        >
          {details.map((item, index) => (
            <p key={index} className={styles.card__value}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Card;
