import React from 'react';
import {SearchBlock} from "../../parts/SearchBlock";
import styles from './pageNotFound.module.css';
import {HeadingTitle} from "../../components/Heading";
import {Paragraph} from "../../components/Paragraph";

export const PageNotFound = () => {
  return (
    <div>
      <HeadingTitle text={'Поиск'} />
      <Paragraph
        text={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'}
        size={'16'}
      />
      <SearchBlock />
      <div className={styles.notFound__block}>
        <HeadingTitle text={'Упс... Ничего не найдено'} />
        <Paragraph text={'Попробуйте изменить запрос или ввести более точное название фильма'} size={'16'} />
      </div>
    </div>
  );
};
