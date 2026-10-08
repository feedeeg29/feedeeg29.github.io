import GlassCard from "../components/ui/GlassCard";
import { BriefcaseIcon, CheckIcon } from "../components/ui/Icons";
import Reveal from "../components/ui/Reveal";
import SectionHeader from "../components/ui/SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import styles from "./Experience.module.css";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeader
          index="02"
          label={t.experienceSection.label}
          title={t.experienceSection.title}
        />

        <div className={styles.timeline}>
          {t.experienceSection.items.map((item, index) => (
            <Reveal key={item.company} delay={index * 0.1} className={styles.entry}>
              <span className={styles.node} aria-hidden="true">
                <BriefcaseIcon />
              </span>
              <GlassCard>
                <div className={styles.header}>
                  <h3 className={styles.role}>{item.role}</h3>
                  {item.period && <span className={styles.period}>{item.period}</span>}
                </div>
                <p className={styles.company}>{item.company}</p>
                <ul className={styles.list}>
                  {item.description.map((line) => (
                    <li key={line} className={styles.listItem}>
                      <span className={styles.check} aria-hidden="true">
                        <CheckIcon />
                      </span>
                      {line}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
