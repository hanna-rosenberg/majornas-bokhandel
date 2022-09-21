import styles from "./UpcomingEvents.module.css";
import React from "react";
import { urlFor } from "../../../studio/lib/client";
import Link from "next/link";

export default function UpcommingEvents({ upcoming }) {
  console.log(upcoming[0].image);
  return (
    <div className={styles.container}>
      <div className={styles.left}></div>
      <div className={styles.top}></div>
      <div className={styles.topRight}></div>
      <div className={styles.right}></div>
      <div className={styles.information}>
        <h2>Information</h2>
        <p>
          Evenemangen är (med enstaka undantag) gratis, men både bokhandlare och
          författare uppskattar om man köper en bok!
        </p>
        <p>
          Om inte annat anges öppnas dörren 18:30 och så börjar det 19:00. Fika
          finns att köpa. Föranmälan krävs, den mailar du tillsammans med ditt
          namn och mobilnummer till:
        </p>
        <h3>info@majornasbocker.se</h3>
      </div>
      <div className={styles.upcoming}>
        <div>
          <h2>Kommande evenemang</h2>
          <ul>
            {upcoming.slice(0, 3).map(function (event) {
              return (
                <div className={styles.upcomingEvents}>
                  <div className={styles.upcomingEventsImg}>
                    {/* <img src={urlFor(event.image).url()} /> */}
                  </div>
                  <div className={styles.upcomingEventsText}>
                    <li className={styles.type}>{event.type}</li>
                    <li className={styles.name}>{event.name}</li>
                    <li className={styles.date}>{event.date}</li>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
        <div className={styles.link}>
          <Link href="/">
            <a>&#x2192; Läs mer om evenemang här </a>
          </Link>
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
