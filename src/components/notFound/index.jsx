import styles from "./styles.module.css";
export const NotFound = () => {
  return (
    <div className={styles.notFound__wrapper}>
      <span className={styles.sadIcon}></span>
      <span>Error 404!</span>
      <span> Page not found!</span>
    </div>
  );
};
