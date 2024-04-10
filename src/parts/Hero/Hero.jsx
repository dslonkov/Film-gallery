import styles from './hero.module.css';
import {useContext} from "react";
import {UserContext} from "../../App.jsx";
import {Button} from "../../components/Button/Button.jsx";

export const Hero = () => {
  const { setUser, user } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem('user');
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
                {user.name}
                <img
                  src="./user.png"
                  alt="Войти"
                />
              </div>
            </div>
          }

          <div className={styles.nav__item}>
            <Button
              className={styles['nav__item-link']}
              onClick={handleLogout}
              invisible
            >
              {user ? 'Выйти' : 'Войти'}
              <span className={styles['nav__item-link--logo']}>
                {!user &&
                  <img
                    src="./logout-logo.svg"
                    alt="Войти"
                  />
                }
              </span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
