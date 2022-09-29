import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import FacebookLogo from "../../assets/facebookLogo.svg";
import InstagramLogo from "../../assets/instagramLogo.svg";
import { useState } from "react";
import NavPopUpMenu from "../NavPopUpMenu/NavPopUpMenu";

export default function Navbar() {
  const [navMenuIsOpen, setNavMenuIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.socialMediaContainer}>
          <a href="">
            <Image src={FacebookLogo} className={styles.logoImg}></Image>
          </a>
          <a href="">
            <Image src={InstagramLogo} className={styles.logoImg}></Image>
          </a>
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.desktopLinksContainer}>
          <Link href="/">
            <a className={styles.desktopLink}>Hem</a>
          </Link>
          <Link href="/about">
            <a className={styles.desktopLink}>Om Oss</a>
          </Link>
          <Link href="/events">
            <a className={styles.desktopLink}>Evenemang</a>
          </Link>
        </div>
        <div className={styles.mobileSocialMediaContainer}>
          <a href="">
            <Image src={FacebookLogo} className={styles.logoImg}></Image>
          </a>
          <a href="">
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
      {navMenuIsOpen && <NavPopUpMenu navMenuIsOpenState={setNavMenuIsOpen} />}
    </div>
  );
}
