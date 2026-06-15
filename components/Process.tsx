"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Process() {
  const { t } = useLocale();
  const data = t("process") as any;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading badge={data.badge} title={data.title} />

        <div className="relative mt-16">
          {/* Horizontal Line */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-gradient-to-r from-accent/10 via-accent to-accent/10 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
            {data.steps.map((step: any, i: number) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <div className="w-16 h-16 rounded-full bg-white border-4 border-accent shadow-lg flex items-center justify-center text-2xl font-display font-bold text-primary mb-6 mx-auto md:mx-0">
                  {i + 1}
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-text-muted">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
