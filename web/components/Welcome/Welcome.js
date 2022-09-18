import styles from "./Welcome.module.css";
import Image from "next/image";
import Logo from "../../assets/logo.svg";
import HeaderImage from "../../assets/welcome.jpg";
export default function Welcome() {
  return (
    <div className={styles.container}>
      <div className={styles.marginTopLeft}></div>
      <div className={styles.marginMiddleLeft}></div>
      <div className={styles.marginBottomLeft}></div>
      <div className={styles.headerContainer}>
        <div className={styles.headerContainerContent}>
          <Image src={Logo} className={styles.logo}></Image>
          <p>
            ”En trivsam bokhandel där man kan botanisera bland böcker, eller slå sig ner med en espresso och
            dagstidningen.” Eva Wadman
          </p>
        </div>
      </div>

      <div className={styles.heroImgContainer}>
        <Image src={HeaderImage} className={styles.heroImgContent}></Image>
      </div>

      <div className={styles.infoTextContainer}>
        <h1>Varmt Välkommen!</h1>
        <p>
          Majornas böcker &amp; kaffe är en oberoende bokhandel som öppnade sommaren 2019. Här finner du aktuell
          skönlitteratur, barnböcker, serieböcker och intressanta fackböcker. Förutom böcker säljs också kort, pussel
          och spel samt en del pappersvaror och roliga presenter. På barnavdelningen hittar man förutom böcker småprylar
          som är perfekta som kalaspresenter.
        </p>
      </div>
      <div className={styles.marginTopRight}></div>
      <div className={styles.marginMiddleRight}></div>
      <div className={styles.marginBottomRight}></div>
    </div>
  );
}
