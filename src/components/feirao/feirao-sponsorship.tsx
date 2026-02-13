"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFade, ShimmerButton, NumberTicker, ShineBorder } from "@/components/magicui";
import { Share2, Volume2, Youtube, Radio, Tv, CreditCard, Shield, CalendarCheck, MessageCircle } from "lucide-react";

const benefits = [
  { icon: Share2, value: 100, label: "compartilhamentos nas mídias sociais", color: "#F5A623" },
  { icon: Volume2, value: 50, label: "inserções (citações) no carro de som", color: "#3B82F6" },
  { icon: Youtube, value: 15, label: "inserções ao vivo no YouTube", color: "#F5A623" },
  { icon: Radio, value: 10, label: "inserções no sistema de som ao vivo", color: "#3B82F6" },
  { icon: Tv, value: 1, label: "inserção patrocinada (Net) mensal", color: "#F5A623" },
];

const notes = [
  { icon: CreditCard, text: "Cobrança via boleto bancário, na data mensal de sua preferência." },
  { icon: Shield, text: "Local do Feirão com anuência dos órgãos competentes." },
  { icon: CalendarCheck, text: "Em datas sem evento (intempéries), as inserções serão mantidas. Em dezembro, inserções remanejadas para demais ações programadas." },
];

export function FeiraoSponsorship() {
  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F5A623]/50 to-transparent" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#F5A623]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-[150px]" />

      <div className="container-custom relative z-10">
        <BlurFade delay={0.1}>
          <div className="text-center mb-16">
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Invista no Feirão
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Proposta de Patrocínio
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Exclusivo Feirão Livre no Sul de SC! Aproveite esta oportunidade única de visibilidade para sua marca.
            </p>
          </div>
        </BlurFade>

        {/* Pricing Card */}
        <BlurFade delay={0.2}>
          <div className="max-w-lg mx-auto mb-16">
            <div className="relative overflow-hidden rounded-2xl bg-[#0B1120] p-8 sm:p-10 text-center">
              <ShineBorder shineColor={["#F5A623", "#3B82F6"]} borderWidth={2} />
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#F5A623]/10 text-[#F5A623] text-sm font-semibold mb-6">
                  Apenas 7 cotas disponíveis
                </span>
                <div className="mb-2">
                  <span className="text-slate-400 text-lg">R$</span>
                  <span className="text-5xl sm:text-6xl font-bold text-gradient mx-1">350</span>
                  <span className="text-slate-400 text-lg">,00/mês</span>
                </div>
                <p className="text-slate-400 mb-2">por cota</p>
                <p className="text-slate-300 text-sm">
                  Vigência: <strong className="text-white">07/03/2026 a 20/12/2026</strong>
                </p>
                <p className="text-slate-500 text-xs mt-1">Informe seu CNPJ e aproveite!</p>
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Benefits - Share por evento */}
        <BlurFade delay={0.3}>
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Share por evento</h3>
            <p className="text-slate-400 text-sm">O que cada cota inclui por edição do Feirão:</p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-16">
          {benefits.map((benefit, index) => (
            <BlurFade key={benefit.label} delay={0.3 + index * 0.08}>
              <motion.div
                whileHover={{ y: -5 }}
                className="glass rounded-xl p-5 text-center hover:border-[#F5A623]/30 transition-all h-full"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: `${benefit.color}15` }}
                >
                  <benefit.icon size={22} style={{ color: benefit.color }} />
                </div>
                <div className="text-3xl font-bold text-gradient mb-1">
                  <NumberTicker value={benefit.value} className="text-inherit" />
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{benefit.label}</p>
              </motion.div>
            </BlurFade>
          ))}
        </div>

        {/* Notes */}
        <BlurFade delay={0.5}>
          <div className="glass rounded-xl p-6 sm:p-8 max-w-3xl mx-auto mb-12">
            <h4 className="text-white font-semibold mb-4">Informações importantes</h4>
            <div className="space-y-3">
              {notes.map((note) => (
                <div key={note.text} className="flex items-start gap-3 text-sm text-slate-300">
                  <note.icon size={18} className="text-[#F5A623] shrink-0 mt-0.5" />
                  <span>{note.text}</span>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* CTA */}
        <BlurFade delay={0.6}>
          <div className="text-center">
            <Link
              href="https://wa.me/5548996776089?text=Olá! Tenho interesse em patrocinar o Feirão Free Veículos. Gostaria de mais informações sobre as cotas."
              target="_blank"
            >
              <ShimmerButton
                shimmerColor="#25d366"
                background="linear-gradient(135deg, #25d366 0%, #128C7E 100%)"
                className="px-10 py-4 text-lg font-semibold"
              >
                <MessageCircle className="mr-2" size={20} />
                Fechar Patrocínio
              </ShimmerButton>
            </Link>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
