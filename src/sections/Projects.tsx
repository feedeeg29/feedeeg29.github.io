import Reveal from "../components/ui/Reveal";
import SectionHeader from "../components/ui/SectionHeader";
import { ExternalIcon, GithubIcon } from "../components/ui/Icons";
import { useLanguage } from "../context/LanguageContext";
import styles from "./Projects.module.css";

export default function Projects() {
  const { t } = useLanguage();
  const { items } = t.projectsSection;

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader label={t.projectsSection.label} title={t.projectsSection.title} />

        <ul className={styles.list}>
          {items.map((project, index) => (
            <li key={project.name}>
              <Reveal className={styles.card}>
                <div className={styles.visual} aria-hidden="true">
                  <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
                </div>

                <div className={styles.info}>
                  <div className={styles.titleRow}>
                    <h3 className={styles.name}>{project.name}</h3>
                    {project.status && <span className={styles.status}>{project.status}</span>}
                  </div>
                  <p className={styles.description}>{project.description}</p>

                  <ul className={styles.tags} aria-label="Stack">
                    {project.tags.map((tag) => (
                      <li key={tag} className={styles.tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.links}>
                    {project.url && (
                      <a href={project.url} className={styles.link} target="_blank" rel="noreferrer">
                        <ExternalIcon />
                        {t.ui.liveDemo}
                      </a>
                    )}
                    {project.repoUrl && (
                      <a href={project.repoUrl} className={styles.link} target="_blank" rel="noreferrer">
                        <GithubIcon />
                        {t.ui.viewCode}
                      </a>
                    )}
                    {!project.url && !project.repoUrl && (
                      <span className={styles.soon}>{t.ui.soon}</span>
                    )}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
