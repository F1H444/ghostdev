import { HeroSection } from "@/components/home/HeroSection";
import { InfiniteMarquee } from "@/components/ui/InfiniteMarquee";
import { AboutSection } from "@/components/home/AboutSection";
import { ProjectSection } from "@/components/home/ProjectSection";
import { ParallaxSection } from "@/components/home/ParallaxSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <HeroSection />
      <InfiniteMarquee />
      <AboutSection />
      <ProjectSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
