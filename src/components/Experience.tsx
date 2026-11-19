import { Briefcase } from "lucide-react";
import { experience } from "@/data/resume";
import Chips from "./ui/Chips";
import GrowLine from "./ui/GrowLine";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";
import SpotlightCard from "./ui/SpotlightCard";

export default function Experience() {
  return (
    <Section id="experience" index="03" eyebrow="Experience" title={<>Where I&apos;ve <span className="text-gradient">shipped</span>.</>}>
      <ol className="relative space-y-6 pl-8 sm:pl-12">
        <GrowLine />
        {experience.map((e) => (
          <li key={e.company} className="relative">
            <span
              aria-hidden
              className={`absolute -left-8 top-8 grid size-6 place-items-center rounded-full border-2 bg-bg sm:-left-12 sm:size-10 ${e.current ? "border-accent shadow-[0_0_24px_color-mix(in_srgb,var(--color-accent)_45%,transparent)]" : "border-white/25"}`}
            >
              <Briefcase size={14} className={e.current ? "text-accent" : "text-muted"} />
            </span>
            <Reveal>
              <SpotlightCard className="p-7 sm:p-9">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-2xl font-semibold">{e.role}</h3>
                    <p className="mt-1 text-muted">{e.company}</p>
                  </div>
                  <span className={`rounded-full border px-3.5 py-1 text-xs ${e.current ? "border-accent/40 bg-accent/10 text-accent" : "border-white/15 text-muted"}`}>
                    {e.period}
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  {e.points.map((p, i) => (
                    <li key={p} className="relative pl-6 text-[15px] leading-relaxed text-muted">
                      <span aria-hidden className="absolute left-0 top-[0.7em] h-px w-3 bg-accent" />
                      <Reveal delay={0.15 + i * 0.1} y={12}>{p}</Reveal>
                    </li>
                  ))}
                </ul>
                <Chips items={e.tech} className="mt-7" />
              </SpotlightCard>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
