import styles from "./AboutMe.module.css";

export function AboutMe() {
  return (
    <section className={styles.aboutMeSection} id="#about">
      <div className={styles.aboutMeInfoContainer}>
        <h3>About me</h3>
        <p>
          Hello, my name is Preslav. I am a full-stack developer from Bulgaria.
          My journey began in 2022 because I decided to try programming. I
          stumbled on The Odin Project, since then I learned so much about
          concepts, building projects, communicating with other people really
          neat free curriculum with awesome people.
        </p>
        <p>
          Outside of programming I enjoy listening to music on the Monstercat
          label. watching documentations and working out outside.
        </p>
      </div>
      <img className={styles.aboutMeImg} src="./preslav.jpeg" alt="preslav" />
    </section>
  );
}
