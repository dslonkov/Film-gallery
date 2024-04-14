import React from 'react';
import styles from './paragraph.module.css';
import {ParagraphProps} from "./types";

export const Paragraph = (props: ParagraphProps) => {

  const { text, size } = props;

  return (
    <div className={styles.paragraph} style={{fontSize: `${size}px`}}>
      {text}
    </div>
  );
};
