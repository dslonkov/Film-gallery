import * as styles from  './button.module.css';
import cn from 'classnames';
import {ButtonProps} from "./types";
import React from 'react';

export const Button = (props: ButtonProps) => {

  const { invisible, onClick, children } = props;

  return (
    <button
      className={cn(styles['button'], {[styles['invisible']]: invisible})}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
