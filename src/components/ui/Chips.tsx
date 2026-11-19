"use client";
import { motion } from "framer-motion";

// Chips pop in one after another when the group scrolls into view.
export default function Chips({ items, className = "" }: { items: readonly string[]; className?: string }) {
  return (
    <motion.ul
      className={`flex flex-wrap gap-2 ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ staggerChildren: 0.04 }}
    >
      {items.map((t) => (
        <motion.li
          key={t}
          variants={{ hidden: { opacity: 0, y: 10, scale: 0.9 }, show: { opacity: 1, y: 0, scale: 1 } }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="cursor-default rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[13px] text-ink/85 transition-colors duration-200 hover:border-accent/50 hover:text-accent"
          whileHover={{ y: -3 }}
        >
          {t}
        </motion.li>
      ))}
    </motion.ul>
  );
}
