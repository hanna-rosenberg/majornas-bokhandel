import styles from "./FindUs.module.css";

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
        <div className={styles.map}>{console.log(info)}5</div>
        <div className={styles.mobileMiddleEdgeLeft}>6</div>
        <div className={styles.mobileMiddleEdgeRight}>7</div>
        <div className={styles.mobileMiddleLeft}>8</div>
        <div className={styles.mobileMiddleRight}>9</div>
        <div className={styles.mobileLeft}>10</div>
        <div className={styles.mobileRight}>11</div>
        <div className={styles.mobileBottomLeft}>12</div>
        <div className={styles.mobileBottomRight}>13</div>
      </div>
    </>
  );
}
