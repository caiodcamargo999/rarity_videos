"use client";

import React from "react";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Quanto tempo leva para produzir um vídeo?",
        answer: "Nosso prazo padrão é de 7 dias úteis do briefing à entrega final. Para projetos urgentes, oferecemos produção expressa em 3-5 dias com um ajuste no investimento.",
    },
    {
        question: "Quais formatos vocês entregam?",
        answer: "Entregamos em todos os formatos: Reels/TikTok (9:16), Feed (4:5), YouTube (16:9), com versões legendadas e alta resolução (4K).",
    },
    {
        question: "Posso solicitar revisões?",
        answer: "Sim! Incluímos 2 rodadas de revisão em todos os pacotes para garantir 100% de satisfação.",
    },
    {
        question: "Como funciona o pagamento?",
        answer: "Aceitamos PIX (5% de desconto), Cartão de crédito (até 3x sem juros) e boleto. Oferecemos condições especiais para pacotes mensais.",
    },
];

export function FAQ() {
    return (
        <Section className="bg-background">
            <Container className="max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Perguntas Frequentes
                    </h2>
                    <p className="text-white/60">
                        Tire suas dúvidas sobre nosso processo de produção.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                            <AccordionTrigger className="text-white hover:text-rarity-lavender text-left">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-white/60">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Container>
        </Section>
    );
}
