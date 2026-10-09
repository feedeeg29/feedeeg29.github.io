import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { useLanguage } from "./context/LanguageContext";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

function App() {
  const { t } = useLanguage();

  return (
    <>
      <a href="#about" className="skip-link">
        {t.ui.skipToContent}
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
