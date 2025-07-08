import styles from "./ContactMe.module.css";

export function ContactMe() {
  return (
    <section className={styles.contactMeContainer}>
      <div>
        <h6>Contact</h6>

        <p>Feel free to contact me through any of the methods listed below.</p>

        <div className={styles.contactMeSvgContainer}>
          <a href="https://github.com/Preslav977" target="_blank">
            <img
              className={styles.contactMeSvg}
              src="./github.svg"
              alt="github"
            />
          </a>

          <a href="mailto:preslav.tsvetanov@gmail.com">
            <img
              className={styles.contactMeSvg}
              src="./email.svg"
              alt="email"
            />
          </a>

          <a href="https://www.linkedin.com/in/preslav-tsvetanov/">
            <img
              className={styles.contactMeSvg}
              src="./linkedin.svg"
              alt="linkedin"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
