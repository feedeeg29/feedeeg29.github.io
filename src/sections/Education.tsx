import Reveal from "../components/ui/Reveal";
import SectionHeader from "../components/ui/SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import styles from "./Education.module.css";

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeader
          label={t.educationSection.label}
          title={t.educationSection.title}
        />

        <ul className={styles.grid}>
          {t.educationSection.items.map((item, index) => (
            <li key={item.title}>
              <Reveal delay={index * 0.06} className={styles.card}>
                {item.period && <p className={styles.period}>{item.period}</p>}
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.institution}>{item.institution}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
