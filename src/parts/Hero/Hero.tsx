import styles from './hero.module.css';
import {useContext} from "react";
import {UserContext} from "../../App.jsx";
import {Button} from "../../components/Button";
import React from 'react';
import {NavLink} from "react-router-dom";
import cn from 'classnames';

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
          <NavLink className={({ isActive }) => cn(styles['nav__item'], {[styles.active]: isActive})} to={'main'}>
            <a
              className={styles['nav__item-link']}
              href="#"
            >
              Поиск фильмов
            </a>
          </NavLink>

          <NavLink className={({ isActive }) => cn(styles['nav__item'], {[styles.active]: isActive})} to={'myfilms'}>
            <a
              className={styles['nav__item-link']}
              href="#"
            >
              Мои фильмы&nbsp;
              <span className={styles['nav__item-link--count']}>2</span>
            </a>
          </NavLink>

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

          <NavLink className={({ isActive }) => cn(styles['nav__item'], {[styles.active]: isActive})} to={'login'}>
            <Button
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
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
