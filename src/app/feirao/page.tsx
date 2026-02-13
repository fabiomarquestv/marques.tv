import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FeiraoHero } from "@/components/feirao/feirao-hero";
import { FeiraoServices } from "@/components/feirao/feirao-services";
import { FeiraoAudioFair } from "@/components/feirao/feirao-audio-fair";
import { FeiraoSponsorship } from "@/components/feirao/feirao-sponsorship";
import { FeiraoContact } from "@/components/feirao/feirao-contact";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";

export const metadata: Metadata = {
  title: "Feirão Free Veículos | Marques.TV - Tubarão/SC",
  description:
    "Feirão Free Veículos em Tubarão/SC. Sábados e domingos a partir das 9h, atrás do Top Brasil, Beira Rio. Sonorização, consulta FIPE, live no YouTube, videokê e muito mais. Início: 07 de Março de 2026.",
  keywords: [
    "feirão de veículos",
    "feirão free",
    "Tubarão SC",
    "compra e venda de veículos",
    "feira de carros",
    "live YouTube",
    "áudio profissional",
    "patrocínio eventos",
    "Marques.TV",
    "Santa Catarina",
  ],
  openGraph: {
    title: "Feirão Free Veículos | Marques.TV",
    description:
      "Feirão Free Veículos em Tubarão/SC. Sábados e domingos a partir das 9h. Live no YouTube!",
    url: "https://www.marques.tv/feirao",
    siteName: "Marques.TV",
    images: [
      {
        url: "/images/feirao-free-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Feirão Free Veículos - Marques.TV",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Feirão Free Veículos | Marques.TV",
    description:
      "Feirão Free Veículos em Tubarão/SC. Sábados e domingos a partir das 9h!",
    images: ["/images/feirao-free-banner.jpg"],
  },
};

export default function FeiraoPage() {
  return (
    <main className="min-h-screen bg-[#0B1120]">
      <Navbar />
      <FeiraoHero />
      <FeiraoServices />
      <FeiraoAudioFair />
      <FeiraoSponsorship />
      <FeiraoContact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
