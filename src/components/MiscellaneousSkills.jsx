const miscellaneousSkills = [
  { id: 0, name: "Git", src: "./git.svg", alt: "git" },
  { id: 1, name: "Github", src: "./github.svg", alt: "github" },
  { id: 2, name: "Webpack", src: "./webpack.svg", alt: "webpack" },
  { id: 3, name: "Vite", src: "./vite.svg", alt: "vite" },
  { id: 4, name: "Npm", src: "./npm.svg", alt: "npm" },
  { id: 5, name: "Postman", src: "./postman.svg", alt: "postman" },
  { id: 6, name: "VSCode", src: "./vscode.svg", alt: "vscode" },
  { id: 7, name: "ESLint", src: "./eslint.svg", alt: "eslint" },
  { id: 8, name: "Prettier", src: "./prettier.svg", alt: "prettier" },
  { id: 9, name: "Vercel", src: "./vercel.svg", alt: "vercel" },
  { id: 10, name: "Linux", src: "./linux.svg", alt: "linux" },
];

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
