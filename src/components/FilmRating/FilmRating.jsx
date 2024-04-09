import styles from './filmRating.module.css';
import cn from 'classnames';

export const FilmRating = ({favTitle, ToggleFavTitle}) => {
  return (
    <div className={styles.filmCard__rating}>
      <img
        src={favTitle ? "./filmcard/like.png" : "./filmcard/fav-icon.png"}
        alt="Избранное"
      />

      <div
        className={cn(styles['filmCard__rating-title'], {
          [styles['chosen']]: !favTitle
        })}
        onClick={ToggleFavTitle}
      >
        {favTitle ? 'В избранное' : 'В избранном'}
      </div>
    </div>
  );
};
