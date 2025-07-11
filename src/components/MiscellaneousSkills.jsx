import { miscellaneousSkills } from "./helperArrays/miscellaneousSkills";

export function MiscellaneousSkills({ imgClassName }) {
  return (
    <>
      <>
        {miscellaneousSkills.map((skill) => {
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
