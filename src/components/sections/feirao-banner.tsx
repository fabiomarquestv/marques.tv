"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFade } from "@/components/magicui";

export function FeiraoBanner() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#F5A623]/10 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-[#3B82F6]/10 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="container-custom relative z-10">
        <BlurFade delay={0.1}>
          <Link href="/feirao-free" className="block group">
            <motion.div
              whileHover={{ y: -5 }}
              className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-[#F5A623]/30 transition-all shadow-xl shadow-black/20"
            >
              <div className="relative w-full aspect-[21/9]">
                <Image
                  src="/images/feirao-free-banner.jpg"
                  alt="Feirão FREE - Feirão Livre aos Sábados e Domingos em Tubarão/SC"
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <span className="text-[#F5A623] text-xs sm:text-sm font-semibold tracking-widest uppercase">
                    Novo Evento
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-1">
                    Feirão FREE
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base mt-1">
                    Sábados e Domingos às 9h — Tubarão/SC • A partir de 07/03/2026
                  </p>
                  <span className="inline-flex items-center gap-2 mt-3 text-[#F5A623] text-sm font-medium group-hover:gap-3 transition-all">
                    Saiba mais e patrocine
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.div>
          </Link>
        </BlurFade>
      </div>
    </section>
  );
}
