import SvgSprite from '../SvgSprite/SvgSprite';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <a href="#" className={styles.logo}>
      <SvgSprite className={styles['logo-desktop']} id="logo-desktop-svg" />
      <SvgSprite className={styles['logo-tablet']} id="logo-table-svg" />
    </a>
  );
};

export default Logo;
