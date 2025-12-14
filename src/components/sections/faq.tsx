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
        question: "Essa consultoria serve para quem está começando do zero?",
        answer: "Sim. Se você ainda não anuncia, nós criamos sua conta de anúncios, configuramos o pixel, organizamos o Business Manager e criamos a estrutura inicial. O objetivo é começar certo para você não queimar dinheiro testando o que não funciona.",
    },
    {
        question: "Já faço anúncios mas não tenho resultado. Vocês podem ajudar?",
        answer: "Com certeza. A primeira etapa é auditar suas campanhas atuais para identificar onde o dinheiro está 'vazando'. Muitas vezes, o problema não é apenas o anúncio, mas a segmentação, a estrutura do funil ou a falta de criativos validados para conversão.",
    },
    {
        question: "Tenho que contratar os vídeos e o tráfego separados?",
        answer: "Não, e esse é o nosso maior diferencial. Na 'Máquina de Clientes', nós integramos tudo. O vídeo é roteirizado já pensando na estratégia de tráfego, e a campanha de tráfego é montada para potencializar aquele vídeo específico. É uma solução completa de ponta a ponta.",
    },
    {
        question: "Quanto preciso investir em anúncios (mídia paga)?",
        answer: "Não existe um valor fixo obrigatório, mas recomendamos uma verba mínima para que as plataformas (Meta/Google) consigam entregar dados relevantes. Durante nosso diagnóstico, analisaremos seu caixa e metas para sugerir um orçamento que traga retorno sem comprometer sua operação.",
    },
    {
        question: "Como funciona a garantia de resultados?",
        answer: "Nós garantimos a entrega de uma estrutura profissional de aquisição e o direcionamento de leads qualificados (ou tráfego para compra). Trabalhamos com métricas claras e relatórios de performance para que você veja exatamente o retorno sobre o investimento (ROI) de cada campanha.",
    },
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
                        Tire suas dúvidas sobre nosso processo de estratégia e produção.
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
