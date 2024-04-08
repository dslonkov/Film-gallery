import './filmName.css';

export const FilmName = ({film}) => {
  return (
    <div className="filmCard__name">
      {film.name}
    </div>
  );
};
