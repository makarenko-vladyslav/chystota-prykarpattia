"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import pricing from "@/lib/pricing.json";
import SectionHeading from "./SectionHeading";

export default function Calculator() {
  const { t } = useLocale();
  const calcData = t("calculator") as any;
  
  const [area, setArea] = useState(50);
  const [type, setType] = useState<keyof typeof pricing.basePrices>("general");
  const [extras, setExtras] = useState<Record<string, boolean>>({});
  const [total, setTotal] = useState(pricing.minPrice);

  useEffect(() => {
    let price = area * pricing.basePrices[type];
    Object.entries(extras).forEach(([key, active]) => {
      if (active) price += pricing.extraServices[key as keyof typeof pricing.extraServices];
    });
    setTotal(Math.max(price, pricing.minPrice));
  }, [area, type, extras]);

  const toggleExtra = (key: string) => {
    setExtras(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section id="calculator" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <SectionHeading badge={calcData.badge} title={calcData.title} subtitle={calcData.subtitle} />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-[0_10px_40px_hsl(215_20%_90%)] border border-gray-100 p-8 md:p-12"
        >
          {/* Area Slider */}
          <div className="mb-10">
            <div className="flex justify-between items-end mb-4">
              <label className="font-bold text-primary text-lg">{calcData.areaLabel}</label>
              <span className="text-3xl font-display font-bold text-accent">{area} м²</span>
            </div>
            <input 
              type="range" 
              min="20" max="200" step="5" 
              value={area} 
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full h-2 bg-bg-tint rounded-lg appearance-none cursor-pointer accent-accent"
            />
            <div className="flex justify-between text-sm text-text-muted mt-2">
              <span>20 м²</span>
              <span>200 м²</span>
            </div>
          </div>

          {/* Type Selection */}
          <div className="mb-10">
            <label className="font-bold text-primary text-lg block mb-4">{calcData.typeLabel}</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.keys(pricing.basePrices).map((tKey) => (
                <button
                  key={tKey}
                  onClick={() => setType(tKey as any)}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    type === tKey 
                      ? "border-accent bg-accent/5" 
                      : "border-gray-100 hover:border-accent/30"
                  }`}
                >
                  <div className={`font-bold ${type === tKey ? "text-primary" : "text-text-muted"}`}>
                    {t(`services.items.${Object.keys(t("services.items") as any).find(k => (t("services.items") as any)[k].id === tKey)}.title`) as string || tKey}
                  </div>
                  <div className="text-sm text-accent mt-1">{pricing.basePrices[tKey as keyof typeof pricing.basePrices]} {pricing.currency}/м²</div>
                </button>
              ))}
            </div>
          </div>

          {/* Extras */}
          <div className="mb-10">
            <label className="font-bold text-primary text-lg block mb-4">{calcData.extraLabel}</label>
            <div className="flex flex-wrap gap-3">
              {Object.keys(pricing.extraServices).map((eKey) => (
                <button
                  key={eKey}
                  onClick={() => toggleExtra(eKey)}
                  className={`px-4 py-2 rounded-full border transition-all text-sm font-medium ${
                    extras[eKey]
                      ? "bg-primary text-white border-primary"
                      : "bg-white text-text-main border-gray-200 hover:border-primary"
                  }`}
                >
                  {eKey === 'windows' ? 'Миття вікон' : eKey === 'fridge' ? 'Холодильник' : eKey === 'oven' ? 'Духовка' : 'Хімчистка'} (+{pricing.extraServices[eKey as keyof typeof pricing.extraServices]}{pricing.currency})
                </button>
              ))}
            </div>
          </div>

          {/* Total & CTA */}
          <div className="bg-bg-tint rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-text-muted font-medium mb-1">{calcData.totalLabel}</div>
              <div className="text-4xl md:text-5xl font-display font-bold text-primary">
                ~{total} <span className="text-2xl">{pricing.currency}</span>
              </div>
            </div>
            <a href="#contact" className="w-full md:w-auto bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all text-center shadow-lg shadow-accent/30 hover:-translate-y-1">
              {calcData.cta}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
