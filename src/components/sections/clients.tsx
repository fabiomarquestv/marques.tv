"use client";

import { motion } from "framer-motion";
import { BlurFade } from "@/components/magicui";
import { Building2, Landmark, GraduationCap, ShoppingBag, Tv, Banknote, Hotel, Briefcase, Car } from "lucide-react";

const clientCategories = [
  {
    icon: Landmark,
    category: "Setor Público",
    clients: [
      "Governo do Estado de SC",
      "Ministério Público Estadual",
      "Governo Federal",
      "CREA/SC",
      "Secretaria de Educação PMT",
    ],
    color: "#F5A623",
  },
  {
    icon: Banknote,
    category: "Instituições Financeiras",
    clients: [
      "Caixa Econômica Federal",
      "Banco ITAÚ",
      "Banco SICREDI",
      "UNICRED",
      "BV Financeira",
      "Banco BMG",
      "Paraná Banco",
      "FINASA",
      "CONCRED",
      "Casa do Microcrédito",
    ],
    color: "#3B82F6",
  },
  {
    icon: Tv,
    category: "Telecomunicações e Mídia",
    clients: [
      "Brasil Telecom",
      "Tim Celular",
      "Claro",
      "RBS TV",
      "SBT",
      "TVBV",
      "UNISUL TV",
      "FTC",
    ],
    color: "#F5A623",
  },
  {
    icon: ShoppingBag,
    category: "Varejo e Comércio",
    clients: [
      "Rede Walmart",
      "Angeloni",
      "Farol Shopping",
      "Praça Shopping",
      "Shopping Della Giustina",
      "Beck's Store",
      "Tieli Supermercados",
      "Maxxi",
      "Confecções Vanelise",
    ],
    color: "#3B82F6",
  },
  {
    icon: GraduationCap,
    category: "Educação",
    clients: [
      "UNISUL",
      "Colégio Dehon",
      "Colégio São José",
      "Colégio Santíssimo Sacramento",
      "Curso e Colégio Energia",
      "ETCT",
      "Colégios Estaduais",
      "Centro de Artes e Design",
    ],
    color: "#F5A623",
  },
  {
    icon: Building2,
    category: "Indústria e Grandes Empresas",
    clients: [
      "Coca-Cola",
      "Scania",
      "Ford",
      "Pirelli",
      "Tractebel",
      "Grupo Votorantim",
      "Andrade & Gutierrez",
      "Camilo & Ghisi",
      "AMANCO",
      "NOMA DO BRASIL",
      "PRODUSUL",
      "USIND",
    ],
    color: "#3B82F6",
  },
  {
    icon: Hotel,
    category: "Hotelaria e Turismo",
    clients: [
      "Hotel Internacional de Gravatal",
      "Merco Plaza Hotel",
    ],
    color: "#F5A623",
  },
  {
    icon: Briefcase,
    category: "Associações e Entidades",
    clients: [
      "Rotary Internacional",
      "ACIT",
      "CDL Tubarão",
      "SESZERPI",
      "Grupo A. Nunes",
      "Schimitz Leiloeiros",
    ],
    color: "#3B82F6",
  },
  {
    icon: Car,
    category: "Automotivo e Serviços",
    clients: [
      "Unitá Fiat",
      "Plumasul",
      "PNEUAC",
      "TRUCAR",
      "VISA",
      "Pró Vida",
    ],
    color: "#F5A623",
  },
];

export function Clients() {
  return (
    <section id="clientes" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] to-[#0F172A]" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <BlurFade delay={0.1}>
          <div className="text-center mb-16">
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Nossos Clientes
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Mais de <span className="text-gradient">100 clientes</span> atendidos
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Ao longo de mais de 30 anos, tivemos a honra de atender grandes empresas,
              instituições públicas e organizações de todos os setores.
            </p>
          </div>
        </BlurFade>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientCategories.map((cat, index) => (
            <BlurFade key={cat.category} delay={0.1 + index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="glass rounded-xl p-6 hover:border-[#F5A623]/30 transition-all h-full"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${cat.color}15` }}
                >
                  <cat.icon size={24} style={{ color: cat.color }} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{cat.category}</h3>
                <ul className="space-y-2">
                  {cat.clients.map((client) => (
                    <li key={client} className="flex items-center gap-2 text-sm text-slate-300">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: cat.color }}
                      />
                      {client}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
