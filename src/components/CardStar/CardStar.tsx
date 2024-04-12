import React from 'react';
import styles from './cardStar.module.css';
import {FilmProps} from "entities";

export const CardStar = (props: FilmProps) => {

  const { rating } = props;

  return (
    <div className={styles.filmCard__star}>
      <img
        src="./filmcard/star.png"
        alt="Рейтинг"
      />

      <div className={styles['filmCard__star-count']}>
        {rating}
      </div>
    </div>
  );
};

