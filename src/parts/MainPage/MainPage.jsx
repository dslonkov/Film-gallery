import {Hero} from "../Hero/Hero.jsx";
import {HeadingTitle} from "../../components/Heading/HeadingTitle.jsx";
import {Paragraph} from "../../components/Paragraph/Paragraph.jsx";
import {SearchBlock} from "../SearchBlock/SearchBlock.jsx";
import {FilmCardBlock} from "../FilmCardBlock/FilmCardBlock.jsx";

export const MainPage = () => {

  return (
      <div className='site-container'>
        <Hero />
        <HeadingTitle text={'Поиск'} />
        <Paragraph
          text={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'}
          size={16}
        />
        <SearchBlock />
        <FilmCardBlock />
      </div>
  );
};
