import Hero from "@/components/sections/hero";
import MarqueeStrip from "@/components/sections/marquee-strip";
import Introduction from "@/components/sections/introduction";
import Features from "@/components/sections/features";
import MenuHighlights from "@/components/sections/menu-highlights";
import TestimonialsSection from "@/components/sections/testimonials-section";
import Gallery from "@/components/sections/gallery";
import CTA from "@/components/sections/cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <MarqueeStrip />
        <Introduction />
        <Features />
        <MenuHighlights />
        <TestimonialsSection />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
