import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.upArrowContainer}>
        <img
          className={styles.upArrowSvg}
          src="./up-arrow.svg"
          alt="up arrow pointing at home"
        />
      </div>
      <div className={styles.footerContentContainer}>
        <p className={styles.footerContentPara}>Copyright &#169; 2025 </p>
        <p className={styles.footerContentPara}>
          Created by
          <a
            className={styles.footerGithubAnchor}
            href="https://github.com/Preslav977"
            target="_blank"
          >
            Preslav Tsvetanov
          </a>
        </p>
      </div>
    </footer>
  );
}
