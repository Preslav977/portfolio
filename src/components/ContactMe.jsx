import styles from "./ContactMe.module.css";

export function ContactMe() {
  return (
    <div className={styles.contactMeWrapper} id="contact">
      <h6 className={styles.contactMeHeader}>Contact</h6>
      <section className={styles.contactMeContainer}>
        <div>
          <div className={styles.contactMeDotsContainer}>
            <div className={styles.contactMeDots}></div>
            <div className={styles.contactMeDots}></div>
            <div className={styles.contactMeDots}></div>
          </div>
          <p className={styles.contactMePara}>
            Feel free to contact me through any of the methods listed below.
          </p>

          <div className={styles.contactMeSvgContainer}>
            <a href="https://github.com/Preslav977" target="_blank">
              <img
                className={styles.contactMeSvg}
                src="./github.svg"
                alt="github"
              />
            </a>

            <a href="mailto:preslav.tsvetanov@gmail.com" target="_blank">
              <img
                className={styles.contactMeSvg}
                src="./email.svg"
                alt="email"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/preslav-tsvetanov/"
              target="_blank"
            >
              <img
                className={styles.contactMeSvg}
                src="./linkedin.svg"
                alt="linkedin"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
