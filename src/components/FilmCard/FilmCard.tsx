import React from "react";
import {useState} from "react";
import {CardImg} from "../CardImg";
import {FilmName} from "../FilmName";
import {CardStar} from "../CardStar";
import {FilmRating} from "../FilmRating";
import {FilmProps} from "../../entities";
import styles from './filmCard.module.css';

export const FilmCard = (props: FilmProps) => {

  const [favTitle, setFavTitle] = useState<boolean>(true);

  const ToggleFavTitle = () => {
    setFavTitle(prev => !prev);
  }

  return (
    <div
      className={styles.filmCard__card}
    >
      <CardImg {...props}/>
      <FilmName {...props} />
      <CardStar {...props} />
      <FilmRating favTitle={favTitle} ToggleFavTitle={ToggleFavTitle} />
    </div>
  );
};

