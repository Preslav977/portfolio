import { backendSkills } from "./helperArrays/backendSkill";

export function BackEndSkills({ imgClassName }) {
  return (
    <>
      <>
        {backendSkills.map((skill) => {
          return (
            <figure>
              <img className={imgClassName} src={skill.src} alt={skill.alt} />
              <figcaption>{skill.name}</figcaption>
            </figure>
          );
        })}
      </>
    </>
  );
}
