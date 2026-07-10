import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Чистота Прикарпаття | Клінінг квартир преміум-класу в Івано-Франківську',
  description: 'Професійний сервіс клінінгу для мешканців ЖК «Калинова Слобода» та «Липки». Делікатний догляд за дорогими інтер’єрами з повною фінансовою гарантією на 50 000 грн.',
  openGraph: {
    title: 'Чистота Прикарпаття | Технічний регламент бездоганності',
    description: 'Матеріальне страхування майна та використання виключно німецької еко-хімії Kiehl.',
    type: 'website',
    locale: 'uk_UA',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Чистота Прикарпаття",
  "image": "https://images.pexels.com/photos/11370616/pexels-photo-11370616.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  "description": "Професійний сервіс клінінгу для мешканців сучасних ЖК Івано-Франківська.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Івано-Франківськ",
    "addressCountry": "UA"
  },
  "areaServed": ["ЖК Калинова Слобода", "ЖК Липки"],
  "telephone": "+38 (067) 000 00 00",
  "priceRange": "$$"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500;600;700;800&family=Roboto+Mono:wght@400;500&family=Rubik:wght@400;500;600&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col selection:bg-accent selection:text-accent-foreground">
        <header className="border-b border-border px-xl py-lg flex justify-between items-center bg-surface sticky top-0 z-50">
          <div className="font-display font-bold tracking-tight text-xl uppercase">Чистота Прикарпаття</div>
          <div className="flex items-center gap-lg">
            <a href="tel:+380670000000" className="hidden sm:block font-body font-medium text-foreground hover:text-accent transition-colors">
              +38 (067) 000 00 00
            </a>
            <a href="#pricing" className="bg-accent text-accent-foreground px-md py-sm font-display font-medium text-sm uppercase hover:opacity-90 transition-opacity">
              Замовити
            </a>
          </div>
        </header>
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}