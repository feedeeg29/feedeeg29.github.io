import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { locales } from "../../i18n/content";
import { MoonIcon, SunIcon } from "./Icons";
import styles from "./Controls.module.css";

export default function Controls() {
  const { locale, setLocale, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className={styles.controls}>
      <div className={styles.segment} role="group" aria-label={t.ui.language}>
        {locales.map((code) => (
          <button
            key={code}
            type="button"
            lang={code}
            className={`${styles.segmentBtn} ${locale === code ? styles.active : ""}`}
            aria-pressed={locale === code}
            onClick={() => setLocale(code)}
          >
            {code.toUpperCase()}
          </button>
        ))}
      </div>
      <button
        type="button"
        className={styles.themeBtn}
        onClick={toggleTheme}
        aria-label={isDark ? t.ui.switchToLight : t.ui.switchToDark}
      >
        <span key={theme} className={styles.icon}>
          {isDark ? <SunIcon /> : <MoonIcon />}
        </span>
      </button>
    </div>
  );
}
