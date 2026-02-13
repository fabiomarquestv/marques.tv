"use client";

import { motion } from "framer-motion";
import { BlurFade, ShineBorder } from "@/components/magicui";
import { Headphones, Radio } from "lucide-react";

const highlights = [
  {
    icon: Headphones,
    title: "Equipamentos Profissionais",
    description: "Equipamentos de áudio profissionais usados em excelente estado de conservação. Itens de R$ 1.000 a R$ 3.000+.",
  },
  {
    icon: Radio,
    title: "Exibição na Live",
    description: "Os vídeos da feira de áudio são exibidos durante a live no YouTube nos intervalos entre as ofertas de veículos.",
  },
];

export function FeiraoAudioFair() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-[#0B1120]" />

      {/* Decorative orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#F5A623]/10 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="container-custom relative z-10">
        <BlurFade delay={0.1}>
          <div className="text-center mb-16">
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Em Paralelo ao Feirão
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Feira de <span className="text-gradient">Áudio Profissional</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Aproveite o Feirão Free para conferir equipamentos de áudio profissional
              disponíveis para venda. Tudo apresentado em detalhes!
            </p>
          </div>
        </BlurFade>

        {/* Featured Card */}
        <BlurFade delay={0.2}>
          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative overflow-hidden rounded-2xl bg-[#0F172A] p-8 sm:p-10">
              <ShineBorder shineColor={["#F5A623", "#3B82F6"]} borderWidth={2} />
              <div className="relative z-10 text-center">
                <Headphones className="mx-auto mb-4 text-[#F5A623]" size={48} />
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Equipamentos de Som à Venda
                </h3>
                <p className="text-slate-400 max-w-xl mx-auto">
                  Diversos equipamentos profissionais de áudio disponíveis para venda.
                  Cada item conta com vídeo explicativo detalhado sobre funcionalidade,
                  procedência e qualidade. Os vídeos são exibidos durante a live do YouTube
                  nos intervalos do feirão de veículos.
                </p>
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {highlights.map((item, index) => (
            <BlurFade key={item.title} delay={0.3 + index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="glass rounded-xl p-6 hover:border-[#F5A623]/30 transition-all h-full text-center"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: "#F5A62315" }}>
                  <item.icon size={24} className="text-[#F5A623]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
