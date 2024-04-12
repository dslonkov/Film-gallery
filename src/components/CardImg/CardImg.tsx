import React from 'react';
import styles from './cardImg.module.css';
import {FilmProps} from "entities";

export const CardImg = (props: FilmProps) => {

  const { img, name } = props;

  return (
    <img
      className={styles.filmCard__img}
      src={img}
      alt={name}
    />
  );
};
