"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Project, storymakerProjects, editionProjects } from "@/data/portfolio";

function VideoCard({ project }: { project: Project }) {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play().catch(() => {
                // Autoplay policy might block unmuted playback, but muted should work
            });
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative aspect-[9/16] md:aspect-video rounded-xl overflow-hidden cursor-pointer bg-black/40"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Background Color Fallback / Overlay */}
            <div className={`absolute inset-0 ${project.color} opacity-20 pointer-events-none`} />

            {/* Video Player */}
            {project.videoUrl && (
                <video
                    ref={videoRef}
                    src={project.videoUrl}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                    muted
                    loop
                    playsInline
                />
            )}

            {/* Play Button Overlay (Visible only when not playing or initial state) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                    <Play className="fill-white text-white ml-1 w-6 h-6" />
                </div>
            </div>

            {/* Info Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
                <Badge className="bg-white/10 text-white border-white/10 mb-2 backdrop-blur-sm">{project.category}</Badge>
                <h4 className="text-xl font-bold text-white shadow-black drop-shadow-md">{project.title}</h4>
            </div>
        </motion.div>
    );
}

function VideoGrid({ projects, title, subtitle }: { projects: Project[], title: string, subtitle: string }) {
    return (
        <div className="mb-24 last:mb-0">
            <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h3>
                <p className="text-white/60">{subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <VideoCard key={project.id} project={project} />
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
                    projects={storymakerProjects}
                />

                <VideoGrid
                    title="Edição de Vídeo Premium"
                    subtitle="Pós-produção cinematográfica para elevar seu conteúdo"
                    projects={editionProjects}
                />

            </Container>
        </Section>
    );
}
