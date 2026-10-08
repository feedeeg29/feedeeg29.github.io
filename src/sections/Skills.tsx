import GlassCard from "../components/ui/GlassCard";
import Reveal from "../components/ui/Reveal";
import SectionHeader from "../components/ui/SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import styles from "./Skills.module.css";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader index="04" label={t.skillsSection.label} title={t.skillsSection.title} />

        <div className={styles.grid}>
          {t.skillsSection.items.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.08}>
              <GlassCard>
                <div className={styles.head}>
                  <h3 className={styles.category}>{group.category}</h3>
                  <span className={styles.count}>{String(group.items.length).padStart(2, "0")}</span>
                </div>
                <ul className={styles.tags}>
                  {group.items.map((item) => (
                    <li key={item} className={styles.tag}>
                      {item}
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
