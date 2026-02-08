"use client";

import { motion } from "framer-motion";
import { SubpageLayout } from "@/components/shared/subpage-layout";
import { BlurFade } from "@/components/magicui";
import {
  MapPin,
  Accessibility,
  Music2,
  TableProperties,
  UtensilsCrossed,
  Ban,
  Armchair,
  Footprints,
} from "lucide-react";

const amenities = [
  {
    icon: Music2,
    title: "Karaokê",
    description: "Sistema de karaokê profissional disponível para seus eventos.",
    color: "#F5A623",
  },
  {
    icon: Accessibility,
    title: "Acessibilidade Completa",
    description: "Banheiro para cadeirantes, piso tátil e rampa de acesso.",
    color: "#3B82F6",
  },
  {
    icon: Footprints,
    title: "Pista de Dança",
    description: "Pista de dança ampla e iluminada para seus convidados.",
    color: "#F5A623",
  },
  {
    icon: Armchair,
    title: "Terraço",
    description: "Área de descanso ao ar livre com vista privilegiada.",
    color: "#3B82F6",
  },
  {
    icon: TableProperties,
    title: "Jogos e Lazer",
    description: "Tênis de mesa, sinuca e pebolim disponíveis para entretenimento.",
    color: "#F5A623",
  },
  {
    icon: UtensilsCrossed,
    title: "Churrasqueira",
    description: "Área de churrasco completa para confraternizações.",
    color: "#3B82F6",
  },
];

export default function EspacoMusicHallPage() {
  return (
    <SubpageLayout
      title="Espaço Music Hall"
      subtitle="Nosso Espaço de Eventos"
    >
      {/* Intro */}
      <BlurFade delay={0.1}>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            O <strong className="text-white">Espaço Music Hall</strong> está localizado em uma posição privilegiada,
            próximo à <strong className="text-[#F5A623]">BR 101</strong> e ao{" "}
            <strong className="text-[#F5A623]">Rio Tubarão</strong>. Um espaço versátil, com infraestrutura completa
            para eventos corporativos, confraternizações, festas e reuniões.
          </p>
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3">
            <MapPin size={18} className="text-[#F5A623]" />
            <span className="text-slate-300 text-sm">Próximo à BR 101 — Tubarão/SC</span>
          </div>
        </div>
      </BlurFade>

      {/* Amenities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {amenities.map((amenity, index) => (
          <BlurFade key={amenity.title} delay={0.1 + index * 0.08}>
            <motion.div
              whileHover={{ y: -5 }}
              className="glass rounded-xl p-6 hover:border-[#F5A623]/30 transition-all h-full"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${amenity.color}15` }}
              >
                <amenity.icon size={24} style={{ color: amenity.color }} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{amenity.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{amenity.description}</p>
            </motion.div>
          </BlurFade>
        ))}
      </div>

      {/* Notice */}
      <BlurFade delay={0.3}>
        <div className="glass rounded-xl p-8 max-w-3xl mx-auto border-[#F5A623]/20">
          <div className="flex items-start gap-4">
            <Ban size={24} className="text-[#F5A623] shrink-0 mt-1" />
            <div>
              <h3 className="text-white font-bold text-lg mb-2">Observação Importante</h3>
              <p className="text-slate-400 leading-relaxed">
                O Espaço Music Hall <strong className="text-white">não realiza eventos do tipo boate/balada</strong>.
                Nosso espaço é voltado para eventos corporativos, confraternizações, festas familiares,
                reuniões e celebrações com horário definido.
              </p>
            </div>
          </div>
        </div>
      </BlurFade>
    </SubpageLayout>
  );
}
