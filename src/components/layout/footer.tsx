"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";
import { Container } from "@/components/ui/container";

// TikTok Icon Component since it's not in Lucide regular set or usually requires custom SVG
const TikTokIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

export function Footer() {
    return (
        <footer className="bg-rarity-dark border-t border-white/5 py-12">
            <Container>
                <div className="flex flex-col items-center justify-center gap-8">
                    <Link href="/" className="inline-block">
                        <Image
                            src="/logo/logo_rarity_branco_sem_fundo_zoom_in.png"
                            alt="Rarity Agency"
                            width={220}
                            height={75}
                            className="h-16 w-auto object-contain"
                        />
                    </Link>

                    <div className="flex items-center gap-6">
                        <Link href="https://www.instagram.com/rarity.agency/" target="_blank" className="text-white/60 hover:text-rarity-pink transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
                            <Instagram className="h-6 w-6" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link href="https://www.tiktok.com/@rarity.agency?lang=pt-BR" target="_blank" className="text-white/60 hover:text-rarity-pink transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
                            <TikTokIcon className="h-6 w-6" />
                            <span className="sr-only">TikTok</span>
                        </Link>
                    </div>

                    <p className="text-white/40 text-sm">
                        © {new Date().getFullYear()} Rarity Agency. Todos os direitos reservados.
                    </p>
                </div>
            </Container>
        </footer>
    );
}
