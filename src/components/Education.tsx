import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "@/data/resume";
import CountUp from "./ui/CountUp";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";
import SpotlightCard from "./ui/SpotlightCard";

export default function Education() {
  const hasCerts = certifications.length > 0;
  return (
    <Section
      id="education"
      index="05"
      eyebrow={hasCerts ? "Education & certifications" : "Education"}
      title={<>Academic <span className="text-gradient">background</span>.</>}
    >
      <div className={hasCerts ? "grid gap-4 md:grid-cols-5" : "max-w-3xl"}>
        <Reveal className="md:col-span-3">
          <SpotlightCard className="h-full p-8 sm:p-10">
            <div className="flex items-start justify-between gap-4">
              <span className="grid size-12 place-items-center rounded-2xl border border-accent/25 bg-accent/10 text-accent">
                <GraduationCap size={22} />
              </span>
              <span className="rounded-full border border-white/15 px-3.5 py-1 text-xs text-muted">{education.period}</span>
            </div>
            <h3 className="mt-6 font-display text-2xl font-semibold">{education.degree}</h3>
            <p className="mt-2 text-muted">{education.school}</p>
            <p className="mt-8 font-display text-5xl font-semibold text-gradient">
              <CountUp to={parseFloat(education.score)} decimals={1} /> <span className="text-base font-normal text-muted">CGPA</span>
            </p>
          </SpotlightCard>
        </Reveal>

        {/* Only shown once certifications are added to data/resume.ts */}
        {hasCerts && (
          <Reveal className="md:col-span-2" delay={0.08}>
            <SpotlightCard className="h-full p-8">
              <span className="grid size-12 place-items-center rounded-2xl border border-white/15 text-muted">
                <Award size={22} />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold">Certifications</h3>
              <ul className="mt-4 space-y-3">
                {certifications.map((c) => (
                  <li key={c.title} className="text-sm text-muted">
                    <span className="text-ink">{c.title}</span> · {c.issuer}
                    {c.year ? ` · ${c.year}` : ""}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>
        )}
      </div>
    </Section>
  );
}
