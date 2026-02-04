import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { NoiseBackground } from "@/components/ui/NoiseBackground";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/ui/Preloader";
import { BackgroundGeometry } from "@/components/ui/BackgroundGeometry";
import { DigitalDust } from "@/components/ui/DigitalDust";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GhostDev | Agensi Digital Kreatif",
  description: "Kami merancang pengalaman digital yang menghantui kompetisi. Pengembangan web premium dan layanan aplikasi elit.",
  keywords: ["pengembangan web", "pembuatan aplikasi", "agensi kreatif", "ghostdev", "desain responsif", "dark mode"],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://ghostdev.agency",
    title: "GhostDev | Kerajinan Digital Elit",
    description: "Membangun pengalaman digital yang cepat, aman, dan memukau.",
    siteName: "GhostDev",
  },
  twitter: {
    card: "summary_large_image",
    title: "GhostDev | Agensi Digital Kreatif",
    description: "Kami merancang pengalaman digital yang luar biasa.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "GhostDev",
    "image": "https://ghostdev.agency/logo.png",
    "url": "https://ghostdev.agency",
    "telephone": "+62123456789",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jakarta",
      "addressCountry": "ID"
    }
  };

  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Preloader />
        <SmoothScroll>
          <NoiseBackground />
          <DigitalDust />
          <BackgroundGeometry />
          <CustomCursor />
          <Navbar />
          <main className="min-h-screen relative z-10 flex flex-col">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
