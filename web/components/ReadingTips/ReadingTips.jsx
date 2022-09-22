import styles from "./ReadingTips.module.css";
import React from "react";
import { urlFor } from "../../../studio/lib/client";

export default function ReadingTips({ bookRecommendation }) {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>SENASTE BOKTIPS</h2>
      </div>
      <div className={styles.topRight}></div>
      <div className={styles.leftTop}></div>
      <div className={styles.top}></div>
      <div className={styles.right}></div>
      <div className={styles.leftLower}></div>
      <div className={styles.bookOneImg}>
        <img width={50} src={urlFor(bookRecommendation[0].image).url()} />
      </div>
      <div className={styles.middleDivTopVertical}></div>
      <div className={styles.bookTwoImg}>
        <img width={100} src={urlFor(bookRecommendation[1].image).url()} />
      </div>
      <div className={styles.middleDivider}></div>
      <div className={styles.middleDividerRight}></div>
      <div className={styles.bookOneInfo}></div>
      <div className={styles.middleDivLowerVertical}></div>
      <div className={styles.bookTwoInfo}></div>
      <div className={styles.bottom}></div>
      <div className={styles.mobileTopLeft}></div>
      <div className={styles.mobileRightLower}></div>
      <div className={styles.mobileRightLowest}></div>
      <div className={styles.mobileBottomRight}></div>
      <div className={styles.mobileBottom}></div>
      <div className={styles.mobileBottomLeft}></div>
    </div>
  );
}
