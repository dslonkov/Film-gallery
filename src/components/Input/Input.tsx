import styles from './input.module.css';
import {forwardRef} from "react";
import {InputProps} from "./types";
import React from 'react';

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {

  const { placeholder, name, value, withIcon, onChange } = props;

  return (
    <div className={styles.input__container}>
      <input
        className={styles.input}
        ref={ref}
        style={{paddingLeft: withIcon ? '60px' : '16px', width: withIcon ? '306px' : '352px'}}
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {
        withIcon && (
          <img
            className={styles['search-icon']}
            src="./search.svg"
            alt="Поиск"
          />
        )
      }
    </div>
  );
});
