import styles from "./NextEvent.module.css";
import React from "react";
import { urlFor } from "../../../studio/lib/client";

export default function NextEvent({ events }) {
  return (
    <div className={styles.container}>
      <div className={styles.top}></div>
      <div className={styles.left}></div>
      <div className={styles.right}></div>
      <div className={styles.infoContainer}>
        <img src={urlFor(events.image).url()} />
      </div>
      <div className={styles.middleDivider}></div>
      <div className={styles.imgContainer}>
        <h2>{events.name}</h2>
        <h4>{events.booktitle}</h4>
        <p className={styles.eventDate}>{events.date}</p>
        <p className={styles.eventDescription}>{events.description}</p>
      </div>
      <div className={styles.mobileTopLeft}></div>
      <div className={styles.mobileTopRight}></div>
      <div className={styles.mobileRight}></div>
      <div className={styles.mobileDividerRight}></div>
    </div>
  );
}
