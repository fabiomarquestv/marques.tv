"use client";

import { motion } from "framer-motion";
import { SubpageLayout } from "@/components/shared/subpage-layout";
import { BlurFade } from "@/components/magicui";
import { Mic2, Tv, Music2, Star, FileSpreadsheet, Plus } from "lucide-react";

const kits = [
  {
    name: "Kit 1",
    description: "TV 50\" + Caixa de som 100W",
    ideal: "Eventos pequenos e íntimos",
    color: "#F5A623",
  },
  {
    name: "Kit 2",
    description: "TV Samsung 4K + Caixa Attack VRF 1550A (300W)",
    ideal: "Festas e confraternizações",
    color: "#3B82F6",
  },
  {
    name: "Kit 3",
    description: "TV 75\" + Sistema de som completo",
    ideal: "Eventos corporativos e grandes festas",
    color: "#F5A623",
  },
  {
    name: "Kit 4",
    description: "Kit 2 + Datashow + Tela de Projeção 120\"",
    ideal: "Grandes espaços e auditórios",
    color: "#3B82F6",
  },
];

const extras = [
  {
    name: "Kit Iluminação",
    description: "Iluminação cênica LED para o ambiente do karaokê",
  },
  {
    name: "Técnico 4h",
    description: "Técnico especializado para operar o sistema durante 4 horas",
  },
  {
    name: "Locutor / Animador",
    description: "Profissional para animar e apresentar a noite de karaokê",
  },
];

const features = [
  { icon: Mic2, text: "Sistema I-Videokê profissional", color: "#F5A623" },
  { icon: Music2, text: "Gravação MP3 das performances", color: "#3B82F6" },
  { icon: Star, text: "Sistema de pontuação para competições", color: "#F5A623" },
  { icon: FileSpreadsheet, text: "Lista de repertório em Excel e PDF", color: "#3B82F6" },
  { icon: Tv, text: "Equipamentos Samsung 4K de última geração", color: "#F5A623" },
  { icon: Plus, text: "3 kits extras opcionais", color: "#3B82F6" },
];

export default function VideokePage() {
  return (
    <SubpageLayout
      title="I-Videokê Profissional"
      subtitle="Karaokê e Entretenimento"
    >
      {/* Intro */}
      <BlurFade delay={0.1}>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-slate-300 text-lg leading-relaxed">
            Sistema <strong className="text-white">I-Videokê</strong> profissional com equipamentos de última geração.
            Oferecemos <strong className="text-[#F5A623]">4 kits principais</strong> e{" "}
            <strong className="text-[#F5A623]">3 kits extras</strong>, adaptados ao tamanho e estilo do seu evento.
            Gravação em MP3, sistema de pontuação e lista de repertório completa.
          </p>
        </div>
      </BlurFade>

      {/* Features */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-16">
        {features.map((feature, index) => (
          <BlurFade key={feature.text} delay={0.1 + index * 0.05}>
            <div className="glass rounded-xl p-4 flex items-center gap-3">
              <feature.icon size={20} style={{ color: feature.color }} className="shrink-0" />
              <span className="text-slate-300 text-sm">{feature.text}</span>
            </div>
          </BlurFade>
        ))}
      </div>

      {/* Kits Grid */}
      <BlurFade delay={0.2}>
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Kits Principais</h2>
      </BlurFade>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        {kits.map((kit, index) => (
          <BlurFade key={kit.name} delay={0.2 + index * 0.08}>
            <motion.div
              whileHover={{ y: -5 }}
              className="glass rounded-xl p-6 hover:border-[#F5A623]/30 transition-all h-full"
            >
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
                style={{ backgroundColor: `${kit.color}20`, color: kit.color }}
              >
                {kit.name}
              </div>
              <p className="text-white font-semibold mb-2">{kit.description}</p>
              <p className="text-slate-400 text-sm">Ideal para: {kit.ideal}</p>
            </motion.div>
          </BlurFade>
        ))}
      </div>

      {/* Extras */}
      <BlurFade delay={0.3}>
        <div className="glass rounded-xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Kits Extras</h2>
          <div className="space-y-4">
            {extras.map((extra) => (
              <div key={extra.name} className="flex items-start gap-4">
                <Plus size={20} className="text-[#F5A623] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold">{extra.name}</h4>
                  <p className="text-slate-400 text-sm">{extra.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </BlurFade>
    </SubpageLayout>
  );
}
