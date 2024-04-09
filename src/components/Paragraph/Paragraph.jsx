import styles from './paragraph.module.css';

export const Paragraph = ({text, size}) => {
  return (
    <div className={styles.paragraph} style={{fontSize: `${size}px`}}>
      {text}
    </div>
  );
};
