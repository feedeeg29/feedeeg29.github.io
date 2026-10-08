import Reveal from "./Reveal";
import styles from "./SectionHeader.module.css";

type SectionHeaderProps = {
  index: string;
  label: string;
  title: string;
  align?: "left" | "center";
};

export default function SectionHeader({ index, label, title, align = "left" }: SectionHeaderProps) {
  return (
    <Reveal className={`${styles.wrap} ${align === "center" ? styles.center : ""}`}>
      <div className={styles.meta}>
        <span className={styles.index}>{index}</span>
        <span className={styles.rule} aria-hidden="true" />
        <span className={styles.label}>{label}</span>
      </div>
      <h2 className={styles.title}>{title}</h2>
    </Reveal>
  );
}
