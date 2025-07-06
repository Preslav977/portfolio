import { AboutMe } from "./components/AboutMe";
import { Navigation } from "./components/Navigation";
import { Skills } from "./components/Skills";
import "/src/App.css";

function App() {
  return (
    <main>
      <Navigation />
      <AboutMe />
      <Skills />
    </main>
  );
}

export default App;
