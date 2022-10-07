import "./App.css";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
