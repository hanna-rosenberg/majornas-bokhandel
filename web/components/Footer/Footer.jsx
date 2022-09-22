import styles from "./Footer.module.css";

export default function Footer(props) {
  return (
    <div className={styles.container}>
      <div className={styles.left} style={{ backgroundColor: props.color }}></div>
      <div className={styles.info}>Footer Info</div>
      <div className={styles.right}></div>
    </div>
  );
}
