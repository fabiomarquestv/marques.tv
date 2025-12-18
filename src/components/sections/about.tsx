"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BlurFade, ShineBorder } from "@/components/magicui";
import { CheckCircle, FileText, Clock, Zap } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Empresa Consolidada",
    description: "CNPJ ativo desde 1994",
  },
  {
    icon: FileText,
    title: "Nota Fiscal",
    description: "NFS-e emitida",
  },
  {
    icon: Clock,
    title: "Plantão 24h",
    description: "Suporte técnico integral",
  },
  {
    icon: Zap,
    title: "Gerador",
    description: "Energia garantida",
  },
];

export function About() {
  return (
    <section id="sobre" className="py-24 bg-[#12121a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00d4aa]/10 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#7c3aed]/10 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <BlurFade delay={0.1}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
                {/* Decorative border */}
                <div className="absolute -inset-4 rounded-2xl border-2 border-[#00d4aa]/30 -rotate-3" />

                {/* Main image */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src="/images/a_MidiaMarques.jpg"
                    alt="Equipe Marques.TV"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/50 to-transparent" />
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-6 -right-6 z-10"
                >
                  <ShineBorder
                    borderRadius={16}
                    className="bg-[#12121a] px-6 py-4"
                  >
                    <div className="text-center">
                      <span className="text-3xl font-bold text-gradient">30+</span>
                      <p className="text-gray-400 text-sm">Anos de experiência</p>
                    </div>
                  </ShineBorder>
                </motion.div>
              </div>
            </motion.div>
          </BlurFade>

          {/* Content */}
          <BlurFade delay={0.2}>
            <div>
              <span className="text-[#00d4aa] text-sm font-semibold tracking-widest uppercase mb-4 block">
                Quem Somos
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Há mais de{" "}
                <span className="text-gradient">30 anos</span>{" "}
                realizando eventos com sucesso!
              </h2>

              <p className="text-gray-400 mb-6">
                Somos uma empresa especializada em suporte técnico para eventos corporativos,
                sociais e de órgãos públicos. Com CNPJ ativo desde 1994, oferecemos serviços
                com NFS-e (Nota Fiscal Eletrônica) e facilitamos cobrança via boleto bancário.
              </p>

              <p className="text-gray-400 mb-8">
                Nossa matriz está localizada na Av. Pres. Getúlio Vargas, atendendo toda a região
                de Criciúma, Tubarão, Florianópolis, São José e litoral de Santa Catarina.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass rounded-xl p-4 hover:border-[#00d4aa]/30 transition-colors"
                  >
                    <feature.icon className="text-[#00d4aa] mb-2" size={24} />
                    <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
