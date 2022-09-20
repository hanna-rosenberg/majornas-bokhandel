import styles from "./NextEvent.module.css";
import React from "react";

export default function NextEvent({ events }) {
  return (
    <div className={styles.container}>
      <div className={styles.top}></div>
      <div className={styles.left}></div>
      <div className={styles.right}></div>
      <div className={styles.infoContainer}></div>
      <div className={styles.middleDivider}></div>
      <div className={styles.imgContainer}>
        <h2>{events.name}</h2>
        <h4>{events.booktitle}</h4>
        <p>{events.date}</p>
        <p>{events.description}</p>
      </div>
      <div className={styles.mobileTopLeft}></div>
      <div className={styles.mobileTopRight}></div>
      <div className={styles.mobileRight}></div>
      <div className={styles.mobileDividerRight}></div>
    </div>
  );
}
