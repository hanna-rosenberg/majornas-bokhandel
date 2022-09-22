import styles from "./NewsAndOffers.module.css";
import React from "react";

export default function NewsAndOffers({ news, offer }) {
  return (
    <div className={styles.container}>
      <div className={styles.dividerTopLeft}></div>
      <div className={styles.dividerTopMiddle}></div>
      <div className={styles.dividerTopRight}></div>

      <div className={styles.newsLeft}></div>
      <div className={styles.news}>
        <h3>NYHETER</h3>
        <p>{news}</p>
      </div>
      <div className={styles.newsOffersDivider}></div>
      <div className={styles.offersLeftMobile}></div>
      <div className={styles.offers}>
        <h3>ERBJUDANDE</h3>
        <p>{offer}</p>
      </div>
      <div className={styles.offersRight}></div>

      <div className={styles.mobileDividerLeft}></div>
      <div className={styles.mobileDividerMiddle}></div>
      <div className={styles.mobileDividerRight}></div>
    </div>
  );
}
