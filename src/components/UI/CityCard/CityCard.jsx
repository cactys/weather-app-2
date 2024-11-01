import SvgSprite from '../SvgSprite/SvgSprite';
import styles from './CityCard.module.css';

const CityCard = () => {
  return (
    <article className={styles['city-card']}>
      <header className={styles['city-card__header']}>
        <h2 className={styles['city-card__title']}>
          Кременчуг-константиновское
        </h2>
        <time className={styles['city-card__date']} dateTime="2024-01-06">
          Суббота, 06 января
        </time>
        <time className={styles['city-card__date']} dateTime="11:29">
          11:29
        </time>
      </header>
      <p className={styles['city-card__temp']}>-7&#176;</p>
      <div className={styles['city-card__body']}>
        <figure className={styles['city-card__figure']}>
          <SvgSprite
            id="day-broken-clouds-svg"
            className={styles['city-card__icon']}
          />
          <figcaption className={styles['city-card__figcaption']}>
            Облачно с прояснениями
          </figcaption>
        </figure>
        <p className={styles['city-card__copy']}>Ощущается как -11°</p>
      </div>
    </article>
  );
};

export default CityCard;
