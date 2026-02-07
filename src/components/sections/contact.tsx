"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BlurFade, MagicCard, ShimmerButton } from "@/components/magicui";
import { MessageCircle, Mail, MapPin, Send } from "lucide-react";
import Link from "next/link";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "(48) 99677-6089",
    href: "https://wa.me/5548996776089",
    color: "#25d366",
  },
  {
    icon: Mail,
    title: "Email",
    value: "marquestv@hotmail.com",
    href: "mailto:marquestv@hotmail.com",
    color: "#F5A623",
  },
  {
    icon: MapPin,
    title: "Endereço",
    value: "Av. Pres. Getúlio Vargas - Matriz",
    href: "#",
    color: "#3B82F6",
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Olá! Vim pelo site.

*Nome:* ${formData.name}
*Email:* ${formData.email}
*Telefone:* ${formData.phone || "Não informado"}

*Mensagem:*
${formData.message}`;

    const whatsappUrl = `https://wa.me/5548996776089?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-[#0B1120]" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#F5A623]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-[150px]" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <BlurFade delay={0.1}>
            <div>
              <span className="text-[#F5A623] text-sm font-semibold tracking-widest uppercase mb-4 block">
                Entre em Contato
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Vamos realizar seu evento juntos!
              </h2>

              <p className="text-slate-400 mb-10">
                Envie os detalhes do seu evento para agilizar o atendimento.
                Estamos prontos para transformar sua ideia em realidade.
              </p>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      className="flex items-center gap-4 p-4 glass rounded-xl hover:border-[#F5A623]/30 transition-all group"
                    >
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${method.color}20` }}
                      >
                        <method.icon size={24} style={{ color: method.color }} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white group-hover:text-[#F5A623] transition-colors">
                          {method.title}
                        </h4>
                        <p className="text-slate-400 text-sm">{method.value}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </BlurFade>

          {/* Contact Form */}
          <BlurFade delay={0.2}>
            <MagicCard gradientColor="#F5A623" gradientFrom="#F5A623" gradientTo="#3B82F6" className="p-8 rounded-xl border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 text-sm mb-2">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Seu nome"
                      className="w-full px-4 py-3 bg-[#0B1120] border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-[#F5A623] focus:outline-none focus:ring-2 focus:ring-[#F5A623]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(48) 99999-9999"
                      className="w-full px-4 py-3 bg-[#0B1120] border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-[#F5A623] focus:outline-none focus:ring-2 focus:ring-[#F5A623]/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 bg-[#0B1120] border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-[#F5A623] focus:outline-none focus:ring-2 focus:ring-[#F5A623]/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 text-sm mb-2">
                    Detalhes do evento
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Descreva seu evento: data, local, tipo de serviço desejado..."
                    className="w-full px-4 py-3 bg-[#0B1120] border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-[#F5A623] focus:outline-none focus:ring-2 focus:ring-[#F5A623]/20 transition-all resize-none"
                  />
                </div>

                <ShimmerButton
                  shimmerColor="#F5A623"
                  background="linear-gradient(135deg, #F5A623 0%, #3B82F6 100%)"
                  className="w-full py-4 text-lg font-semibold"
                >
                  <Send className="mr-2" size={20} />
                  Enviar via WhatsApp
                </ShimmerButton>
              </form>
            </MagicCard>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
