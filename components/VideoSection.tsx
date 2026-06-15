"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function VideoSection() {
  const { t } = useLocale();
  const data = t("video") as any;

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <SectionHeading badge={data.badge} title={data.title} light align="center" />

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video group cursor-pointer"
        >
          <img src={data.posterUrl} alt="Video poster" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center pl-2 shadow-[0_0_30px_hsl(185_80%_40%_/_0.5)] group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
