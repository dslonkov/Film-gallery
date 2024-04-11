import styles from './input.module.css';
import {forwardRef} from "react";

export const Input = forwardRef(({ placeholder, name, value, onChange, withIcon }, ref) => {
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
