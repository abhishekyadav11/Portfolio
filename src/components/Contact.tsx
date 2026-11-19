import { ArrowUpRight, Download, Phone } from "lucide-react";
import { profile } from "@/data/resume";
import { resumePdf, socials } from "@/lib/site";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";
import SpotlightCard from "./ui/SpotlightCard";

const tile = "flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:-translate-y-0.5 hover:border-accent/50";

export default function Contact() {
  return (
    <Section id="contact" index="06" eyebrow="Contact" title={<>Let&apos;s build something <span className="text-gradient">fast</span> and well made.</>}>
      <Reveal>
        <SpotlightCard className="p-8 sm:p-12">
          <a href={`mailto:${profile.email}`} className="group inline-flex flex-wrap items-center gap-3 font-sans text-[clamp(1.4rem,4.6vw,3rem)] font-semibold [overflow-wrap:anywhere]">
            {profile.email}
            <ArrowUpRight className="shrink-0 text-accent transition group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className={tile}><span className="flex items-center gap-3"><Phone size={18} className="text-accent" />{profile.phone}</span></a>
            {socials.linkedin && (
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className={tile}><span className="flex items-center gap-3"><LinkedinIcon className="size-[18px] text-accent" />LinkedIn</span><ArrowUpRight size={16} className="text-muted" /></a>
            )}
            {socials.github && (
              <a href={socials.github} target="_blank" rel="noopener noreferrer" className={tile}><span className="flex items-center gap-3"><GithubIcon className="size-[18px] text-accent" />GitHub</span><ArrowUpRight size={16} className="text-muted" /></a>
            )}
            <a href={resumePdf} download className={tile}><span className="flex items-center gap-3"><Download size={18} className="text-accent" />Resume (PDF)</span></a>
          </div>
        </SpotlightCard>
      </Reveal>
    </Section>
  );
}
