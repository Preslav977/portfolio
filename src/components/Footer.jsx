import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.upArrowContainer}>
        <img
          className={styles.upArrowSvg}
          src="./up-arrow.svg"
          alt="up arrow"
        />
      </div>
      <div className={styles.footerContentContainer}>
        <p>Copyright &#169; 2025</p>
        <p>
          Created by
          <a href="https://github.com/Preslav977" target="_blank">
            Preslav Tsvetanov
          </a>
        </p>
      </div>
    </footer>
  );
}
