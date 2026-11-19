"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Play, Search, ThumbsUp } from "lucide-react";
import type { PointerEvent } from "react";
import { project } from "@/data/resume";
import Chips from "./ui/Chips";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";

// Decorative illustration of the app's UI (not a screenshot): search bar, player, trending feed.
function AppPreview() {
  return (
    <div aria-hidden className="w-full max-w-sm rounded-2xl border border-white/10 bg-bg/80 p-4 shadow-2xl shadow-black/60">
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-8 flex-1 items-center gap-2 rounded-full border border-white/10 px-3 text-xs text-muted">
          <Search size={13} /> Search videos
          <span className="animate-blink text-accent">|</span>
        </div>
        <span className="size-8 rounded-full bg-violet/40" />
      </div>
      <div className="relative grid aspect-video place-items-center overflow-hidden rounded-xl bg-linear-to-br from-violet/50 to-accent/30">
        <span className="grid size-14 place-items-center rounded-full bg-bg/80 backdrop-blur">
          <Play size={22} className="ml-0.5 fill-accent text-accent" />
        </span>
        <span className="absolute inset-x-3 bottom-3 h-1 rounded-full bg-white/20">
          <span className="block h-full w-2/5 rounded-full bg-accent" />
        </span>
      </div>
      <div className="mt-3 flex items-center gap-3">
        <div className="h-3 w-2/3 rounded bg-white/15" />
        <ThumbsUp size={14} className="ml-auto text-muted" />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="space-y-1.5">
            <div className="aspect-video rounded-lg bg-white/[0.07]" />
            <div className="h-2 rounded bg-white/10" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 150, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 150, damping: 18 });

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <Section id="projects" index="04" eyebrow="Featured project" title={<>Something I built <span className="text-gradient">end to end</span>.</>}>
      <Reveal>
        <div style={{ perspective: 1400 }}>
          <motion.article
            onPointerMove={onMove}
            onPointerLeave={onLeave}
            style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
            className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur transition-colors hover:border-accent/40 lg:grid-cols-[1.05fr_1fr]"
          >
            <div className="p-8 sm:p-12">
              <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs uppercase tracking-widest text-accent">{project.tag}</span>
              <h3 className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-4xl">{project.title}</h3>
              <p className="mt-4 leading-relaxed text-muted">{project.description}</p>
              <ul className="mt-6 space-y-3">
                {project.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                    <ArrowRight size={16} className="mt-1 shrink-0 text-accent" />
                    {p}
                  </li>
                ))}
              </ul>
              <Chips items={project.tech} className="mt-8" />
            </div>
            <div className="relative grid min-h-72 place-items-center overflow-hidden border-t border-white/10 bg-linear-to-br from-violet/25 via-transparent to-accent/10 p-8 lg:border-l lg:border-t-0">
              <motion.div style={{ translateZ: 60 }} className="grid w-full place-items-center">
                <AppPreview />
              </motion.div>
            </div>
          </motion.article>
        </div>
      </Reveal>
    </Section>
  );
}
