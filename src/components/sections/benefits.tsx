"use client";

import React, { ReactNode } from "react";
import { Zap, Film, TrendingUp, Gem, HeartHandshake, Filter, Target, BarChart3, Timer } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const benefits = [
    {
        title: "Funis de Vendas Validados",
        description: "Não dependa da sorte. Implementamos estruturas de vendas testadas e otimizadas para transformar desconhecidos em clientes recorrentes.",
        icon: Filter,
    },
    {
        title: "Tráfego de Alta Performance",
        description: "Gestão estratégica de mídia paga (Ads). Otimizamos cada centavo investido para reduzir seu custo por aquisição e aumentar o ROAS.",
        icon: Target,
    },
    {
        title: "Criativos que Convertem",
        description: "Vídeos com roteiros persuasivos e edição dinâmica, desenhados especificamente para prender a atenção nos primeiros segundos e gerar ação.",
        icon: Film,
    },
    {
        title: "Escala Previsível",
        description: "Análise constante de dados para escalar seus resultados. Transformamos suas visualizações em uma fonte consistente de faturamento.",
        icon: BarChart3,
    },
    {
        title: "Produção Cinematográfica",
        description: "Eleve a percepção de valor da sua marca com qualidade visual 'Padrão Hollywood'. Autoridade que se sente na tela.",
        icon: Gem,
    },
    {
        title: "Agilidade na Entrega",
        description: "Do conceito ao lançamento da campanha em tempo recorde. Velocidade é essencial para testar, validar e colocar dinheiro no bolso.",
        icon: Timer,
    },
];

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className={cn(
        "relative mx-auto size-36 duration-200",
        "[--color-border:rgba(255,255,255,0.1)] group-hover:[--color-border:rgba(155,0,200,0.4)] transition-all"
    )}>
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(circle,transparent_40%,black_60%)]"
        />

        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t border-white/10 group-hover:border-rarity-purple/50 transition-colors z-10">
            {children}
        </div>
    </div>
)

export function Benefits() {
    return (
        <Section id="beneficios" className="bg-background py-24 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rarity-blue/10 via-background to-background pointer-events-none" />

            <Container className="relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Por Que Escolher a <span className="text-transparent bg-clip-text bg-gradient-to-r from-rarity-blue to-rarity-pink">Rarity Agency?</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                        Não somos apenas uma produtora de vídeos. Somos sua parceira estratégica de growth, unindo
                        <span className="text-white font-medium"> copy, tráfego e design </span>
                        para escalar seu negócio.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <Card key={index} className="group bg-white/5 border-white/5 hover:border-rarity-purple/30 transition-all duration-500 shadow-none hover:shadow-[0_0_40px_-10px_rgba(155,0,200,0.3)]">
                            <CardHeader className="pb-3 text-center">
                                <CardDecorator>
                                    <benefit.icon className="w-6 h-6 text-rarity-blue group-hover:text-rarity-lavender transition-colors duration-300" />
                                </CardDecorator>
                                <h3 className="mt-6 text-xl text-white font-bold">{benefit.title}</h3>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-muted-foreground leading-relaxed text-sm">
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
