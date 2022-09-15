import styles from "./NextEvent.module.css";

export default function NextEvent() {
  return (
    <div className={styles.container}>
      <div className={styles.top}></div>
      <div className={styles.left}></div>
      <div className={styles.right}></div>
      <div className={styles.infoContainer}></div>
      <div className={styles.middleDivider}></div>
      <div className={styles.imgContainer}></div>
      <div className={styles.mobileTopLeft}></div>
      <div className={styles.mobileTopRight}></div>
      <div className={styles.mobileRight}></div>
      <div className={styles.mobileDividerRight}></div>
    </div>
  );
}
