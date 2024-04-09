import styles from './cardImg.module.css';

export const CardImg = ({film}) => {
  return (
    <img
      className={styles.filmCard__img}
      src={film.img}
      alt={film.name}
    />
  );
};
