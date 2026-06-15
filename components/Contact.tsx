"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const { t } = useLocale();
  const data = t("contact") as any;
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-bg-tint">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading badge={data.badge} title={data.title} />

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 space-y-8"
          >
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <h3 className="font-bold text-primary mb-2">Адреса</h3>
              <p className="text-text-muted">{data.address}</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <h3 className="font-bold text-primary mb-2">Телефон</h3>
              <a href={`tel:${data.phone.replace(/\D/g,'')}`} className="text-accent font-bold hover:underline">{data.phone}</a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
              {status === "success" ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{data.form.success}</h3>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">{data.form.name}</label>
                      <input required type="text" className="w-full px-5 py-4 rounded-xl bg-bg-tint border border-transparent focus:border-accent focus:bg-white transition-colors outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">{data.form.phone}</label>
                      <input required type="tel" className="w-full px-5 py-4 rounded-xl bg-bg-tint border border-transparent focus:border-accent focus:bg-white transition-colors outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">{data.form.service}</label>
                    <select className="w-full px-5 py-4 rounded-xl bg-bg-tint border border-transparent focus:border-accent focus:bg-white transition-colors outline-none appearance-none cursor-pointer">
                      <option>Прибирання після ремонту</option>
                      <option>Генеральне прибирання</option>
                      <option>Хімчистка меблів</option>
                      <option>Інше</option>
                    </select>
                  </div>
                  <button 
                    type="submit" 
                    disabled={status === "loading"}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-colors disabled:opacity-70 mt-4"
                  >
                    {status === "loading" ? "..." : data.form.submit}
                  </button>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
