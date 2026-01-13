"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container"; // Assuming this exists based on authority.tsx
import { Section } from "@/components/layout/section"; // Assuming this exists

const members = [
    {
        name: "Daniel Fraga",
        role: "Motion Designer & Editor Specialist",
        avatar: "/fotos_caio_e_daniel/daniel_mockup.png",
        link: "#",
        bio: [
            "Minha paixão pelo audiovisual começou aos 12 anos e nunca mais parou. Formado em Design Gráfico e Pós-graduado em UX, uno técnica e estratégia para criar vídeos que prendem a atenção.",
            "Já trabalhei em centenas de projetos, transformando clipes brutos em narrativas visuais poderosas. Não entrego apenas 'edição', entrego retenção e desejo.",
        ],
    },
    {
        name: "Caio Camargo",
        role: "Head de Estratégia & Growth",
        avatar: "/fotos_caio_e_daniel/caio_final.png",
        link: "#",
        bio: [
            "Enquanto o Daniel garante a excelência visual, minha missão é orquestrar que essa mensagem atinja o público ideal e converta atenção em receita escalável.",
            "Com trajetória internacional e fluência em quatro idiomas (Inglês, Espanhol, Português e Francês), escalei negócios em diversos países e nichos.",
            "Entendo que view sem venda é vaidade. Na Rarity, unimos essa visão de mundo com estratégia digital para transformar seu alcance em faturamento previsível."
        ],
    },
    {
        name: "Diego",
        role: "Head de Mídia Paga e Performance",
        avatar: "/team/diego.png",
        link: "#",
        bio: [
            "Minha trajetória no marketing digital começou quando fui impactado por um anúncio de um curso de tráfego pago. O interesse foi imediato: comprei, consumi o conteúdo rapidamente e me encantei com o poder dos anúncios on-line.",
            "Hoje, já gerenciei mais de um milhão de reais em anúncios e tenho orgulho de transformar negócios e vidas por meio de funis de vendas estruturados e estratégias orientadas por resultados.",
        ],
    },
];

export function TeamSection() {
    return (
        <Section className="bg-background relative z-10 py-16 md:py-32 overflow-hidden">
            {/* Ambient Background similar to Authority to keep consistency */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(155,0,200,0.05),transparent_40%)] pointer-events-none" />

            <Container>
                <div className="mx-auto border-t border-white/10 px-6">
                    <span className="text-sm font-medium tracking-widest text-muted-foreground -ml-6 -mt-3.5 block w-max bg-background px-6">
                        NOSSO TIME
                    </span>
                    <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
                        <div className="sm:w-2/5">
                            <h2 className="text-3xl font-bold sm:text-4xl text-foreground">
                                Quem Faz Acontecer
                            </h2>
                        </div>
                        <div className="mt-6 sm:mt-0">
                            <p className="text-muted-foreground text-lg">
                                Unimos criatividade, estratégia e dados para entregar resultados
                                excepcionais. Cada membro do time é especialista em sua área,
                                garantindo a excelência em cada etapa do processo.
                            </p>
                        </div>
                    </div>
                    <div className="mt-12 md:mt-24">
                        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                            {members.map((member, index) => (
                                <div key={index} className="group overflow-hidden">
                                    <div className="relative h-96 w-full overflow-hidden rounded-md">
                                        <Image
                                            className="h-full w-full object-cover object-top transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
                                            src={member.avatar}
                                            alt={member.name}
                                            width={826}
                                            height={1239}
                                        />
                                    </div>
                                    <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-xl font-bold transition-all duration-500 group-hover:tracking-wider text-foreground">
                                                {member.name}
                                            </h3>
                                            <span className="text-xs text-muted-foreground">
                                                _0{index + 1}
                                            </span>
                                        </div>
                                        <div className="mt-1 flex items-center justify-between">
                                            <span className="text-rarity-blue font-medium text-sm">
                                                {member.role}
                                            </span>
                                        </div>

                                        {/* Bio Text Added Here */}
                                        <div className="mt-6 space-y-4 text-muted-foreground text-sm leading-relaxed">
                                            {member.bio.map((paragraph, i) => (
                                                <p key={i}>{paragraph}</p>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
