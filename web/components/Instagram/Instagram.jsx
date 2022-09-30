import styles from "./Instagram.module.css";

export default function Instagram(insta) {
  const image = insta.insta.data;
  return (
    <div className={styles.container}>
      {console.log(image)}
      <div className={styles.topLeft}></div>
      <div className={styles.header}>FÖLJ OSS PÅ INSTAGRAM</div>
      <div className={styles.topRight}></div>
      <div className={styles.left}></div>
      <div className={styles.content}>
        {image &&
          image.slice(0, 3).map((images) => (
            <div className={styles.images} key={images.id}>
              <img
                src={images.media_url}
                alt={images.caption}
                className={styles.img}
              />
            </div>
          ))}
      </div>
      <div className={styles.right}></div>
    </div>
  );
}
