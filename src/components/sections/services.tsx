"use client";

import { motion } from "framer-motion";
import { BlurFade, MagicCard } from "@/components/magicui";
import { Music, Lightbulb, Monitor, Tent, Headphones, Zap } from "lucide-react";

const services = [
  {
    icon: Music,
    title: "Sonorização Profissional",
    description: "Sistemas de áudio de alta fidelidade com equipamentos de referência mundial. Estúdio próprio com mais de 50.000 trilhas e efeitos sonoros.",
    features: [
      "Microfones Shure Beta UHF (sem fio, com fio, auricular)",
      "Microfone Neumann profissional",
      "Mesas Yamaha (12/4 Phantom e Digital 01v)",
      "Potências Attack EX 6200 e 3200",
      "Caixas amplificadas 350W",
      "Estúdio de áudio para campanhas publicitárias",
    ],
    color: "#F5A623",
  },
  {
    icon: Lightbulb,
    title: "Iluminação Profissional",
    description: "Luz cênica e artística que transforma qualquer ambiente em um cenário espetacular.",
    features: [
      "Moving heads LED",
      "Canhões de luz com mesa Dimmer 24 canais",
      "Raio laser 3 cores",
      "Sky Paper CO2 e Sky Walker",
      "Máquinas de fumaça comum e rasteira",
      "Strobo, luz negra e ribalta LED",
    ],
    color: "#3B82F6",
  },
  {
    icon: Monitor,
    title: "Telões, Vikuiti e Projeção",
    description: "Projeção de alta definição com telas de até 180\". Tela Vikuiti equivalente a uma TV de 120\" com qualidade superior mesmo com claridade.",
    features: [
      "Tela Vikuiti 3m (projeção frontal e traseira)",
      "TV's LED 55\" e 75\" em torre P-30",
      "Projetor 2.600 lúmens com HDMI",
      "Vídeo Wall Full HD",
      "Split HDMI para imagens simultâneas",
      "Sinal wireless para salões extensos",
    ],
    color: "#F5A623",
  },
  {
    icon: Tent,
    title: "Estruturas e Palcos",
    description: "Palcos praticáveis modulares (2x1m cada) com altura ajustável de 0,50 a 0,80m. Atende norma de segurança.",
    features: [
      "Palcos praticáveis modulares",
      "Treliça Box Truss Alumínio P-30",
      "Biombos acústicos (redução de 30 a 50% em dB)",
      "Divisórias móveis",
      "Acabamento perfeito sem necessidade de carpete",
    ],
    color: "#3B82F6",
  },
  {
    icon: Headphones,
    title: "DJ MAQ MIX e Entretenimento",
    description: "DJ MAQ MIX: equipe especializada em eventos sociais, casamentos, aniversários, corporativos e gospel. Equipamentos Numark.",
    features: [
      "DJ profissional para todos os estilos",
      "Videokê / Karaokê",
      "Violão Yamaha APX 500",
      "Cubos para baixo e guitarra",
      "Lives e transmissões ao vivo",
      "Adaptação ao tema de cada evento",
    ],
    color: "#F5A623",
  },
  {
    icon: Zap,
    title: "Serviços Especiais",
    description: "Gerador de energia com inversores de 300W a 2.000W (pico 4.000W). Plantão técnico 24h com 2 furgões de apoio e reboque de 2.000kg.",
    features: [
      "Gerador de energia (incluso em contratos fechados)",
      "Climatizadores de ar",
      "Plantão técnico 24h com rádio comunicadores",
      "Transmissão FM 25W para grandes áreas",
      "2 furgões de apoio + reboque 2.000kg",
      "NFS-e emitida e boleto bancário",
    ],
    color: "#3B82F6",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F5A623]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3B82F6]/50 to-transparent" />

      <div className="container-custom">
        {/* Section Header */}
        <BlurFade delay={0.1}>
          <div className="text-center mb-16">
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Nossos Serviços
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Soluções completas para seu evento
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Oferecemos equipamentos de alta qualidade e profissionais experientes
              para garantir o sucesso do seu evento.
            </p>
          </div>
        </BlurFade>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <BlurFade key={service.title} delay={0.1 + index * 0.1}>
              <MagicCard
                gradientColor={service.color}
                gradientFrom={service.color}
                gradientTo={service.color === "#F5A623" ? "#3B82F6" : "#F5A623"}
                className="h-full rounded-xl border border-white/10"
              >
                <div className="p-6 h-full flex flex-col">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 rounded-xl glass flex items-center justify-center mb-5"
                    style={{ borderColor: `${service.color}30` }}
                  >
                    <service.icon size={28} style={{ color: service.color }} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm mb-5">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mt-auto">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-slate-300"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: service.color }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
