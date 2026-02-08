"use client";

import { motion } from "framer-motion";
import { SubpageLayout } from "@/components/shared/subpage-layout";
import { BlurFade } from "@/components/magicui";
import { Zap, MapPin, Clock, Car, Plug, Smartphone, Gauge } from "lucide-react";

const specs = [
  { icon: Zap, label: "Potência", value: "60KW Fast Charge", color: "#F5A623" },
  { icon: Plug, label: "Conectores", value: "GBT + CCS2", color: "#3B82F6" },
  { icon: Clock, label: "Tempo de Carga", value: "30 min a 1 hora", color: "#F5A623" },
  { icon: Gauge, label: "Funcionamento", value: "24 horas", color: "#3B82F6" },
];

const compatible = [
  "BYD (todos os modelos)",
  "JAC (todos os modelos)",
  "Veículos com conector GBT",
  "Veículos com conector CCS2",
];

export default function EletropostoPage() {
  return (
    <SubpageLayout
      title="Eletroposto Revoredo"
      subtitle="Recarga de Veículos Elétricos"
    >
      {/* Intro */}
      <BlurFade delay={0.1}>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            Em parceria com a <strong className="text-white">On Charge</strong>, oferecemos um
            eletroposto de <strong className="text-[#F5A623]">recarga rápida 24 horas</strong> para
            veículos elétricos. Localizado estrategicamente na Av. Getúlio Vargas, atende carros,
            vans e veículos de grande porte.
          </p>
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3">
            <MapPin size={18} className="text-[#F5A623]" />
            <span className="text-slate-300 text-sm">
              Av. Getúlio Vargas, 4505 — Revoredo, Tubarão/SC
            </span>
          </div>
        </div>
      </BlurFade>

      {/* Specs Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
        {specs.map((spec, index) => (
          <BlurFade key={spec.label} delay={0.15 + index * 0.05}>
            <motion.div
              whileHover={{ y: -3 }}
              className="glass rounded-xl p-5 text-center hover:border-[#F5A623]/30 transition-all"
            >
              <spec.icon size={28} style={{ color: spec.color }} className="mx-auto mb-3" />
              <p className="text-slate-400 text-xs mb-1">{spec.label}</p>
              <p className="text-white font-bold">{spec.value}</p>
            </motion.div>
          </BlurFade>
        ))}
      </div>

      {/* Infrastructure + Compatibility */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
        <BlurFade delay={0.25}>
          <div className="glass rounded-xl p-8 h-full">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Car size={22} className="text-[#F5A623]" />
              Infraestrutura
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-300 text-sm">
                <span className="w-2 h-2 rounded-full bg-[#F5A623] shrink-0" />
                2 boxes para carros e vans
              </li>
              <li className="flex items-center gap-3 text-slate-300 text-sm">
                <span className="w-2 h-2 rounded-full bg-[#3B82F6] shrink-0" />
                Espaço para veículos de grande porte (caminhões)
              </li>
              <li className="flex items-center gap-3 text-slate-300 text-sm">
                <span className="w-2 h-2 rounded-full bg-[#F5A623] shrink-0" />
                Carregamento rápido de 60KW
              </li>
              <li className="flex items-center gap-3 text-slate-300 text-sm">
                <span className="w-2 h-2 rounded-full bg-[#3B82F6] shrink-0" />
                Conectores GBT e CCS2 disponíveis
              </li>
            </ul>
          </div>
        </BlurFade>

        <BlurFade delay={0.3}>
          <div className="glass rounded-xl p-8 h-full">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Plug size={22} className="text-[#3B82F6]" />
              Veículos Compatíveis
            </h2>
            <ul className="space-y-3">
              {compatible.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#F5A623] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </BlurFade>
      </div>

      {/* App */}
      <BlurFade delay={0.35}>
        <div className="glass rounded-xl p-8 max-w-2xl mx-auto text-center border-[#F5A623]/20">
          <Smartphone size={32} className="text-[#F5A623] mx-auto mb-4" />
          <h3 className="text-white font-bold text-lg mb-2">Aplicativo On Charge</h3>
          <p className="text-slate-400 text-sm">
            Utilize o aplicativo <strong className="text-white">On Charge</strong> para iniciar
            a recarga, monitorar o progresso e efetuar o pagamento de forma prática e segura.
          </p>
        </div>
      </BlurFade>
    </SubpageLayout>
  );
}
