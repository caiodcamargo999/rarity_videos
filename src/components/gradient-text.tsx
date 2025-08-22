"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
  gradient?: "brown" | "amber" | "copper";
}

export function GradientText({ 
  children, 
  className = "", 
  animate = true,
  gradient = "brown" 
}: GradientTextProps) {
  const gradients = {
    brown: "from-[#d7c5b6] via-[#a09080] to-[#8b7355]",
    amber: "from-[#fbbf24] via-[#f59e0b] to-[#d97706]",
    copper: "from-[#b45309] via-[#92400e] to-[#78350f]"
  };

  // Enhanced gradients with more contrast (unused but kept for future use)
  // const enhancedGradients = {
  //   brown: "from-[#f3e9e0] via-[#d7c5b6] to-[#8b7355]",
  //   amber: "from-[#fde68a] via-[#fbbf24] to-[#d97706]",
  //   copper: "from-[#fbbf24] via-[#b45309] to-[#78350f]"
  // };

  const selectedGradient = gradients[gradient];

  if (animate) {
    return (
      <motion.span
        className={`bg-gradient-to-r ${selectedGradient} bg-clip-text text-transparent ${className}`}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          filter: [
            "drop-shadow(0 0 10px rgba(215, 197, 182, 0.3))",
            "drop-shadow(0 0 20px rgba(215, 197, 182, 0.6))",
            "drop-shadow(0 0 10px rgba(215, 197, 182, 0.3))"
          ],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      >
        {children}
      </motion.span>
    );
  }

  return (
    <span className={`bg-gradient-to-r ${selectedGradient} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}
