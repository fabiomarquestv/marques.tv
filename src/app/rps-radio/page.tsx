"use client";

import { motion } from "framer-motion";
import { SubpageLayout } from "@/components/shared/subpage-layout";
import { BlurFade } from "@/components/magicui";
import { Radio, Antenna, Shield, Truck, CloudSun, AlertTriangle } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Orientações de Trânsito",
    description: "Informações em tempo real sobre condições de tráfego nas rodovias da região.",
    color: "#F5A623",
  },
  {
    icon: CloudSun,
    title: "Previsão do Tempo",
    description: "Boletins meteorológicos atualizados para planejamento de viagens.",
    color: "#3B82F6",
  },
  {
    icon: AlertTriangle,
    title: "Emergências",
    description: "Alertas e comunicados de emergência para a comunidade e motoristas.",
    color: "#F5A623",
  },
  {
    icon: Shield,
    title: "Lei Paulo Gustavo",
    description: "Reconhecimento pela atuação comunitária através da Lei Paulo Gustavo de incentivo cultural.",
    color: "#3B82F6",
  },
];

export default function RpsRadioPage() {
  return (
    <SubpageLayout
      title="RPS — Rádio PX Sul"
      subtitle="Comunicação Comunitária"
    >
      {/* Intro */}
      <BlurFade delay={0.1}>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            A <strong className="text-white">RPS (Rádio PX Sul)</strong> é nossa iniciativa de rádio comunitário,
            operando na faixa de <strong className="text-[#F5A623]">11 metros</strong> com o indicativo{" "}
            <strong className="text-[#F5A623]">ANATEL PX5R2860</strong> na frequência de 27.015 MHz.
          </p>
          <p className="text-slate-300 text-lg leading-relaxed">
            Através do programa <strong className="text-white">&quot;Boletim QAP&quot;</strong>, oferecemos informações
            essenciais para caminhoneiros e motoristas em trânsito na região.
          </p>
        </div>
      </BlurFade>

      {/* Technical Specs */}
      <BlurFade delay={0.15}>
        <div className="glass rounded-xl p-8 max-w-2xl mx-auto mb-16">
          <h2 className="text-xl font-bold text-white mb-6 text-center flex items-center justify-center gap-2">
            <Antenna size={24} className="text-[#F5A623]" />
            Dados Técnicos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Radio size={18} className="text-[#F5A623] shrink-0" />
              <div>
                <p className="text-slate-400 text-xs">Faixa</p>
                <p className="text-white font-semibold">11 metros (PX)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Radio size={18} className="text-[#3B82F6] shrink-0" />
              <div>
                <p className="text-slate-400 text-xs">Indicativo ANATEL</p>
                <p className="text-white font-semibold">PX5R2860</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Radio size={18} className="text-[#F5A623] shrink-0" />
              <div>
                <p className="text-slate-400 text-xs">Frequência</p>
                <p className="text-white font-semibold">27.015 MHz</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Radio size={18} className="text-[#3B82F6] shrink-0" />
              <div>
                <p className="text-slate-400 text-xs">Programa</p>
                <p className="text-white font-semibold">Boletim QAP</p>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {services.map((service, index) => (
          <BlurFade key={service.title} delay={0.2 + index * 0.08}>
            <motion.div
              whileHover={{ y: -5 }}
              className="glass rounded-xl p-6 hover:border-[#F5A623]/30 transition-all h-full"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${service.color}15` }}
              >
                <service.icon size={24} style={{ color: service.color }} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          </BlurFade>
        ))}
      </div>
    </SubpageLayout>
  );
}
