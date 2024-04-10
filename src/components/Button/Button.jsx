import styles from  './button.module.css';
import cn from 'classnames';

export const Button = ({children, onClick, invisible }) => {
  return (
    <button
      className={cn(styles['button'], {[styles['invisible']]: invisible})}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
