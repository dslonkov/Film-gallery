import './filmCard.css';
import {CardImg} from "../CardImg/CardImg.jsx";
import {FilmName} from "../FilmName/FilmName";
import {CardStar} from "../CardStar/CardStar";
import {FilmRating} from "../FilmRating/FilmRating";
import {useState} from "react";

export const FilmCard = ({film}) => {

  const [favTitle, setFavTitle] = useState(true);

  const ToggleFavTitle = () => {
    setFavTitle(prev => !prev);
  }

  return (
    <div
      className='filmCard__card'
    >
      <CardImg film={film} />
      <FilmName film={film} />
      <CardStar film={film} />
      <FilmRating favTitle={favTitle} ToggleFavTitle={ToggleFavTitle} />
    </div>
  );
};

