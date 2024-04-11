import styles from './filmCardBlock.module.css';
import {FilmCardData as data} from "../../data/FilmCardData.js";
import {FilmCard} from "../../components/FilmCard/FilmCard";

export const FilmCardBlock = () => {

  return (
    <div className='filmCard'>
      <div className={styles.filmCard__inner}>
        {
          data.map(film => (
            <FilmCard film={film} key={film.id}/>
          ))}
      </div>
    </div>
  );
};
