import Backdrop from "./components/ui/Backdrop";
import Marquee from "./components/ui/Marquee";
import ScrollProgress from "./components/ui/ScrollProgress";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { useLanguage } from "./context/LanguageContext";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

function App() {
  const { t } = useLanguage();
  // Cinta de tecnologías: todas las categorías técnicas (sin idiomas).
  const techItems = t.skillsSection.items.slice(0, 3).flatMap((group) => group.items);

  return (
    <>
      <Backdrop />
      <ScrollProgress />
      <a href="#about" className="skip-link">
        {t.ui.skipToContent}
      </a>
      <Header />
      <main>
        <Hero />
        <Marquee items={techItems} />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
