import { useEffect, useRef, useState } from "react";
import { CheckIcon, CopyIcon, GithubIcon, LinkedinIcon, MailIcon } from "../components/ui/Icons";
import Reveal from "../components/ui/Reveal";
import SectionHeader from "../components/ui/SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import styles from "./Contact.module.css";

export default function Contact() {
  const { t, personalInfo } = useLanguage();
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2200);
    } catch {
      // Portapapeles no disponible: el mail igual es visible y clickeable.
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeader label={t.contact.label} title={t.contact.title} align="center" />

        <Reveal className={styles.panel}>
          <p className={styles.text}>{t.contact.text}</p>

          <a href={`mailto:${personalInfo.email}`} className={styles.email}>
            {personalInfo.email}
          </a>

          <div className={styles.actions}>
            <a href={`mailto:${personalInfo.email}`} className="btn btn-primary">
              <MailIcon />
              {t.contact.emailCta}
            </a>
            <button type="button" className="btn btn-ghost" onClick={handleCopy}>
              {copied ? <CheckIcon /> : <CopyIcon />}
              <span aria-live="polite">{copied ? t.contact.copiedCta : t.contact.copyCta}</span>
            </button>
            {personalInfo.cvPdfUrl && (
              <a
                href={personalInfo.cvPdfUrl}
                className="btn btn-ghost"
                target="_blank"
                rel="noreferrer"
                download
              >
                {t.contact.downloadCv}
              </a>
            )}
          </div>

          {(personalInfo.github || personalInfo.linkedin) && (
            <div className={styles.social}>
              {personalInfo.github && (
                <a
                  href={personalInfo.github}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <GithubIcon />
                </a>
              )}
              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon />
                </a>
              )}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
