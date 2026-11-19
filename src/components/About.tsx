import { Gauge, Layers, Shield, Smartphone, Workflow } from "lucide-react";
import { profile, strengths } from "@/data/resume";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";
import SpotlightCard from "./ui/SpotlightCard";

const icons = { layers: Layers, workflow: Workflow, shield: Shield, gauge: Gauge, smartphone: Smartphone };

export default function About() {
  return (
    <Section id="about" index="01" eyebrow="About me" title={<>Interfaces that stay <span className="text-gradient">fast</span> as they grow.</>}>
      <div className="grid gap-4 md:grid-cols-6">
        <Reveal className="md:col-span-6">
          <SpotlightCard className="h-full p-8 sm:p-10">
            <div className="mb-6 grid size-16 -rotate-6 place-items-center rounded-2xl bg-linear-to-br from-accent to-violet font-display text-2xl font-bold text-bg">
              {profile.initials}
            </div>
            <p className="text-lg leading-relaxed text-ink/90 sm:text-xl">{profile.summary}</p>
            <p className="mt-5 leading-relaxed text-muted">
              I enjoy turning complex, role-based business workflows into clean, responsive interfaces, and I care about the details that make an application feel quick: efficient rendering, caching, code splitting and reusable component architecture.
            </p>
          </SpotlightCard>
        </Reveal>

        <Reveal className="md:col-span-6" delay={0.05}>
          <SpotlightCard className="p-8">
            <h3 className="mb-6 font-display text-xl font-semibold">Technical strengths</h3>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {strengths.map((s) => {
                const Icon = icons[s.icon];
                return (
                  <li key={s.text} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                    <Icon size={20} className="mb-3 text-accent" />
                    <p className="text-sm leading-relaxed text-muted">{s.text}</p>
                  </li>
                );
              })}
            </ul>
          </SpotlightCard>
        </Reveal>
      </div>
    </Section>
  );
}
