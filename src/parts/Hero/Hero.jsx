import styles from './hero.module.css';
import {useContext} from "react";
import {UserContext} from "../../App.jsx";

export const Hero = ({user}) => {
  const { setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__inner}>
        <img
          src="./nav-logo.svg"
          alt="Логотип"
        />

        <div className={styles.nav__block}>
          <div className={styles.nav__item}>
            <a
              className={styles['nav__item-link']}
              href="#"
            >
              Поиск фильмов
            </a>
          </div>

          <div className={styles.nav__item}>
            <a
              className={styles['nav__item-link']}
              href="#"
            >
              Мои фильмы&nbsp;
              <span className={styles['nav__item-link--count']}>2</span>
            </a>
          </div>

          {
            user &&
            <div className={styles.nav__item}>
              <div className={styles['nav__item-link']}>
                {JSON.stringify(user.name)}
                <img
                  src="./user.png"
                  alt="Войти"
                />
              </div>
            </div>
          }

          <div className={styles.nav__item}>
            <div
              className={styles['nav__item-link']}
              onClick={handleLogout}
            >
              {user ? 'Выйти' : 'Войти'}
              <span className={styles['nav__item-link--logo']}>
                <img
                  src="./logout-logo.svg"
                  alt="Войти"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
