"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { TechArrow } from "@/components/ui/tech-arrow";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useBooking } from "@/context/booking-context";

export function Hero() {
    const { openBooking } = useBooking();

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-0">
            {/* Dynamic Background */}
            <div className="absolute inset-0 w-full h-full bg-background z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-rarity-dark to-background opacity-90" />

                {/* Animated Shapes */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-rarity-blue/20 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2],
                        x: [0, -40, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-rarity-purple/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rarity-pink/10 rounded-full blur-[150px]"
                />
            </div>

            <Container className="relative z-10">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin tracking-tighter leading-[0.9] md:leading-[1.1] text-white mb-6">
                            Vídeos que <br className="hidden md:block" />
                            <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400">
                                Transformam
                            </span>{" "}
                            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-rarity-blue via-rarity-purple to-rarity-pink">
                                Visualizações em Vendas
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="text-lg md:text-2xl text-white/80 max-w-3xl font-light"
                    >
                        Criamos conteúdo visual premium para marcas que querem dominar o digital e multiplicar resultados.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center pt-4"
                    >
                        <Button
                            size="lg"
                            onClick={openBooking}
                            className="group h-14 px-8 text-lg rounded-full bg-gradient-cta hover:bg-gradient-to-r hover:from-rarity-purple hover:to-rarity-lavender shadow-[0_0_30px_rgba(155,0,200,0.5)] hover:shadow-[0_0_50px_rgba(155,0,200,0.7)] transition-all duration-300 transform hover:scale-105"
                        >
                            Quero Crescer Minha Marca <TechArrow />
                        </Button>
                    </motion.div>

                    {/* Microcopy */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm text-white/60 pt-4"
                    >
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-rarity-lavender" />
                            <span>Consultoria gratuita de 15 min</span>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
