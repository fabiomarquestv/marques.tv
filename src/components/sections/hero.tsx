"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Particles, NumberTicker, BlurFade, AnimatedGradientText, ShimmerButton } from "@/components/magicui";
import { MessageCircle, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particles Background */}
      <Particles
        className="absolute inset-0"
        quantity={80}
        color="#00d4aa"
        staticity={30}
      />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d4aa]/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7c3aed]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="container-custom relative z-10 text-center py-20 pt-32">
        <BlurFade delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00d4aa] animate-pulse" />
            <span className="text-sm text-gray-300">Desde 1994 no mercado</span>
          </div>
        </BlurFade>

        <BlurFade delay={0.2}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Transformamos seus eventos em{" "}
            <AnimatedGradientText className="block mt-2">
              experiências inesquecíveis
            </AnimatedGradientText>
          </h1>
        </BlurFade>

        <BlurFade delay={0.3}>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Sonorização profissional, iluminação espetacular, telões de alta definição
            e estruturas completas para eventos corporativos e sociais.
          </p>
        </BlurFade>

        <BlurFade delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="https://wa.me/5548996776089?text=Olá! Vim pelo site e gostaria de um orçamento."
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
              href="#servicos"
              className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/5 hover:border-[#00d4aa]/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Ver Serviços
              <ChevronDown size={20} />
            </Link>
          </div>
        </BlurFade>

        {/* Stats */}
        <BlurFade delay={0.5}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass rounded-2xl p-6 glow-hover transition-all duration-300"
            >
              <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">
                <NumberTicker value={30} suffix="+" />
              </div>
              <p className="text-gray-400">Anos de Experiência</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass rounded-2xl p-6 glow-hover transition-all duration-300"
            >
              <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">
                <NumberTicker value={5000} suffix="+" />
              </div>
              <p className="text-gray-400">Eventos Realizados</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass rounded-2xl p-6 glow-hover transition-all duration-300"
            >
              <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">
                <NumberTicker value={50000} suffix="+" />
              </div>
              <p className="text-gray-400">Trilhas Sonoras</p>
            </motion.div>
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
          <motion.div className="w-1.5 h-1.5 rounded-full bg-[#00d4aa]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
