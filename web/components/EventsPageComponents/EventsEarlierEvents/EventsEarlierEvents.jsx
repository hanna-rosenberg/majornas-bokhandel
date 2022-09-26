import styles from "./EventsEarlierEvents.module.css";
import React from "react";
import { urlFor } from "../../../../studio/lib/client";

export default function Welcome({ previous }) {
  console.log(previous);
  return (
    <div className={styles.container}>
      <div className={styles.topLeft}></div>
      <div className={styles.header}>
        <h2>Tidigare evenemang</h2>
      </div>
      <div className={styles.topRight}></div>
      <div className={styles.left}></div>
      <div className={styles.events}>
        <div className={styles.events}>
          <ul>
            {previous.slice(0, 3).map(function (event) {
              return (
                <div className={styles.upcomingEvents} key={event._id}>
                  <div className={styles.upcomingEventsImg}>
                    <img src={urlFor(event.image).url()} />
                  </div>
                  <div className={styles.upcomingEventsText}>
                    <li className={styles.name}>{event.name}</li>
                    <li className={styles.booktitle}>{event.booktitle}</li>
                    <li className={styles.date}>{event.date}</li>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={styles.right}></div>
      <div className={styles.bottomLeft}></div>
      <div className={styles.bottomRight}></div>
    </div>
  );
}
