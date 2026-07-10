import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Чистота Прикарпаття | Преміальний клінінг в Івано-Франківську',
  description: 'Спеціалізований сервіс клінінгу для мешканців преміальних новобудов Івано-Франківська. Матеріальне страхування на 50 000 грн та еко-хімія Kiehl.',
  openGraph: {
    title: 'Чистота Прикарпаття | Івано-Франківськ',
    description: 'Делікатний догляд за дорогими інтер’єрами. Використання виключно сертифікованої німецької хімії, безпечної для немовлят.',
    type: 'website',
    locale: 'uk_UA',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Чистота Прикарпаття",
    "image": "https://images.pexels.com/photos/11126099/pexels-photo-11126099.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    "description": "Спеціалізований сервіс клінінгу для мешканців преміальних новобудов Івано-Франківська, що фокусується на делікатному догляді за дорогими інтер’єрами.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Вул. Гетьмана Мазепи, 164",
      "addressLocality": "Івано-Франківськ",
      "addressCountry": "UA"
    },
    "areaServed": ["ЖК Калинова Слобода", "ЖК Липки", "Містечко Центральне"],
    "telephone": "+380990000000"
  };

  return (
    <html lang="uk" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;800&family=Rubik:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
