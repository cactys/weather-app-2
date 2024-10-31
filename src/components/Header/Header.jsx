import Input from '../UI/Input/Input';
import Logo from '../UI/Logo/Logo';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Input />
    </header>
  );
};

export default Header;
