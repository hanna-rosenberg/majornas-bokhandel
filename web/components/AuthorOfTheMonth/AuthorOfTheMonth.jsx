import styles from "./AuthorOfTheMonth.module.css";

export default function AuthorOfTheMonth() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.topLeft}></div>
        <div className={styles.heading}></div>
        <div className={styles.topRight}></div>
        <div className={styles.top}></div>
        <div className={styles.left}></div>
        <div className={styles.image}></div>
        <div className={styles.right}></div>
        <div className={styles.middleLeft}></div>
        <div className={styles.middle}></div>
        <div className={styles.lowerLeft}></div>
        <div className={styles.info}></div>
        <div className={styles.lowerRight}></div>
        <div className={styles.bottomLeft}></div>
        <div className={styles.bottom}></div>
        <div className={styles.bottomRight}></div>
      </div>
    </>
  );
}
