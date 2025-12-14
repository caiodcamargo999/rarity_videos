"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Target, TrendingUp, Settings, RefreshCw, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TechArrow } from "@/components/ui/tech-arrow";
import { useBooking } from "@/context/booking-context";
// We can assume these icons match the user's request for "Client Machine" features
// Target -> Funnel steps
// TrendingUp -> Avoid waste / ROI
// Settings -> Campaigns ready
// RefreshCw -> Continuous flow
// Brain -> Understanding why

const features = [
    {
        icon: Target,
        title: "Estratégia de Funil",
        description: "Saber exatamente quais vídeos usar em cada etapa do funil, desde o primeiro contato até a venda.",
    },
    {
        icon: TrendingUp,
        title: "Fim do Desperdício",
        description: "Evitar desperdício de dinheiro com anúncios mal estruturados, que só geram curtidas e nenhum cliente.",
    },
    {
        icon: Settings,
        title: "Escala Validada",
        description: "Ter campanhas prontas para escalar, validadas para conversão e não apenas alcance.",
    },
    {
        icon: RefreshCw,
        title: "Fluxo Contínuo",
        description: "Criar um fluxo contínuo de leads qualificados, mesmo quando você não está postando nada novo.",
    },
    {
        icon: Brain,
        title: "Inteligência de Vendas",
        description: "Entender o porquê seus anúncios funcionam, para repetir o processo sempre que quiser.",
    },
];

export function ClientMachine() {
    const { openBooking } = useBooking();
    return (
        <Section className="bg-background relative z-10 overflow-hidden py-24">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rarity-blue/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rarity-pink/10 rounded-full blur-[120px] -z-10" />

            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                E Além dos Vídeos… <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rarity-blue to-rarity-pink">
                                    Nós Construímos a Máquina de Clientes
                                </span>
                            </h2>
                            <p className="text-xl text-white/80 font-light leading-relaxed">
                                Criar vídeos bonitos é só o começo. Depois que seus vídeos de alta conversão ficam prontos,
                                nós entramos na parte que realmente escala resultados: <strong className="text-white">transformar visualizações em clientes todos os dias, de forma previsível.</strong>
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <h3 className="text-lg font-semibold text-rarity-lavender mb-2">Como isso funciona na prática?</h3>
                            <p className="text-white/70">
                                Nós fazemos uma consultoria completa de tráfego e estrutura, onde montamos sua máquina de aquisição
                                usando <span className="text-white">Meta Ads + vídeos estrategicamente pensados</span>.
                                Não é só “rodar anúncio” — é construir um sistema que trabalha por você.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {features.map((item, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-lg bg-rarity-blue/20 flex items-center justify-center border border-rarity-blue/30">
                                        <item.icon className="w-5 h-5 text-rarity-blue" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-white">{item.title}</h4>
                                        <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4 space-y-2 border-l-2 border-rarity-pink pl-6">
                            <p className="text-white/90 italic">
                                "Resultado final? Você deixa de depender de indicações, sorte ou posts virais…
                                e passa a ter uma máquina previsível de aquisição de clientes, rodando todos os dias."
                            </p>
                            <div className="pt-2">
                                <Button
                                    onClick={openBooking}
                                    className="group bg-gradient-cta text-white rounded-full px-8 py-6 text-lg hover:shadow-[0_0_30px_rgba(155,0,200,0.4)] transition-all flex items-center gap-2"
                                >
                                    Fazer meu Diagnóstico <TechArrow />
                                </Button>
                            </div>
                        </div>

                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 w-full"
                    >
                        <div className="relative">
                            {/* Main Image Container */}
                            <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900/50">
                                {/* 
                         Note: In a real scenario, we would use the generated image path here. 
                         Since the tool saves it to a specific path, we should move it to public folder or use the path if accessible.
                         For now, I will assume I can reference it or I will use a placeholder logic if I can't move files.
                         Actually, I must move the file or simply reference it if it was saved in public.
                         The previous step saved it to an internal dir. I should probably use a public path for the 'src'.
                         However, I cannot move files easily with the given tools (run_command might work but is risky).
                         Wait, the prompt said "You can also use this tool to generate assets for use in an application...".
                         Usually I should write to public/... but I can't guess the path.
                         
                         Let's assume I will put the path '/marketing_machine_mockup.png' and I will perform a move command next.
                     */}
                                <Image
                                    src="/marketing_machine_mockup.png"
                                    alt="Máquina de Clientes Dashboard"
                                    fill
                                    className="object-cover"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            </div>

                            {/* Floating Elements (Decorative) */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-6 -right-6 p-4 bg-neutral-900/90 backdrop-blur-xl border border-rarity-pink/30 rounded-2xl shadow-xl max-w-[200px]"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <TrendingUp size={16} className="text-green-500" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/60">Conversão</p>
                                        <p className="text-lg font-bold text-white">+127%</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-8 -left-8 p-4 bg-neutral-900/90 backdrop-blur-xl border border-rarity-blue/30 rounded-2xl shadow-xl"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-rarity-blue/20 flex items-center justify-center">
                                        <Target size={20} className="text-rarity-blue" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-white">Leads Qualificados</p>
                                        <p className="text-xs text-white/50">Fluxo Automático</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </Container>
        </Section>
    );
}
