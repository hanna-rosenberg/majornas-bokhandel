import styles from "./NavPopUpMenu.module.css";
import Image from "next/image";
import FacebookLogo from "../../assets/facebookLogo.svg";
import InstagramLogo from "../../assets/instagramLogo.svg";

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
        <div className={styles.pageLinkContainer}>
          <div className={styles.singleLinkContainer}>
            <a href="">Hem</a>
          </div>
          <div className={styles.singleLinkContainer}>
            <a href="">Om Oss</a>
          </div>
          <div className={styles.singleLinkContainer}>
            <a href="">Evenemang</a>
          </div>
        </div>
        <div className={styles.socialMediaContainer}>
          <a href="">
            <Image src={FacebookLogo} className={styles.logoImg}></Image>
          </a>
          <a href="">
            <Image src={InstagramLogo} className={styles.logoImg}></Image>
          </a>
        </div>
      </div>
    </div>
  );
}
