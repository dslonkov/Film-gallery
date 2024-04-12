import React from "react";
import styles from "./filmCardBlock.module.css";
import {FilmCardData as data} from "../../data/FilmCardData.js";
import {FilmCard} from "../../components/FilmCard";

export const FilmCardBlock = () => {

  return (
    <>
      <div className={styles.filmCard__inner}>
        {
          data.map(film => (
            <FilmCard {...film} key={film.id}/>
          ))}
      </div>
    </>
  );
};
