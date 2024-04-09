import styles from './cardStar.module.css';

export const CardStar = ({film}) => {
  return (
    <div className={styles.filmCard__star}>
      <img
        src="./filmcard/star.png"
        alt="Рейтинг"
      />

      <div className={styles['filmCard__star-count']}>
        {film.rating}
      </div>
    </div>
  );
};

