import styles from "./FindUsAbout.module.css";
import GoogleMaps from "../../GoogleMaps/GoogleMaps";

export default function FindUsAbout({ info }) {
  return (
    <div className={styles.container}>
      <div className={styles.topLeft}></div>
      <div className={styles.header}>
        <h3>{info.findUs}</h3>
      </div>
      <div className={styles.topRight}></div>
      <div className={styles.left}></div>
      <div className={styles.topDivider}></div>
      <div className={styles.right}></div>
      <div className={styles.adress}>
        <div className={styles.infoBox}>
          <h3>Adress</h3>
          <p>{info.address}</p>
          <p>{info.zipcode}</p>
        </div>
        <div className={styles.infoBox}>
          <h3>{info.openingHoursHeading}</h3>
          <p>{info.openingHours}</p>
          <p>{info.openingHoursWeekend}</p>
        </div>
        <div className={styles.infoBox}>
          <h3>{info.contact}</h3>
          <p>{info.email}</p>
          <p>{info.phoneNumber}</p>
        </div>
      </div>
      <div className={styles.middleDivider}></div>
      <div className={styles.map}>
        <GoogleMaps />
      </div>
      <div className={styles.bottomLeft}></div>
      <div className={styles.bottomRight}></div>
    </div>
  );
}
