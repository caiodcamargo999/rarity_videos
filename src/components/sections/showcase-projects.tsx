"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

// Mock Data
const storymakerVideos = [
    { id: 1, title: "Lifestyle Vlog", category: "Storymaker", color: "bg-rarity-blue" },
    { id: 2, title: "Behind the Scenes", category: "Storymaker", color: "bg-rarity-purple" },
    { id: 3, title: "Event Coverage", category: "Storymaker", color: "bg-rarity-pink" },
];

const editionVideos = [
    { id: 4, title: "Lançamento Milionário", category: "Edição Premium", color: "bg-indigo-600" },
    { id: 5, title: "VSL High Ticket", category: "Edição Premium", color: "bg-violet-600" },
    { id: 6, title: "Reels Viral", category: "Edição Premium", color: "bg-fuchsia-600" },
];

function VideoGrid({ projects, title, subtitle }: { projects: any[], title: string, subtitle: string }) {
    return (
        <div className="mb-24 last:mb-0">
            <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h3>
                <p className="text-white/60">{subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="group relative aspect-[9/16] md:aspect-video rounded-xl overflow-hidden cursor-pointer"
                    >
                        {/* Placeholder Background */}
                        <div className={`absolute inset-0 ${project.color} opacity-80 group-hover:scale-110 transition-transform duration-700`} />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                                <Play className="fill-white text-white ml-1" />
                            </div>
                        </div>

                        {/* Info Overlay */}
                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <Badge className="bg-white/10 hover:bg-white/20 text-white border-none mb-2 backdrop-blur-sm">{project.category}</Badge>
                            <h4 className="text-xl font-bold text-white">{project.title}</h4>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export function ShowcaseProjects() {
    return (
        <Section id="portfolio" className="bg-background/50 backdrop-blur-sm">
            <Container>
                <div className="text-center mb-16 space-y-4">
                    <Badge variant="outline" className="border-rarity-lavender text-rarity-lavender px-4 py-1 text-sm rounded-full mb-4">
                        Portfólio
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Nosso Trabalho <span className="text-transparent bg-clip-text bg-gradient-to-r from-rarity-blue to-rarity-purple">Fala Por Si</span>
                    </h2>
                </div>

                <VideoGrid
                    title="Storymaker"
                    subtitle="Narrativas visuais que conectam e emocionam"
                    projects={storymakerVideos}
                />

                <VideoGrid
                    title="Edição de Vídeo Premium"
                    subtitle="Pós-produção cinematográfica para elevar seu conteúdo"
                    projects={editionVideos}
                />

            </Container>
        </Section>
    );
}
