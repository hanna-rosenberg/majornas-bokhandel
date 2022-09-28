import styles from "./Navbar.module.css";
import Image from "next/image";
import FacebookLogo from "../../assets/facebookLogo.svg";
import InstagramLogo from "../../assets/instagramLogo.svg";
import { useState } from "react";

export default function Navbar() {
  const [navMenuIsOpen, setNavMenuIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.socialMediaContainer}>
          <a href="">
            <Image src={FacebookLogo} className={styles.logoImg}></Image>
            <Image src={InstagramLogo} className={styles.logoImg}></Image>
          </a>
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.desktopLinksContainer}>
          <a href="#" className={styles.desktopLink}>
            <span>Hem</span>
          </a>
          <a href="#" className={styles.desktopLink}>
            <span>Om Oss</span>
          </a>
          <a href="#" className={styles.desktopLink}>
            <span>Evenemang</span>
          </a>
        </div>
        <div className={styles.mobileSocialMediaContainer}>
          <a href="">
            <Image src={FacebookLogo} className={styles.logoImg}></Image>
            <Image src={InstagramLogo} className={styles.logoImg}></Image>
          </a>
        </div>
      </div>
      <div className={styles.right}>
        <button onClick={() => setNavMenuIsOpen(true)} className={styles.hamburgerButton}>
          <div className={styles.hamburgerBar}></div>
          <div className={styles.hamburgerBar}></div>
          <div className={styles.hamburgerBar}></div>
        </button>
      </div>

      {navMenuIsOpen && (
        <div className={styles.navMenu}>
          <button onClick={() => setNavMenuIsOpen(false)}>x</button>
        </div>
      )}
    </div>
  );
}
