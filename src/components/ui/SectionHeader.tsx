import Reveal from "./Reveal";
import styles from "./SectionHeader.module.css";

type SectionHeaderProps = {
  label: string;
  title: string;
  align?: "left" | "center";
};

export default function SectionHeader({ label, title, align = "left" }: SectionHeaderProps) {
  return (
    <Reveal className={`${styles.wrap} ${align === "center" ? styles.center : ""}`}>
      <p className={styles.label}>{label}</p>
      <h2 className={styles.title}>{title}</h2>
    </Reveal>
  );
}
