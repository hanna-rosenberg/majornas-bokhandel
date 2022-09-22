import styles from "./EventsWelcome.module.css";
import Image from "next/image";
import headerImage from "../../../assets/header-books.jpg";

export default function Welcome() {
  return (
    <div className={styles.container}>
      <div className={styles.topLeft}></div>
      <div className={styles.header}>
        <h3>Evenemang</h3>
        <p>
          Varmt välkommen till våra evenemang, vi har författarbesök &amp;
          bokcirklar. Nedan kan du se kommande evenemang och tidigare
          författarbesök.
        </p>
      </div>
      <div className={styles.topRight}></div>
      <div className={styles.left}></div>
      <div className={styles.image}>
        <Image src={headerImage} className={styles.bookImage}></Image>
      </div>
      <div className={styles.right}></div>
      <div className={styles.lowerLeft}></div>
      <div className={styles.infoTextBottom}>
        <p>
          Evenemangen är (med enstaka undantag) gratis, men både bokhandlare och
          författare uppskattar om man köper en bok!
          <br /> <br /> Om inte annat anges öppnas dörren 18.30 och så börjar
          det 19:00. Fika finns att köpa.
          <br /> Föranmälan krävs, den mailar du tillsammans med ditt namn och
          mobilnummer till:
        </p>
      </div>
      <div className={styles.lowerRight}></div>
      <div className={styles.bottomLeft}></div>
      <div className={styles.bottom}></div>
      <div className={styles.bottomRight}></div>
    </div>
  );
}
