import styles from "./AboutMe.module.css";

export function AboutMe() {
  return (
    <section className={styles.aboutMeSection} id="about">
      <div className={styles.aboutMeInfoContainer}>
        <h3 className={styles.aboutMeHeader}>About me</h3>
        <p className={styles.aboutMeInfoPara}>
          Hello, my name is Preslav. I am a full-stack developer from Bulgaria.
          My journey began in 2022 because I decided to try programming. I
          stumbled on The Odin Project, since then I learned so much about
          concepts, building projects, communicating with other people really
          neat free curriculum with awesome people.
        </p>
        <p className={styles.aboutMeInfoPara}>
          Outside of programming I enjoy listening to music on the Monstercat
          label. Watching documentations and working out outside.
        </p>
      </div>
      <img className={styles.aboutMeImg} src="./preslav.png" alt="preslav" />
    </section>
  );
}
