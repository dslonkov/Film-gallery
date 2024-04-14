import React from 'react';
import styles from './filmName.module.css';
import {FilmProps} from "entities";

export const FilmName = (props: FilmProps) => {

  const { name } = props;

  return (
    <div className={styles.filmCard__name}>
      {name}
    </div>
  );
};
