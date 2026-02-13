"use client";

import Link from "next/link";
import { BlurFade, ShimmerButton } from "@/components/magicui";
import { MessageCircle, Phone, ArrowLeft } from "lucide-react";

export function FeiraoContact() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-[#0B1120]" />

      {/* Decorative orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#F5A623]/10 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="container-custom relative z-10 text-center">
        <BlurFade delay={0.1}>
          <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Fale Conosco
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Quer saber mais?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-4">
            Entre em contato pelo WhatsApp para informações sobre o Feirão Free Veículos,
            patrocínio ou anúncio de veículos.
          </p>
          <div className="flex items-center justify-center gap-2 text-slate-300 mb-10">
            <Phone size={18} className="text-[#F5A623]" />
            <span className="text-lg">(48) 99677-6089</span>
          </div>
        </BlurFade>

        <BlurFade delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://wa.me/5548996776089?text=Olá! Gostaria de informações sobre o Feirão Free Veículos."
              target="_blank"
            >
              <ShimmerButton
                shimmerColor="#25d366"
                background="linear-gradient(135deg, #25d366 0%, #128C7E 100%)"
                className="w-full sm:w-auto px-10 py-4 text-lg font-semibold"
              >
                <MessageCircle className="mr-2" size={20} />
                Fale pelo WhatsApp
              </ShimmerButton>
            </Link>

            <Link
              href="/"
              className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/5 hover:border-[#F5A623]/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ArrowLeft size={20} />
              Ver todos os serviços
            </Link>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
