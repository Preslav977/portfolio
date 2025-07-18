import { BackEndSkills } from "./BackEndSkills";
import { FrontEndSkills } from "./FrontEndSkills";
import { MiscellaneousSkills } from "./MiscellaneousSkills";
import styles from "./Skills.module.css";

export function Skills() {
  return (
    <div
      aria-label="skills section"
      className={styles.flexedSkillsWrapper}
      id="skills"
    >
      <h3 className={styles.flexedSkillHeader}>My Skills</h3>
      <div className={styles.flexedCenteredSkillsContainer}>
        <section className={styles.gridSkillsContainer}>
          <div className={styles.gridSkillsWrapper}>
            <p>Front-End</p>
            <div className={styles.gridSkillsSVGContainer}>
              <FrontEndSkills imgClassName={styles.skillsSvg} />
            </div>
          </div>
          <div className={styles.gridSkillsWrapper}>
            <p>Back-end</p>
            <div className={styles.gridSkillsSVGContainer}>
              <BackEndSkills imgClassName={styles.skillsSvg} />
            </div>
          </div>
          <div className={styles.gridSkillsWrapper}>
            <p>Miscellaneous</p>
            <div className={styles.gridSkillsSVGContainer}>
              <MiscellaneousSkills imgClassName={styles.skillsSvg} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
