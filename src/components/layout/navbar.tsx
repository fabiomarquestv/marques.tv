"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Galeria" },
  { href: "#sobre", label: "Sobre" },
  { href: "#clientes", label: "Clientes" },
  { href: "#contato", label: "Contato" },
];

const moreLinks = [
  { href: "/climatizadores", label: "Climatizadores" },
  { href: "/videoke", label: "I-Videokê" },
  { href: "/espaco-music-hall", label: "Espaço Music Hall" },
  { href: "/divisorias-moveis", label: "Divisórias Móveis" },
  { href: "/eletroposto", label: "Eletroposto" },
  { href: "/rps-radio", label: "RPS Rádio" },
  { href: "/podcast", label: "Podcast" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setIsMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#0B1120]/90 backdrop-blur-xl shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="#inicio" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-white/10 group-hover:border-gold/50 transition-colors">
            <Image
              src="/images/novologotipo.jpg"
              alt="Marques.TV Logo"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-xl font-bold text-gradient hidden sm:block">
            Marques.TV
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-slate-300 hover:text-white relative py-2 transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-blue-accent group-hover:w-full transition-all duration-300" />
              </Link>
            </li>
          ))}

          {/* More Dropdown */}
          <li ref={moreRef} className="relative">
            <button
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              className="flex items-center gap-1 text-slate-300 hover:text-white relative py-2 transition-colors group"
            >
              Mais
              <ChevronDown
                size={16}
                className={cn(
                  "transition-transform duration-200",
                  isMoreOpen && "rotate-180"
                )}
              />
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-blue-accent group-hover:w-full transition-all duration-300" />
            </button>

            <AnimatePresence>
              {isMoreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full mt-2 w-52 bg-[#1E293B] border border-white/10 rounded-xl shadow-xl shadow-black/30 overflow-hidden"
                >
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMoreOpen(false)}
                      className="block px-4 py-3 text-sm text-slate-300 hover:text-[#F5A623] hover:bg-white/5 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-white"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1E293B] border-t border-white/10"
          >
            <ul className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 text-slate-300 hover:text-[#F5A623] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}

              {/* Separator */}
              <li className="border-t border-white/10 pt-2 mt-1">
                <span className="text-xs text-slate-500 uppercase tracking-wider">Páginas</span>
              </li>

              {moreLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (navLinks.length + index) * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 text-slate-300 hover:text-[#F5A623] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
