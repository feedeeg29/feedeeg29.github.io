import Reveal from "../components/ui/Reveal";
import SectionHeader from "../components/ui/SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import styles from "./Skills.module.css";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader label={t.skillsSection.label} title={t.skillsSection.title} />

        <div className={styles.grid}>
          {t.skillsSection.items.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.06} className={styles.group}>
              <h3 className={styles.category}>{group.category}</h3>
              <ul className={styles.tags}>
                {group.items.map((item) => (
                  <li key={item} className={styles.tag}>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
