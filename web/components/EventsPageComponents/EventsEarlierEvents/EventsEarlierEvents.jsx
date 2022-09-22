import styles from "./EventsEarlierEvents.module.css";
export default function Welcome() {
  return (
    <div className={styles.container}>
      <div className={styles.topLeft}></div>
      <div className={styles.header}>
        <h2>Tidigare evenemang</h2>
      </div>
      <div className={styles.topRight}></div>
      <div className={styles.left}></div>
      <div className={styles.events}></div>
      <div className={styles.right}></div>
      <div className={styles.bottomLeft}></div>
      <div className={styles.bottomRight}></div>
    </div>
  );
}
