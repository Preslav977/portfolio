import { AboutMe } from "./components/AboutMe";
import { ContactMe } from "./components/ContactMe";
import { Navigation } from "./components/Navigation";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import "/src/App.css";

function App() {
  return (
    <main>
      <Navigation />
      <hr />
      <AboutMe />
      <hr />
      <Skills />
      <hr />
      <Projects />
      <hr />
      <ContactMe />
    </main>
  );
}

export default App;
