import { frontendSkills } from "./helperArrays/frontendSkills";

export function FrontEndSkills({ imgClassName }) {
  return (
    <>
      <>
        {frontendSkills.map((skill) => {
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
