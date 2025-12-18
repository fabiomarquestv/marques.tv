import {
  Navbar,
  Hero,
  Services,
  Gallery,
  About,
  Contact,
  Footer,
  WhatsAppButton,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
