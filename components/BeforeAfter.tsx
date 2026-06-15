"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function BeforeAfter() {
  const { t } = useLocale();
  const data = t("beforeAfter") as any;
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDrag = (e: any) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX || (e.touches && e.touches[0].clientX);
    if (!x) return;
    const pos = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(pos, 0), 100));
  };

  return (
    <section className="py-24 bg-bg-tint">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading badge={data.badge} title={data.title} subtitle={data.subtitle} />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize select-none"
          ref={containerRef}
          onMouseMove={handleDrag}
          onTouchMove={handleDrag}
        >
          {/* After Image (Background) */}
          <img src={data.items[0].after} alt="After" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
          
          {/* Before Image (Foreground, clipped) */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
          >
            <img src={data.items[0].before} alt="Before" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
            style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 9l-4 3 4 3M16 9l4 3-4 3"/></svg>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-6 left-6 bg-black/80 text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wide">
            {data.beforeLabel}
          </div>
          <div className="absolute top-6 right-6 bg-accent text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wide">
            {data.afterLabel}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
