"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Particles, BlurFade, AnimatedGradientText, ShimmerButton } from "@/components/magicui";
import { MapPin, Calendar, Clock, Youtube, MessageCircle, ChevronDown } from "lucide-react";

export function FeiraoHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/feirao-free-banner.jpg"
          alt="Feirão Free Veículos"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120]/85 via-[#0B1120]/70 to-[#0B1120]" />
      </div>

      {/* Particles */}
      <Particles
        className="absolute inset-0"
        quantity={60}
        color="#F5A623"
        staticity={30}
      />

      {/* Content */}
      <div className="container-custom relative z-10 text-center py-20 pt-32">
        <BlurFade delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <Youtube className="text-red-500" size={18} />
            <span className="text-sm text-slate-300">Ao Vivo no YouTube</span>
          </div>
        </BlurFade>

        <BlurFade delay={0.2}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <AnimatedGradientText colorFrom="#F5A623" colorTo="#3B82F6" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              Feirão Free Veículos
            </AnimatedGradientText>
          </h1>
        </BlurFade>

        <BlurFade delay={0.3}>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            O maior feirão de veículos do Sul de SC! Compra, venda e troca com
            sonorização profissional, consulta FIPE, live no YouTube e muito mais.
          </p>
        </BlurFade>

        {/* Info Badges */}
        <BlurFade delay={0.4}>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full glass">
              <Calendar className="text-[#F5A623]" size={18} />
              <span className="text-sm text-white">Sábados e Domingos</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full glass">
              <Clock className="text-[#F5A623]" size={18} />
              <span className="text-sm text-white">A partir das 9h</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full glass">
              <MapPin className="text-[#F5A623]" size={18} />
              <span className="text-sm text-white">Atrás Top Brasil, Beira Rio — Tubarão/SC</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full glass">
              <Calendar className="text-[#3B82F6]" size={18} />
              <span className="text-sm text-white">Início: 07 de Março de 2026</span>
            </div>
          </div>
        </BlurFade>

        {/* CTAs */}
        <BlurFade delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="https://wa.me/5548996776089?text=Olá! Gostaria de informações sobre o Feirão Free Veículos."
              target="_blank"
            >
              <ShimmerButton
                shimmerColor="#25d366"
                background="linear-gradient(135deg, #25d366 0%, #128C7E 100%)"
                className="w-full sm:w-auto px-8 py-4 text-lg font-semibold"
              >
                <MessageCircle className="mr-2" size={20} />
                Fale pelo WhatsApp
              </ShimmerButton>
            </Link>

            <Link
              href="#servicos-feirao"
              className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/5 hover:border-[#F5A623]/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Ver Serviços
              <ChevronDown size={20} />
            </Link>
          </div>
        </BlurFade>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
