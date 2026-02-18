"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Particles, BlurFade, AnimatedGradientText, ShimmerButton } from "@/components/magicui";
import { MapPin, Calendar, Clock, Youtube, MessageCircle, ChevronDown } from "lucide-react";

export function FeiraoHero() {
  return (
    <section className="relative flex items-center overflow-hidden bg-[#0B1120] min-h-screen lg:min-h-screen">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,166,35,0.08)_0%,_transparent_50%),_radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.06)_0%,_transparent_50%)]" />

      {/* Particles */}
      <Particles
        className="absolute inset-0"
        quantity={60}
        color="#F5A623"
        staticity={30}
      />

      {/* Content */}
      <div className="container-custom relative z-10 px-4 sm:px-6 py-24 pt-28 lg:py-20 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Mobile: Flyer first */}
          <div className="lg:hidden">
            <BlurFade delay={0.1}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative flex justify-center"
              >
                <div className="relative group max-w-[300px] sm:max-w-[360px]">
                  <div className="absolute -inset-1 bg-gradient-to-br from-[#F5A623]/30 via-[#F5A623]/10 to-[#3B82F6]/20 rounded-2xl blur-xl opacity-60" />
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 ring-1 ring-white/10">
                    <Image
                      src="/images/feirao-free-banner.jpg"
                      alt="Feirão Free Veículos - 14 de Março 2026"
                      width={360}
                      height={509}
                      className="w-full h-auto object-contain"
                      priority
                    />
                  </div>
                </div>
              </motion.div>
            </BlurFade>
          </div>

          {/* Text */}
          <div className="text-center lg:text-left">
            <BlurFade delay={0.2}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-4 lg:mb-8">
                <Youtube className="text-red-500" size={16} />
                <span className="text-xs sm:text-sm text-slate-300">Ao Vivo no YouTube</span>
              </div>
            </BlurFade>

            <BlurFade delay={0.3}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 lg:mb-6">
                <AnimatedGradientText colorFrom="#F5A623" colorTo="#3B82F6" className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold">
                  Feirão Free Veículos
                </AnimatedGradientText>
              </h1>
            </BlurFade>

            <BlurFade delay={0.4}>
              <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 mb-6 lg:mb-8">
                O maior feirão de veículos do Sul de SC! Compra, venda e troca com
                sonorização profissional, consulta FIPE, live no YouTube e muito mais.
              </p>
            </BlurFade>

            {/* Info Badges */}
            <BlurFade delay={0.5}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-6 lg:mb-8">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full glass">
                  <Calendar className="text-[#F5A623] shrink-0" size={16} />
                  <span className="text-xs sm:text-sm text-white">14 de Março de 2026</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full glass">
                  <Clock className="text-[#F5A623] shrink-0" size={16} />
                  <span className="text-xs sm:text-sm text-white">9h às 13h</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full glass">
                  <MapPin className="text-[#F5A623] shrink-0" size={16} />
                  <span className="text-xs sm:text-sm text-white">Tubarão/SC</span>
                </div>
              </div>
            </BlurFade>

            {/* CTAs */}
            <BlurFade delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link
                  href="https://wa.me/5548996776089?text=Olá! Gostaria de informações sobre o Feirão Free Veículos."
                  target="_blank"
                >
                  <ShimmerButton
                    shimmerColor="#25d366"
                    background="linear-gradient(135deg, #25d366 0%, #128C7E 100%)"
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
                  >
                    <MessageCircle className="mr-2" size={18} />
                    Fale pelo WhatsApp
                  </ShimmerButton>
                </Link>

                <Link
                  href="#servicos-feirao"
                  className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/20 text-white hover:bg-white/5 hover:border-[#F5A623]/50 transition-all duration-300 flex items-center justify-center gap-2 text-base sm:text-lg"
                >
                  Ver Serviços
                  <ChevronDown size={18} />
                </Link>
              </div>
            </BlurFade>
          </div>

          {/* Desktop: Flyer on the right */}
          <div className="hidden lg:block">
            <BlurFade delay={0.3}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative flex justify-end"
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-[#F5A623]/30 via-[#F5A623]/10 to-[#3B82F6]/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 ring-1 ring-white/10">
                    <Image
                      src="/images/feirao-free-banner.jpg"
                      alt="Feirão Free Veículos - 14 de Março 2026"
                      width={520}
                      height={735}
                      className="w-full max-w-[520px] h-auto object-contain"
                      priority
                    />
                  </div>
                </div>
              </motion.div>
            </BlurFade>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex"
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
