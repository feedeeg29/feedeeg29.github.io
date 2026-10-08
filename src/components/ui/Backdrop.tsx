import styles from "./Backdrop.module.css";

// Fondo ambiental fijo: orbes de color que flotan lento, grilla sutil y grano.
export default function Backdrop() {
  return (
    <div className={styles.backdrop} aria-hidden="true">
      <span className={`${styles.orb} ${styles.orb1}`} />
      <span className={`${styles.orb} ${styles.orb2}`} />
      <span className={`${styles.orb} ${styles.orb3}`} />
      <div className={styles.grid} />
      <div className={styles.grain} />
    </div>
  );
}
