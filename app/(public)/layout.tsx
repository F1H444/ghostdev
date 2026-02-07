'use client';

import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { NoiseBackground } from "@/components/ui/NoiseBackground";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/ui/Preloader";
import { BackgroundGeometry } from "@/components/ui/BackgroundGeometry";
import { DigitalDust } from "@/components/ui/DigitalDust";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
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
    </>
  );
}
