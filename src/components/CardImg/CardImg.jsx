import './cardImg.css';

export const CardImg = ({film}) => {
  return (
    <img
      className='filmCard__img'
      src={film.img}
      alt={film.name}
    />
  );
};
