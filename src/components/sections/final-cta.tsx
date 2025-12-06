"use client";

import React from "react";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
    return (
        <Section className="bg-gradient-to-br from-rarity-blue to-rarity-purple relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

            <Container className="relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                    Sua Marca Merece Ser Vista.<br />
                    Vamos Começar?
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light">
                    Agende uma conversa de 15 minutos e descubra como podemos transformar sua presença digital com vídeos premium.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                        size="lg"
                        className="bg-white text-rarity-purple hover:bg-white/90 text-lg px-8 h-14 rounded-full shadow-lg hover:shadow-xl transition-all"
                    >
                        Agendar Consultoria Gratuita <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>

                </div>

                <p className="mt-8 text-white/60 text-sm">
                    ⏰ Apenas 2 vagas disponíveis para novos projetos este mês
                </p>
            </Container>
        </Section>
    );
}
