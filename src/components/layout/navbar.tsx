"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Navbar() {
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-white/10 shadow-lg py-4"
                    : "bg-transparent py-6"
            )}
        >
            <Container>
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <Image
                            src="/logo/logo_rarity_branco_sem_fundo_zoom_in.png"
                            alt="Rarity Agency"
                            width={120}
                            height={40}
                            className="h-8 w-auto object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop CTA Only */}
                    <div className="flex items-center gap-8">
                        <Button
                            className="bg-gradient-cta hover:opacity-90 transition-opacity text-white rounded-full px-6"
                        >
                            Agendar Consultoria
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    );
}
