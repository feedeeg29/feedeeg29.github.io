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
          label={t.experienceSection.label}
          title={t.experienceSection.title}
        />

        <ul className={styles.list}>
          {t.experienceSection.items.map((item) => (
            <li key={item.company}>
              <Reveal className={styles.entry}>
                <p className={styles.period}>{item.period}</p>
                <div>
                  <h3 className={styles.role}>{item.role}</h3>
                  <p className={styles.company}>{item.company}</p>
                  <ul className={styles.bullets}>
                    {item.description.map((line) => (
                      <li key={line} className={styles.bullet}>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
