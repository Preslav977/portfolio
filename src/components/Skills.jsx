import styles from "./Skills.module.css";

export function Skills() {
  return (
    <div className={styles.flexedCenteredSkillsContainer} id="#skills">
      <h3>Skills</h3>
      <section className={styles.gridSkillsContainer}>
        <div className={styles.flexedFrontEndSkillsContainer}>
          <p>Front-end</p>
          <div className={styles.flexedFrontEndSvgContainer}>
            <figure>
              <img className={styles.skillsSvg} src="./html5.svg" alt="html5" />
              <figcaption>HTML5</figcaption>
            </figure>
            <figure>
              <img className={styles.skillsSvg} src="./css3.svg" alt="css3" />
              <figcaption>CSS3</figcaption>
            </figure>
            <figure>
              <img
                className={styles.skillsSvg}
                src="./javascript.svg"
                alt="javascript"
              />
              <figcaption>JavaScript</figcaption>
            </figure>
            <figure>
              <img className={styles.skillsSvg} src="./react.svg" alt="react" />
              <figcaption>React</figcaption>
            </figure>
          </div>
        </div>
        <div className={styles.flexedBackEndSkillsContainer}>
          <p>Back-end</p>
          <div className={styles.flexedBackEndSvgContainer}>
            <figure>
              <img
                className={styles.skillsSvg}
                src="./nodejs.svg"
                alt="nodejs"
              />
              <figcaption>NodeJS</figcaption>
            </figure>
            <figure>
              <img
                className={styles.skillsSvg}
                src="./express.svg"
                alt="express"
              />
              <figcaption>Express</figcaption>
            </figure>
            <figure>
              <img
                className={styles.skillsSvg}
                src="./javascript.svg"
                alt="javascript"
              />
              <figcaption>JavaScript</figcaption>
            </figure>
            <figure>
              <img
                className={styles.skillsSvg}
                src="./mongodb.svg"
                alt="mongodb"
              />
              <figcaption>MongoDB</figcaption>
            </figure>
            <figure>
              <img
                className={styles.skillsSvg}
                src="./postgresql.svg"
                alt="postgresql"
              />
              <figcaption>PostgreSQL</figcaption>
            </figure>
            <figure>
              <img
                className={styles.skillsSvg}
                src="./prisma.svg"
                alt="prisma"
              />
              <figcaption>Prisma</figcaption>
            </figure>
            <figure>
              <img className={styles.skillsSvg} src="./pug.svg" alt="pug" />
              <figcaption>Pug / Jade</figcaption>
            </figure>
            <figure>
              <img className={styles.skillsSvg} src="./jest.svg" alt="jest" />
              <figcaption>Jest</figcaption>
            </figure>
          </div>
        </div>
        <div className={styles.flexedMiscellaneousSkillsContainer}>
          <p>Miscellaneous</p>
          <div className={styles.flexedMiscellaneousSvgContainer}>
            <figure>
              <img className={styles.skillsSvg} src="./git.svg" alt="git" />
              <figcaption>Git</figcaption>
            </figure>
            <figure>
              <img
                className={styles.skillsSvg}
                src="./github.svg"
                alt="github"
              />
              <figcaption>Github</figcaption>
            </figure>
            <figure>
              <img
                className={styles.skillsSvg}
                src="./webpack.svg"
                alt="webpack"
              />
              <figcaption>Webpack</figcaption>
            </figure>
            <figure>
              <img className={styles.skillsSvg} src="./vite.svg" alt="vite" />
              <figcaption>Vite</figcaption>
            </figure>
            <figure>
              <img className={styles.skillsSvg} src="./npm.svg" alt="npm" />
              <figcaption>Npm</figcaption>
            </figure>
            <figure>
              <img
                className={styles.skillsSvg}
                src="./postman.svg"
                alt="postman"
              />
              <figcaption>Postman</figcaption>
            </figure>
            <figure>
              <img
                className={styles.skillsSvg}
                src="./vscode.svg"
                alt="vscode"
              />
              <figcaption>VSCode</figcaption>
            </figure>
            <figure>
              <img
                className={styles.skillsSvg}
                src="./eslint.svg"
                alt="eslint"
              />
              <figcaption>ESLint</figcaption>
            </figure>
            <figure>
              <img
                className={styles.skillsSvg}
                src="./prettier.svg"
                alt="prettier"
              />
              <figcaption>Prettier</figcaption>
            </figure>
            <figure>
              <img
                className={styles.skillsSvg}
                src="./vercel.svg"
                alt="vercel"
              />
              <figcaption>Vercel</figcaption>
            </figure>
            <figure>
              <img className={styles.skillsSvg} src="./linux.svg" alt="linux" />
              <figcaption>Linux</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}
