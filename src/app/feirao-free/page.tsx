"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SubpageLayout } from "@/components/shared/subpage-layout";
import { BlurFade } from "@/components/magicui";
import {
  MapPin,
  Clock,
  Calendar,
  Youtube,
  Music,
  Car,
  Mic2,
  Wifi,
  Video,
  Megaphone,
  BadgeDollarSign,
  CheckCircle2,
} from "lucide-react";

const oferecemos = [
  {
    icon: Music,
    title: "Sonorização Profissional",
    description: "Sistema de som completo para o feirão e apresentações ao vivo.",
    color: "#F5A623",
  },
  {
    icon: Car,
    title: "Consulta FIPE",
    description: "Consulta da tabela FIPE para avaliação de veículos no local.",
    color: "#3B82F6",
  },
  {
    icon: Mic2,
    title: "Apresentações Artísticas",
    description: "Artistas e shows ao vivo durante o evento.",
    color: "#F5A623",
  },
  {
    icon: Wifi,
    title: "WiFi Liberado",
    description: "Internet WiFi gratuita para todos os participantes.",
    color: "#3B82F6",
  },
  {
    icon: Video,
    title: "Live no YouTube",
    description: "Transmissão ao vivo pelo canal do YouTube para alcance máximo.",
    color: "#F5A623",
  },
  {
    icon: Megaphone,
    title: "Locução Profissional",
    description: "Locutor profissional para divulgação dos veículos e anúncios.",
    color: "#3B82F6",
  },
];

const cotasInclusos = [
  "Inserções de shares durante a transmissão ao vivo",
  "Divulgação da marca no local do evento",
  "Menções do locutor durante o feirão",
  "Exposição nas redes sociais e YouTube",
  "Presença na arte de divulgação semanal",
  "Alcance regional com público qualificado",
];

export default function FeiraoFreePage() {
  return (
    <SubpageLayout
      title="Feirão FREE"
      subtitle="Feirão Livre aos Sábados e Domingos"
    >
      {/* Banner */}
      <BlurFade delay={0.1}>
        <div className="relative w-full max-w-4xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
          <Image
            src="/images/feirao-free-banner.jpg"
            alt="Feirão FREE - Feirão Livre aos Sábados e Domingos"
            width={1200}
            height={675}
            className="w-full h-auto"
            priority
          />
        </div>
      </BlurFade>

      {/* Sobre o Feirão */}
      <BlurFade delay={0.15}>
        <div className="glass rounded-xl p-8 max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Sobre o Feirão
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#F5A623]/15 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-[#F5A623]" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Local</h4>
                <p className="text-slate-400 text-sm">
                  Atrás do Top Brasil, Beira Rio — Tubarão/SC
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/15 flex items-center justify-center shrink-0">
                <Clock size={20} className="text-[#3B82F6]" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Horário</h4>
                <p className="text-slate-400 text-sm">
                  Sábados e Domingos às 9h
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#F5A623]/15 flex items-center justify-center shrink-0">
                <Calendar size={20} className="text-[#F5A623]" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Início</h4>
                <p className="text-slate-400 text-sm">
                  07 de Março de 2026
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/15 flex items-center justify-center shrink-0">
                <Youtube size={20} className="text-[#3B82F6]" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Transmissão</h4>
                <p className="text-slate-400 text-sm">
                  Ao vivo pelo canal do YouTube
                </p>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* O que oferecemos */}
      <BlurFade delay={0.2}>
        <div className="text-center mb-8">
          <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase">
            Estrutura Completa
          </span>
          <h2 className="text-2xl font-bold text-white mt-2">
            O que Oferecemos
          </h2>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {oferecemos.map((item, index) => (
          <BlurFade key={item.title} delay={0.2 + index * 0.08}>
            <motion.div
              whileHover={{ y: -5 }}
              className="glass rounded-xl p-6 hover:border-[#F5A623]/30 transition-all h-full"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${item.color}15` }}
              >
                <item.icon size={24} style={{ color: item.color }} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          </BlurFade>
        ))}
      </div>

      {/* Proposta de Patrocínio */}
      <BlurFade delay={0.3}>
        <div className="glass rounded-xl p-8 max-w-3xl mx-auto mb-16">
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-xl bg-[#F5A623]/15 flex items-center justify-center mx-auto mb-4">
              <BadgeDollarSign size={28} className="text-[#F5A623]" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              Proposta de Patrocínio
            </h2>
            <p className="text-slate-400 mt-2">
              Seja um dos patrocinadores do Feirão FREE
            </p>
          </div>

          <div className="glass rounded-xl p-6 mb-8 border border-[#F5A623]/20">
            <div className="text-center mb-4">
              <span className="text-3xl font-bold text-[#F5A623]">
                R$ 350
              </span>
              <span className="text-slate-400">/mês</span>
            </div>
            <div className="text-center mb-4">
              <span className="text-sm text-slate-300 font-medium">
                7 cotas disponíveis
              </span>
              <span className="text-slate-500 mx-2">•</span>
              <span className="text-sm text-slate-300 font-medium">
                Março/2026 a Dezembro/2026
              </span>
            </div>
            <p className="text-slate-400 text-sm text-center">
              Período: 07/03/2026 a 20/12/2026
            </p>
          </div>

          <h3 className="text-lg font-semibold text-white mb-4">
            O que está incluso:
          </h3>
          <ul className="space-y-3">
            {cotasInclusos.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2
                  size={18}
                  className="text-[#F5A623] shrink-0 mt-0.5"
                />
                <span className="text-slate-300 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </BlurFade>

      {/* CTA WhatsApp */}
      <BlurFade delay={0.35}>
        <div className="text-center">
          <Link
            href="https://wa.me/5548996776089?text=Olá! Tenho interesse no patrocínio do Feirão FREE."
            target="_blank"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25d366] hover:bg-[#20bd5a] text-white font-bold rounded-xl shadow-lg shadow-[#25d366]/30 hover:shadow-[#25d366]/50 transition-all text-lg"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Quero Patrocinar
            </motion.button>
          </Link>
          <p className="text-slate-500 text-sm mt-4">
            Entre em contato pelo WhatsApp para garantir sua cota
          </p>
        </div>
      </BlurFade>
    </SubpageLayout>
  );
}
