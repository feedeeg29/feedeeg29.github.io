import { SparkIcon } from "./Icons";
import styles from "./Marquee.module.css";

type MarqueeProps = {
  items: string[];
};

// Cinta decorativa con las tecnologías (se duplica el contenido para el loop infinito).
export default function Marquee({ items }: MarqueeProps) {
  const loop = [...items, ...items];

  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.track}>
        {loop.map((item, index) => (
          <span key={`${item}-${index}`} className={styles.item}>
            {item}
            <SparkIcon className={styles.spark} />
          </span>
        ))}
      </div>
    </div>
  );
}
