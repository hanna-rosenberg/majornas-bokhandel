import styles from "./TheStoreAbout.module.css";
import Image from "next/image";
import Image0ne from "../../../assets/store-one.png";
import ImageTwo from "../../../assets/store-two.png";
export default function TheStoreAbout() {
  return (
    <div className={styles.container}>
      <div className={styles.topLeft}></div>
      <div className={styles.header}>
        <h2>Butiken</h2>
      </div>
      <div className={styles.topRight}></div>
      <div className={styles.left}></div>
      <div className={styles.topDivider}></div>
      <div className={styles.right}></div>
      <div className={styles.image}>
        <Image src={Image0ne}></Image>
      </div>
      <div className={styles.middleDivider}></div>
      <div className={styles.imageTwo}>
        <Image src={ImageTwo}></Image>
      </div>
      <div className={styles.bottom}></div>
      <div className={styles.mobileMiddleDivider}></div>
    </div>
  );
}
