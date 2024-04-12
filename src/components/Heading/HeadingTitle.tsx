import React from 'react';
import styles from './headingTitle.module.css';
import {HeadingProps} from "./types";

export const HeadingTitle = (props: HeadingProps) => {

  const { text } = props;

  return (
    <h1 className={styles.title}>{text}</h1>
  );
};
