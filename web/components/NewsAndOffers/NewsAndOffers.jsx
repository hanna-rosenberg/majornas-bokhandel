import styles from "./NewsAndOffers.module.css";

export default function NewsAndOffers() {
  return (
    <div className={styles.container}>
      <div className={styles.dividerTopLeft}></div>
      <div className={styles.dividerTopMiddle}></div>
      <div className={styles.dividerTopRight}></div>

      <div className={styles.newsLeft}></div>
      <div className={styles.news}></div>
      <div className={styles.newsOffersDivider}></div>
      <div className={styles.offersLeftMobile}></div>
      <div className={styles.offers}></div>
      <div className={styles.offersRight}></div>

      <div className={styles.mobileDividerLeft}></div>
      <div className={styles.mobileDividerMiddle}></div>
      <div className={styles.mobileDividerRight}></div>
    </div>
  );
}
