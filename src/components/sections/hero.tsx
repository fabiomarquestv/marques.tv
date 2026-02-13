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
        color="#F5A623"
        staticity={30}
      />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F5A623]/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3B82F6]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="container-custom relative z-10 text-center py-20 pt-32">
        <BlurFade delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <span className="w-2 h-2 rounded-full bg-[#F5A623] animate-pulse" />
            <span className="text-sm text-slate-300">Desde 1994 no mercado</span>
          </div>
        </BlurFade>

        <BlurFade delay={0.2}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Transformamos seus eventos em{" "}
            <AnimatedGradientText colorFrom="#F5A623" colorTo="#3B82F6" className="block mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              experiências inesquecíveis!
            </AnimatedGradientText>
          </h1>
        </BlurFade>

        <BlurFade delay={0.3}>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Sonorização profissional, iluminação cênica, telões Vikuiti, TV&apos;s LED,
            datashow, palcos, DJ, estruturas e muito mais para eventos corporativos e sociais.
            Criciúma, Tubarão, Florianópolis e litoral de SC.
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
              className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/5 hover:border-[#F5A623]/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Ver Serviços
              <ChevronDown size={20} />
            </Link>
          </div>
        </BlurFade>

        {/* Stats */}
        <BlurFade delay={0.5}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass rounded-2xl p-5 glow-hover transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">
                <NumberTicker value={30} className="text-inherit" />+
              </div>
              <p className="text-slate-400 text-sm">Anos de Experiência</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass rounded-2xl p-5 glow-hover transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">
                <NumberTicker value={5000} className="text-inherit" />+
              </div>
              <p className="text-slate-400 text-sm">Eventos Realizados</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass rounded-2xl p-5 glow-hover transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">
                <NumberTicker value={1000} className="text-inherit" />+
              </div>
              <p className="text-slate-400 text-sm">Clientes Atendidos</p>
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
          <motion.div className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
