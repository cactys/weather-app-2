import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer class={styles.footer}>
      Проект выполнен в рамках стажировки{' '}
      <a
        className={styles.footer__link}
        href="https://preax.ru"
        target="_blank"
      >
        PREAX
      </a>
    </footer>
  );
};

export default Footer;
