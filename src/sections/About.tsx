import Reveal from "../components/ui/Reveal";
import SectionHeader from "../components/ui/SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import styles from "./About.module.css";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeader label={t.about.label} title={t.about.title} />

        <div className={styles.grid}>
          <Reveal className={styles.story}>
            <p className={styles.lead}>{t.about.lead}</p>
            <p className={styles.body}>{t.about.body}</p>
          </Reveal>

          <ul className={styles.highlights}>
            {t.about.highlights.map((item, index) => (
              <li key={item.title}>
                <Reveal delay={index * 0.06} className={styles.card}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardText}>{item.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
