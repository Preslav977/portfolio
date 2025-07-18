import { Project } from "./Project";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <div
      aria-label="project section"
      className={styles.projectGridWrapper}
      id="projects"
    >
      <h4 className={styles.projectsGridHeader}>My projects</h4>
      <section className={styles.projectsGridContainer}>
        <Project />
      </section>
    </div>
  );
}
