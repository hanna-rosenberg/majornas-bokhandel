
import styles from "./Footer.module.css";

export default function Footer({ props, info }) {
  return (
    <div className={styles.container}>
      <div className={styles.left}></div>
      <div className={styles.info}>
        <div className={styles.infoContainer}>
          <h4>{info.address}.</h4>
          <h4>
            {info.openingHoursHeading}: {info.openingHours},
            {info.openingHoursWeekend}
          </h4>
          <h4>Telefon: {info.phoneNumber}</h4>
          <h4>{info.email}</h4>
        </div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
}

