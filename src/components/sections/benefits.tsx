"use client";

import React from "react";
import { Zap, Film, TrendingUp, Gem, HeartHandshake, Filter, Target, BarChart3, Timer } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

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

export function Benefits() {
    return (
        <Section id="beneficios" className="bg-background py-24">
            <Container>
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
                        <Card key={index} className="bg-card/50 backdrop-blur-sm border-white/5 hover:border-rarity-purple/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-rarity-purple/10">
                            <CardHeader className="space-y-4">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-rarity-blue/20 to-rarity-purple/20 flex items-center justify-center group-hover:from-rarity-blue/30 group-hover:to-rarity-purple/30 transition-all border border-white/5">
                                    <benefit.icon className="w-6 h-6 text-rarity-blue group-hover:text-rarity-lavender transition-colors" />
                                </div>
                                <h3 className="text-xl text-white font-bold">{benefit.title}</h3>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed">
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
