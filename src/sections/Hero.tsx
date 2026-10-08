import { motion } from "framer-motion";
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
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const floatingChips = [
  { label: "React", className: styles.chipA, dot: styles.dotViolet, delay: 0 },
  { label: "Node.js", className: styles.chipB, dot: styles.dotPink, delay: 1.2 },
  { label: "TypeScript", className: styles.chipC, dot: styles.dotPeach, delay: 2.4 },
];

export default function Hero() {
  const { t, personalInfo } = useLanguage();
  const { theme } = useTheme();
  const [firstName, ...restName] = personalInfo.name.split(" ");
  const lastName = restName.join(" ");

  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <motion.div className={styles.copy} variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className={styles.status}>
            <span className={styles.pulse} aria-hidden="true" />
            {t.hero.status}
          </motion.div>

          <motion.p variants={item} className={styles.eyebrow}>
            {t.hero.eyebrow}
          </motion.p>

          <motion.h1 variants={item} className={styles.name}>
            <span>{firstName}</span>
            <span className={styles.last}>{lastName}</span>
          </motion.h1>

          <motion.h2 variants={item} className={styles.title}>
            {t.hero.title}
          </motion.h2>

          <motion.p variants={item} className={styles.tagline}>
            {t.hero.tagline}
          </motion.p>

          <motion.div variants={item} className={styles.ctas}>
            <a href="#contact" className="btn btn-primary">
              {t.hero.primaryCta}
              <ArrowRightIcon className="btn-arrow" />
            </a>
            <a href="#experience" className="btn btn-ghost">
              {t.hero.secondaryCta}
            </a>
          </motion.div>

          <motion.ul variants={item} className={styles.chips} aria-label="Stack">
            {personalInfo.stack.map((tech) => (
              <li key={tech} className={styles.techChip}>
                {tech}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          className={styles.stage}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.glow} aria-hidden="true" />
          <div className={`${styles.ring} ${styles.ring1}`} aria-hidden="true" />
          <div className={`${styles.ring} ${styles.ring2}`} aria-hidden="true" />

          <div className={styles.canvasWrap} aria-hidden="true">
            <SceneBoundary fallback={<div className={styles.fallback} />}>
              <Suspense fallback={null}>
                <HeroScene theme={theme} />
              </Suspense>
            </SceneBoundary>
          </div>

          {floatingChips.map((chip) => (
            <motion.div
              key={chip.label}
              className={`${styles.floating} ${chip.className}`}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, delay: chip.delay, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            >
              <span className={`${styles.dot} ${chip.dot}`} />
              {chip.label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <a href="#about" className={styles.scrollHint} aria-label={t.nav.about}>
        <ChevronDownIcon />
      </a>
    </section>
  );
}
