"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { TechArrow } from "@/components/ui/tech-arrow";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/context/booking-context";

interface FounderProps {
  name: string;
  role: string;
  imageSrc: string;
  bio: string[];
  highlights: string[];
  align?: "left" | "right";
  badge?: string;
}

const FounderSection = ({ name, role, imageSrc, bio, highlights, align = "left", badge }: FounderProps) => {
  const { openBooking } = useBooking();
  return (
    <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-10 ${align === "right" ? "lg:flex-row-reverse" : ""} `}>
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: align === "left" ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-8"
      >
        {badge && (
          <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-wider text-rarity-lavender mb-2">
            {badge}
          </span>
        )}

        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            {name}
          </h2>
          <p className="text-2xl text-rarity-blue font-medium">{role}</p>
        </div>

        <div className="space-y-6 text-white/70 text-lg leading-relaxed font-light">
          {bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="space-y-4">
          {highlights.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-rarity-blue/20 flex items-center justify-center">
                <Check className="w-3 h-3 text-rarity-blue" />
              </div>
              <p className="text-white/80">{item}</p>
            </div>
          ))}
        </div>

        <div className="pt-4">
          <Button onClick={openBooking} className="group bg-gradient-cta text-white rounded-full px-8 py-6 text-lg hover:shadow-[0_0_30px_rgba(155,0,200,0.4)] transition-all">
            Solicitar Diagnóstico <TechArrow />
          </Button>
        </div>
      </motion.div>

      {/* Image Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-1 relative w-full max-w-[500px]"
      >
        <div className="aspect-[3/4] relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-rarity-dark/50">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
        </div>

        {/* Glow Effects */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-rarity-blue/20 rounded-full blur-[80px] -z-10" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-rarity-pink/20 rounded-full blur-[80px] -z-10" />
      </motion.div>
    </div>
  );
};

export function Authority() {
  return (
    <Section className="bg-background relative z-10 overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(155,0,200,0.05),transparent_40%)] pointer-events-none" />

      <Container>
        {/* Daniel's Section */}
        <FounderSection
          name="Daniel Fraga"
          role="Motion Designer & Editor Specialist"
          imageSrc="/fotos_caio_e_daniel/daniel_mockup.png"
          align="left"
          badge="QUEM FAZ ACONTECER"
          bio={[
            "Minha paixão pelo audiovisual começou aos 12 anos e nunca mais parou. Formado em Design Gráfico e Pós-graduado em UX, uno técnica e estratégia para criar vídeos que prendem a atenção.",
            "Já trabalhei em centenas de projetos, transformando clipes brutos em narrativas visuais poderosas. Não entrego apenas 'edição', entrego retenção e desejo.",
            "Seu vídeo precisa ser mais que bonito. Ele precisa funcionar."
          ]}
          highlights={[
            "10+ anos de experiência em edição e motion",
            "Especialista em retenção visual e storytelling",
            "Visão de UX aplicada ao vídeo para máxima conversão",
            "Acabamento cinematográfico em cada frame"
          ]}
        />

        {/* Caio's Section */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />

        <FounderSection
          name="Caio Camargo"
          role="Head de Estratégia & Growth"
          imageSrc="/fotos_caio_e_daniel/caio_final.png"
          align="right"
          badge="MENTE ESTRATÉGICA"
          bio={[
            "Enquanto o Daniel garante que seu vídeo seja visualmente impecável, minha missão é garantir que ele chegue nas pessoas certas e gere resultados reais.",
            "Com background em estratégia digital e negócios, entendo que um vídeo sem propósito é apenas custo. Na Rarity, transformamos views em faturamento.",
            "Não buscamos apenas 'likes'. Buscamos construir autoridade sólida e vendas previsíveis para sua marca."
          ]}
          highlights={[
            "Especialista em posicionamento de marca e growth",
            "Foco total em ROI e métricas de conversão",
            "Estratégia de distribuição para maximizar alcance",
            "Visão de negócio: o vídeo como ferramenta de vendas"
          ]}
        />
      </Container>
    </Section>
  );
}
