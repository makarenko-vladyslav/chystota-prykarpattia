"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

const icons: Record<string, React.ReactNode> = {
  construction: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-5a2 2 0 012-2h2a2 2 0 012 2v5" /><path d="M12 10v2" strokeLinecap="round"/></svg>,
  sparkle: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5zM19 15l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" /></svg>,
  sofa: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3M4 16H3a2 2 0 01-2-2V9a2 2 0 012-2h18a2 2 0 012 2v5a2 2 0 01-2 2h-1M4 16c0-2.5 2-4.5 4.5-4.5h7c2.5 0 4.5 2 4.5 4.5" /></svg>,
  window: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M12 4v16M4 12h16" /><path d="M8 8l-2 2M16 8l-2 2" strokeLinecap="round"/></svg>,
  leaf: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22c0-4-3-8-8-10 0 0 5-1 9 3 4-4 9-3 9-3-5 2-8 6-8 10" /><path d="M12 22V12" strokeLinecap="round"/></svg>,
  office: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01" strokeLinecap="round" strokeWidth="2"/></svg>
};

export default function Services() {
  const { t } = useLocale();
  const servicesData = t("services") as any;

  return (
    <section id="services" className="py-24 bg-bg-tint relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={servicesData.badge} 
          title={servicesData.title} 
          subtitle={servicesData.subtitle} 
        />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* L-Shape Image Left */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/5 relative rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-auto"
          >
            <img src={servicesData.imageUrl} alt="Cleaning Services" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Професійний підхід</h3>
              <p className="text-white/80">Кожен клінер проходить 40 годин навчання перед першим виїздом.</p>
            </div>
          </motion.div>

          {/* Cards Grid Right */}
          <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicesData.items.map((item: any, i: number) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_hsl(215_20%_90%_/_0.5)] hover:shadow-[0_8px_30px_hsl(215_20%_85%_/_0.8)] border border-transparent hover:border-accent/30 transition-all group relative overflow-hidden"
              >
                <div className="w-14 h-14 rounded-2xl bg-bg-tint flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <div className="w-7 h-7">{icons[item.icon]}</div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 relative z-10">{item.title}</h3>
                <p className="text-text-muted mb-6 relative z-10 leading-relaxed">{item.description}</p>
                <div className="font-bold text-accent relative z-10">{item.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
