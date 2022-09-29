import styles from "./AuthorOfTheMonth.module.css";
import Image from "next/image";
import booksImage from "../../assets/books-image.png";

export default function AuthorOfTheMonth({ authorRecommendation }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.topLeft}></div>
        <div className={styles.heading}>
          <h2>EVAS FÖRFATTARTIPS</h2>
        </div>
        <div className={styles.topRight}></div>
        <div className={styles.top}></div>
        <div className={styles.left}></div>
        <div className={styles.image}>
          <Image src={booksImage} className={styles.bookImage}></Image>
        </div>
        <div className={styles.right}></div>
        <div className={styles.middleLeft}></div>
        <div className={styles.middle}></div>
        <div className={styles.lowerLeft}></div>
        <div className={styles.info}>
          <h3>{authorRecommendation.author}</h3>
          <p>{authorRecommendation.description}</p>
        </div>
        <div className={styles.lowerRight}></div>
        <div className={styles.bottomLeft}></div>
        <div className={styles.bottom}></div>
        <div className={styles.bottomRight}></div>
      </div>
    </>
  );
}
