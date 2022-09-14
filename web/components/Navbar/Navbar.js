import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.leftMarginContainer}></div>
      <div className={styles.middleContainer}>
        <div className={styles.desktopLinksContainer}>
          <a href="#" className={styles.desktopLink}>
            <span>Hem</span>
          </a>
          <a href="#" className={styles.desktopLink}>
            <span>Om Oss</span>
          </a>
          <a href="#" className={styles.desktopLink}>
            <span>Evenemang</span>
          </a>
        </div>
      </div>
      <div className={styles.rightMarginContainer}></div>
    </div>
  );
}
