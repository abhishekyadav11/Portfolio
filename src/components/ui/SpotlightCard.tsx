"use client";
import { useRef, type ReactNode, type PointerEvent } from "react";

type Props = { children: ReactNode; className?: string };

// Glass card with a soft spotlight that follows the pointer.
export default function SpotlightCard({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-accent/40 ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(380px circle at var(--x,50%) var(--y,0%), color-mix(in srgb, var(--color-accent) 12%, transparent), transparent 60%)" }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}
