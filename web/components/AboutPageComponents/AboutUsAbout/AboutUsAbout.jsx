import styles from "./AboutUsAbout.module.css";
import Image from "next/image";
import Image0ne from "../../../assets/about-image-one.png";

export default function AboutUsAbout() {
  return (
    <div className={styles.container}>
      <div className={styles.topLeft}></div>
      <div className={styles.AboutUs}>
        <h3>Om Oss</h3>
        <p>
          Majornas böcker &amp; kaffe är en oberoende bokhandel som öppnade sommaren 2019. Här finner du aktuell
          skönlitteratur, barnböcker, serieböcker och intressanta fackböcker.
        </p>
      </div>
      <div className={styles.topRight}></div>
      <div className={styles.topLeftLower}></div>
      <div className={styles.left}></div>
      <div className={styles.topDivider}></div>
      <div className={styles.right}></div>
      <div className={styles.image}>
        <Image src={Image0ne} className={styles.imageOne}></Image>
      </div>
      <div className={styles.middleDivider}></div>
      <div className={styles.infoOwner}>
        <h4>Hej på er!</h4>
        <p>
          Mitt namn är Eva Wadman och jag driver butiken Majornas böcker &amp; kaffe. Böcker är min passion och om du
          har vägarna förbi är du varmt välkommen in på varm kopp kaffe och bulle.
        </p>
      </div>
      <div className={styles.bottomLeft}></div>
      <div className={styles.bottom}></div>
    </div>
  );
}
