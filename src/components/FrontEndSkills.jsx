const frontendSkills = [
  { id: 0, name: "HTML5", src: "./html5.svg", alt: "html5" },
  { id: 1, name: "CSS3", src: "./css3.svg", alt: "css3" },
  { id: 2, name: "JavaScript", src: "./javascript.svg", alt: "javascript" },
  { id: 3, name: "React", src: "./react.svg", alt: "react" },
];

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
