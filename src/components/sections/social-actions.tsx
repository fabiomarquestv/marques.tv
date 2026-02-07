"use client";

import { motion } from "framer-motion";
import { BlurFade } from "@/components/magicui";
import { Heart, Leaf, Music2, Users, Droplets, Accessibility } from "lucide-react";

const actions = [
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description: "Parceria com Eletroposto Revoredo para recarga de veículos elétricos. Mais de 300 mil km transitados com GNV. Separação de lixo reciclável em nosso estabelecimento.",
    color: "#22c55e",
  },
  {
    icon: Accessibility,
    title: "Infraestrutura Comunitária",
    description: "Construção de calçada com acessibilidade. Restauração da Academia ao ar livre na Av. Getúlio Vargas, Bairro Revoredo.",
    color: "#F5A623",
  },
  {
    icon: Music2,
    title: "Incentivo Cultural",
    description: "Show com PCD visual Elias Moraes. Participação na Lei Aldir Blanc. Live gratuita do Desfile Cívico.",
    color: "#3B82F6",
  },
  {
    icon: Heart,
    title: "Doações",
    description: "Doação de 8 caixas de som para igrejas católicas e evangélicas. Caixa amplificada para Secretaria de Educação da PMT.",
    color: "#ef4444",
  },
  {
    icon: Users,
    title: "Voluntariado",
    description: "Boletim informativo na RPS (Rádio PX Sul) com orientações de trânsito, previsão do tempo e emergências. Apoio ao esporte local.",
    color: "#FBBF24",
  },
  {
    icon: Droplets,
    title: "Campanhas de Saúde",
    description: "Campanha \"Paixão corre nas Veias\" — doações de sangue para o HEMOSC/SC.",
    color: "#ec4899",
  },
];

export function SocialActions() {
  return (
    <section id="acoes-sociais" className="py-24 bg-[#0F172A] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F5A623]/50 to-transparent" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <BlurFade delay={0.1}>
          <div className="text-center mb-16">
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Responsabilidade Social
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Ações Sociais
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Acreditamos em retribuir para a comunidade. Conheça nossas iniciativas
              sociais, ambientais e culturais.
            </p>
          </div>
        </BlurFade>

        {/* Actions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {actions.map((action, index) => (
            <BlurFade key={action.title} delay={0.1 + index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="glass rounded-xl p-6 hover:border-[#F5A623]/30 transition-all h-full"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${action.color}15` }}
                >
                  <action.icon size={24} style={{ color: action.color }} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{action.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{action.description}</p>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
