import styles from "./UpcomingEvents.module.css";

export default function UpcommingEvents({ upcoming }) {
  return (
    <div className={styles.container}>
      <div className={styles.left}></div>
      <div className={styles.top}></div>
      <div className={styles.topRight}></div>
      <div className={styles.right}></div>
      <div className={styles.information}></div>
      <div className={styles.upcoming}>
        <p>hej</p>
        <div>
          <ul>
            {upcoming.map(function (event, id) {
              return (
                <div>
                  <li key={id}>{event.type}</li>
                  <li key={id}>{event.name}</li>
                  <li key={id}>{event.date}</li>
                </div>
              );
            })}
          </ul>
        </div>
        {console.log(upcoming)}
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
