import styles from './headingTitle.module.css';

export const HeadingTitle = ({text}) => {
  return (
    <h1 className={styles.title}>{text}</h1>
  );
};
