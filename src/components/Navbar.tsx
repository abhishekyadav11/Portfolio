"use client";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, profile } from "@/data/resume";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navItems.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div style={{ scaleX: progress }} className="h-0.5 origin-left bg-linear-to-r from-accent to-violet" />
      <div className="mx-auto mt-3 flex max-w-6xl items-center justify-between px-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2 rounded-full border border-white/10 bg-bg/70 py-1.5 pl-1.5 pr-4 backdrop-blur-xl">
          <span className="grid size-8 place-items-center rounded-full bg-accent font-display text-sm font-bold text-bg">{profile.initials}</span>
          <span className="hidden font-display text-sm font-medium sm:block">{profile.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden rounded-full border border-white/10 bg-bg/70 p-1.5 backdrop-blur-xl md:flex">
          {navItems.map((i) => (
            <a
              key={i.id}
              href={`#${i.id}`}
              className={`rounded-full px-4 py-1.5 text-sm transition-colors ${active === i.id ? "bg-white/10 text-ink" : "text-muted hover:text-ink"}`}
            >
              {i.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-full border border-white/10 bg-bg/70 backdrop-blur-xl md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mt-2 rounded-3xl border border-white/10 bg-surface/95 p-3 backdrop-blur-xl md:hidden"
          >
            {navItems.map((i) => (
              <a
                key={i.id}
                href={`#${i.id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-2xl px-4 py-3 text-base ${active === i.id ? "bg-white/10 text-accent" : "text-ink"}`}
              >
                {i.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
