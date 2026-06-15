"use client";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({ badge, title, subtitle, align = "center", light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`font-bold tracking-wider uppercase text-sm mb-3 block ${light ? "text-accent-light" : "text-accent"}`}
      >
        {badge}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-4xl md:text-5xl font-display font-bold mb-4 ${light ? "text-white" : "text-primary"}`}
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={`w-16 h-1 bg-accent rounded-full mb-6 ${align === "center" ? "mx-auto" : ""}`} 
      />
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className={`text-lg max-w-2xl ${align === "center" ? "mx-auto" : ""} ${light ? "text-white/80" : "text-text-muted"}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
