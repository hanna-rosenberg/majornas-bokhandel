
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
        <img
          height={450}
          width={320}
          src={urlFor(bookRecommendation[0].image).url()}
        />
      </div>
      <div className={styles.middleDivTopVertical}></div>
      <div className={styles.bookTwoImg}>
        <img
          height={450}
          width={320}
          src={urlFor(bookRecommendation[1].image).url()}
        />
      </div>
      <div className={styles.middleDivider}></div>
      <div className={styles.middleDividerRight}></div>
      <div className={styles.bookOneInfo}>
        <h3>{bookRecommendation[0].booktitle}</h3>
        <p>{bookRecommendation[0].name}</p>
      </div>
      <div className={styles.middleDivLowerVertical}></div>
      <div className={styles.bookTwoInfo}>
        <h3>{bookRecommendation[1].booktitle}</h3>
        <p>{bookRecommendation[1].name}</p>
      </div>
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
