import styles from "./UpcomingEvents.module.css";
import React from "react";
import { urlFor } from "../../../studio/lib/client";

export default function UpcommingEvents({ upcoming }) {
  console.log(upcoming[0].image);
  return (
    <div className={styles.container}>
      <div className={styles.left}></div>
      <div className={styles.top}></div>
      <div className={styles.topRight}></div>
      <div className={styles.right}></div>
      <div className={styles.information}></div>
      <div className={styles.upcoming}>
        <p>hej</p>
        <img src={urlFor(upcoming[0].image).url()} />
        <div>
          <ul>
            {upcoming.slice(0, 3).map(function (event, id) {
              console.log(event.image);
              return (
                <div>
                  <img key={id} src={urlFor(event.image).url()} />
                  <li key={id}>{event.type}</li>
                  <li key={id}>{event.name}</li>
                  <li key={id}>{event.date}</li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={styles.bottomLeft}></div>
      <div className={styles.bottomRight}></div>
      <div className={styles.mobileTopLeft}></div>
      <div className={styles.mobileTop}></div>
      <div className={styles.mobileTopRight}></div>
      <div className={styles.mobileMiddleDivider}></div>
      <div className={styles.mobileLeft}></div>
    </div>
  );
}
