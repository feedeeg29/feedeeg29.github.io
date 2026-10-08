import GlassCard from "../components/ui/GlassCard";
import { AwardIcon, CapIcon, CodeIcon } from "../components/ui/Icons";
import Reveal from "../components/ui/Reveal";
import SectionHeader from "../components/ui/SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import styles from "./Education.module.css";

// Un ícono por tarjeta (mismo orden que content.ts): carrera, cursos, secundaria.
const icons = [CapIcon, CodeIcon, AwardIcon];

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeader
          index="03"
          label={t.educationSection.label}
          title={t.educationSection.title}
        />

        <div className={styles.grid}>
          {t.educationSection.items.map((item, index) => {
            const Icon = icons[index] ?? CapIcon;
            return (
              <Reveal key={item.title} delay={index * 0.1}>
                <GlassCard featured={index === 0}>
                  <span className={styles.icon}>
                    <Icon />
                  </span>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.institution}>{item.institution}</p>
                  {item.period && <span className={styles.period}>{item.period}</span>}
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
