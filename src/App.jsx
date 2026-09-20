import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Project";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Experience />
      <Projects/>
      <Certificates/>
      <Contact/>
    </>
  );
}

export default App;