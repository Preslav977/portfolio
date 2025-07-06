import styles from "./Skills.module.css";

export function Skills() {
  return (
    <div className={styles.flexedCenteredSkillsContainer}>
      <section className={styles.gridSkillsContainer}>
        <div className={styles.flexedFrontEndSkillsContainer}>
          <p>Front-end</p>
          <div className={styles.flexedFrontEndSvgContainer}>
            <img className={styles.skillsSvg} src="./html5.svg" alt="html5" />
            <img className={styles.skillsSvg} src="./css3.svg" alt="css3" />
            <img
              className={styles.skillsSvg}
              src="./javascript.svg"
              alt="javascript"
            />
            <img className={styles.skillsSvg} src="./react.svg" alt="react" />
          </div>
        </div>
        <div className={styles.flexedBackEndSkillsContainer}>
          <p>Back-end</p>
          <div className={styles.flexedBackEndSvgContainer}>
            <img className={styles.skillsSvg} src="./nodejs.svg" alt="nodejs" />
            <img
              className={styles.skillsSvg}
              src="./express.svg"
              alt="express"
            />
            <img
              className={styles.skillsSvg}
              src="./javascript.svg"
              alt="javascript"
            />
            <img
              className={styles.skillsSvg}
              src="./mongodb.svg"
              alt="mongodb"
            />
            <img
              className={styles.skillsSvg}
              src="./postgresql.svg"
              alt="postgresql"
            />
            <img className={styles.skillsSvg} src="./prisma.svg" alt="prisma" />
            <img className={styles.skillsSvg} src="./pug.svg" alt="pug" />
            <img className={styles.skillsSvg} src="./jest.svg" alt="jest" />
          </div>
        </div>
        <div className={styles.flexedMiscellaneousSkillsContainer}>
          <p>Miscellaneous</p>
          <div className={styles.flexedMiscellaneousSvgContainer}>
            <img className={styles.skillsSvg} src="./git.svg" alt="git" />
            <img className={styles.skillsSvg} src="./github.svg" alt="github" />
            <img
              className={styles.skillsSvg}
              src="./webpack.svg"
              alt="webpack"
            />
            <img className={styles.skillsSvg} src="./vite.svg" alt="vite" />
            <img className={styles.skillsSvg} src="./npm.svg" alt="npm" />
            <img
              className={styles.skillsSvg}
              src="./postman.svg"
              alt="postman"
            />
            <img className={styles.skillsSvg} src="./vscode.svg" alt="vscode" />
            <img className={styles.skillsSvg} src="./eslint.svg" alt="eslint" />
            <img
              className={styles.skillsSvg}
              src="./prettier.svg"
              alt="prettier"
            />
            <img className={styles.skillsSvg} src="./vercel.svg" alt="vercel" />
            <img className={styles.skillsSvg} src="./linux.svg" alt="linux" />
          </div>
        </div>
      </section>
    </div>
  );
}
