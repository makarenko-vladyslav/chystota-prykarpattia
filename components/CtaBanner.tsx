"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";

export default function CtaBanner() {
  const { t } = useLocale();
  const data = t("ctaBanner") as any;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full blur-[100px] opacity-30 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-light rounded-full blur-[100px] opacity-20 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">{data.title}</h2>
            <p className="text-xl text-white/80 mb-10">{data.subtitle}</p>
            <a href="#contact" className="inline-block bg-accent hover:bg-accent-hover text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:-translate-y-1">
              {data.button}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
