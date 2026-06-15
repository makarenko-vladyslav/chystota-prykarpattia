"use client";
import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();
  const data = t("footer") as any;
  const nav = t("nav") as any;

  return (
    <footer className="bg-primary text-white pt-20 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 font-display font-bold text-2xl tracking-tight mb-6">
              <svg className="w-8 h-8 text-accent" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round">
                <path d="M16 6C16 6 10 12 10 18C10 21.3137 12.6863 24 16 24C19.3137 24 22 21.3137 22 18C22 12 16 6 16 6Z" />
                <path d="M16 14C16 14 14 16 14 18" strokeLinecap="round" />
              </svg>
              Чистота Прикарпаття
            </a>
            <p className="text-white/70 max-w-sm leading-relaxed">{data.description}</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Навігація</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#services" className="hover:text-accent transition-colors">{nav.services}</a></li>
              <li><a href="#calculator" className="hover:text-accent transition-colors">{nav.calculator}</a></li>
              <li><a href="#reviews" className="hover:text-accent transition-colors">{nav.reviews}</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">{nav.contact}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Контакти</h4>
            <ul className="space-y-4 text-white/70">
              <li>+38 (099) 000-00-00</li>
              <li>ishop.inform@gmail.com</li>
              <li>м. Івано-Франківськ</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center md:text-left text-white/50 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Чистота Прикарпаття. {data.rights}</p>
        </div>
      </div>
    </footer>
  );
}
