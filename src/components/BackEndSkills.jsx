const backendSkills = [
  { id: 0, name: "NodeJS", src: "./nodejs.svg", alt: "nodejs" },
  { id: 1, name: "Express", src: "./express.svg", alt: "express" },
  { id: 2, name: "JavaScript", src: "./javascript.svg", alt: "javascript" },
  { id: 3, name: "MongoDB", src: "./mongodb.svg", alt: "mongodb" },
  { id: 4, name: "PostgreSQL", src: "./postgresql.svg", alt: "postgresql" },
  { id: 5, name: "Prisma", src: "./prisma.svg", alt: "prisma" },
  { id: 6, name: "Pug / Jade", src: "./pug.svg", alt: "pug" },
  { id: 7, name: "Jest", src: "./jest.svg", alt: "jest" },
];

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
