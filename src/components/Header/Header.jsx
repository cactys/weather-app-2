import Logo from '../UI/Logo/Logo';

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <div className="inputWrapper">
        <input className="input" type="text" placeholder="Поиск по городу" />
        <button className="inputButton" type="button">
          <svg fill="none" viewBox="0 0 24 24" width="24" height="24">
            <use href="./public/images/input/search.svg#search"></use>
          </svg>
        </button>
        <button
          style={{ display: 'none' }}
          className="inputButton close"
          type="button"
        >
          <svg fill="none" viewBox="0 0 24 24" width="24" height="24">
            <use href="#close"></use>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
