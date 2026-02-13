"use client";

import { motion } from "framer-motion";
import { BlurFade, MagicCard } from "@/components/magicui";
import { Music, Search, Mic, Wifi, Youtube, Volume2, MonitorPlay } from "lucide-react";

const feiraoServices = [
  {
    icon: Music,
    title: "Sonorização",
    description: "Sistema de som profissional para o evento completo.",
    color: "#F5A623",
  },
  {
    icon: Search,
    title: "Consulta tabela FIPE",
    description: "Consulta de valores na tabela FIPE.",
    color: "#3B82F6",
  },
  {
    icon: Mic,
    title: "Apresentações Artísticas",
    description: "Atrações artísticas ao vivo durante o feirão.",
    color: "#F5A623",
  },
  {
    icon: Wifi,
    title: "WiFi",
    description: "Internet sem fio disponível no local do evento.",
    color: "#3B82F6",
  },
  {
    icon: Youtube,
    title: "Live YouTube",
    description: "Transmissão ao vivo pelo YouTube durante todo o evento.",
    color: "#F5A623",
  },
  {
    icon: Volume2,
    title: "Locução",
    description: "Locução profissional para anúncios e ofertas.",
    color: "#3B82F6",
  },
  {
    icon: MonitorPlay,
    title: "Videokê",
    description: "Entretenimento com videokê para o público.",
    color: "#F5A623",
  },
];

export function FeiraoServices() {
  return (
    <section id="servicos-feirao" className="py-24 bg-[#0F172A] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F5A623]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3B82F6]/50 to-transparent" />

      <div className="container-custom">
        <BlurFade delay={0.1}>
          <div className="text-center mb-16">
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase mb-4 block">
              O que você encontra
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Serviços do Feirão
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Tudo o que você precisa para uma experiência completa de compra e venda de veículos.
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {feiraoServices.map((service, index) => (
            <BlurFade key={service.title} delay={0.1 + index * 0.08}>
              <MagicCard
                gradientColor={service.color}
                gradientFrom={service.color}
                gradientTo={service.color === "#F5A623" ? "#3B82F6" : "#F5A623"}
                className="h-full rounded-xl border border-white/10"
              >
                <div className="p-6 h-full flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 rounded-xl glass flex items-center justify-center mb-4"
                    style={{ borderColor: `${service.color}30` }}
                  >
                    <service.icon size={28} style={{ color: service.color }} />
                  </motion.div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-slate-400 text-sm">{service.description}</p>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
