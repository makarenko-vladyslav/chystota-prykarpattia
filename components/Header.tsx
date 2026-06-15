"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLocale();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: t("nav.services") as string },
    { href: "#calculator", label: t("nav.calculator") as string },
    { href: "#reviews", label: t("nav.reviews") as string },
    { href: "#contact", label: t("nav.contact") as string },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className={`flex items-center gap-2 font-display font-bold text-xl tracking-tight z-50 ${scrolled ? "text-primary" : "text-white"}`}>
          <svg className={`w-8 h-8 ${scrolled ? "text-accent" : "text-accent-light"}`} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round">
            <path d="M16 6C16 6 10 12 10 18C10 21.3137 12.6863 24 16 24C19.3137 24 22 21.3137 22 18C22 12 16 6 16 6Z" />
            <path d="M16 14C16 14 14 16 14 18" strokeLinecap="round" />
          </svg>
          Чистота Прикарпаття
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className={`font-medium text-sm hover:text-accent transition-colors ${scrolled ? "text-text-main" : "text-white/90"}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-2 text-sm font-bold">
            <button onClick={() => setLocale('uk')} className={`${locale === 'uk' ? 'text-accent' : scrolled ? 'text-text-muted' : 'text-white/60'}`}>UK</button>
            <span className={scrolled ? 'text-text-muted' : 'text-white/60'}>|</span>
            <button onClick={() => setLocale('en')} className={`${locale === 'en' ? 'text-accent' : scrolled ? 'text-text-muted' : 'text-white/60'}`}>EN</button>
          </div>
          <a href="tel:+380990000000" className={`font-bold ${scrolled ? "text-primary" : "text-white"}`}>
            +38 (099) 000-00-00
          </a>
          <a href="#calculator" className="bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:-translate-y-0.5">
            {t("hero.ctaPrimary") as string}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden z-50 p-2 ${scrolled || mobileMenuOpen ? "text-primary" : "text-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 z-40"
          >
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-2xl font-display font-bold text-primary hover:text-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-4 mt-4">
              <button onClick={() => { setLocale('uk'); setMobileMenuOpen(false); }} className={`text-lg font-bold ${locale === 'uk' ? 'text-accent' : 'text-text-muted'}`}>UK</button>
              <button onClick={() => { setLocale('en'); setMobileMenuOpen(false); }} className={`text-lg font-bold ${locale === 'en' ? 'text-accent' : 'text-text-muted'}`}>EN</button>
            </div>
            <a href="tel:+380990000000" className="text-xl font-bold text-primary mt-4">+38 (099) 000-00-00</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
