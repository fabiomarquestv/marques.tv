"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BlurFade, ShineBorder } from "@/components/magicui";
import { CheckCircle, FileText, Clock, Zap, GraduationCap, Award } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Empresa Consolidada",
    description: "CNPJ ativo desde 1994",
  },
  {
    icon: FileText,
    title: "Nota Fiscal",
    description: "NFS-e emitida + boleto bancário",
  },
  {
    icon: Clock,
    title: "Plantão 24h",
    description: "Suporte técnico com 2 furgões de apoio",
  },
  {
    icon: Zap,
    title: "Gerador",
    description: "Inversores de 300W a 2.000W",
  },
];

const qualifications = [
  { icon: GraduationCap, text: "Administração - UNISUL" },
  { icon: GraduationCap, text: "Oratória - COFRL" },
  { icon: Award, text: "Instituto Pró Música" },
  { icon: Award, text: "Empreendedor em Prestação de Serviços" },
];

export function About() {
  return (
    <section id="sobre" className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#F5A623]/10 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-[150px] -translate-y-1/2" />

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
                <div className="absolute -inset-4 rounded-2xl border-2 border-[#F5A623]/30 -rotate-3" />

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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/50 to-transparent" />
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-6 -right-6 z-10"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-[#0F172A] px-6 py-4">
                    <ShineBorder shineColor={["#F5A623", "#3B82F6"]} borderWidth={2} />
                    <div className="text-center relative z-10">
                      <span className="text-3xl font-bold text-gradient">30+</span>
                      <p className="text-slate-400 text-sm">Anos de experiência</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </BlurFade>

          {/* Content */}
          <BlurFade delay={0.2}>
            <div>
              <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase mb-4 block">
                Quem Somos
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Há mais de{" "}
                <span className="text-gradient">30 anos</span>{" "}
                realizando eventos com sucesso!
              </h2>

              <p className="text-slate-400 mb-4">
                Empresa pessoa jurídica de direito privado, atuando no segmento de locações e prestação
                de serviços para eventos há mais de 30 anos na Região Sul de SC e Grande Florianópolis.
                Com CNPJ ativo desde 1994, oferecemos serviços com NFS-e (Nota Fiscal Eletrônica)
                e facilitamos cobrança via boleto bancário.
              </p>

              <p className="text-slate-400 mb-4">
                <strong className="text-white">Titular: Fábio Marques</strong> — profissional com formação
                em Administração (UNISUL), Oratória (COFRL) e Instituto Pró Música. Nosso padrão de
                qualidade e seriedade é marca registrada.
              </p>

              <p className="text-slate-400 mb-8">
                Matriz na Av. Pres. Getúlio Vargas, atendendo Criciúma, Tubarão, Florianópolis,
                São José e todo o litoral de Santa Catarina.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass rounded-xl p-4 hover:border-[#F5A623]/30 transition-colors"
                  >
                    <feature.icon className="text-[#F5A623] mb-2" size={24} />
                    <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                    <p className="text-slate-400 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Qualifications */}
              <div className="glass rounded-xl p-5">
                <h4 className="text-white font-semibold mb-3">Formação e Qualificações</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {qualifications.map((q, index) => (
                    <motion.div
                      key={q.text}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 text-sm text-slate-300"
                    >
                      <q.icon size={16} className="text-[#F5A623] shrink-0" />
                      {q.text}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
