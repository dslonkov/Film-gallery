import './hero.css';


export const Hero = () => {

  return (
    <nav className='nav'>
      <div className="nav__inner">
        <img
          className="nav__logo"
          src="./nav-logo.svg"
          alt="Логотип"
        />

        <div className="nav__block">
          <div className="nav__item">
            <a
              className="nav__item-link"
              href="#"
            >
              Поиск фильмов
            </a>
          </div>

          <div className="nav__item">
            <a
              className="nav__item-link"
              href="#"
            >
              Мои фильмы&nbsp;
              <span className="nav__item-link--count">2</span>
            </a>
          </div>

          <div className="nav__item">
            <a
              className="nav__item-link"
              href="#"
            >
              Войти
              <span className="nav__item-link--logo">
                <img
                  src="./logout-logo.svg"
                  alt="Войти"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
