import { Braces, Database, LayoutTemplate, Server, ShieldCheck, Wrench } from "lucide-react";
import { skills } from "@/data/resume";
import Chips from "./ui/Chips";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";
import SpotlightCard from "./ui/SpotlightCard";

const icons = { braces: Braces, layout: LayoutTemplate, server: Server, database: Database, shield: ShieldCheck, wrench: Wrench };
// Bento sizing: Frontend and Backend get the wide slots.
const span: Record<string, string> = { Frontend: "lg:col-span-4", Backend: "lg:col-span-4", Languages: "lg:col-span-2", Database: "lg:col-span-2" };

export default function Skills() {
  return (
    <Section id="skills" index="02" eyebrow="Technical skills" title={<>The toolkit I <span className="text-gradient">build</span> with.</>}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
        {skills.map((s, i) => {
          const Icon = icons[s.icon];
          return (
            <Reveal key={s.title} delay={(i % 3) * 0.07} className={span[s.title] ?? "lg:col-span-3"}>
              <SpotlightCard className="h-full p-7">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                    <Icon size={19} />
                  </span>
                  <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                </div>
                <Chips items={s.items} />
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
