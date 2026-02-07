"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BlurFade } from "@/components/magicui";
import { X, ZoomIn } from "lucide-react";

const galleryItems = [
  {
    src: "/images/fotoprincipalsite.jpg",
    title: "Estrutura Completa",
    description: "Palco e iluminação profissional",
  },
  {
    src: "/images/casamento2.jpg",
    title: "Casamentos",
    description: "Som e luz para momentos especiais",
  },
  {
    src: "/images/fotoseditada.jpg",
    title: "Shows e Bandas",
    description: "Assessoria estrutural completa",
  },
  {
    src: "/images/fotosprodusul33.jpg",
    title: "Feiras e Exposições",
    description: "Eventos corporativos",
  },
  {
    src: "/images/fotoneumannsite.jpg",
    title: "Estúdio de Áudio",
    description: "Microfone Neumann profissional",
  },
  {
    src: "/images/ledsnovos.jpg",
    title: "TV's LED",
    description: "Distribuição wireless de imagens",
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section id="galeria" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#0B1120] to-[#0F172A]" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <BlurFade delay={0.1}>
          <div className="text-center mb-16">
            <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Nosso Trabalho
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Galeria de Eventos
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Confira alguns dos eventos que realizamos com excelência.
            </p>
          </div>
        </BlurFade>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <BlurFade key={item.src} delay={0.1 + index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(item)}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-white font-bold text-lg mb-1">
                      {item.title}
                    </h4>
                    <p className="text-slate-300 text-sm">{item.description}</p>
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ZoomIn className="text-white" size={20} />
                    </div>
                  </div>
                </div>

                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#F5A623]/50 transition-colors duration-300" />
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-5xl w-full aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain rounded-lg"
              />

              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#F5A623] transition-colors"
              >
                <X size={32} />
              </button>

              {/* Caption */}
              <div className="absolute -bottom-16 left-0 right-0 text-center">
                <h4 className="text-white font-bold text-xl mb-1">
                  {selectedImage.title}
                </h4>
                <p className="text-slate-400">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
