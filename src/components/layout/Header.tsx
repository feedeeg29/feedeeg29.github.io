import { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useActiveSection } from "../../hooks/useActiveSection";
import Controls from "../ui/Controls";
import { CloseIcon, MenuIcon } from "../ui/Icons";
import styles from "./Header.module.css";

const SECTION_IDS = ["top", "about", "skills", "projects", "experience", "education", "contact"] as const;

export default function Header() {
  const { t, personalInfo } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const links = [
    { id: "about", label: t.nav.about },
    { id: "skills", label: t.nav.skills },
    { id: "projects", label: t.nav.projects },
    { id: "experience", label: t.nav.experience },
    { id: "education", label: t.nav.education },
  ];

  return (
    <header
      className={`${styles.wrap} ${scrolled ? styles.scrolled : ""} ${menuOpen ? styles.mobileOpen : ""}`}
    >
      <div className="container">
        <div className={styles.bar}>
          <a
            href="#top"
            className={styles.logo}
            aria-label={`${personalInfo.name} — ${t.ui.backToTop}`}
            onClick={() => setMenuOpen(false)}
          >
            {personalInfo.initials}
          </a>

          <nav className={styles.nav} aria-label={t.ui.primaryNav}>
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`${styles.link} ${active === link.id ? styles.active : ""}`}
                aria-current={active === link.id ? "true" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className={styles.right}>
            <Controls />
            <a href="#contact" className={`btn btn-primary ${styles.cta}`}>
              {t.nav.contact}
            </a>
            <button
              type="button"
              className={styles.menuBtn}
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? t.ui.closeMenu : t.ui.openMenu}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav id="mobile-menu" className={styles.mobileMenu} aria-label={t.ui.primaryNav}>
            {[...links, { id: "contact", label: t.nav.contact }].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`${styles.mobileLink} ${active === link.id ? styles.active : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
