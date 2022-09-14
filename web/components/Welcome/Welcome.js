import styles from "./Welcome.module.css";

export default function Welcome() {
  return (
    <div className={styles.container}>
      <div className={styles.marginTopLeft}></div>
      <div className={styles.marginMiddleLeft}></div>
      <div className={styles.marginBottomLeft}></div>
      <div className={styles.empty}></div>
      <div className={styles.empty}></div>
      <div className={styles.empty}></div>
      <div className={styles.marginTopRight}></div>
      <div className={styles.marginMiddleRight}></div>
      <div className={styles.marginBottomRight}></div>
    </div>
  );
}
