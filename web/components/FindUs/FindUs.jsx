import styles from "./FindUs.module.css";
import GoogleMaps from "../GoogleMaps/GoogleMaps";

export default function FindUs({ info }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>1</div>
        <div className={styles.right}>2</div>
        <div className={styles.bottom}>3</div>
        <div className={styles.info}>
          <div className={styles.infoBox}>
            <h3>{info.findUs}</h3>
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
        <div className={styles.map}>
          {console.log(info)}
          <GoogleMaps />
        </div>
        <div className={styles.mobileMiddleEdgeLeft}></div>
        <div className={styles.mobileMiddleEdgeRight}></div>
        <div className={styles.mobileMiddleLeft}></div>
        <div className={styles.mobileMiddleRight}></div>
        <div className={styles.mobileLeft}></div>
        <div className={styles.mobileRight}></div>
        <div className={styles.mobileBottomLeft}></div>
        <div className={styles.mobileBottomRight}></div>
      </div>
    </>
  );
}
