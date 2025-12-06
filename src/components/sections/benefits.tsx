"use client";

import React from "react";
import { Zap, Film, TrendingUp, Gem, HeartHandshake, Clock } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
    {
        title: "Produção Completa",
        description: "Do briefing ao roteiro, da filmagem à entrega final. Cuidamos de cada detalhe.",
        icon: Film,
    },
    {
        title: "Agilidade Premium",
        description: "Projetos entregues em até 7 dias úteis sem sacrificar a excelência.",
        icon: Clock,
    },
    {
        title: "Padrão Hollywood",
        description: "Equipamentos profissionais e técnicas avançadas para qualidade cinematográfica.",
        icon: Gem,
    },
    {
        title: "Vídeos que Vendem",
        description: "Cada frame é pensado estrategicamente para engajar e converter.",
        icon: TrendingUp,
    },
    {
        title: "Conceitos Únicos",
        description: "Nada de templates genéricos. Abordagem criativa personalizada.",
        icon: Zap,
    },
    {
        title: "Parceria Real",
        description: "Acompanhamento personalizado em cada etapa do processo.",
        icon: HeartHandshake,
    },
];

export function Benefits() {
    return (
        <Section id="beneficios" className="bg-background">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Por Que Escolher a <br />
                        <span className="text-rarity-blue">Rarity Agency?</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        Não somos apenas mais uma agência de vídeo. Somos seu parceiro estratégico para crescimento digital.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <Card key={index} className="bg-white/5 border-white/10 hover:border-rarity-purple/50 transition-colors group">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-rarity-blue/10 flex items-center justify-center mb-4 group-hover:bg-rarity-blue/20 transition-colors">
                                    <benefit.icon className="w-6 h-6 text-rarity-blue group-hover:text-rarity-lavender transition-colors" />
                                </div>
                                <CardTitle className="text-xl text-white">{benefit.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-white/60 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
