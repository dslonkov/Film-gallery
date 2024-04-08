import './filmRating.css';

export const FilmRating = ({favTitle, ToggleFavTitle}) => {
  return (
    <div className="filmCard__rating">
      <img
        className="filmCard__rating-icon"
        src={favTitle ? "./filmcard/like.png" : "./filmcard/fav-icon.png"}
        alt="Избранное"
      />

      <div
        className={favTitle ? 'filmCard__rating-title' : 'filmCard__rating-title chosen'}
        onClick={ToggleFavTitle}
      >
        {favTitle ? 'В избранное' : 'В избранном'}
      </div>
    </div>
  );
};
