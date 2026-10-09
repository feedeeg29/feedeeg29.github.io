import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Suspense, lazy } from "react";
import { ArrowRightIcon, ChevronDownIcon } from "../components/ui/Icons";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import SceneBoundary from "../three/SceneBoundary";
import styles from "./Hero.module.css";

const HeroScene = lazy(() => import("../three/HeroScene"));

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const { t, personalInfo } = useLanguage();
  const { theme } = useTheme();
  const reduceMotion = useReducedMotion();
  const [firstName, ...restName] = personalInfo.name.split(" ");
  const lastName = restName.join(" ");

  return (
    <section id="top" className={styles.hero}>
      <div className={styles.scene} aria-hidden="true">
        <SceneBoundary fallback={null}>
          <Suspense fallback={null}>
            <HeroScene theme={theme} />
          </Suspense>
        </SceneBoundary>
      </div>

      <motion.div
        className={`container ${styles.content}`}
        variants={container}
        initial={reduceMotion ? false : "hidden"}
        animate="show"
      >
        <motion.p variants={item} className={styles.pill}>
          {t.hero.status}
        </motion.p>

        <motion.h1 variants={item} className={styles.name}>
          <span>{firstName}</span>
          <span className={styles.last}>{lastName}</span>
        </motion.h1>

        <motion.p variants={item} className={styles.title}>
          {t.hero.title}
        </motion.p>

        <motion.p variants={item} className={styles.tagline}>
          {t.hero.tagline}
        </motion.p>

        <motion.div variants={item} className={styles.ctas}>
          <a href="#projects" className="btn btn-primary">
            {t.nav.projects}
            <ArrowRightIcon />
          </a>
          <a href="#contact" className="btn btn-ghost">
            {t.hero.primaryCta}
          </a>
        </motion.div>
      </motion.div>

      <a href="#about" className={styles.scrollHint} aria-label={t.nav.about}>
        <ChevronDownIcon />
      </a>
    </section>
  );
}
