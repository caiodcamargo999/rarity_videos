"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Project, storymakerProjects, editionProjects } from "@/data/portfolio";
import { VideoModal } from "@/components/ui/video-modal";

function VideoCard({ project, onClick }: { project: Project; onClick: (project: Project) => void }) {
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
            videoRef.current.currentTime = 1; // Return to "thumbnail" frame
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative aspect-[9/16] w-full max-w-[300px] mx-auto rounded-2xl overflow-hidden cursor-pointer bg-neutral-900 border border-white/5 shadow-2xl hover:shadow-rarity-lavender/20 hover:scale-[1.02] transition-all duration-300"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => onClick(project)}
        >
            {/* Background Color Fallback / Overlay */}
            <div className={`absolute inset-0 ${project.color} opacity-20 pointer-events-none`} />

            {/* Video Player Preview */}
            {project.videoUrl && (
                <video
                    ref={videoRef}
                    src={`${project.videoUrl}#t=1`} // Start at 1s to avoid black frame
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                />
            )}

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-lg">
                    <Play className="fill-white text-white ml-1 w-6 h-6" />
                </div>
            </div>

            {/* Info Overlay (Gradient from bottom) */}
            <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-12 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
                <Badge className="bg-white/20 text-white border-white/10 mb-2 backdrop-blur-md text-xs hover:bg-white/30">{project.category}</Badge>
                <h4 className="text-lg font-bold text-white shadow-black drop-shadow-md leading-tight">{project.title}</h4>
            </div>
        </motion.div>
    );
}

function VideoGrid({
    projects,
    title,
    subtitle,
    onProjectClick
}: {
    projects: Project[],
    title: string,
    subtitle: string,
    onProjectClick: (project: Project) => void
}) {
    return (
        <div className="mb-24 last:mb-0">
            <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h3>
                <p className="text-white/60">{subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <VideoCard key={project.id} project={project} onClick={onProjectClick} />
                ))}
            </div>
        </div>
    );
}

export function ShowcaseProjects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
                    onProjectClick={setSelectedProject}
                />

                <VideoGrid
                    title="Edição de Vídeo Premium"
                    subtitle="Pós-produção cinematográfica para elevar seu conteúdo"
                    projects={editionProjects}
                    onProjectClick={setSelectedProject}
                />

            </Container>

            <VideoModal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                videoUrl={selectedProject?.videoUrl || ""}
                title={selectedProject?.title}
                category={selectedProject?.category}
            />
        </Section>
    );
}
