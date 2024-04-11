import styles from './filmName.module.css';

export const FilmName = ({film}) => {
  return (
    <div className={styles.filmCard__name}>
      {film.name}
    </div>
  );
};
