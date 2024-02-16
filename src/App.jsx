import "./App.css";
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contacts from "./sections/Contacts";
import Heading from "./components/Heading";

function App() {
  return (
    <div className="main-container">
      <Nav />
      <main>
        <Heading />
        <Hero />
        <About />
        <Projects />
        <Contacts />
      </main>
    </div>
  );
}

export default App;
