import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/BackToTop";
import { HomeSection } from "@/components/sections/HomeSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { SellSection } from "@/components/sections/SellSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden selection:bg-primary/20 selection:text-primary-foreground">
      <Header />
      
      <div className="flex flex-col">
        {/* Intro Strip */}
        {/* <HomeSection /> */}
        
        {/* Main Hero */}
        <HeroSection />
        
        {/* Listings / Services */}
        <SellSection />
        
        {/* Team */}
        <TeamSection />
        
        {/* Contact */}
        <ContactSection />
      </div>

      <Footer />
      <BackToTop />
    </main>
  );
}
