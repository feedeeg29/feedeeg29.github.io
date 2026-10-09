import { useLanguage } from "../../context/LanguageContext";
import { ArrowUpIcon } from "../ui/Icons";
import styles from "./Footer.module.css";

const currentYear = new Date().getFullYear();

export default function Footer() {
  const { t, personalInfo } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>
          © {currentYear} {personalInfo.name}
        </p>
        <p>{t.footer.tagline}</p>
        <a href="#top" className={styles.top}>
          {t.ui.backToTop}
          <ArrowUpIcon />
        </a>
      </div>
    </footer>
  );
}
