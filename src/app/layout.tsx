import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.marques.tv"),
  title: "Marques.TV | Sonorização, Iluminação, Telões e Estruturas para Eventos",
  description: "Há mais de 30 anos realizando eventos com sucesso! Sonorização profissional, iluminação, telões, datashow, estruturas e muito mais. Criciúma, Tubarão, Florianópolis/SC.",
  keywords: ["sonorização", "iluminação", "telões", "datashow", "eventos", "DJ", "karaokê", "videokê", "estruturas", "palcos", "Vikuiti", "box truss", "moving head", "gerador de energia", "climatizadores", "biombos acústicos", "Criciúma", "Tubarão", "Florianópolis", "São José", "Santa Catarina"],
  authors: [{ name: "Fábio Marques da Silva" }],
  openGraph: {
    title: "Marques.TV | Sonorização, Iluminação e Estruturas para Eventos",
    description: "Há mais de 30 anos realizando eventos com sucesso! Soluções completas para seu evento.",
    url: "https://www.marques.tv",
    siteName: "Marques.TV",
    images: [
      {
        url: "/images/novologotipo.jpg",
        width: 800,
        height: 600,
        alt: "Marques.TV Logo",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marques.TV | Eventos Profissionais",
    description: "Há mais de 30 anos realizando eventos com sucesso!",
    images: ["/images/novologotipo.jpg"],
  },
  icons: {
    icon: "/images/novologotipo.jpg",
    apple: "/images/novologotipo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth dark">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
