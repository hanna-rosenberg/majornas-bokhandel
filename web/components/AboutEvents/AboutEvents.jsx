import styles from "./AboutEvents.module.css";
import Image from "next/image";
import bookIcon from "../../assets/book-icon.svg";

export default function AboutEvents() {
  return (
    <div className={styles.container}>
      <div className={styles.dividerTopLeft}></div>
      <div className={styles.dividerLeft}></div>
      <div className={styles.textContainer}>
        <Image src={bookIcon} className={styles.bookIcon}></Image>
        <h4>
          Bokhandeln anordnar regelbundet författarkvällar. En rad
          uppmärksammade och intressanta författare har gästat bokhandeln.
        </h4>
      </div>
      <div className={styles.dividerTop}></div>
      <div className={styles.dividerRight}></div>
    </div>
  );
}
