import './cardStar.css';

export const CardStar = ({film}) => {
  return (
    <div className="filmCard__star">
      <img
        className="filmCard__star-icon"
        src="./filmcard/star.png"
        alt="Рейтинг"
      />

      <div className="filmCard__star-count">
        {film.rating}
      </div>
    </div>
  );
};

