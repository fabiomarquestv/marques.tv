"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { WhatsAppButton } from "./whatsapp-button";

interface SubpageLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export function SubpageLayout({ title, subtitle, children }: SubpageLayoutProps) {
  return (
    <main className="min-h-screen bg-[#0B1120]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B1120]/90 backdrop-blur-xl shadow-lg shadow-black/20 py-3">
        <div className="container-custom flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-white/10 group-hover:border-[#F5A623]/50 transition-colors">
              <Image
                src="/images/novologotipo.jpg"
                alt="Marques.TV Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-lg font-bold text-gradient hidden sm:block">
              Marques.TV
            </span>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 text-slate-300 hover:text-[#F5A623] transition-colors text-sm"
          >
            <ArrowLeft size={18} />
            Voltar ao site
          </Link>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-[#0B1120]" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#F5A623]/10 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-[150px] -translate-y-1/2" />

        <div className="container-custom relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase mb-4 block"
          >
            {subtitle}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            {title}
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 relative">
        <div className="container-custom relative z-10">
          {children}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B1120] border-t border-white/10 py-8">
        <div className="container-custom flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Marques.TV - Todos os direitos reservados.
          </p>
          <Link
            href="/"
            className="text-[#F5A623] hover:text-[#FBBF24] transition-colors text-sm"
          >
            Voltar ao site principal
          </Link>
        </div>
      </footer>

      <WhatsAppButton />
    </main>
  );
}
