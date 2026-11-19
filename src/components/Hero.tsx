"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Mail } from "lucide-react";
import { profile, stats } from "@/data/resume";
import { resumePdf, socials } from "@/lib/site";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";
import CountUp from "./ui/CountUp";

const ease = [0.22, 1, 0.36, 1] as const;

function Letters({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span aria-label={text} className="inline-flex overflow-hidden pb-[0.08em]">
      {text.split("").map((c, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block"
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: delay + i * 0.045, ease }}
        >
          {c}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  // Background glows drift at different speeds as you scroll.
  const { scrollY } = useScroll();
  const driftA = useTransform(scrollY, [0, 700], [0, 140]);
  const driftB = useTransform(scrollY, [0, 700], [0, -90]);
  return (
    <section id="top" className="relative isolate overflow-hidden pb-8 pt-32 sm:pt-40">
      {/* backdrop */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <motion.div style={{ y: driftA }} className="absolute -top-40 left-1/2 size-[44rem] -translate-x-1/2 rounded-full bg-violet/20 blur-[140px]" />
        <motion.div style={{ y: driftB }} className="absolute -right-32 top-40 size-[28rem] rounded-full bg-accent/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: "linear-gradient(color-mix(in srgb, var(--color-white) 18%, transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb, var(--color-white) 18%, transparent) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse at 50% 0%, #000 20%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 0%, #000 20%, transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <h1 className="font-display text-[clamp(3.2rem,10vw,7.5rem)] font-semibold leading-[0.95] tracking-tighter">
            {/* Real text for search engines and screen readers; the animated letters are decorative. */}
            <span className="sr-only">{profile.name} — {profile.role}</span>
            <span aria-hidden="true">
              <Letters text={profile.first} />
              <br />
              <span className="text-gradient">
                <Letters text={profile.last} delay={0.35} />
              </span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
          >
            <span className="font-medium text-ink">{profile.role}</span> crafting fast, scalable and maintainable web applications with React and TypeScript.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease }}
          >
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="group inline-flex items-center gap-2 rounded-2xl bg-accent px-6 py-3.5 text-[15px] font-semibold text-bg transition hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-10px_var(--color-accent)]">
                View projects
                <ArrowDown size={17} className="transition group-hover:translate-y-0.5" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] px-6 py-3.5 text-[15px] font-semibold backdrop-blur transition hover:-translate-y-0.5 hover:border-white/30">
                <Mail size={17} /> Contact me
              </a>
              <a href={resumePdf} download className="inline-flex items-center gap-2 rounded-2xl px-4 py-3.5 text-[15px] font-medium text-muted transition hover:text-ink">
                <Download size={17} /> Resume
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              {socials.github && (
                <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid size-11 place-items-center rounded-xl border border-white/10 text-muted transition hover:border-accent/50 hover:text-accent">
                  <GithubIcon className="size-5" />
                </a>
              )}
              {socials.linkedin && (
                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid size-11 place-items-center rounded-xl border border-white/10 text-muted transition hover:border-accent/50 hover:text-accent">
                  <LinkedinIcon className="size-5" />
                </a>
              )}
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 text-sm text-muted transition hover:text-ink">
                {profile.email} <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* code card */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease }}
          className="animate-float"
        >
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-surface/80 shadow-2xl shadow-black/50 backdrop-blur-xl">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
              <span className="size-3 rounded-full bg-[#ff5f57]" />
              <span className="size-3 rounded-full bg-[#febc2e]" />
              <span className="size-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-muted">abhishek.ts</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 sm:text-sm">
              <code>
                <span className="text-violet">const</span> <span className="text-accent">developer</span> = {"{"}{"\n"}
                {"  "}name: <span className="text-code">&quot;{profile.name}&quot;</span>,{"\n"}
                {"  "}role: <span className="text-code">&quot;{profile.role}&quot;</span>,{"\n"}
                {"  "}experience: <span className="text-code">&quot;2+ years&quot;</span>,{"\n"}
                {"  "}stack: [<span className="text-code">&quot;React&quot;</span>, <span className="text-code">&quot;TypeScript&quot;</span>,{"\n"}
                {"          "}<span className="text-code">&quot;Redux&quot;</span>, <span className="text-code">&quot;TanStack Query&quot;</span>],{"\n"}
                {"  "}focus: [<span className="text-code">&quot;performance&quot;</span>, <span className="text-code">&quot;scalability&quot;</span>]
                <span className="animate-blink text-accent">▍</span>{"\n"}
                {"}"};
              </code>
            </pre>
          </div>
        </motion.div>
      </div>

      {/* stats */}
      <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-3 px-5 sm:grid-cols-3 sm:px-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 + i * 0.1, ease }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 backdrop-blur"
          >
            <b className="block font-display text-3xl font-semibold text-gradient"><CountUp to={s.to} suffix={s.suffix} /></b>
            <span className="text-sm text-muted">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
