import React from "react";
import {HeadingTitle} from "../../components/Heading";
import {Paragraph} from "../../components/Paragraph";
import {SearchBlock} from "../SearchBlock";
import {FilmCardBlock} from "../FilmCardBlock";

export const MainPage = () => {

  return (
      <div>
        <HeadingTitle text={'Поиск'} />
        <Paragraph
          text={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'}
          size={'16'}
        />
        <SearchBlock />
        <FilmCardBlock />
      </div>
  );
};
