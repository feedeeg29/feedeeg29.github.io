import { useRef } from "react";
import type { PointerEvent, ReactNode } from "react";
import styles from "./GlassCard.module.css";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  /** Borde con gradiente de marca (para destacar una tarjeta). */
  featured?: boolean;
};

// Tarjeta de vidrio con "spotlight": un halo de color sigue al puntero.
export default function GlassCard({ children, className, featured = false }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  const classes = [styles.card, featured ? styles.featured : "", className ?? ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={classes} onPointerMove={handlePointerMove}>
      {children}
    </div>
  );
}
