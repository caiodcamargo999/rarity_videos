"use client";

import React from "react";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

import { useBooking } from "@/context/booking-context";

export function FinalCTA() {
    const { openBooking } = useBooking();

    return (
        <Section className="bg-gradient-to-br from-rarity-blue to-rarity-purple relative overflow-hidden">
            {/* ... patterns ... */}

            <Container className="relative z-10 text-center">
                {/* ... title ... */}

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                        size="lg"
                        onClick={openBooking}
                        className="bg-white text-rarity-purple hover:bg-white/90 text-lg px-8 h-14 rounded-full shadow-lg hover:shadow-xl transition-all"
                    >
                        Agendar Consultoria Gratuita <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>

                </div>

                <p className="mt-8 text-white/60 text-sm">
                    ⏰ Apenas 3 vagas disponíveis para novos projetos este mês
                </p>
            </Container>
        </Section>
    );
}
