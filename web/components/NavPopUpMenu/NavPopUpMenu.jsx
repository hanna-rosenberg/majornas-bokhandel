import styles from "./NavPopUpMenu.module.css";
import Image from "next/image";
import Link from "next/link";
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
            <Link href="/">
              <a>Hem</a>
            </Link>
          </div>
          <div className={styles.singleLinkContainer}>
            <Link href="/about">
              <a>Om Oss</a>
            </Link>
          </div>
          <div className={styles.singleLinkContainer}>
            <Link href="/events">
              <a>Evenemang</a>
            </Link>
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
