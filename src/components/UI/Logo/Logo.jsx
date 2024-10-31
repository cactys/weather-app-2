import SvgSprite from '../SvgSprite/SvgSprite';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <a href="#" className={styles.logo}>
      <SvgSprite className={styles.logo__desktop} id="logo-desktop-svg" />
      <SvgSprite className={styles.logo__tablet} id="logo-tablet-svg" />
    </a>
  );
};

export default Logo;
