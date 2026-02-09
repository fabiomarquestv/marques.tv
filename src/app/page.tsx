import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Gallery } from "@/components/sections/gallery";
import { About } from "@/components/sections/about";
import { Clients } from "@/components/sections/clients";
import { SocialActions } from "@/components/sections/social-actions";
import { Contact } from "@/components/sections/contact";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { FeiraoBanner } from "@/components/sections/feirao-banner";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1120]">
      <Navbar />
      <Hero />
      <FeiraoBanner />
      <Services />
      <Gallery />
      <About />
      <Clients />
      <SocialActions />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
