"use client";

import { motion } from "framer-motion";
import { SubpageLayout } from "@/components/shared/subpage-layout";
import { BlurFade } from "@/components/magicui";
import { Wind, Thermometer, Droplets, Wrench, Truck, Sparkles } from "lucide-react";

const features = [
  {
    icon: Thermometer,
    title: "Resfriamento até -10°C",
    description: "Sistema que utiliza água e gelo para refrigeração, alcançando até 10 graus a menos que a temperatura ambiente.",
    color: "#3B82F6",
  },
  {
    icon: Droplets,
    title: "Sem Respingos de Água",
    description: "Diferente de outros climatizadores, nosso equipamento não joga água para fora, mantendo o ambiente seco e confortável.",
    color: "#F5A623",
  },
  {
    icon: Wind,
    title: "Display Digital",
    description: "Controle preciso da temperatura com display digital para monitoramento em tempo real.",
    color: "#3B82F6",
  },
  {
    icon: Wrench,
    title: "Visita Técnica Inclusa",
    description: "Realizamos visita técnica prévia para dimensionar o número ideal de climatizadores para seu espaço.",
    color: "#F5A623",
  },
  {
    icon: Truck,
    title: "Transporte e Instalação",
    description: "Transporte, instalação completa e retirada dos equipamentos inclusos no serviço.",
    color: "#3B82F6",
  },
  {
    icon: Sparkles,
    title: "Fragrância Aromática",
    description: "Opção de fragrância aromática para tornar o ambiente ainda mais agradável durante seu evento.",
    color: "#F5A623",
  },
];

export default function ClimatizadoresPage() {
  return (
    <SubpageLayout
      title="Climatizadores de Ar"
      subtitle="Conforto Térmico para Eventos"
    >
      {/* Intro */}
      <BlurFade delay={0.1}>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-slate-300 text-lg leading-relaxed">
            Nossos climatizadores utilizam um sistema avançado de <strong className="text-white">água e gelo</strong> para
            proporcionar resfriamento eficiente, alcançando até <strong className="text-[#F5A623]">10 graus a menos</strong> que
            a temperatura ambiente. Ideal para eventos ao ar livre, galpões, tendas e ambientes fechados.
          </p>
        </div>
      </BlurFade>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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

      {/* How it Works */}
      <BlurFade delay={0.3}>
        <div className="glass rounded-xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Como Funciona</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-[#F5A623]/20 text-[#F5A623] flex items-center justify-center font-bold shrink-0">1</span>
              <div>
                <h4 className="text-white font-semibold">Visita Técnica</h4>
                <p className="text-slate-400 text-sm">Avaliamos o local do evento para dimensionar a quantidade ideal de climatizadores.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-[#F5A623]/20 text-[#F5A623] flex items-center justify-center font-bold shrink-0">2</span>
              <div>
                <h4 className="text-white font-semibold">Instalação</h4>
                <p className="text-slate-400 text-sm">Transportamos e instalamos os equipamentos no dia do evento com equipe especializada.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-[#F5A623]/20 text-[#F5A623] flex items-center justify-center font-bold shrink-0">3</span>
              <div>
                <h4 className="text-white font-semibold">Operação</h4>
                <p className="text-slate-400 text-sm">Sistema opera com água + gelo, display digital para controle de temperatura, sem respingos.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-[#F5A623]/20 text-[#F5A623] flex items-center justify-center font-bold shrink-0">4</span>
              <div>
                <h4 className="text-white font-semibold">Limpeza e Retirada</h4>
                <p className="text-slate-400 text-sm">Após o evento, realizamos a limpeza e retirada de todos os equipamentos.</p>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>
    </SubpageLayout>
  );
}
