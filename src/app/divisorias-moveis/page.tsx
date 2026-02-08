"use client";

import { motion } from "framer-motion";
import { SubpageLayout } from "@/components/shared/subpage-layout";
import { BlurFade } from "@/components/magicui";
import { PanelLeftClose, Lightbulb, SlidersHorizontal, Columns3, Theater, Building2 } from "lucide-react";

const features = [
  {
    icon: PanelLeftClose,
    title: "Articuladas em Sanfona",
    description: "Sistema de sanfona com rodízios que permite abertura e fechamento rápido, adaptando-se a qualquer layout.",
    color: "#F5A623",
  },
  {
    icon: SlidersHorizontal,
    title: "Isolamento Termoacústico",
    description: "Material termoacústico que garante isolamento sonoro entre ambientes, ideal para eventos simultâneos.",
    color: "#3B82F6",
  },
  {
    icon: Lightbulb,
    title: "Iluminação Teatral Integrada",
    description: "Sistema de iluminação cênica integrado às divisórias, com controle por mesa dimmer.",
    color: "#F5A623",
  },
  {
    icon: Columns3,
    title: "Contorno de Colunas",
    description: "Design especial que permite contornar colunas e pilares, adaptando-se à arquitetura do local.",
    color: "#3B82F6",
  },
];

const applications = [
  "Camarins para artistas e palestrantes",
  "Fundos de palco e cenários",
  "Trocadores / Provadores",
  "Divisão de ambientes em salões",
  "Feiras e exposições",
  "Eventos corporativos e marketing",
  "Hotéis e centros de convenções",
  "Escritórios e salas de reunião",
];

export default function DivisoriasPage() {
  return (
    <SubpageLayout
      title="Divisórias Móveis"
      subtitle="Divisão Inteligente de Ambientes"
    >
      {/* Intro */}
      <BlurFade delay={0.1}>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-slate-300 text-lg leading-relaxed">
            Nossas <strong className="text-white">divisórias móveis articuladas</strong> em sistema sanfona
            com rodízios oferecem praticidade e versatilidade para dividir ambientes. Com material{" "}
            <strong className="text-[#F5A623]">termoacústico</strong> e{" "}
            <strong className="text-[#F5A623]">iluminação teatral integrada</strong> com dimmer,
            são a solução ideal para eventos de qualquer porte.
          </p>
        </div>
      </BlurFade>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        {features.map((feature, index) => (
          <BlurFade key={feature.title} delay={0.1 + index * 0.08}>
            <motion.div
              whileHover={{ y: -5 }}
              className="glass rounded-xl p-6 hover:border-[#F5A623]/30 transition-all h-full"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${feature.color}15` }}
              >
                <feature.icon size={24} style={{ color: feature.color }} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          </BlurFade>
        ))}
      </div>

      {/* Applications */}
      <BlurFade delay={0.3}>
        <div className="glass rounded-xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-2">
            <Theater size={24} className="text-[#F5A623]" />
            Aplicações
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {applications.map((app) => (
              <div key={app} className="flex items-center gap-3">
                <Building2 size={16} className="text-[#F5A623] shrink-0" />
                <span className="text-slate-300 text-sm">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </BlurFade>
    </SubpageLayout>
  );
}
