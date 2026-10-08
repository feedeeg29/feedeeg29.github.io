import GlassCard from "../components/ui/GlassCard";
import { BriefcaseIcon, CapIcon, GlobeIcon, PinIcon } from "../components/ui/Icons";
import Reveal from "../components/ui/Reveal";
import SectionHeader from "../components/ui/SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import styles from "./About.module.css";

// Un ícono por cada dato de "de un vistazo" (mismo orden que content.ts).
const factIcons = [PinIcon, BriefcaseIcon, CapIcon, GlobeIcon];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeader index="01" label={t.about.label} title={t.about.title} />

        <div className={styles.grid}>
          <Reveal className={styles.story} delay={0.05}>
            <p className={styles.lead}>{t.about.lead}</p>
            <p className={styles.body}>{t.about.body}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <GlassCard>
              <h3 className={styles.factsTitle}>{t.about.factsTitle}</h3>
              <dl className={styles.facts}>
                {t.about.facts.map((fact, index) => {
                  const Icon = factIcons[index] ?? PinIcon;
                  return (
                    <div key={fact.label} className={styles.fact}>
                      <span className={styles.factIcon}>
                        <Icon />
                      </span>
                      <div>
                        <dt className={styles.factLabel}>{fact.label}</dt>
                        <dd className={styles.factValue}>{fact.value}</dd>
                      </div>
                    </div>
                  );
                })}
              </dl>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
