"use client";

import { motion } from "framer-motion";
import { BlurFade, MagicCard } from "@/components/magicui";
import { Music, Lightbulb, Monitor, Tent, Headphones, Zap } from "lucide-react";

const services = [
  {
    icon: Music,
    title: "Sonorização Profissional",
    description: "Sistemas de áudio de alta fidelidade para qualquer tipo de evento.",
    features: ["Caixas de som line array", "Mesas de som digitais", "Microfones sem fio", "Estúdio com Microfone Neumann"],
    color: "#00d4aa",
  },
  {
    icon: Lightbulb,
    title: "Iluminação Profissional",
    description: "Efeitos luminosos que transformam qualquer ambiente.",
    features: ["Moving heads", "Sky Walker / Sky Paper CO2", "Máquina de bolhas", "Efeito gelo seco"],
    color: "#7c3aed",
  },
  {
    icon: Monitor,
    title: "Telões e Projeção",
    description: "Tecnologia visual de ponta para apresentações impactantes.",
    features: ["Telões LED 4K", "TV's LED 50\" em treliça", "Vídeo Wall", "Tela Vikuiti / Datashow"],
    color: "#00d4aa",
  },
  {
    icon: Tent,
    title: "Estruturas e Palcos",
    description: "Montagem completa para shows e apresentações.",
    features: ["Palcos praticáveis", "Treliça Box Truss Alumínio", "Biombos acústicos", "Divisórias móveis"],
    color: "#7c3aed",
  },
  {
    icon: Headphones,
    title: "DJ e Entretenimento",
    description: "Animação profissional para festas e eventos.",
    features: ["DJ profissional", "Videokê / Karaokê", "Mestre de cerimônias", "Lives e transmissões"],
    color: "#00d4aa",
  },
  {
    icon: Zap,
    title: "Serviços Especiais",
    description: "Soluções extras para eventos perfeitos.",
    features: ["Gerador de energia", "Climatizadores de ar", "Plantão técnico 24h", "Locução profissional"],
    color: "#7c3aed",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-[#12121a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00d4aa]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7c3aed]/50 to-transparent" />

      <div className="container-custom">
        {/* Section Header */}
        <BlurFade delay={0.1}>
          <div className="text-center mb-16">
            <span className="text-[#00d4aa] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Nossos Serviços
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Soluções completas para seu evento
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
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
                className="h-full"
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
                  <p className="text-gray-400 text-sm mb-5">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mt-auto">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
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
