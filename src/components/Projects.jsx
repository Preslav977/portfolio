import styles from "./Projects.module.css";

export function Projects() {
  return (
    <div className={styles.projectGridWrapper}>
      <h4 className={styles.projectsGridHeader}>My projects</h4>
      <section className={styles.projectsGridContainer} id="#projects">
        <div className={styles.projectsFlexedContentContainer}>
          <img
            className={styles.projectImage}
            src="./wemessage.png"
            alt="wemessage project"
          />
          <div className={styles.projectImgAndTextContentContainer}>
            <h5 className={styles.projectName}>WeMessage</h5>
            <div className={styles.projectCreatedWithContainer}>
              <img
                className={styles.createdWithSvg}
                src="./postgresql.svg"
                alt="postgresql"
              />
              <img
                className={styles.createdWithSvg}
                src="./prisma.svg"
                alt="prisma"
              />
              <img
                className={styles.createdWithSvg}
                src="./express.svg"
                alt="express"
              />
              <img
                className={styles.createdWithSvg}
                src="./react.svg"
                alt="react"
              />
              <img
                className={styles.createdWithSvg}
                src="./nodejs.svg"
                alt="nodejs"
              />
            </div>
            <div className={styles.projectDescriptionContainer}>
              <p className={styles.projectDescription}>
                Full-stack messaging app where you can communicate with all
                users in one global chat, create your own 1:1 chat with a user,
                and create groups with other users.
              </p>
            </div>

            <div className={styles.projectAnchorContainer}>
              <a
                className={styles.projectAnchorCode}
                href="https://github.com/Preslav977/wemessage-frontend"
                target="_blank"
              >
                Review the code
              </a>

              <a
                className={styles.projectAnchorLive}
                href="https://wemessage-frontend-git-main-preslav977s-projects.vercel.app/login"
              >
                See it live
              </a>
            </div>
          </div>
        </div>

        <div className={styles.projectsFlexedContentContainer}>
          <img
            className={styles.projectImage}
            src="./where-everyone.png"
            alt="where-everyone project"
          />
          <div className={styles.projectImgAndTextContentContainer}>
            <h5 className={styles.projectName}>Where Everyone</h5>
            <div className={styles.projectCreatedWithContainer}>
              <img
                className={styles.createdWithSvg}
                src="./mongodb.svg"
                alt="mongodb"
              />
              <img
                className={styles.createdWithSvg}
                src="./express.svg"
                alt="express"
              />

              <img
                className={styles.createdWithSvg}
                src="./react.svg"
                alt="react"
              />
              <img
                className={styles.createdWithSvg}
                src="./nodejs.svg"
                alt="nodejs"
              />
            </div>
            <div className={styles.projectDescriptionContainer}>
              <p className={styles.projectDescription}>
                Full-stack photo-tagging game where you need to find the
                characters as fast as possible to earn a place in the
                leaderboard while racing with other users.
              </p>
            </div>

            <div className={styles.projectAnchorContainer}>
              <a
                className={styles.projectAnchorCode}
                href="https://github.com/Preslav977/where-is-everyone-frontend"
                target="_blank"
              >
                Review the code
              </a>

              <a
                className={styles.projectAnchorLive}
                href="https://where-is-everyone-frontend.vercel.app/"
              >
                See it live
              </a>
            </div>
          </div>
        </div>

        <div className={styles.projectsFlexedContentContainer}>
          <img
            className={styles.projectImage}
            src="./blog-api.png"
            alt="blog api project"
          />
          <div className={styles.projectImgAndTextContentContainer}>
            <h5 className={styles.projectName}>Blog API</h5>
            <div className={styles.projectCreatedWithContainer}>
              <img
                className={styles.createdWithSvg}
                src="./mongodb.svg"
                alt="mongodb"
              />
              <img
                className={styles.createdWithSvg}
                src="./express.svg"
                alt="express"
              />
              <img
                className={styles.createdWithSvg}
                src="./react.svg"
                alt="react"
              />
              <img
                className={styles.createdWithSvg}
                src="./nodejs.svg"
                alt="nodejs"
              />
            </div>
            <div className={styles.projectDescriptionContainer}>
              <p className={styles.projectDescription}>
                Full-stack blog API with posts about the rich Bulgarian history,
                culture, customs, and nature that you can learn and share with
                other people.
              </p>
            </div>

            <div className={styles.projectAnchorContainer}>
              <a
                className={styles.projectAnchorCode}
                href="https://github.com/Preslav977/blog-api-frontend"
                target="_blank"
              >
                Review the code
              </a>

              <a
                className={styles.projectAnchorLive}
                href="https://blog-api-frontend-lime.vercel.app/"
              >
                See it live
              </a>
            </div>
          </div>
        </div>

        <div className={styles.projectsFlexedContentContainer}>
          <img
            className={styles.projectImage}
            src="./shopping-cart.png"
            alt="shopping cart project"
          />
          <div className={styles.projectImgAndTextContentContainer}>
            <h5 className={styles.projectName}>Shopping Cart</h5>
            <div className={styles.projectCreatedWithContainer}>
              <img
                className={styles.createdWithSvg}
                src="./react.svg"
                alt="react"
              />
            </div>
            <div className={styles.projectDescriptionContainer}>
              <p className={styles.projectDescription}>
                E-commerce clothes shop that you can buy products, filter them
                by category and remove them from the cart
              </p>
            </div>

            <div className={styles.projectAnchorContainer}>
              <a
                className={styles.projectAnchorCode}
                href="https://github.com/Preslav977/shopping-cart"
                target="_blank"
              >
                Review the code
              </a>

              <a
                className={styles.projectAnchorLive}
                href="https://shopping-cart-red-seven.vercel.app/"
              >
                See it live
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
