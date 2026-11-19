import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = { id: string; index: string; eyebrow: string; title: ReactNode; children: ReactNode; className?: string };

export default function Section({ id, index, eyebrow, title, children, className = "" }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`relative py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 font-display text-xs uppercase tracking-[0.22em] text-muted">
            <span className="text-accent">{index}</span>
            <span className="h-px w-10 bg-white/15" />
            {eyebrow}
          </p>
          <h2 id={`${id}-title`} className="mb-14 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            {title}
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
