import styles from "./NavPopUpMenu.module.css";

export default function NavPopUpMenu({ navMenuIsOpenState }) {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.closeButtonContainer}>
        <button onClick={() => navMenuIsOpenState(false)} className={styles.closeButton}>
          <div className={styles.closeButtonCrossLineOne}></div>
          <div className={styles.closeButtonCrossLineTwo}></div>
        </button>
      </div>
      <div className={styles.menuContentContainer}>
        <div className={styles.pageLinkContainer}></div>
        <div className={styles.socialMediaContainer}></div>
      </div>
    </div>
  );
}
