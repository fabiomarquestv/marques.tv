"use client";

import { SubpageLayout } from "@/components/shared/subpage-layout";
import { BlurFade } from "@/components/magicui";
import { Headphones, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function PodcastPage() {
  return (
    <SubpageLayout
      title="Podcast Fábio Marques"
      subtitle="Conteúdo em Áudio"
    >
      <BlurFade delay={0.1}>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-slate-300 text-lg leading-relaxed">
            Acompanhe o <strong className="text-white">Podcast com Fábio Marques</strong> no SoundCloud.
            Conteúdo sobre eventos, entretenimento, dicas profissionais e histórias dos nossos
            mais de 30 anos de experiência no mercado.
          </p>
        </div>
      </BlurFade>

      <BlurFade delay={0.2}>
        <div className="glass rounded-xl p-10 max-w-2xl mx-auto text-center">
          <Headphones size={48} className="text-[#F5A623] mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-white mb-4">Ouça no SoundCloud</h2>
          <p className="text-slate-400 mb-8">
            Disponível gratuitamente para todos. Ouça a qualquer momento, em qualquer lugar.
          </p>

          {/* SoundCloud Embed */}
          <div className="mb-8 rounded-xl overflow-hidden">
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/marquestv/pod-cast-com-fabio-marques&color=%23F5A623&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            />
          </div>

          <Link
            href="https://soundcloud.com/marquestv/pod-cast-com-fabio-marques"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F5A623] hover:bg-[#FBBF24] text-[#0B1120] font-bold rounded-xl transition-colors"
          >
            <ExternalLink size={18} />
            Abrir no SoundCloud
          </Link>
        </div>
      </BlurFade>
    </SubpageLayout>
  );
}
