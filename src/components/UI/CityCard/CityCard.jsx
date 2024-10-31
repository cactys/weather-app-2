import SvgSprite from '../SvgSprite/SvgSprite';
import styles from './CityCard.module.css';

const CityCard = () => {
  return (
    <div className={styles['city-card']}>
      <h2 className={styles['city-card__title']}>Погода сегодня</h2>
      <div className={styles['city-card__location']}>
        <h3 className={styles['city-card__city']}>
          Кременчуг-константиновское
        </h3>
        <time className={styles['city-card__date']} datetime="2024-01-06">
          Суббота, 06 января
        </time>
        <time className={styles['city-card__date']} datetime="11:29">
          11:29
        </time>
      </div>
      <p className={styles['city-card__temp']}>-7&#176;</p>
      <div className={styles['city-card__detail']}>
        <figure className={styles['city-card__figure']}>
          <SvgSprite />
          <img
            src="./public/images/weather-state/time=day,state=broken-clouds.svg"
            alt="sky-status"
            width="24"
            height="24"
          />
          <figcaption>Облачно с прояснениями</figcaption>
        </figure>
        <p>Ощущается как -11°</p>
      </div>
    </div>
  );
};

export default CityCard;
