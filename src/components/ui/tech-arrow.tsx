import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TechArrowProps {
    className?: string;
}

export function TechArrow({ className }: TechArrowProps) {
    return (
        <div className={cn("relative flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-[0_0_15px_rgba(155,0,200,0.3)] transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 group-hover:shadow-[0_0_25px_rgba(155,0,200,0.6)] ml-2", className)}>
            <ArrowRight className="w-4 h-4 text-white group-hover:-rotate-45 transition-transform duration-300" />
        </div>
    );
}
