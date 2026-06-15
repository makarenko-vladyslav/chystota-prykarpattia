import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Чистота Прикарпаття — Професійний клінінг в Івано-Франківську",
  description: "Преміальне прибирання квартир, будинків та офісів. Екологічні засоби, професійне обладнання Karcher, матеріальна відповідальність до 50 000 грн.",
  keywords: ["клінінг Івано-Франківськ", "прибирання після ремонту", "хімчистка меблів", "еко прибирання", "Чистота Прикарпаття"],
  icons: { icon: '/icon.svg' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600&family=Montserrat:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
