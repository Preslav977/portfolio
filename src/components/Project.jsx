import styles from "./Project.module.css";

import { projects } from "./helperArrays/projects";

export function Project() {
  return (
    <>
      {projects.map((project) => {
        return (
          <div className={styles.projectsFlexedContentContainer}>
            <img
              className={styles.projectImage}
              src={project.src}
              alt={project.alt}
            />
            <div className={styles.projectImgAndTextContentContainer}>
              <h5 className={styles.projectName}>{project.projectName}</h5>
              <div className={styles.projectCreatedWithContainer}>
                {project.createdWith.map((createdWithSVG) => {
                  return (
                    <img
                      className={styles.createdWithSvg}
                      src={createdWithSVG.src}
                      alt={createdWithSVG.alt}
                    />
                  );
                })}
              </div>
              <div className={styles.projectDescriptionContainer}>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
              </div>
              <div className={styles.projectAnchorContainer}>
                <>
                  {project.anchors.map((anchor) => {
                    return (
                      <a
                        className={styles.projectAnchorCode}
                        href={anchor.href}
                        target="_blank"
                      >
                        {anchor.name}
                      </a>
                    );
                  })}
                </>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
