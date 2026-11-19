"use client";
import { motion } from "framer-motion";

// The timeline's vertical line draws itself downward when it scrolls into view.
export default function GrowLine() {
  return (
    <motion.span
      aria-hidden
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      className="absolute bottom-2 left-[11px] top-2 w-px origin-top bg-linear-to-b from-accent via-violet/60 to-transparent sm:left-[19px]"
    />
  );
}
