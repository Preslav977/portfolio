import styles from "./TypewriterAnimation.module.css";

export function TypewriteAnimation() {
  return (
    <>
      <span
        aria-label="type writer animation"
        className={styles.spanTypeWriterContainer}
      >
        <span aria-label="type writer text content">
          <span>Developer</span>
          <span>Music lover</span>
          <span>Calisthenics enjoyer</span>
        </span>
        <h2 className={styles.typeWriterHeader}>Full Stack Developer</h2>
        <a href="#projects" className={styles.flexedRightArrowAnchorContainer}>
          View my work{" "}
          <img
            className={styles.rightArrowSvg}
            src="./right-arrow.svg"
            alt="right arrow pointing down on hover"
          />
        </a>
      </span>
    </>
  );
}
