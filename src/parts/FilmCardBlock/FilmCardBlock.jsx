import './filmCardBlock.css';
import {FilmCardData as data} from "../../data/FilmCardData.js";
import {useState} from "react";

export const FilmCardBlock = () => {

  const [favTitle, setFavTitle] = useState(data.map(() => true));

  const ToggleFavTitle = (index) => {
    setFavTitle(prev => {
      const newFavTitles = [...prev];
      newFavTitles[index] = !newFavTitles[index];
      return newFavTitles;
    });
  }

  return (
    <div className='filmCard'>
      <div className="filmCard__inner">
        {
          data.map((film, index) => (
            <div
              className='filmCard__card'
              key={film.id}
            >
              <img
                className='filmCard__img'
                src={film.img}
                alt={film.name}
              />

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

              <div className="filmCard__name">
                {film.name}
              </div>

              <div className="filmCard__rating">
                <img
                  className="filmCard__rating-icon"
                  src={favTitle[index] ? "./filmcard/like.png" : "./filmcard/fav-icon.png"}
                  alt="Избранное"
                />

                <div
                  className={favTitle[index] ? 'filmCard__rating-title' : 'filmCard__rating-title chosen'}
                  onClick={() => ToggleFavTitle(index)}
                >
                  {favTitle[index] ? 'В избранное' : 'В избранном'}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
